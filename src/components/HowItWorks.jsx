import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="w-full my-20 flex-center">
          <img src={chipImg} alt="שבב" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            שבב A17 Pro
            <br /> ניצחון ענק ל-Gaming
          </h2>

          <p className="hiw-subtitle">
            העיצוב הגדול ביותר בהיסטוריה של מעבדי הגרפיקה של אפל
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="מסגרת"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="mt-3 font-semibold text-center text-gray">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-col justify-center flex-1">
            <p className="hiw-text g_fadeIn">
              ה-A17 Pro הוא סוג חדש לחלוטין של שבב אייפון המספק את{" "}
              <span className="text-white">
                ביצועי הגרפיקה הטובים ביותר שלנו עד כה
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              משחקים ניידים{" "}
              <span className="text-white">ייראו וירגישו כה סוחפים</span>,
              עם סביבות ודמויות מפורטות להפליא.
            </p>
          </div>

          <div className="flex flex-col justify-center flex-1 g_fadeIn">
            <p className="hiw-text">חדש</p>
            <p className="hiw-bigtext">מעבד גרפי ברמת Pro</p>
            <p className="hiw-text">עם 6 ליבות</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
