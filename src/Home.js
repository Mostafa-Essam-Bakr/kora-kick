import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import bg1 from "./Assets/bg1.jpg";
import bg2 from "./Assets/bg2.jpg";
import bg3 from "./Assets/bg3.jpg";
import bg4 from "./Assets/bg4.jpg";
import bg5 from "./Assets/bg5.jpg";
import bg6 from "./Assets/bg6.jpg";
import Nav from "./componant/Nav";

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".o-scroll"),
      smooth: true,
    });

    return () => {
      scroll.destroy(); // تدمير التمرير عندUnmount
    };
  }, []);

  return (
    <div className="o-scroll" data-scroll-container>
      <header className="c-header" data-scroll-section>
        <Nav />
        <h1 className="c-header_title">Locomotive Scroll Example</h1>
      </header>
      <section className="c-section" data-scroll-section>
        <div className="c-content">
          {" "}
          <img src={bg2} alt="" data-scroll data-scroll-speed="-9" />
          <h2 data-scroll data-scroll-speed="1">
            Welcome to the Locomotive Scroll Demo
          </h2>
        </div>
      </section>
      <section className="i-section" data-scroll-section>
        <div className="c-content">
          {" "}
          <h2 data-scroll data-scroll-speed="1">
            Welcome to the Locomotive Scroll Demo
          </h2>
        </div>
      </section>
      <section className="a-section" data-scroll-section>
        <div className="c-content">
          <img src={bg1} alt="" data-scroll data-scroll-speed="1" />
          <h2 data-scroll data-scroll-speed="1">
            Another Section
          </h2>
        </div>
      </section>
      <section className="b-section" data-scroll-section>
        <div className="c-content">
          <h2>
            {" "}
            <img src={bg2} alt="" />
            Final Section
          </h2>
        </div>
      </section>
      <section className="d-section" data-scroll-section>
        <div className="c-content">
          <h2 data-scroll data-scroll-speed="1">
            {" "}
            <img
              src={bg4}
              alt=""
              data-scroll
              data-scroll-speed="3"
              data-scroll-direction="horizontal"
            />
            Final Section
          </h2>
        </div>
      </section>{" "}
      <section className="e-section" data-scroll-section>
        <div className="c-content">
          <h2 data-scroll data-scroll-speed="1">
            {" "}
            <img
              src={bg5}
              alt=""
              data-scroll
              data-scroll-speed="2"
              data-scroll-delay="0.9"
            />
            Final Section
          </h2>
        </div>
      </section>{" "}
      <section className="f-section" data-scroll-section>
        <div className="c-content">
          <h2 data-scroll data-scroll-speed="1">
            {" "}
            <img
              src={bg6}
              alt=""
              data-scroll
              data-scroll-speed="3"
              data-scroll-direction="horizontal"
            />
            Final Section
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
