import { FaDollarSign, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";



const Card = (data) => {
    const textcolor = (data) => {
        if (data.color) {
            if (parseCurrency(data.value) > 0) {
                return "text-green-500";
            } else {
                return "text-red-500";
            }
        }
        return "";
    }

    const order = (data) => {
        const growth = data.value > 0;

        if (data.info === "$") {
            data.value = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(parseInt(data.value));
            if (data.title === "Total Value") {
                return `${data.value}`
            } else {
                return `${growth ? "+" : ""}${data.value}`
            }
        } else {
            return `${growth ? "+" : ""} ${data.value}${data.info}`
        }
    }

    const symbol = (data) => {
        if (data.symbol == "dollar") {
            return <FaDollarSign />;
        } else if (data.symbol == "Arrow") {
            console.log(data.value)
            if (parseCurrency(data.value) > 0) {
                return <FaArrowTrendUp />;
            } else {
                return <FaArrowTrendDown />;
            }
        } else {
            return <FaRegChartBar />;
        }
    }

    const parseCurrency = (str) =>  {
        const isNegative = str.includes('(') && str.includes(')');
        const num = Number(str.replace(/[^\d.-]/g, ""));
        return isNegative ? -num : num;
    }

    return (
        <>
            <div>
                <div className="border rounded-2xl mt-5 p-4 border-zinc-300 dark:border-zinc-700">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-zinc-400 text-sm">
                                {data.title}
                            </div>
                            <div className={`text-xl ${textcolor(data)}`}>
                                {order(data)}
                            </div>
                        </div>

                        <div className={`${textcolor(data)} text-4xl font-semibold mt-3`}>
                            {symbol(data)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;
