'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await signIn('credentials', {
            identifier,
            password,
            redirect: false, // importante: não redireciona automaticamente
        });

        if (result?.error) {
            setError(result.error || 'Erro ao fazer login');
            setLoading(false);
        } else {
            // Login bem-sucedido
            router.push('/dashboard');
            router.refresh();
        }
    };

    return (
        <form className="mt-8 space-y-6 w-96" onSubmit={handleSubmit}>
            {error && (
                <div className="bg-red-50 border border-red-20 text-red-600 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <div className="rounded-md shadow-sm space-y-4">
                <div>
                    <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                        Matrícula ou E-mail
                    </label>
                    <input
                        id="identifier"
                        type="text"
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="123456 ou usuario@exemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Entrando...' : 'Entrar'}
            </button>
        </form>
    );
}