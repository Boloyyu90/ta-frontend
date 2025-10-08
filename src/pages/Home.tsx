import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">
                        <span className="text-gradient-primary">TA Tryout System</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Platform tryout online dengan sistem proctoring berbasis Machine Learning untuk
                        deteksi kecurangan secara otomatis
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/auth/login">
                            <Button size="lg">Masuk</Button>
                        </Link>
                        <Link to="/auth/register">
                            <Button size="lg" variant="outline">
                                Daftar
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>🎯 Tryout Simulasi</CardTitle>
                            <CardDescription>
                                Latihan soal SKD CPNS (TIU, TWK, TKP) dengan timer real-time
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Sistem tryout yang mensimulasikan kondisi ujian sebenarnya
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>🤖 ML Proctoring</CardTitle>
                            <CardDescription>
                                Deteksi kecurangan otomatis menggunakan YOLO Object Detection
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Monitoring peserta secara real-time untuk memastikan integritas ujian
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>📊 Analisis Hasil</CardTitle>
                            <CardDescription>Laporan detail performa dan review jawaban</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Breakdown score per kategori soal dan identifikasi area improvement
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}