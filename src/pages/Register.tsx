import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/stores/authStore';
import { register as registerApi } from '@/api/auth.api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

// Validation schema
const registerSchema = z
    .object({
        name: z.string().min(3, 'Nama minimal 3 karakter'),
        email: z.string().email('Email tidak valid'),
        password: z
            .string()
            .min(8, 'Password minimal 8 karakter')
            .regex(/[A-Z]/, 'Password harus mengandung huruf kapital')
            .regex(/[a-z]/, 'Password harus mengandung huruf kecil')
            .regex(/[0-9]/, 'Password harus mengandung angka'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Password tidak cocok',
        path: ['confirmPassword'],
    });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);

        try {
            // Call register API
            const response = await registerApi({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            // Store auth state
            setAuth(response.user, response.tokens);

            // Show success toast
            toast({
                title: 'Registrasi Berhasil',
                description: response.message || 'Akun Anda telah dibuat. Silakan verifikasi email Anda.',
            });

            // Navigate to dashboard
            navigate('/dashboard', { replace: true });
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Registrasi Gagal',
                description: error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Daftar</CardTitle>
                <CardDescription>Buat akun baru untuk mengakses platform tryout</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register('name')}
                            disabled={isLoading}
                            className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

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
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
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

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            {...register('confirmPassword')}
                            disabled={isLoading}
                            className={errors.confirmPassword ? 'border-destructive' : ''}
                        />
                        {errors.confirmPassword && (
                            <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
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
                            'Daftar'
                        )}
                    </Button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-muted-foreground">Sudah punya akun? </span>
                    <Link to="/auth/login" className="text-primary hover:text-primary/80 font-medium">
                        Login di sini
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}