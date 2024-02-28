import "../animations/Loader.css";

const Loader = () => {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:text-[88px] text-subtitle-3 lg:text-title-2 loader">
        <p className="load-text w-full">Loading . . .</p>
    </section>
  )
}

export default Loader