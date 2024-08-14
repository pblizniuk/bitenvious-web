import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      // authorize: async (credentials) => {
      //   const { email, password } = credentials

      //   if (!email || !password) {
      //     throw new Error('Invalid credentials')
      //   }

      //   return { email, password }
      // },
    }),
    Github,
    Google
  ],  // Add your providers here  https://next-auth.js.org/providers
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '',
  }),
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/login",
  // },
});