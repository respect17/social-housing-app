import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <h3 className="font-bold mb-2 px-2">Volg ons op onze sociale kanalen</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-orange-500 hover:text-orange-600">
                                {/* Social Media Icons */}
                            </Link>
                            {/* Additional icons */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 py-4 bg-white px-4 md:px-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-sm underline hover:underline">Privacy</Link>
                        <Link href="/cookieverklaring" className="text-sm underline hover:underline">Cookieverklaring</Link>
                        <Link href="/disclaimer" className="text-sm underline hover:underline">Disclaimer</Link>
                    </div>
                    <p className="text-sm mt-4 md:mt-0">© KnusWonen 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
