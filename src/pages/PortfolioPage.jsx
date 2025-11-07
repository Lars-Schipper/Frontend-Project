import { FaTable } from "react-icons/fa6";
import Card from "../components/PortfolioPage/CardComponent";
import Spread from "../components/PortfolioPage/PortfolioSpreadComponent";

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
            value: '237617.32',
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

    const totalValue = 125847.32;

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
                            <div className="mt-3">
                                {portfolioSpread.map((data) => {
                                    return Spread(data, totalValue)
                                })}
                            </div>
                        </div>
                        
                        <div className="lg:col-span-2 border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700">

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PortfolioPage;