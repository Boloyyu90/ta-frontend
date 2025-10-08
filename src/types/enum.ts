/**
 * User Roles in the system
 * Mirror dari backend: prisma/schema.prisma enum UserRole
 */
export enum UserRole {
    ADMIN = 'ADMIN',
    PARTICIPANT = 'PARTICIPANT',
}

/**
 * Exam session status
 * Mirror dari backend: prisma/schema.prisma enum ExamStatus
 */
export enum ExamStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED',
    CANCELLED = 'CANCELLED',
    TIMEOUT = 'TIMEOUT',
}

/**
 * Question type for SKD CPNS categorization
 * TIU = Tes Intelegensia Umum
 * TKP = Tes Karakteristik Pribadi
 * TWK = Tes Wawasan Kebangsaan
 */
export enum QuestionType {
    TIU = 'TIU',
    TKP = 'TKP',
    TWK = 'TWK',
}

/**
 * Proctoring event types detected by YOLO ML model
 * Mirror dari backend: prisma/schema.prisma enum ProctoringEventType
 */
export enum ProctoringEventType {
    FACE_NOT_DETECTED = 'FACE_NOT_DETECTED',
    MULTIPLE_FACES = 'MULTIPLE_FACES',
}

/**
 * Token types for authentication & authorization
 * Mirror dari backend: prisma/schema.prisma enum TokenType
 */
export enum TokenType {
    ACCESS = 'ACCESS',
    REFRESH = 'REFRESH',
    RESET_PASSWORD = 'RESET_PASSWORD',
    VERIFY_EMAIL = 'VERIFY_EMAIL',
}