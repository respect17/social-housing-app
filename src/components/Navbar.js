// Header.js
import React from 'react';
import SearchIcon from '../icons/SearchIcon';
import UserIcon from '../icons/UserIcon';

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img
                    src="/placeholder.svg"
                    alt="KnusWonen"
                    width={50}
                    height={50}
                    style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <span className="ml-2 text-xl font-bold text-blue-900">KnusWonen</span>
            </div>
            <nav className="flex space-x-4 text-blue-900">
                <a href="#" className="hover:underline">
                    Ik huur
                </a>
                <a href="#" className="hover:underline">
                    Ik zoek
                </a>
                <a href="#" className="hover:underline">
                    Over ons
                </a>
                <a href="#" className="hover:underline">
                    Projecten
                </a>
            </nav>
            <div className="flex space-x-4">
                <SearchIcon className="w-6 h-6 text-blue-900" />
                <UserIcon className="w-6 h-6 text-blue-900" />
            </div>
        </header>
    );
}
