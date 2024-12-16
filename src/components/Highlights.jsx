import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  const handleWatchFilm = () => {
    window.open("YOUR_FILM_URL", "_blank");
  };

  const handleWatchEvent = () => {
    window.open("YOUR_EVENT_URL", "_blank");
  };

  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="section-heading">
            הבט בביצועים המדהימים של האייפון
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <button
              onClick={handleWatchFilm}
              className="flex items-center transition-opacity cursor-pointer link hover:opacity-75">
              צפייה בסרטון
              <img
                src={watchImg}
                alt="watch"
                className="ml-4 rotate-180"
              />
            </button>
            <button
              onClick={handleWatchEvent}
              className="flex items-center transition-opacity cursor-pointer link hover:opacity-75">
              צפייה באירוע
              <img
                src={rightImg}
                alt="right"
                className="ml-4 rotate-180"
              />
            </button>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
