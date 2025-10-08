import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Layouts
import AuthLayout from '@/components/layouts/AuthLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import ExamLayout from '@/components/layouts/ExamLayout';

// Pages
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import ExamDetail from '@/pages/ExamDetail';
import ExamSession from '@/pages/ExamSession';
import Result from '@/pages/Result';

/**
 * Application routing configuration
 * Using React Router v7 createBrowserRouter
 */
export const router = createBrowserRouter([
    // ==================== PUBLIC ROUTES ====================
    {
        path: '/',
        element: <Home />,
    },

    // ==================== AUTH ROUTES (No Auth Required) ====================
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            // Redirect /auth to /auth/login
            {
                path: '',
                element: <Navigate to="/auth/login" replace />,
            },
        ],
    },

    // ==================== PROTECTED ROUTES (Auth Required) ====================
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'results',
                element: <Result />,
            },
        ],
    },

    // ==================== EXAM ROUTES (Special Layout) ====================
    {
        path: '/exams',
        element: (
            <ProtectedRoute>
                <ExamLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: ':examId',
                element: <ExamDetail />,
            },
            {
                path: ':examId/session/:userExamId',
                element: <ExamSession />,
            },
        ],
    },

    // ==================== 404 NOT FOUND ====================
    {
        path: '*',
        element: (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
                    <p className="text-muted-foreground mb-6">Halaman tidak ditemukan</p>
                    <a href="/" className="text-primary hover:text-primary/80 underline">
                        Kembali ke Home
                    </a>
                </div>
            </div>
        ),
    },
]);