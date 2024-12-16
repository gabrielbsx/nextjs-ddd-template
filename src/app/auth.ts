import { AuthOptions, getServerSession } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
// import ADProvider from "next-auth/providers/azure-ad";

declare module "next-auth" {
  interface AuthorizeOutput {
    id: number;
    email: string;
  }

  interface User extends AuthorizeOutput {}
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);

        const user = { id: "1", email: "gabriel@gmail.com" };

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
