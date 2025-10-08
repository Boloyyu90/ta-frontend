import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

interface ProtectedRouteProps {
    children: ReactNode;
    requireAdmin?: boolean; // Optional: for admin-only routes
}

/**
 * Protected Route Wrapper
 * Redirects to login if user not authenticated
 * Optionally checks for admin role
 */
export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
    const { user, isAuthenticated } = useAuthStore();
    const location = useLocation();

    // Not authenticated → redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    // Authenticated but not admin (when admin required)
    if (requireAdmin && user?.role !== 'ADMIN') {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-destructive mb-4">Access Denied</h1>
                    <p className="text-muted-foreground mb-6">
                        Anda tidak memiliki akses ke halaman ini.
                    </p>
                    <a href="/dashboard" className="text-primary hover:text-primary/80 underline">
                        Kembali ke Dashboard
                    </a>
                </div>
            </div>
        );
    }

    // Authenticated & authorized
    return <>{children}</>;
}