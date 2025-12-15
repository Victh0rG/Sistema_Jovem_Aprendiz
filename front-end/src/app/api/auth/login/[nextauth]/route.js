// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma'; // ajuste se usar outro banco/ORM

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                identifier: { label: 'Matrícula ou E-mail', type: 'text' },
                password: { label: 'Senha', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.identifier || !credentials?.password) {
                    throw new Error('Preencha todos os campos');
                }

                // Busca usuário por matrícula OU e-mail
                const user = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { matricula: credentials.identifier },
                            { email: credentials.identifier },
                        ],
                    },
                });

                if (!user) {
                    throw new Error('Usuário não encontrado');
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isPasswordValid) {
                    throw new Error('Senha incorreta');
                }

                // Retorna o usuário para a sessão
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    matricula: user.matricula,
                };
            },
        }),
    ],

    pages: {
        signIn: '/login', // página personalizada de login
        error: '/login',   // redireciona erros para login
    },

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 dias
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.matricula = user.matricula;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.matricula = token.matricula;
            }
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET, // OBRIGATÓRIO em produção
});

export { handler as GET, handler as POST };