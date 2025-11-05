const Assets = (id, title, description) => {
  return (<>
    <div key={id} id={id} className="mt-5 basis-1/3">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="text-zinc-500 dark:text-zinc-400 text-xs">
        {description}
      </p>
    </div>
  </>)
}

export default Assets;