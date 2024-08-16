import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold mb-2">Bel of mail ons</h3>
                        <p>012 - 345 67 89</p>
                        <p>klantenservice@knuswonen.nu</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Openingstijden</h3>
                        <p>Maandag t/m donderdag van 8:30 tot 16:30 uur.</p>
                        <p>Vrijdag van 8:30 tot 12:00 uur</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Kom langs op afspraak</h3>
                        <p>Straatweglaaan 123</p>
                        <p>1234 AB Dorpstad</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Volg ons op onze sociale kanalen</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-orange-500 hover:text-orange-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-orange-500 hover:text-orange-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 py-4 bg-white">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-sm hover:underline">Privacy</Link>
                        <Link href="/cookieverklaring" className="text-sm hover:underline">Cookieverklaring</Link>
                        <Link href="/disclaimer" className="text-sm hover:underline">Disclaimer</Link>
                    </div>
                    <p className="text-sm">© KnusWonen 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;