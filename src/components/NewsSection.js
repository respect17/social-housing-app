import Image from 'next/image';
import Link from 'next/link';
import NewsImage from '../images/NewsImage.jpg';
import NewsImage1 from '../images/NewsImage1.png';
import NewsImage2 from '../images/NewsImage2.png';

const NewsItem = ({ date, title, description, image, link }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{date}</p>
            <p className="text-gray-800 mb-4">{description}</p>
            <Link href={link} className="text-blue-600 hover:underline">
                Lees meer
            </Link>
        </div>
    </div>
);

const NewsSection = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-orange-500 mb-8 text-center">
                    Het laatste nieuws
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NewsItem
                        date="18 augustus 2024"
                        title="Nieuw beleid voor energiebesparing"
                        description="We hebben ons beleid voor energiebesparing herzien om nog duurzamer te worden."
                        image={NewsImage}
                        link="#"
                    />
                    <NewsItem
                        date="15 augustus 2024"
                        title="Zorg voor je tuin met deze tips"
                        description="Leer hoe je jouw tuin kunt onderhouden en aantrekkelijk kunt maken met deze handige tips."
                        image={NewsImage1}
                        link="#"
                    />
                    <NewsItem
                        date="12 augustus 2024"
                        title="Verbeteringen aan onze woningen"
                        description="We hebben nieuwe initiatieven om de kwaliteit van onze woningen te verbeteren."
                        image={NewsImage2}
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
