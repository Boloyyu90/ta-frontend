/**
 * Standard API response wrapper dari backend
 */
export interface ApiResponse<T = any> {
    data?: T;
    message?: string;
    code?: number;
}

/**
 * API Error response dari backend
 * Struktur dari src/middlewares/error.ts backend
 */
export interface ApiError {
    code: number;
    message: string;
    stack?: string; // Only in development mode
}

/**
 * Paginated response dari backend
 * Used untuk endpoints dengan pagination (e.g., GET /v1/exams)
 */
export interface PaginatedResponse<T> {
    results: T[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

/**
 * Query params untuk pagination
 */
export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    orderBy?: 'asc' | 'desc';
}

/**
 * Query params untuk search/filter
 */
export interface SearchParams extends PaginationParams {
    search?: string;
}

/**
 * Exam list query params
 * Endpoint: GET /v1/exams
 */
export interface ExamListParams extends SearchParams {
    status?: 'upcoming' | 'ongoing' | 'finished';
}

/**
 * User exam results query params
 * Endpoint: GET /v1/user-exams/results
 */
export interface UserResultsParams {
    examId?: number;
}

/**
 * Generic API call state (untuk UI loading/error handling)
 */
export interface ApiCallState<T = any> {
    data: T | null;
    loading: boolean;
    error: ApiError | null;
}