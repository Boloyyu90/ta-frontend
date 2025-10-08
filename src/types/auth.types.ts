// Placeholder - to be implemented
export {};
import { UserRole } from './enum';

/**
 * User entity - mirror dari backend User model
 */
export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    isEmailVerified: boolean;
    createdAt: string; // ISO date string dari backend
    updatedAt: string;
}

/**
 * User dengan password (hanya untuk internal, NEVER expose ke UI)
 */
export interface UserWithPassword extends User {
    password: string;
}

/**
 * Auth tokens response dari backend
 */
export interface AuthTokens {
    access: {
        token: string;
        expires: string; // ISO date string
    };
    refresh: {
        token: string;
        expires: string;
    };
}

/**
 * Login request payload
 * Endpoint: POST /v1/auth/login
 */
export interface LoginRequest {
    email: string;
    password: string;
}

/**
 * Login response dari backend
 */
export interface LoginResponse {
    user: User;
    tokens: AuthTokens;
}

/**
 * Register request payload
 * Endpoint: POST /v1/auth/register
 */
export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

/**
 * Register response dari backend
 */
export interface RegisterResponse {
    user: User;
    tokens: AuthTokens;
    message: string;
    emailVerificationRequired: boolean;
}

/**
 * Refresh tokens request
 * Endpoint: POST /v1/auth/refresh-tokens
 */
export interface RefreshTokensRequest {
    refreshToken: string;
}

/**
 * Forgot password request
 * Endpoint: POST /v1/auth/forgot-password
 */
export interface ForgotPasswordRequest {
    email: string;
}

/**
 * Reset password request
 * Endpoint: POST /v1/auth/reset-password
 */
export interface ResetPasswordRequest {
    token: string;
    password: string;
}

/**
 * Verify email request
 * Endpoint: POST /v1/auth/verify-email
 */
export interface VerifyEmailRequest {
    token: string;
}