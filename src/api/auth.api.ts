import { apiClient } from './client';
import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
    RefreshTokensRequest,
    AuthTokens,
    ForgotPasswordRequest,
    ResetPasswordRequest,
    VerifyEmailRequest,
} from '@/types';

/**
 * Auth API endpoints
 * All authentication-related API calls
 */

/**
 * Login user
 * POST /v1/auth/login
 */
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    return response.data;
};

/**
 * Register new user
 * POST /v1/auth/register
 */
export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('/auth/register', data);
    return response.data;
};

/**
 * Logout user
 * POST /v1/auth/logout
 */
export const logout = async (refreshToken: string): Promise<void> => {
    await apiClient.post('/auth/logout', { refreshToken });
};

/**
 * Refresh access token
 * POST /v1/auth/refresh-tokens
 */
export const refreshTokens = async (data: RefreshTokensRequest): Promise<AuthTokens> => {
    const response = await apiClient.post<AuthTokens>('/auth/refresh-tokens', data);
    return response.data;
};

/**
 * Send password reset email
 * POST /v1/auth/forgot-password
 */
export const forgotPassword = async (data: ForgotPasswordRequest): Promise<void> => {
    await apiClient.post('/auth/forgot-password', data);
};

/**
 * Reset password with token
 * POST /v1/auth/reset-password
 */
export const resetPassword = async (data: ResetPasswordRequest): Promise<void> => {
    await apiClient.post('/auth/reset-password', data);
};

/**
 * Verify email with token
 * POST /v1/auth/verify-email
 */
export const verifyEmail = async (data: VerifyEmailRequest): Promise<void> => {
    await apiClient.post('/auth/verify-email', data);
};

/**
 * Send verification email
 * POST /v1/auth/send-verification-email
 */
export const sendVerificationEmail = async (): Promise<void> => {
    await apiClient.post('/auth/send-verification-email');
};