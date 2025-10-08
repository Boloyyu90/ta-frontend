import { QuestionType, ExamStatus, ProctoringEventType } from './enum';
import { User } from './auth.types';

/**
 * Question options structure
 * Backend menyimpan sebagai JSON: { "A": "text", "B": "text", ... }
 */
export interface QuestionOptions {
    A: string;
    B: string;
    C: string;
    D: string;
    E?: string; // Optional untuk soal 4 pilihan
}

/**
 * Question entity - mirror dari backend QuestionBank model
 */
export interface Question {
    id: number;
    content: string;
    options: QuestionOptions;
    correctAnswer: string; // "A", "B", "C", "D", or "E"
    defaultScore: number;
    questionType: QuestionType;
    createdAt: string;
}

/**
 * Question tanpa correct answer (untuk participant view)
 * Admin bisa lihat correctAnswer, participant tidak
 */
export interface QuestionWithoutAnswer extends Omit<Question, 'correctAnswer'> {}

/**
 * Exam Question entity - junction table
 * Mirror dari backend ExamQuestion model
 */
export interface ExamQuestion {
    id: number;
    examId: number;
    questionId: number;
    orderNumber: number | null;
    question: Question | QuestionWithoutAnswer; // Conditional based on user role
}

/**
 * Exam entity - mirror dari backend Exam model
 */
export interface Exam {
    id: number;
    title: string;
    description: string | null;
    startTime: string | null; // ISO date string
    endTime: string | null;
    durationMinutes: number | null;
    createdBy: number;
    createdAt: string;
    creator?: Pick<User, 'id' | 'name' | 'email'>; // Optional: included when needed
    examQuestions?: ExamQuestion[]; // Optional: included with ?include=questions
    _count?: {
        examQuestions: number;
        userExams: number;
    };
}

/**
 * Answer entity - mirror dari backend Answer model
 */
export interface Answer {
    id: number;
    userExamId: number;
    examQuestionId: number;
    selectedOption: string | null; // "A", "B", "C", "D", "E" or null (not answered)
    isCorrect: boolean | null;
    answeredAt: string; // ISO date string
    examQuestion?: ExamQuestion; // Optional: for detailed view
}

/**
 * User Exam Session - mirror dari backend UserExam model
 */
export interface UserExam {
    id: number;
    userId: number;
    examId: number;
    startedAt: string | null;
    finishedAt: string | null;
    totalScore: number | null;
    status: ExamStatus;
    createdAt: string;
    exam?: Exam; // Optional: for detailed view
    user?: User; // Optional: for admin view
    answers?: Answer[]; // Optional: for results view
    proctoringEvents?: ProctoringEvent[]; // Optional: for proctoring review
}

/**
 * Proctoring Event - mirror dari backend ProctoringEvent model
 */
export interface ProctoringEvent {
    id: number;
    userExamId: number;
    eventType: ProctoringEventType;
    eventTime: string; // ISO date string
    metadata: Record<string, any> | null; // JSON data dari YOLO
}

/**
 * Exam session dengan remaining time
 * Response dari GET /v1/user-exams/:id/session
 */
export interface ExamSession extends UserExam {
    remainingMinutes: number | null;
}

/**
 * Create exam request
 * Endpoint: POST /v1/exams
 */
export interface CreateExamRequest {
    title: string;
    description?: string;
    startTime?: string; // ISO date string
    endTime?: string;
    durationMinutes?: number;
    questionIds?: number[]; // Array of question IDs to add
}

/**
 * Update exam request
 * Endpoint: PATCH /v1/exams/:id
 */
export interface UpdateExamRequest {
    title?: string;
    description?: string;
    startTime?: string;
    endTime?: string;
    durationMinutes?: number;
}

/**
 * Start exam request
 * Endpoint: POST /v1/exams/:id/start
 */
export interface StartExamResponse {
    id: number;
    userId: number;
    examId: number;
    startedAt: string;
    status: ExamStatus;
}

/**
 * Submit answer request
 * Endpoint: POST /v1/user-exams/answers
 */
export interface SubmitAnswerRequest {
    userExamId: number;
    examQuestionId: number;
    selectedOption: string; // "A", "B", "C", "D", "E"
}

/**
 * Finish exam response
 * Endpoint: POST /v1/user-exams/:id/finish
 */
export interface FinishExamResponse extends UserExam {
    totalScore: number;
    status: ExamStatus.FINISHED | ExamStatus.TIMEOUT;
}

/**
 * Answer dengan detail question (untuk result view)
 * Tidak extends Answer untuk avoid type conflict
 */
export interface AnswerWithQuestion {
    id: number;
    userExamId: number;
    examQuestionId: number;
    selectedOption: string | null;
    isCorrect: boolean | null;
    answeredAt: string;
    examQuestion: {
        question: Question; // Include correctAnswer untuk review
    };
}

/**
 * Simplified exam info untuk result view
 */
export interface ExamSummary {
    id: number;
    title: string;
    description: string | null;
    durationMinutes: number | null;
}

/**
 * Proctoring event summary untuk result view
 */
export interface ProctoringEventSummary {
    eventType: ProctoringEventType;
    eventTime: string;
    metadata: Record<string, any> | null;
}

/**
 * Exam result with detailed breakdown
 * Response dari GET /v1/user-exams/results
 * Tidak extends UserExam untuk avoid type conflict, tapi include semua fields
 */
export interface ExamResult {
    id: number;
    userId: number;
    examId: number;
    startedAt: string | null;
    finishedAt: string | null;
    totalScore: number | null;
    status: ExamStatus;
    createdAt: string;
    exam: ExamSummary;
    answers: AnswerWithQuestion[];
    proctoringEvents: ProctoringEventSummary[];
}

/**
 * Question statistics (for admin dashboard)
 */
export interface QuestionStats {
    questionId: number;
    questionType: QuestionType;
    totalAnswers: number;
    correctAnswers: number;
    accuracyRate: number; // percentage
}

/**
 * Exam statistics (for admin dashboard)
 */
export interface ExamStats {
    examId: number;
    examTitle: string;
    totalParticipants: number;
    completedCount: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
    questionStats: QuestionStats[];
}