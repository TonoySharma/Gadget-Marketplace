import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";


const googleClientId = process.env.GOOGLE_CLIENT_ID!;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!;

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("gadgets_hub");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    },
  },

  // user: {
  //   additionalFields: {
  //     role: {
  //       type: "string",
  //       default: "reader",
  //     },
  //     plan: {
  //       type: "string",
  //       default: "free",
  //     },
  //   },
  // },

  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 20 * 24 * 60 * 60,
    },
  },

  plugins: [jwt()],
});
