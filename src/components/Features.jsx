import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="relative h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-wdith">
        <div className="w-full mb-12">
          <h1 id="features_title" className="section-heading ">
            העתיד כבר כאן
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="pl-24 mt-32 mb-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">
              iPhone 15
            </h2>
          </div>

          <div className="flex-col flex-center sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="object-cover object-center w-full h-full"
                preload="none"
                muted
                autoPlay
                ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="relative flex flex-col w-full">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="טיטניום"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="טיטניום 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    אייפון 15 Pro הוא{" "}
                    <span className="text-white">
                      האייפון הראשון שמשלב עיצוב טיטניום בדרגת חלל
                    </span>
                    , המשתמש באותה סגסוגת שחלליות משתמשות בה למשימות
                    למאדים.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    לטיטניום יש את אחד היחסים הטובים ביותר בין חוזק למשקל{" "}
                    מבין כל המתכות , מה שהופך את אלה ל
                    <span className="text-white">
                      {" "}
                      דגמי ה-Pro הקלים ביותר שלנו אי פעם{" "}
                    </span>
                    תרגישו את ההבדל מהרגע שתרימו אחד
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
