const Niews = (article, i) => {

    return (
        <div key={i}>
            <div className="py-3">

                <div className="flex justify-between text-xs">
                    <div className='border rounded-2xl px-3 p-0.5'>
                        {article.type}
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400 text-xs">
                        {article.time}
                    </div>
                </div>

                <div className="mt-3">
                    <div className="text-xl">
                        {article.title}
                    </div>
                    <div className="text-zinc-400 dark:text-zinc-500 mt-2">
                        {article.description}
                    </div>
                </div>

                <div className="mt-2 text-zinc-400 dark:text-zinc-500 text-xs">
                    {`Source: ${article.source}`}
                </div>

            </div>
        </div>
    )
}

export default Niews;