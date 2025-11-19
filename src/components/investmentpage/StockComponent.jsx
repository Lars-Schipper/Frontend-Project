import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";


const Stockcomponent = (data, i) => {

    const growth = (data.growth > 0) ? true : false;

    return (
        <div key={i} className="border border-zinc-300 dark:border-zinc-700 p-3 rounded-2xl size-full">

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
    )
}

export default Stockcomponent;