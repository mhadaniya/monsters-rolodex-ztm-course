import React from "react";

export const Header = () => 
    (
        <header className="bg-slate-700">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                    <div className="hidden ml-10 space-x-8 lg:block">
                        <h1 className="text-xl font-bold text-white">Monster Rolex</h1>
                    </div>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    <h1 className="text-base font-medium text-white">Monster Rolex</h1>
                </div>
            </nav>
        </header>
    );
