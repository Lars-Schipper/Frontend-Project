const Performance = (stock, i) => {
    const growth = stock.growth;
    const color = stock.growth > 0;

    return (
        <div key={i} className="flex justify-between">
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
    )
}

export default Performance