import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/stores/authStore';
import { login } from '@/api/auth.api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

// Validation schema dengan Zod
const loginSchema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string().min(8, 'Password minimal 8 karakter'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setAuth } = useAuthStore();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    // Get redirect path from location state (if came from protected route)
    const from = (location.state as any)?.from?.pathname || '/dashboard';

    // React Hook Form with Zod validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // Submit handler
    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);

        try {
            // Call login API
            const response = await login(data);

            // Store auth state
            setAuth(response.user, response.tokens);

            // Show success toast
            toast({
                title: 'Login Berhasil',
                description: `Selamat datang, ${response.user.name}!`,
            });

            // Navigate to intended destination or dashboard
            navigate(from, { replace: true });
        } catch (error: any) {
            // Show error toast
            toast({
                variant: 'destructive',
                title: 'Login Gagal',
                description: error.response?.data?.message || 'Email atau password salah',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Masukkan email dan password Anda untuk melanjutkan</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="nama@example.com"
                            {...register('email')}
                            disabled={isLoading}
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                to="/auth/forgot-password"
                                className="text-sm text-primary hover:text-primary/80"
                            >
                                Lupa password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register('password')}
                            disabled={isLoading}
                            className={errors.password ? 'border-destructive' : ''}
                        />
                        {errors.password && (
                            <p className="text-sm text-destructive">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Memproses...
                            </>
                        ) : (
                            'Login'
                        )}
                    </Button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-muted-foreground">Belum punya akun? </span>
                    <Link to="/auth/register" className="text-primary hover:text-primary/80 font-medium">
                        Daftar sekarang
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}