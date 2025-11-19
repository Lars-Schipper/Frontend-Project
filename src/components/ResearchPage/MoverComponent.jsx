import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Movers = (stock, i) => {
    const growth = stock.growth > 0;

    return (
        <div key={i}>
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
    )
}

export default Movers;