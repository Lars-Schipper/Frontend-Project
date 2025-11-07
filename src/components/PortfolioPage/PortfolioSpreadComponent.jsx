const Spread = (data, totalValue) => {

    const portion = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseInt(totalValue / 100 * data.percentage)).slice(0, -3);

    return (
        <>
            <div className="my-3">
                <div className="flex justify-between">
                    <div>
                        {data.sector}
                    </div>

                    <div className="flex">
                        <div className="me-2">
                            {data.percentage}%
                        </div>
                        <div>
                            {portion}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full h-3 bg-zinc-300 dark:bg-zinc-900 rounded-full overflow-hidden">
                        <div
                            className="h-3 bg-zinc-900 dark:bg-zinc-300 rounded-full"
                            style={{ width: `${data.percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spread;