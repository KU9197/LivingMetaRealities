import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function NotFound() {
  return (
    <div className="grid place-items-center min-h-[60vh]">
      <Card>
        <div className="text-center py-12 px-16">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-7xl font-bold text-neutral-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-3 text-neutral-900">Page Not Found</h2>
          <p className="text-neutral-600 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            🏠 Return Home
          </Link>
        </div>
      </Card>
    </div>
  );
}

