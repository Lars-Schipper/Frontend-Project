import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

import Holdingcard from "../components/DashboardPage/HoldingcardComponent";

const DashboardPage = () => {

    const portfolio =
    {
        totalValue: 125847.32,
        dailyGrowth: {
            value: 2847.21,
            percentage: 2.31,
        },
        totalInvestment: 98230,
        totalGains: 27617,
        dayChange: 2847.21,
    };

    const holdings = [
        {
            name: "Apple inc.",
            ticker: "AAPL",
            shares: 45,
            sharePrice: 178.45,
            totalValue: 8030.25,
            growth: 1.33
        },
        {
            name: "Microsoft Corp.",
            ticker: "MSFT",
            shares: 32,
            sharePrice: 412.78,
            totalValue: 13208.96,
            growth: -0.3
        },
        {
            name: "Alphabet Inc.",
            ticker: "GOOGL",
            shares: 18,
            sharePrice: 142.56,
            totalValue: 2566.08,
            growth: 2.72
        },
        {
            name: "Tesla Inc.",
            ticker: "TSLA",
            shares: 25,
            sharePrice: 248.92,
            totalValue: 6223,
            growth: -2.23
        },
        {
            name: "NVIDIA Corp.",
            ticker: "NVDA",
            shares: 15,
            sharePrice: 891.23,
            totalValue: 13368.45,
            growth: 1.42
        },
    ]

    const growth = portfolio.dailyGrowth.percentage > 0;


    return (
        <>
            <div className="bg-zinc-100 dark:bg-zinc-800 pb-10">
                <div className="xl:mx-40 md:mx-15 mx-3">

                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Welcome Back! </h1>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm">Here is What is happening with your investments today</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                        <div className="border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700 lg:col-span-3">
                            <div className="flex justify-between">
                                <div className="">
                                    Portfolio Value
                                </div>
                                <div className="px-3 flex flex-nowrap p-1 border rounded-lg text-xs border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                                    <div className="mt-0.5 me-2">
                                        <IoEyeOutline />
                                    </div>
                                    View Details
                                </div>
                            </div>

                            <div className="mt-5 text-3xl">
                                {portfolio.totalValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </div>

                            <div className={`${growth ? "text-green-500" : "text-red-500"} mt-1.5 flex text-sm`}>
                                <div className="me-2 mt-1">
                                    {growth ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                                </div>

                                <div className="flex text-wrap mb-3">
                                    <div>
                                        {`${portfolio.dailyGrowth.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} (${portfolio.dailyGrowth.percentage}%)`}
                                    </div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 ms-3">
                                        Today
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="border rounded-2xl lg:mt-5 p-4 border-zinc-300 dark:border-zinc-700">
                            <div>
                                Portfolio Value
                            </div>

                            <div className="mt-5">
                                <div className="flex justify-between">
                                    <div className="text-zinc-500 dark:text-zinc-400 text-sm">
                                        Total Invested
                                    </div>
                                    <div className="">{portfolio.totalInvestment.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-zinc-500 dark:text-zinc-400 text-sm">
                                        Total Gained
                                    </div>
                                    <div className={`${(portfolio.dayChange > 0) ? "text-green-500" : "text-red-500"}`}>{portfolio.totalGains.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-zinc-500 dark:text-zinc-400 text-sm">
                                        Day's Change
                                    </div>
                                    <div className={`${(portfolio.dayChange > 0) ? "text-green-500" : "text-red-500"}`}>{portfolio.dayChange.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        holdings - Recent Transactions - Watchlist
                    </div>

                    <div className="border rounded-2xl p-4 border-zinc-300 dark:border-zinc-700 lg:col-span-3">
                        <h1 className="text-xl mb-2">Your Holdings</h1>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm">Current positions in your portfolio</p>

                        <div className="mt-8">
                            {holdings.map((stock) => {
                                return (Holdingcard(stock))
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;