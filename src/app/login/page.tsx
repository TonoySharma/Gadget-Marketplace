"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Input, Button, TextField, Label, InputGroup, FieldError } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

// App configurations or dynamic integrations
import FadeUp from "@/components/FadeUp";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const toggleVisibility = (): void => setIsVisible(!isVisible);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: userData.email as string,
        password: userData.password as string,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "An error occurred during login.");
      } else if (data) {
        toast.success("login successful!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <FadeUp>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">

        {/* MAIN STRUCTURAL CARD */}
        <div className="w-full max-w-6xl bg-white shadow rounded-xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT PANEL - MOBILE & GADGET STORE BRANDING */}
          <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12">

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80"
              alt="Latest Smartphones and Gadgets"
              className="w-[380px] h-[260px] object-cover rounded-2xl shadow-2xl mb-8 border border-white/10"
            />

            <h1 className="text-3xl font-extrabold text-center tracking-tight">
              Upgrade Your Tech Journey 📱
            </h1>

            <p className="text-center text-blue-100 mt-4 max-w-sm text-sm leading-relaxed">
              Log in to unlock premium member deals, track your latest smartphone orders, and manage your tech accessories wishlist.
            </p>

            <div className="mt-8 space-y-3.5 text-sm text-blue-50/90 self-start xl:ml-12">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span>Exclusive pre-order access to flagship devices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span>Track 100% genuine warranty & super-fast delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✔</span>
                <span>Instant trade-in calculations for your old phone</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - SECURE CREDENTIALS INTERACTION */}
          <div className="flex items-center justify-center p-8 sm:p-12">
            <div className="w-full max-w-md">

              {/* BRAND HEADER */}
              <div className="mb-8 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  Login Account
                </h1>
                <p className="text-default-500 text-sm mt-2">
                  Enter your tech credentials to access GadgetHub
                </p>
              </div>

              {/* DYNAMIC FORM */}
              <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                {/* EMAIL ATTRIBUTE */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                      return "Please enter a valid email";
                    }
                    return null;
                  }}>
                  <Label>Email</Label>
                  <Input placeholder="Enter your email" />
                  <FieldError />
                </TextField>

                {/* PASSWORD ATTRIBUTE WITH EMBEDDED TOGGLE SUFFIX */}
                <TextField
                  className="w-full"
                  name="password"
                  isRequired
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain number";
                    }
                    return null;
                  }}
                >
                  <Label>Password</Label>

                  <InputGroup className="border rounded-lg overflow-hidden">
                    <InputGroup.Input
                      name="password" // <--- Ekhane name attribute jog kora hoyeche
                      type={isVisible ? "text" : "password"}
                      placeholder="Your Password"
                    />

                    <InputGroup.Suffix>
                      <Button
                        isIconOnly
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>

                  <FieldError />
                </TextField>

                <div className="flex justify-end pt-1">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* SECURE SUBMISSION BUTTON */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-500 rounded hover:bg-indigo-700 text-white py-6"
                >
                  Log In
                </Button>

                {/* ARCHITECTURAL SEPARATOR */}
                <div className="flex items-center gap-4 my-2">
                  <div className="h-[1px] flex-1 bg-default-200" />
                  <span className="text-xs font-semibold text-default-400 tracking-wider">OR</span>
                  <div className="h-[1px] flex-1 bg-default-200" />
                </div>

                {/* IDENTITY PROVIDER SYSTEM */}
                <Button
                  type="button" // form submithandler block korar jonno type="button" kora bhalo
                  onClick={handleGoogleLogin}
                  className="w-full border p-6 rounded"
                >
                  <FcGoogle size={30} />
                  Continue with Google
                </Button>
              </Form>

              {/* PERSISTENT FOOTER FOR COMPLEMENTARY ACTION */}
              <p className="text-center text-sm text-default-500 mt-8">
                New to GadgetHub?{" "}
                <Link
                  href="/signUp"
                  className="text-blue-600 hover:underline font-semibold transition-colors"
                >
                  Create an account
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}