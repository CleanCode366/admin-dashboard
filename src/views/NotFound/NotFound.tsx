import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-bg-primary">
            <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
            <p className="mb-6 text-primary">
                The page you are looking for does not exist or is unavailable.
            </p>

            <Link
                to="/home"
                className="px-6 py-2 bg-bg-tertiary text-text-primary rounded-lg border border-border-secondary hover:bg-bg-primary transition"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
