"use client";
import { FC } from "react";
import scss from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLang } from "@/toolkit/slices/langSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.langReducer);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLang(e.target.value as "EN" | "RU"));
  };

  const text = {
    EN: {
      home: "Home",
      about: "About Us",
      study: "Study Abroad",
      contacts: "Contacts",
      search: "Search...",
    },
    RU: {
      home: "Главная",
      about: "О нас",
      study: "Учёба за рубежом",
      contacts: "Контакты",
      search: "Поиск...",
    },
  };
  const t = text[lang];

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={logo} alt="logo" />
          <nav className={scss.nav}>
            <Link href="/">{t.home}</Link>
            <Link href="/aboutUs">{t.about}</Link>
            <Link href="/studyAbroad">{t.study}</Link>
            <Link href="/contacts">{t.contacts}</Link>
            <div className={scss.form}>
              <input type="search" placeholder={t.search} />
              <button>
                <IoSearchOutline />
              </button>
            </div>
            <select value={lang} onChange={handleChange}>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
