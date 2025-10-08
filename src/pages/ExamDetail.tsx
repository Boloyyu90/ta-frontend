import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export default function ExamDetail() {
    const { examId } = useParams();

    return (
        <div className="space-y-8">
            {/* Back Button */}
            <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Dashboard
                </Button>
            </Link>

            {/* Exam Detail */}
            <Card>
                <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-2xl">SKD CPNS Batch {examId}</CardTitle>
                        <Badge>Tersedia</Badge>
                    </div>
                    <CardDescription>Tryout simulasi SKD dengan sistem proctoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold mb-2">Detail Tryout</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>📝 120 soal (TIU, TWK, TKP)</p>
                                <p>⏱️ Durasi: 90 menit</p>
                                <p>🎯 Passing Grade: 65%</p>
                                <p>🤖 Proctoring: Aktif</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Peraturan</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>✓ Pastikan kamera aktif selama ujian</li>
                                <li>✓ Wajah harus terlihat jelas</li>
                                <li>✓ Tidak boleh menggunakan HP</li>
                                <li>✓ Tidak boleh ada orang lain di sekitar</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-4 border-t">
                        <Button className="w-full" size="lg">
                            Mulai Tryout
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            Dengan memulai, Anda menyetujui untuk mengikuti semua peraturan tryout
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}