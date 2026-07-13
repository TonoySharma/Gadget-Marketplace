"use client";

import React from "react";
import { Button, Drawer } from "@heroui/react";
import { GoSidebarExpand } from "react-icons/go";
import NavLink from "../NavLink";
import { LuHistory, LuNotebookPen } from "react-icons/lu";
import { BsBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { House } from "@gravity-ui/icons";

// ১. নেভিগেশন আইটেমের জন্য টাইপ ডিফাইন করা
interface NavItem {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { icon: House, href: "/dashboard", label: "Dashboard" },
    { icon: LuHistory, href: "/dashboard/my-cart", label: "My Cart" },
    { icon: LuNotebookPen, href: "/dashboard/purchaseEbook", label: "Purchased Products" },
    { icon: CgProfile, href: "/dashboard/profile", label: "Profile" },
    { icon: BsBookmarkStarFill, href: "/dashboard/bookmark", label: "Bookmark" },
];

export function DashboardSidebar() {
   

    const renderNavItems = (
        <nav className="flex flex-col gap-5">
            
            {navItems.map((item) => (
                <NavLink
                    href={item.href}
                    key={item.label}
                    className="flex items-center gap-3 rounded px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-gray-200 hover:text-purple-400 cursor-pointer font-medium"
                >
                    <item.icon className="size-5" />
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex shrink-0 border-r border-default flex-col gap-5 w-68 p-4 rounded">
                {renderNavItems}
            </aside>

            {/* Mobile Sidebar (Drawer) */}
            <Drawer>
                <Button
                    className="md:hidden flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-zinc-200 backdrop-blur-md hover:bg-zinc-800 transition-all"
                    variant="secondary"
                >
                    <GoSidebarExpand size={18} />
                    <span>Menu</span>
                </Button>

                <Drawer.Backdrop className="bg-black/70 backdrop-blur-sm">
                    <Drawer.Content
                        placement="left"
                        className="w-[280px] border-r border-zinc-800 bg-zinc-950/95 backdrop-blur-xl"
                    >
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger className="absolute right-4 top-4 rounded-lg p-2 hover:bg-zinc-800 transition-colors" />

                            <Drawer.Header className="border-b border-zinc-800 pb-4">
                                <Drawer.Heading className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                    Gadget Hub
                                </Drawer.Heading>
                                <p className="text-sm text-zinc-500 mt-1">
                                    Premium Dashboard
                                </p>
                            </Drawer.Header>

                            <Drawer.Body className="py-6">
                                <div className="space-y-2">
                                    {renderNavItems}
                                </div>
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}