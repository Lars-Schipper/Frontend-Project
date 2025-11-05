import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import ShowStock from "../components/ResearchPage/ShowstockComponent";
import Niews from "../components/ResearchPage/NieuwsComponent";
import Movers from "../components/ResearchPage/MoverComponent";
import Performance from "../components/ResearchPage/PerformanceComponent";

const ResearchPage = () => {
    const stockdata = [
        {
            name: "S&P 500",
            price: "4,856.23",
            growth: 0.48,
            pricedifference: 23.45,
        },
        {
            name: "NASDAQ",
            price: "15,234.67",
            growth: -0.08,
            pricedifference: -12.34,
        },
        {
            name: "Dow Jones",
            price: "37,289.43",
            growth: 0.42,
            pricedifference: 156.78,
        },
        {
            name: "VIX",
            price: "14.67",
            growth: -2.27,
            pricedifference: -0.34,
        },
    ];

    const news = [
        {
            type: 'Bullish',
            time: '2 hours ago',
            title: 'FederalReserve Signal Potential Rate Cut in Q2',
            description: 'The Fed Chairman hinted at a possible interest rate reduction following inflatiojn data showing continued colling.',
            source: 'Financial Times',
        },
        {
            type: 'Nuetral',
            time: '4 hours ago',
            title: 'Tech Earnings Season Show Mixes Results',
            description: 'Major tech companies report varied quarterly results, with AI investments driving growth for some while others face headwinds.',
            source: 'Wall Street Journal',
        },
        {
            type: 'Bearish',
            time: '6 hours ago',
            title: 'Oil Prices Surge on Middle East Tensions',
            description: 'Crude oil prices jumped 3% following reports of supply disruptions in key shipping lanes.',
            source: 'Reuters',
        },
    ];

    const marketMovers = [
        {
            ticker: 'NVDA',
            name: 'NVIDIA',
            price: 891.23,
            growth: 5.42,
        },
        {
            ticker: 'TSLA',
            name: 'Tesla',
            price: 248.92,
            growth: -2.23,
        },
        {
            ticker: 'AAPL',
            name: 'Apple',
            price: 178.45,
            growth: 1.33,
        },
    ];

    const sector = [
        {
            sector: "Technology",
            growth: 1.37,
        },
        {
            sector: "Healtcare",
            growth: -1.20,
        },
        {
            sector: "Finance",
            growth: 0.84,
        },
        {
            sector: "Energy",
            growth: -2.57,
        },
    ];

    return (
        <>
            <div className="bg-zinc-100 dark:bg-zinc-800 pb-10">
                <div className="xl:mx-40 md:mx-15 mx-3">

                    <div className="">
                        <h1 className="text-3xl mb-2">Research Center</h1>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm">Market insights, analysis, and tools to make informed investment decisions.</p>
                    </div>

                    <div className="my-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                        {stockdata.map((data) => {
                            return (ShowStock(data))
                        })}
                    </div>

                    <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700 my-3">
                        <div className="">
                            <h1 className="text-xl mb-2">Latest Market News</h1>
                            <p className="text-zinc-400 dark:text-zinc-500 text-sm">Saty updated with the latest financial news and market developments</p>
                        </div>

                        <div className="divide-y divide-zinc-300 dark:divide-zinc-700">
                            {news.map((article) => {
                                return (Niews(article));
                            })}
                        </div>

                    </div>

                    <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700">
                        <div className="">
                            <h1 className="text-xl">Market Movers</h1>
                            <p className="text-zinc-400 dark:text-zinc-500 text-sm my-2">Top gainers and and losers today</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3 mt-5 divide divide-y divide-zinc-300 dark:divide-zinc-700">
                            {marketMovers.map((stock) => {
                                return (Movers(stock));
                            })}
                        </div>
                    </div>

                    <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700 my-3">
                        <h1 className="text-xl">Sector Performance</h1>

                        <div className="grid grid-cols-1 gap-3 mt-5 divide divide-y divide-zinc-300 dark:divide-zinc-700">
                            {sector.map((stock) => {
                                return (Performance(stock));
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResearchPage;