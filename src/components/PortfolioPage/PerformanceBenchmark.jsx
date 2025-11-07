// period[timaspan, amount], gain, SP
const Benchmark = (data) => {
    const growth = data.gain > 0;
    const growthSP = data.SP > 0;
    
    return (
        <>
            <div className="my-5 flex justify-between">
                <div>
                    {data.period.amount} {data.period.timespan}
                </div>
                <div className="text-end">
                    <div className={`text-sm ${growth? "text-green-500" : "text-red-500"}`}>
                        {growth? "+" : ""}{data.gain}%
                    </div>
                    <div className="text-xs">
                        S&P: {growthSP? "+" : ""}{data.SP}%
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benchmark;