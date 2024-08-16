import Image from 'next/image';
import NewsImage4 from '../images/NewsImage4.png';


const NieuwsbriefInschrijving = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">Schrijf je in voor onze nieuwsbrief</h2>
                <p className="text-gray-700 mb-4">
                    Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.
                </p>
                <p className="text-gray-700 mb-6">
                    Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
                </p>
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                    Inschrijven
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={NewsImage4}
                    alt="Nieuwsbrief illustratie"
                    width={400}
                    height={300}
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default NieuwsbriefInschrijving;
