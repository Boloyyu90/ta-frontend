/**
 * Make all properties optional recursively
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract specific fields from a type
 */
export type PickFields<T, K extends keyof T> = Pick<T, K>;

/**
 * Omit specific fields from a type
 */
export type OmitFields<T, K extends keyof T> = Omit<T, K>;

/**
 * Make specific fields required
 */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Extract ID from entity
 */
export type EntityId<T extends { id: number }> = T['id'];

/**
 * Form field value (untuk React Hook Form)
 */
export type FormFieldValue = string | number | boolean | null | undefined;

/**
 * Generic form state
 */
export interface FormState<T = Record<string, FormFieldValue>> {
    values: T;
    errors: Partial<Record<keyof T, string>>;
    touched: Partial<Record<keyof T, boolean>>;
    isSubmitting: boolean;
    isValid: boolean;
}