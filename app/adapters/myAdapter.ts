import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

function MyAdapter(): Adapter {
    return {
        providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
        ]
    };
  }
  