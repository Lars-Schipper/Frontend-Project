import { CiFilter, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import { useForm } from "react-hook-form";


const Stockcomponent = (data) => {

    const growth = (data.growth > 0) ? true : false;

    return (
        <>
            <div className="border-1 border-zinc-300 dark:border-zinc-700 p-3 rounded-2xl size-full">

                <div className="flex justify-between space-x-2">
                    <div className="flex">
                        <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-zinc-700 text-sm">
                            {`${data.ticker[0] ?? ""}${data.ticker[1] ?? ''}`}
                        </div>
                        <div className="ms-3">
                            <div className="font-semibold dark:text-white text-zinc-900">{data.ticker}</div>
                            <div className="text-xs text-zinc-400 dark:text-zinc-500">{data.name}</div>
                        </div>
                    </div>
                    <div className={`border border-zinc-300 dark:border-zinc-700 rounded-xl p-2 h-9 ${data.liked ? "text-yellow-500" : ""}`}>
                        {data.liked ? <FaStar /> : <CiStar />}
                    </div>
                </div>

                <div className="flex mt-3 justify-between">
                    <div className="">
                        <div className="text-2xl">${data.stockprice}</div>
                    </div>
                    <div className={`${growth ? "text-green-500" : "text-red-500"} mt-1.5 flex text-sm`}>
                        <div className="me-2 mt-1">
                            {growth ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                        </div>
                        <div>
                            {`${growth ? "+" : ""}` + data.growth + `%`}
                        </div>
                    </div>
                </div>

                <div className="flex mt-3 justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <div>
                        Market Cap
                    </div>
                    <div>
                        {`$ ${data.marketcap}`}
                    </div>
                </div>

                <div className="flex mt-1 justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <div>
                        Sector
                    </div>
                    <div>
                        {`${data.sector}`}
                    </div>
                </div>

                <div className="flex mt-3 justify-around">
                    <button className="border px-12 p-1 w-full mx-3 rounded-xl dark:bg-zinc-100 bg-zinc-900 text-white dark:text-black border-zinc-700" >+ Buy</button>
                    <button className="border px-12 p-1 w-full mx-3 rounded-xl dark:bg-zinc-900 bg-zinc-100 border-zinc-700">- Sell</button>
                </div>
            </div>
        </>
    )
}

const Investments = () => {
    const bedrijfsData = [
        {
            name: 'Apple inc.',
            ticker: 'AAPL',
            marketcap: '2.8T',
            stockprice: 178.45,
            growth: 1.3,
            sector: 'Techology',
            liked: false,
        },
        {
            name: 'Amazon.com inc.',
            ticker: 'AMZN',
            marketcap: '1.6T',
            stockprice: 152.34,
            growth: 1.26,
            sector: 'Consumer Discretionary',
            liked: true,
        },
        {
            name: 'Microsoft corp.',
            ticker: 'MSFT',
            marketcap: '3.1T',
            stockprice: 412.78,
            growth: -0.3,
            sector: 'Technology',
            liked: false,
        },
        {
            name: 'Alphabet inc.',
            ticker: 'GOOGL',
            marketcap: '1.8T',
            stockprice: 142.56,
            growth: 2.72,
            sector: 'Technology',
            liked: false,
        },
        {
            name: 'Tesla inc.',
            ticker: 'TSLA',
            marketcap: '780B',
            stockprice: 142.56,
            growth: -2.23,
            sector: 'Consumer siscretionary',
            liked: false,
        },
        {
            name: 'NVIDIA Corp.',
            ticker: 'NVDA',
            marketcap: '2.2T',
            stockprice: 891.23,
            growth: 1.42,
            sector: 'Consumer siscretionary',
            liked: false,
        },
    ];

    const { register } = useForm();

    return (
        <>
            <div className="bg-zinc-100 dark:bg-zinc-800 pb-10">
                <div className="xl:mx-40 md:mx-15 mx-3">

                    <div className="">
                        <h1 className="text-3xl mb-2">Investments</h1>
                        <p className="text-zinc-400 dark:text-zinc-500 text-sm">Discover and invest in stocks, ETFs, and other securities.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-6">

                        <div className="mt-2 lg:col-span-4">
                            <input id="search" type="search" placeholder="Search stocks, ETFs, or companies..." className="block w-full sm:65 rounded-lg bg-zinc-200 dark:bg-zinc-900 px-3 p-1 text-base focus:outline-2 focus:-outline-offset-1 focus:outline-zinc-300 dark:focus:outline-zinc-600 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 sm:text-sm/6" />
                        </div>

                        <div className="mt-2">
                            <div className="lg:ms-3">

                                <form >
                                    <select {...register("Filter")} id="Filter" className="w-full px-3 p-1 border-1 border-zinc-300 dark:border-zinc-700 rounded-xl">
                                        <option value="All categories" selected>All categories</option>
                                        <option value="Stocks">Stocks</option>
                                        <option value="ETFs">ETFs</option>
                                        <option value="Crypto">Crypto</option>
                                    </select>
                                </form>

                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="border flex border-zinc-300 dark:border-zinc-700 w-full lg:ms-3 rounded-xl px-3 p-1"><span className="mt-1 me-3"><CiFilter /></span>More filters</div>
                        </div>
                    </div>

                    <div className="grid w-full gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
                        {
                            bedrijfsData.map((data) => {
                                return (
                                    Stockcomponent(data)
                                )
                            })
                        }
                    </div>

                    <div className="mt-5 p-5 border border-zinc-300 dark:border-zinc-700 rounded-2xl">
                        <div className="">

                            Investment Tools
                        </div>
                        <div className="text-zinc-500 dark:text-zinc-400">
                            Advanced tools to help you make informed investment decisions
                        </div>


                        <div className="mt-3 grid gap-3 text-center grid-cols-1 md:grid-cols-3">
                            <div className="mt-5 p-5 border border-zinc-300 dark:border-zinc-700 rounded-2xl">
                                <div className="flex justify-center mb-3">
                                    <FaArrowTrendUp />
                                </div>
                                Portfolio Analyzer
                            </div>

                            <div className="mt-5 p-5 border border-zinc-300 dark:border-zinc-700 rounded-2xl">
                                <div className="flex justify-center mb-3">
                                    <CiStar />                                
                                </div>
                                Stock Screener
                            </div>

                            <div className="mt-5 p-5 border border-zinc-300 dark:border-zinc-700 rounded-2xl">
                                <div className="flex justify-center mb-3">
                                    <IoIosSearch />
                                </div>
                                Research Center
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Investments