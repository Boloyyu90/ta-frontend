import { Outlet, Link } from 'react-router-dom';

/**
 * Auth Layout
 * Used for Login & Register pages
 * Simple centered layout with branding
 */
export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50">
            <div className="container mx-auto px-4 py-8">
                {/* Header/Brand */}
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-block">
                        <h1 className="text-3xl font-bold text-gradient-primary">TA Tryout System</h1>
                        <p className="text-sm text-muted-foreground mt-1">
                            Platform Tryout dengan ML Proctoring
                        </p>
                    </Link>
                </div>

                {/* Auth Pages (Login/Register) */}
                <div className="flex items-center justify-center">
                    <Outlet />
                </div>

                {/* Footer */}
                <footer className="mt-12 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 TA Tryout System. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}