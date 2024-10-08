import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '../icons/SearchIcon';
import UserIcon from '../icons/UserIcon';

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <Link href="/" className="flex items-center px-20">  {/* Added padding on the left */}
                <Image
                    src="https://www.knuswonen.nu/assets/logo.svg"  // Replace with your actual logo file path
                    alt="KnusWonen Logo"
                    width={200}  // Adjusted width for larger logo
                    height={200}  // Adjusted height for larger logo
                    priority
                />
            </Link>
            <nav className="flex space-x-4 text-blue-900 text-lg">
                <Link href="/ik-huur" className="hover:underline">
                    Ik huur
                </Link>
                <Link href="/ik-zoek" className="hover:underline">
                    Ik zoek
                </Link>
                <Link href="/over-ons" className="hover:underline">
                    Over ons
                </Link>
                <Link href="/projecten" className="hover:underline">
                    Projecten
                </Link>
            </nav>
            <div className="flex space-x-4 px-20">  {/* Added padding on the right */}
                <Link href="/search">
                    <SearchIcon className="w-6 h-6 text-blue-900 hover:text-orange-500" />
                </Link>
                <Link href="/user-profile">
                    <UserIcon className="w-6 h-6 text-blue-900 hover:text-orange-500" />
                </Link>
            </div>
        </header>
    );
}
