import { AuthOptions, getServerSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    id: number;
    name: string;
  }
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);

        const user = { id: 1, name: "Test User" };

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
