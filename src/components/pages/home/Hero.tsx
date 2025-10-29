"use client";
import { FC, useEffect, useRef } from "react";
import scss from "./Hero.module.scss";
import Typed from "typed.js";
import Image from "next/image";
import heroImage from "../../../../public/heroBack.svg";
import { useAppSelector } from "@/hooks";

const Hero: FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  const { lang } = useAppSelector((state) => state.langReducer);

  const strings = {
    EN: [
      "Study abroad with our help",
      "Learn English Easily",
      "Explore the World",
      "Career in Tech",
      "Front-End Developer",
      "UI/UX Designer",
      "Internships Abroad",
      "Coding Bootcamps",
      "Web Development Courses",
      "AI & Machine Learning",
      "Cloud Computing Specialist",
      "Startup Opportunities",
    ],
    RU: [
      "Учёба за границей с нашей помощью",
      "Учите английский легко",
      "Исследуйте мир",
      "Карьера в IT",
      "Фронтенд-разработчик",
      "Дизайнер UI/UX",
      "Стажировки за границей",
      "Интенсивные курсы по программированию",
      "Курсы веб-разработки",
      "Искусственный интеллект и машинное обучение",
      "Специалист по облачным технологиям",
      "Возможности в стартапах",
    ],
  };

  useEffect(() => {
    if (!el.current) return;
    typed.current = new Typed(el.current, {
      strings: strings[lang],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.current?.destroy();
    };
  }, [lang]);

  return (
    <section className={scss.Hero}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h3>{lang === "EN" ? "EXPLORE THE WORLD" : "ИССЛЕДУЙТЕ МИР"}</h3>
            <h1>
              <span ref={el}></span>
            </h1>
            <p>
              {lang === "EN"
                ? "Study at the world's top universities and expand your horizons. Get the highest quality education and achieve success abroad."
                : "Учитесь в лучших университетах мира и расширяйте свои горизонты. Получайте качественное образование и достигайте успеха за границей."}
            </p>
          </div>
          <div className={scss.image}>
            <Image src={heroImage} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
