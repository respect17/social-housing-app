import Image from 'next/image';
import NewsImage4 from '../images/NewsImage4.png';

const NieuwsbriefInschrijving = () => {
    return (
        <section className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-orange-500 mb-4">
                            Schrijf je in voor onze nieuwsbrief
                        </h2>
                        <p className="text-gray-700 mb-4 text-base">
                            Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.
                        </p>
                        <p className="text-gray-700 mb-6 text-base">
                            Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
                        </p>
                        <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 px-4 rounded-md text-sm hover:from-orange-600 hover:to-yellow-500 transition duration-300">
                            Inschrijven
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center py-5">
                    <Image
                        src={NewsImage4}
                        alt="Nieuwsbrief illustratie"
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default NieuwsbriefInschrijving;
