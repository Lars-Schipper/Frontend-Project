const Box = (id, logo, title, description) => {
  return (
    <div key={id} className="border bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl text-start p-3 mx-5 m-5 md:mx-2 my-3 self-center h-50">
      <div className="my-3 text-zinc-900 dark:text-zinc-100 text-2xl">{logo}</div>
      <div className="mb-3 text-xl font-extralight">{title}</div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{description}</div>
    </div>
  )
}

export default Box;