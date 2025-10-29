import { FC } from "react";
import scss from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <section className={scss.Hero}>
      <div className="container">
        <div className={scss.content}>Hero</div>
      </div>
    </section>
  );
};

export default Hero;
