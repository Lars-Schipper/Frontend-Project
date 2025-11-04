import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const showStock = (Data) => {
    const growth = Data.growth > 0;

    return (
        <>
            <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700 ">
                <div className="flex justify-between">
                    <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
                        {Data.name}
                    </div>
                    <div className="">
                        <div className={`${growth ? "text-green-500" : "text-red-500"} mt-1.5 flex text-sm`}>
                            <div className="me-2 mt-1">
                                {growth ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                            </div>
                            <div>
                                {`${growth ? "+" : ""}` + Data.growth + `%`}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-2xl font-semibold">
                        {`$ ${Data.price}`}
                    </div>
                    <div className="text-sm text-zinc-400 dark:text-zinc-500">
                        {`${(Data.pricedifference > 0) ? "+" : ""}${Data.pricedifference}`}
                    </div>
                </div>
            </div>
        </>
    )
}

const niews = (article) => {
    const type = article.type;

    return (
        <>
            <div className="py-3">

                <div className="flex justify-between text-xs">
                    <div className='border rounded-2xl px-3 p-0.5'>
                        {article.type}
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400 text-xs">
                        {article.time}
                    </div>
                </div>

                <div className="mt-3">
                    <div className="text-xl">
                        {article.title}
                    </div>
                    <div className="text-zinc-400 dark:text-zinc-500 mt-2">
                        {article.description}
                    </div>
                </div>

                <div className="mt-2 text-zinc-400 dark:text-zinc-500 text-xs">
                    {`Source: ${article.source}`}
                </div>

            </div>
        </>
    )
}

const movers = (stock) => {
    const growth = stock.growth > 0;

    return (
        <>
            <div>
                <div className="flex justify-between">
                    <div className="">{stock.ticker}</div>
                    <div className="">{`$${stock.price}`}</div>
                </div>

                <div className="flex justify-between">
                    <div className="text-zinc-500 dark:text-zinc-400 text-sm">{stock.name}</div>

                    <div>
                        <div className={`${growth ? "text-green-500" : "text-red-500"} mt-1.5 flex text-sm`}>
                            <div className="me-2 mt-1">
                                {growth ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                            </div>
                            <div>
                                {`${growth ? "+" : ""}` + stock.growth + `%`}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const performance = (stock) => {
    const growth = stock.growth;
    const color = stock.growth > 0;

    return (
        <>
            <div className="flex justify-between">
                <div>
                    {stock.sector}
                </div>
                <div>
                    <div className={`${color ? "text-green-500" : "text-red-500"} mt-1.5 flex text-sm`}>
                        <div>
                            {`${color ? "+" : ""}` + growth.toFixed(2) + `%`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

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
                            return (showStock(data))
                        })}
                    </div>

                    <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700 my-3">
                        <div className="">
                            <h1 className="text-xl mb-2">Latest Market News</h1>
                            <p className="text-zinc-400 dark:text-zinc-500 text-sm">Saty updated with the latest financial news and market developments</p>
                        </div>

                        <div className="divide-y divide-zinc-300 dark:divide-zinc-700">
                            {news.map((article) => {
                                return (niews(article));
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
                                return (movers(stock));
                            })}
                        </div>
                    </div>

                    <div className="border rounded-2xl p-3 border-zinc-300 dark:border-zinc-700 my-3">
                        <h1 className="text-xl">Sector Performance</h1>

                        <div className="grid grid-cols-1 gap-3 mt-5 divide divide-y divide-zinc-300 dark:divide-zinc-700">
                            {sector.map((stock) => {
                                return (performance(stock));
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResearchPage;