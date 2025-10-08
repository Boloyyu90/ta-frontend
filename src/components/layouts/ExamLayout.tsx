import { Outlet } from 'react-router-dom';

/**
 * Exam Layout
 * Fullscreen layout untuk exam session
 * No distractions, fokus pada exam
 */
export default function ExamLayout() {
    return (
        <div className="min-h-screen bg-background">
            {/* Minimal header (no navigation links) */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-14 items-center justify-center px-4">
                    <h1 className="text-lg font-semibold text-foreground">Exam Session</h1>
                </div>
            </header>

            {/* Fullscreen exam content */}
            <main className="container mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}