import coffeeBag from "./assets/images/coffee-beans-bag.png";
import useElementOnScreen from "./utils/useElementOnScreen";
import Lets from "./assets/images/lets.jpg";

export default function About() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <>
      <div
        className="relative max-w-screen-2xl mx-auto pt-20 md:pt-32 pb-10 md:pb-20 pl-4 text-gray-700 bg-white overflow-hidden"
        id="about"
      >
        <div
          className="flex flex-wrap xl:flex-nowrap items-start -m-10"
          ref={containerRef}
        >
          <div className="xl:w-2/3 animate-fadein-top m-10">
            <div
              className={`max-w-3xl mx-auto px-4 xl:px-0 md:ml-16 opacity-0 ${
                isVisible && "animate-fadein-bottom opacity-100"
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-serif leading-normal lg:leading-relaxed">
              Come to <span>Coffee Dusk</span>,
              </h2>
              <p className="mt-3 sm:mt-5 text-lg md:text-xl md:leading-normal font-light">
               where passion meets in every cup. From sourcing the finest beans to crafting your favorite brews, we're dedicated to exceptional coffee experiences. Join us and savor moments brewed with care and enthusiasm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 flex flex-wrap xl:px-0 m-5 pl-3 md:pl-16 xl:pl-0">
            <img src={Lets} alt="Lets Cafe" />
          </div>
        </div>
      </div>
    </>
  );
}
