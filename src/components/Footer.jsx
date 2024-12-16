import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            דרכים נוספות לקנות:{" "}
            <span className="underline text-blue">מצא חנות אפל </span>
            או <span className="underline text-blue">
              משווק מורשה אחר
            </span>{" "}
            בקרבתך.
          </p>
          <p className="text-xs font-semibold text-gray">
            או התקשר 1966-040-000800
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            כל הזכויות שמורות לחברת אפל בע"מ © 2024 - מדובר באתר דוגמא
            לצורך עיצוב ופיתוח בלבד
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold text-gray">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
