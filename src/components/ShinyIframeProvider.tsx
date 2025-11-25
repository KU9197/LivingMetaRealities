import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type ShinyIframeContextValue = {
  registerHost: (el: HTMLDivElement | null) => void;
  isLoaded: boolean;
};

const ShinyIframeContext = createContext<ShinyIframeContextValue | undefined>(undefined);

export function ShinyIframeProvider({ children }: { children: React.ReactNode }) {
  const [host, setHost] = useState<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const hiddenHostRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const hiddenHost = document.createElement("div");
    hiddenHost.style.position = "absolute";
    hiddenHost.style.width = "1px";
    hiddenHost.style.height = "1px";
    hiddenHost.style.overflow = "hidden";
    hiddenHost.style.opacity = "0";
    hiddenHost.style.pointerEvents = "none";
    hiddenHost.setAttribute("aria-hidden", "true");

    document.body.appendChild(hiddenHost);
    hiddenHostRef.current = hiddenHost;

    const iframe = document.createElement("iframe");
    iframe.src = "https://arsearchwebsites.shinyapps.io/arsearchwebsite/";
    iframe.title = "Interactive Results - Meta-Analysis on Extended Realities";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.minHeight = "800px";
    iframe.style.border = "0";
    iframe.setAttribute("loading", "lazy");
    iframeRef.current = iframe;

    const handleLoad = () => setIsLoaded(true);
    iframe.addEventListener("load", handleLoad);
    hiddenHost.appendChild(iframe);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.remove();
      hiddenHost.remove();
    };
  }, []);

  useEffect(() => {
    const targetHost = host ?? hiddenHostRef.current;
    const iframe = iframeRef.current;

    if (targetHost && iframe && iframe.parentElement !== targetHost) {
      targetHost.appendChild(iframe);
    }
  }, [host]);

  const registerHost = useCallback((el: HTMLDivElement | null) => {
    setHost(el);
  }, []);

  const value = useMemo<ShinyIframeContextValue>(
    () => ({
      registerHost,
      isLoaded,
    }),
    [isLoaded, registerHost]
  );

  return <ShinyIframeContext.Provider value={value}>{children}</ShinyIframeContext.Provider>;
}

export function ShinyIframeSlot({ className }: { className?: string }) {
  const ctx = useContext(ShinyIframeContext);

  if (!ctx) {
    throw new Error("ShinyIframeSlot must be used within a ShinyIframeProvider");
  }

  const { registerHost, isLoaded } = ctx;
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerHost(hostRef.current);
    return () => registerHost(null);
  }, [registerHost]);

  return (
    <div ref={hostRef} className={className}>
      {!isLoaded && (
        <div className="flex h-[800px] w-full items-center justify-center bg-neutral-50 text-sm text-neutral-500">
          Loading Shiny app…
        </div>
      )}
    </div>
  );
}

