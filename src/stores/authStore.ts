import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthTokens } from '@/types';

interface AuthState {
    user: User | null;
    tokens: AuthTokens | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

interface AuthActions {
    setAuth: (user: User, tokens: AuthTokens) => void;
    clearAuth: () => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}

type AuthStore = AuthState & AuthActions;

/**
 * Auth Store - Zustand with localStorage persistence
 * Manages authentication state across the app
 */
export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            // Initial state
            user: null,
            tokens: null,
            isAuthenticated: false,
            isLoading: false,

            // Set authentication (after login/register)
            setAuth: (user, tokens) => {
                // Store tokens in localStorage for API client
                localStorage.setItem('accessToken', tokens.access.token);
                localStorage.setItem('refreshToken', tokens.refresh.token);

                set({
                    user,
                    tokens,
                    isAuthenticated: true,
                });
            },

            // Clear authentication
            clearAuth: () => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                set({
                    user: null,
                    tokens: null,
                    isAuthenticated: false,
                });
            },

            // Logout (clear auth + navigate handled by component)
            logout: () => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                set({
                    user: null,
                    tokens: null,
                    isAuthenticated: false,
                });
            },

            // Update user info (e.g., after profile update)
            updateUser: (updatedUser) => {
                set((state) => ({
                    user: state.user ? { ...state.user, ...updatedUser } : null,
                }));
            },
        }),
        {
            name: 'auth-storage', // localStorage key
            partialize: (state) => ({
                user: state.user,
                tokens: state.tokens,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);