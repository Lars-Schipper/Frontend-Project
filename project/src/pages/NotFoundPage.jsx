import { Link } from "react-router"

const NotFoundPage = () => {
    return (
        <>
            <div className="flex justify-center pt-5 mt-40">
                <div className="text-center">
                    <p className="mb-2 text-bold text-4xl">Deze page bestaat niet of is nog in ontwikkeling</p>
                    <Link to={'/'}>
                        <button className="bg-red-500 text-dark p-3 radius rounded-2xl">Go Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage