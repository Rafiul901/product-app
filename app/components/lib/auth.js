// lib/auth.js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Mock user data - In real app, you'd use a database
const users = [
  {
    id: "1",
    name: "Rafiq Hossain",
    email: "rafiq@hossain.com",
    password: "password123" // In real app, this would be hashed
  }
]

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { 
          label: 'Email', 
          type: 'email',
          placeholder: 'rafiq@hossain.com'
        },
        password: { 
          label: 'Password', 
          type: 'password',
          placeholder: 'Enter your password'
        }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user by email
        const user = users.find(user => user.email === credentials.email)
        
        if (!user) {
          return null
        }

        // Check password (in real app, compare with hashed password)
        if (user.password !== credentials.password) {
          return null
        }

        // Return user object (without password)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to products page after login
      if (url === baseUrl) return `${baseUrl}/products`
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      return baseUrl
    },
  },
  session: {
    strategy: 'jwt',
  },
}

export default NextAuth(authOptions)