// company, ticker, shares, costAvarage, curretPrice - berekenen: Market value, Gain/Loss & Allocation

const CurrentHoldings = (data, currentHoldings) => {
    const {company, ticker, shares, costAvarage, currentPrice} = data;
    
    const cap = currentHoldings.map((data) => {
        // console.log(data.currentPrice, data.shares);
        return (data.shares * data.currentPrice);
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const marketValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseInt(currentPrice * shares));

    const gainLoss = (currentPrice - costAvarage) * shares;

    const gainLossPercentage = (currentPrice - costAvarage) / costAvarage * 100;

    const allocation = 100 / cap * (currentPrice * shares);



    return (
        <>
            <div>
                ticker: {ticker}
                gainloss: {gainLoss}
                gainloss percentage:{gainLossPercentage}
                allocation: {allocation}
            </div>
        </>
    )
}

export default CurrentHoldings;