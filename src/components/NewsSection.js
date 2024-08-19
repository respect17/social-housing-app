import Image from 'next/image';
import Link from 'next/link';
import NewsImage from '../images/NewsImage.jpg';
import NewsImage1 from '../images/NewsImage1.png';
import NewsImage2 from '../images/NewsImage2.png';

const NewsItem = ({ date, title, description, image, link }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={image} alt={title} width={300} height={200} className="w-full h-40 object-cover" />
        <div className="p-4">
            <p className="text-sm text-gray-500">{date}</p>
            <h3 className="text-lg font-semibold text-indigo-800 mt-1">{title}</h3>
            <p className="text-sm text-indigo-800 ">{description}</p>
            <Link href={link} className="text-indigo-600 hover:text-indigo-800 text-sm mt-3 inline-block py-5">
                Lees meer<span className='text-orange-500'>→</span>
            </Link>

        </div>
    </div>
);

const NewsSection = () => {
    const newsItems = [
        {
            date: '5 MAART 2024',
            title: 'Telefoonstoring',
            description: 'Update: Telefoonstoring verholpen',
            image: NewsImage2,
            link: '/news/phone-outage',
        },
        {
            date: '17 FEBRUARI 2024',
            title: 'Energiebesparing - Wat doet KnusWonen?',
            description: 'KnusWonen werkt hard aan het energiezuiniger maken van ...',
            image: NewsImage1,
            link: '/news/energy-savings',
        },
        {
            date: '30 JANUARI 2024',
            title: 'Energietoeslag: Heeft u er recht op?',
            description: 'Steeds meer mensen hebben moeite om hun energierekening te ...',
            image: NewsImage,
            link: '/news/energy-allowance',
        },
    ];

    return (
        <div className="block bg-indigo-300 py-12 px-4 hover:bg-indigo-200 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-indigo-800 mb-8">Laatste nieuws</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <NewsItem key={index} {...item} />
                    ))}
                </div>
                <div className="text-right mt-8">
                    <Link href="/news" className="text-indigo-600 hover:text-indigo-800">
                        Bekijk alle nieuwsberichten <a className='text-orange-500'>→</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;