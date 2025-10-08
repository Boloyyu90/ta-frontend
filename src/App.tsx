import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50">
            <div className="container mx-auto py-12 space-y-12">
                {/* Hero */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold">
                        <span className="text-gradient-primary">TA Tryout System</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Reusable UI Components dengan shadcn/ui + Design Tokens
                    </p>
                </div>

                {/* Buttons */}
                <Card>
                    <CardHeader>
                        <CardTitle>Button Components</CardTitle>
                        <CardDescription>Different button variants and sizes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size="icon">🚀</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Form Inputs */}
                <Card>
                    <CardHeader>
                        <CardTitle>Form Components</CardTitle>
                        <CardDescription>Input fields and labels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid w-full max-w-sm gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm gap-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" placeholder="Password" />
                        </div>
                    </CardContent>
                </Card>

                {/* Badges */}
                <Card>
                    <CardHeader>
                        <CardTitle>Badges</CardTitle>
                        <CardDescription>Status indicators</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-3">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </CardContent>
                </Card>

                {/* Progress & Avatar */}
                <Card>
                    <CardHeader>
                        <CardTitle>Misc Components</CardTitle>
                        <CardDescription>Progress bar and avatar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Exam Progress</Label>
                            <Progress value={65} className="h-2" />
                            <p className="text-sm text-muted-foreground">65% completed</p>
                        </div>
                        <Separator />
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Participant Name</p>
                                <p className="text-sm text-muted-foreground">participant@example.com</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Exam Card Example */}
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle>SKD CPNS 2025</CardTitle>
                                <CardDescription>Tryout simulasi SKD dengan proctoring</CardDescription>
                            </div>
                            <Badge variant="secondary">Upcoming</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>📝 120 soal (TIU, TWK, TKP)</p>
                            <p>⏱️ Durasi: 90 menit</p>
                            <p>📅 Mulai: 15 Oktober 2025, 09:00 WIB</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                        <Button className="flex-1">Mulai Tryout</Button>
                        <Button variant="outline">Detail</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default App;