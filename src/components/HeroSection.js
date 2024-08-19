// HeroSection.js
import React from 'react';
import PenToolIcon from '../icons/PenToolIcon';

import CreditCardIcon from '../icons/CreditCardIcon';
import MailIcon from '../icons/MailIcon';

export default function HeroSection() {
    return (
        <main className="relative">
            <img
                src="/placeholder.svg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
            />
            <div className="relative  flex flex-col items-center justify-center min-h-screen bg-opacity-50 bg-gradient-to-r from-purple-500 to-green-500">
                <h1 className="mb-8 text-4xl font-bold text-white">Waarmee kunnen we je helpen?</h1>
                <div className="flex space-x-4">
                    <a href="#" className="flex items-center justify-center w-80 h-16 px-4 py-2 text-indigo-900 bg-white rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
                        <PenToolIcon className="w-6 h-6 mr-2" />
                        Reparatie melden
                    </a>
                    <a href="#" className="flex items-center justify-center w-80 h-16 px-4 py-2 text-indigo-900 bg-white rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
                        <CreditCardIcon className="w-6 h-6 mr-2" />
                        Huur betalen
                    </a>
                    <a href="#" className="flex items-center justify-center w-80 h-16 px-4 py-2 text-indigo-900 bg-white rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
                        <MailIcon className="w-6 h-6 mr-2" />
                        Contact
                    </a>
                </div>

            </div>
        </main>
    );
}
