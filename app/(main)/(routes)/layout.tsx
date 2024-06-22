"use client"
import { PropsWithChildren } from "react";
import Navigation from "./_components/navigation";
import Footer from "./_components/footer";
import React, { useState } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    const [displayNavbar, setDisplayNavbar] = useState(true);
    
    return (
        <div className="flex h-screen overflow-hidden">
            <Navigation displayNavbar={displayNavbar} setDisplayNavbar={setDisplayNavbar} />
            <main className="flex-1 overflow-y-auto p-4">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
