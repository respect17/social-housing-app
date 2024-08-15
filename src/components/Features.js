import Image from 'next/image';

const Features = () => {
    return (
        <section className="bg-gradient-to-r from-green-300 to-cyan-300 p-8 rounded-lg shadow-lg">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <Image
                        src=""
                        alt="Aerial view of housing development"
                        width={500}
                        height={375}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-cyan-600 mb-4">
                        We verbeteren onze woningen
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Wilt u meer weten over onze energiebesparende maatregelen?
                    </p>
                    <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Lees meer
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;