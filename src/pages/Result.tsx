import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Result() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Hasil Tryout</h1>
                <p className="text-muted-foreground mt-2">Riwayat hasil tryout Anda</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Belum Ada Hasil</CardTitle>
                    <CardDescription>Anda belum menyelesaikan tryout apapun</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Hasil tryout akan muncul di sini setelah Anda menyelesaikan ujian
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}