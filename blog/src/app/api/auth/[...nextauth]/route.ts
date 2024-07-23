import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from '@/utils/models/User'
import bcrypt from 'bcrypt'
import Connect from '@/utils/database/db'

export const authOptions:any = {
    pages: {
        signIn: '/Login'
    },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                await Connect();
                try {
                    const user = await User.findOne({ email: credentials.email })

                    if (user) {
                        const passwordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if (passwordCorrect) {
                            return user;
                        }
                    }

                } catch (error: any) {
                    throw new Error(error);
                }
            },
        }),
        // ...add more providers here
    ],
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };