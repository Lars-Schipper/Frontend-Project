import { FaStar } from "react-icons/fa6";


const Review = (id, rating, description, reviewer, role) => {
  let ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<FaStar />
    )
  }

  const initials = `${reviewer.firstName[0] ?? ""}${reviewer.LastName[0] ?? ''}`;

  return (<>
    <div id={id} className="border bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 border-zinc-200 rounded-2xl text-start p-3 mx-5 md:mx-2 my-3 self-center h-50">

      <div className="my-3 text-lg text-yellow-300 text-nowrap flex">
        {ratings}
      </div>

      <div className="text-sm text-zinc-500 dark:text-zing-400">"{description}"</div>

      <div className="mt-3">
        <div className="flex items-center space-x-2">
          <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-zinc-700 text-sm">
            {initials}
          </div>
          <div>
            <div className="font-semibold dark:text-white text-zinc-900">{reviewer.firstName} {reviewer.LastName}</div>
            <div className="text-xs text-zinc-400 dark:text-zinc-500">{role}</div>
          </div>
        </div>
      </div>

    </div>
  </>)
}

export default Review