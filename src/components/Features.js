import Image from 'next/image';
import FeaturesImage from '../images/FeaturesImage.png';

const Features = () => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-lg">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
                <div className="md:w-1/2 flex justify-center h-full">
                    <Image
                        src={FeaturesImage}
                        alt="Aerial view of housing development"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-md object-cover h-full w-full"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between h-full">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#7FCDCF] mb-4">
                            We verbeteren onze woningen
                        </h2>
                        <p className="text-gray-700 mb-6 text-base">
                            Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                            Wilt u meer weten over onze energiebesparende maatregelen?
                        </p>
                        <button className="bg-[#38BAA6] hover:bg-[#2E968B] text-white font-bold py-3 px-6 rounded transition duration-300">
                            Lees meer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;