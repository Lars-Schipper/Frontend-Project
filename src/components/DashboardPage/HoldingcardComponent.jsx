import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Holdingcard = (stock, i) => {
    const growth = stock.growth > 0;

    return (
        <div key={i} className="my-3 border border-zinc-300 dark:border-zinc-700 p-3 rounded-2xl">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-zinc-700 text-sm">
                        {`${stock.ticker[0] ?? ""}${stock.ticker[1] ?? ''}`}
                    </div>
                    <div className="ms-3">
                        <div className="font-semibold dark:text-white text-zinc-900">{stock.ticker}</div>
                        <div className="text-xs text-zinc-400 dark:text-zinc-500">{stock.name}</div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div>
                        {`${stock.shares} shares ${stock.sharePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
                    </div>
                    <div className="text-sm flex gap-1">
                        <div className="text-zinc-400 dark:text-zinc-500">
                            {`${stock.totalValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
                        </div>

                        <div>
                            <div className={`${growth ? "text-green-500" : "text-red-500"} flex text-sm`}>
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
            </div>
        </div>
    )
}

export default Holdingcard;