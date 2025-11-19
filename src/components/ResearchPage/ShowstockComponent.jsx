import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const ShowStock = (Data, i) => {
    const growth = Data.growth > 0;

    return (
        <div key={i}>
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
        </div>
    )
}

export default ShowStock;