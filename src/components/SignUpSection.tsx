"use client";

import { Checkbox, Form, InputGroup } from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, signUp } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import FadeUp from "@/components/FadeUp";
import toast from "react-hot-toast";
// import Dropdown from "@/components/Dropdown";

const RegisterPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    //   const [role, setRole] = useState("reader");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };

        if (userData.password !== userData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const { error } = await signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        });

        if (!error) {
            toast.success("Signup successful!");
            router.push("/");
        } else {
            toast.error(error.message || "Something went wrong");
        }
    };

    const handleGoogleLogin = async (): Promise<void> => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <FadeUp>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 flex items-center justify-center px-4 py-5">
                <div className="w-full max-w-7xl bg-white rounded-xl shadow overflow-hidden grid lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 p-12 text-white relative">

                        <img
                            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
                            alt="Mobile Shop"
                            className="w-[420px] rounded-2xl shadow-2xl mb-8 object-cover"
                        />

                        <h1 className="text-5xl font-bold text-center mb-4 leading-tight">
                            Gadget Hub
                        </h1>

                        <p className="text-lg text-center text-blue-100 max-w-md">
                            Discover the latest smartphones, smart gadgets, and accessories
                            from trusted brands at the best prices.
                        </p>

                        <div className="mt-10 space-y-4">

                            <div className="flex items-center gap-3">
                                <Check className="text-green-300" />
                                <span>Latest Smartphones Collection</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-300" />
                                <span>100% Genuine Products</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-300" />
                                <span>Fast & Secure Delivery</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-300" />
                                <span>Easy Online Ordering</span>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center p-8 lg:p-12">
                        <div className="w-full max-w-md">
                            <h2 className="text-4xl font-bold text-center mb-2">
                                Create Your Account
                            </h2>

                            <p className="text-center text-gray-500 mb-8">
                                Join Gadget Hub and shop the latest mobile phones with ease.
                            </p>

                            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                                {/* Name */}
                                <TextField
                                    isRequired
                                    name="name"
                                    validate={(value) => {
                                        if (value.length < 3) {
                                            return "Name must be at least 3 characters";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Name</Label>
                                    <Input placeholder="Enter Your Name" />
                                    <FieldError />
                                </TextField>

                                {/* Email */}
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

                                {/* Password */}
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

                                {/* Confirm Password */}
                                <TextField
                                    className="w-full"
                                    name="confirmPassword"
                                    isRequired
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Confirm password must be at least 8 characters";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>Confirm Password</Label>

                                    <InputGroup className="border rounded-lg overflow-hidden">
                                        <InputGroup.Input
                                            name="confirmPassword" // <--- Ekhane name attribute jog kora hoyeche
                                            type={isVisible ? "text" : "password"}
                                            placeholder="Confirm Password"
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

                                {/* Role Dropdown */}
                                {/* <Dropdown role={role} setRole={setRole}></Dropdown> */}

                                {/* Register Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-indigo-500 rounded hover:bg-indigo-700 text-white py-6"
                                >
                                    Register Account
                                </Button>

                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-1 bg-gray-300"></div>
                                    <span className="text-gray-400 text-sm">OR</span>
                                    <div className="h-[1px] flex-1 bg-gray-300"></div>
                                </div>

                                {/* Google Button */}
                                <Button
                                    type="button" // form submithandler block korar jonno type="button" kora bhalo
                                    onClick={handleGoogleLogin}
                                    className="w-full border p-6 rounded"
                                >
                                    <FcGoogle size={30} />
                                   Continue with Google
                                </Button>
                            </Form>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-indigo-600 font-semibold hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeUp>
    );
};

export default RegisterPage;