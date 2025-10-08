import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
    // Temporary mock data (nanti akan diganti dengan real API)
    const mockExams = [
        {
            id: 1,
            title: 'SKD CPNS Batch 1',
            description: 'Tryout simulasi SKD dengan 100 soal',
            status: 'upcoming',
            duration: 90,
            questionsCount: 100,
        },
        {
            id: 2,
            title: 'SKD CPNS Batch 2',
            description: 'Tryout simulasi SKD tingkat lanjut',
            status: 'available',
            duration: 120,
            questionsCount: 120,
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground mt-2">Selamat datang! Pilih tryout yang tersedia</p>
            </div>

            {/* Exam List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockExams.map((exam) => (
                    <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                                <CardTitle>{exam.title}</CardTitle>
                                <Badge variant={exam.status === 'available' ? 'default' : 'secondary'}>
                                    {exam.status === 'available' ? 'Tersedia' : 'Upcoming'}
                                </Badge>
                            </div>
                            <CardDescription>{exam.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>📝 {exam.questionsCount} soal</p>
                                <p>⏱️ Durasi: {exam.duration} menit</p>
                            </div>
                            <Link to={`/exams/${exam.id}`}>
                                <Button className="w-full" disabled={exam.status !== 'available'}>
                                    {exam.status === 'available' ? 'Lihat Detail' : 'Coming Soon'}
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}