# TypeScript files
$tsFiles = @(
    'src/api/auth.api.ts',
    'src/api/exam.api.ts',
    'src/api/userExam.api.ts',
    'src/hooks/useAuth.ts',
    'src/hooks/useExam.ts',
    'src/hooks/useTimer.ts',
    'src/stores/authStore.ts',
    'src/stores/examStore.ts',
    'src/stores/examSessionStore.ts',
    'src/types/auth.types.ts',
    'src/types/exam.types.ts',
    'src/types/api.types.ts',
    'src/utils/formatDate.ts',
    'src/utils/calculateRemainingTime.ts'
)

foreach ($file in $tsFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        if ([string]::IsNullOrWhiteSpace($content)) {
            Set-Content $file "// Placeholder - to be implemented`nexport {};`n"
        }
    }
}

# TSX files
$tsxFiles = @(
    'src/components/layouts/AuthLayout.tsx',
    'src/components/layouts/DashboardLayout.tsx',
    'src/components/layouts/ExamLayout.tsx',
    'src/pages/Home.tsx',
    'src/pages/Login.tsx',
    'src/pages/Register.tsx',
    'src/pages/Dashboard.tsx',
    'src/pages/ExamDetail.tsx',
    'src/pages/ExamSession.tsx',
    'src/pages/Result.tsx',
    'src/routes/index.tsx',
    'src/routes/ProtectedRoute.tsx'
)

foreach ($file in $tsxFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        if ([string]::IsNullOrWhiteSpace($content)) {
            Set-Content $file "export default function Placeholder() { return null; }`n"
        }
    }
}

Write-Host "✅ Placeholder files populated!" -ForegroundColor Green