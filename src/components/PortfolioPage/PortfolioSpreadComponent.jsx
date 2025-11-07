const Spread = (data, totalValue) => {

    const portion = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseInt(totalValue / 100 * data.percentage)).slice(0, -3);

    return (
        <>
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
        </>
    )
}

export default Spread;