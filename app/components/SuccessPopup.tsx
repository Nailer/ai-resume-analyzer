
import React, { useState, useEffect } from 'react';

const SuccessPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth entrance after page load
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-[2px] animate-in fade-in duration-700">
            <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-700 ring-1 ring-black/5">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8e98ff] via-[#fa7185cc] to-[#606beb]" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="relative p-8 flex flex-col items-center text-center gap-6">

                    {/* Animated Icon */}
                    <div className="relative group cursor-default">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse rounded-full" />
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-50 to-white border border-indigo-100 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-indigo-600 drop-shadow-sm">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-3 z-10">
                        <h3 className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5]">
                            Analysis Saved On-Chain
                        </h3>
                        <p className="text-gray-500 font-medium leading-relaxed px-4">
                            Your Resume Analysis Has Been Saved On-Chain
                        </p>
                    </div>

                    {/* Link Button */}
                    <div className="w-full flex justify-end items-center mt-4">
                        <a
                            href="https://sepolia-blockscout.lisk.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-full transition-all duration-300 hover:shadow-md cursor-pointer ring-1 ring-indigo-100 hover:ring-indigo-200"
                        >
                            <span className="font-bold text-sm tracking-wide">Check on Lisk</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-50 focus:outline-none"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

            </div>
        </div>
    );
};

export default SuccessPopup;
