import Card from "../components/PortfolioPage/CardComponent";
import Spread from "../components/PortfolioPage/PortfolioSpreadComponent";
import Benchmark from "../components/PortfolioPage/PerformanceBenchmark";
import CurrentHoldings from "../components/PortfolioPage/currontHoldingsComponent";

const PortfolioPage = () => {
    const cards = [
        {
            title: 'Total Value',
            value: '125847.32',
            info: "$",
            color: false,
            symbol: 'dollar'
        },
        {
            title: 'Total Gains/loss',
            value: '27617.32',
            info: "$",
            color: true,
            symbol: 'Arrow'
        },
        {
            title: `Day's change`,
            value: '-2847.21',
            info: "$",
            color: true,
            symbol: 'Arrow'
        },
        {
            title: `Total Return`,
            value: '28.1',
            info: "%",
            color: true,
            symbol: 'Market'
        },
    ]

    const portfolioSpread = [
        {
            sector: "Technology",
            percentage: 65,
        },
        {
            sector: "Healthcare",
            percentage: 15,
        },
        {
            sector: "Finance",
            percentage: 12,
        },
        {
            sector: "Energy",
            percentage: 5,
        },
        {
            sector: "Consumer Goods",
            percentage: 3,
        },
    ];

    const performance = [
        {
            period: {
                timespan: 'day',
                amount: 1,
            },
            gain: -2.31,
            SP: -1.85,
        },
        {
            period: {
                timespan: 'week',
                amount: 1,
            },
            gain: 4.67,
            SP: 3.12,
        },
        {
            period: {
                timespan: 'month',
                amount: 1,
            },
            gain: 8.94,
            SP: 6.45,
        },
        {
            period: {
                timespan: 'months',
                amount: 3,
            },
            gain: 15.23,
            SP: 12.67,
        },
    ];

    const totalValue = 125847.32;

    const currentHoldings = [
        {
            company: "Apple inc.",
            ticker: "AAPL",
            shares: 45,
            costAvarage: 165.3,
            currentPrice: 178.45,
        },
        {
            company: "Microsoft Copr.",
            ticker: "MSFT",
            shares: 32,
            costAvarage: 398.5,
            currentPrice: 412.78
        },
        {
            company: "Alphabet inc.",
            ticker: "GOOGL",
            shares: 18,
            costAvarage: 132.45,
            currentPrice: 142.56
        },
        {
            company: "Tesla inc.",
            ticker: "TSLA",
            shares: 25,
            costAvarage: 275.8,
            currentPrice: 248.92
        },
        {
            company: "NVIDIA Corp..",
            ticker: "NVDA",
            shares: 15,
            costAvarage: 845.2,
            currentPrice: 891.23
        },
    ];

    return (
        <>
            <div className="bg-zinc-100 dark:bg-zinc-800 pb-10">
                <div className="xl:mx-40 md:mx-15 mx-3">

                    <div>
                        <h1 className="text-4xl font-semibold mb-2">My Portfolio </h1>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm">Track and manage your investment portfolio</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {cards.map((data) => {
                            return (Card(data))
                        })}
                    </div>

                    <div className="grid grid-cols-1  lg:grid-cols-7 gap-5">
                        <div className="lg:col-span-5 border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700">
                            <div className="font-semibold">
                                Portfolio Allocation
                            </div>
                            <div className="text-zinc-400 dark:text-zinc-500">
                                Distribution of you investment by sector
                            </div>

                            <div className="mt-5">
                                {portfolioSpread.map((data) => {
                                    return Spread(data, totalValue)
                                })}
                            </div>

                        </div>

                        <div className="lg:col-span-2 border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700">
                            <div className="font-semibold">
                                Performance vs Benchmark
                            </div>
                            <div className="text-zinc-400 dark:text-zinc-500">
                                S&P 500 comparison
                            </div>

                            <div className="mt-5">
                                {performance.map((data) => {
                                    return Benchmark(data);
                                })}
                            </div>

                        </div>
                    </div>

                    <div className="border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700">
                            {currentHoldings.map((data) => {
                                return CurrentHoldings(data, currentHoldings);
                            })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default PortfolioPage;