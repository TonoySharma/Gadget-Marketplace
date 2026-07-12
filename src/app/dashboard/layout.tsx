import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import SmoothScroll from '@/components/SmoothScroll';
import React from 'react';


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex p-6 gap-5">
            <DashboardSidebar />
            <main className="flex-1">
                <SmoothScroll>
                    <div>{children}</div>
                </SmoothScroll>
            </main>
        </div>
    );
};

export default DashboardLayout;