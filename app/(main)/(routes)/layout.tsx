'use client'

import { PropsWithChildren } from "react";
import Navigation from "./_components/navigation";
import Footer from "./_components/footer";
import React, { useState } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    const [displayNavbar, setDisplayNavbar] = useState(true);
    
    return (
        <div className="flex flex-col min-h-screen">
            <main className={`flex-1 grid grid-cols-1 md:grid-cols-[${displayNavbar ? '240px' : '100px'}_1fr] gap-6`}>
                <Navigation displayNavbar={displayNavbar} setDisplayNavbar={setDisplayNavbar} />
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
