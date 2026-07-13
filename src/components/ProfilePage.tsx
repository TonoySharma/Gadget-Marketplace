"use client";

import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import {
    FiUser, FiMail, FiCalendar, FiClock, FiShield,
    FiMapPin, FiActivity, FiSettings, FiCheckCircle, FiStar
} from "react-icons/fi";
import FadeUp from "./FadeUp";


interface UserProfile {
    name: string;
    email: string;
    role: string;
    location: string;
    joinedDate: string;
    avatarUrl: string;
}

export default function ProfilePage() {
    const { data: session, } = authClient.useSession();

    const [user, setUser] = useState<UserProfile>({
        name: "Loading...",
        email: "loading@example.com",
        role: "Premium Elite Member",
        location: "Dhaka, Bangladesh",
        joinedDate: "January 15, 2025",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    });

    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentTime(new Date());
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        if (session?.user) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser({
                name: session.user.name || "User",
                email: session.user.email,
                role: "Premium Elite Member",
                location: "Dhaka, Bangladesh",
                joinedDate: new Date(session.user.createdAt || Date.now())
                    .toLocaleDateString(),
                avatarUrl:
                    session.user.image ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            });
        }
    }, [session]);

    const getGreeting = () => {
        if (!currentTime) return "Welcome back";
        const hours = currentTime.getHours();
        if (hours < 12) return "Good Morning";
        if (hours < 17) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className=" bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8 transition-colors duration-200">
            <FadeUp className="max-w-6xl mx-auto space-y-6">

                <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 relative">
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1 border border-white/30">
                            <FiStar className="fill-white" /> VIP Pro+
                        </div>
                    </div>

                    <div className="p-6 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-16 sm:-mt-12">
                        <div className="relative group">
                            <img
                                src={user.avatarUrl}
                                alt={user.name}
                                className="w-32 h-32 rounded-2xl object-cover border-4 border-white dark:border-zinc-900 shadow-lg"
                            />
                            <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full animate-pulse" />
                        </div>

                        <div className="text-center sm:text-left flex-1 space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">{user.name}</h1>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 self-center">
                                    {user.role}
                                </span>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center justify-center sm:justify-start gap-1">
                                <FiMapPin className="text-zinc-400" /> {user.location}
                            </p>
                        </div>

                        <button className="sm:self-center bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 p-2.5 rounded-xl transition duration-200 cursor-pointer">
                            <FiSettings className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h3 className="text-xl font-semibold tracking-wide text-zinc-200">
                            {getGreeting()}, <span className="text-amber-400 font-bold">{user.name ? user.name.split(' ')[0] : "User"}!</span>
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">All systems operational. Your account is fully protected.</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl w-full md:w-auto justify-between md:justify-start">
                        <div className="flex items-center gap-2">
                            <FiClock className="text-amber-400 w-5 h-5" />
                            <div className="text-right">
                                <p className="text-xs text-zinc-400">Current Time</p>
                                <p className="text-sm font-mono font-bold tracking-wider">
                                    {currentTime ? currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "Loading..."}
                                </p>
                            </div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-blue-400 w-5 h-5" />
                            <div className="text-right">
                                <p className="text-xs text-zinc-400">Today</p>
                                <p className="text-sm font-medium">
                                    {currentTime ? currentTime.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' }) : "Loading..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                            <FiUser className="text-blue-500" /> Account Overview
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl space-y-1">
                                <span className="text-xs font-medium text-zinc-400 block">Email Address</span>
                                <span className="font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2 overflow-hidden text-ellipsis">
                                    <FiMail className="text-zinc-400 shrink-0" /> {user.email}
                                </span>
                            </div>

                            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl space-y-1">
                                <span className="text-xs font-medium text-zinc-400 block">Member Since</span>
                                <span className="font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                                    <FiCalendar className="text-zinc-400" /> {user.joinedDate}
                                </span>
                            </div>

                            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl space-y-1">
                                <span className="text-xs font-medium text-zinc-400 block">Security Status</span>
                                <span className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                    <FiShield /> 2FA Secured
                                </span>
                            </div>

                            <div className="p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl space-y-1">
                                <span className="text-xs font-medium text-zinc-400 block">Account Level</span>
                                <span className="font-medium text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                                    <FiCheckCircle /> Tier 3 Verified
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                                <FiActivity className="text-purple-500" /> Activity Level
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                    <span>Profile Completion</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[85%] rounded-full" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                            <span>Last login active from current device.</span>
                        </div>
                    </div>
                </div>

            </FadeUp>
        </div>
    );
}