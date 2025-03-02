import Image from "next/image";
import Testtinomials from "./components/Testtinomials";

export default function Home() {
  return (
    <>
      <a
        href="https://wa.me/17059108964"
        className="whatsapp-widget"
        target="_blank"
      >
        <img src="./assets//img//icons8-whatsapp-500.png" alt="WhatsApp" />
      </a>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename">
              FTS <span style={{ color: "#1acc8d !important" }}>TECH</span>
            </h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-bg-2.jpg" alt="" className="hero-bg" />

          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div
                className="col-lg-4 order-lg-last hero-img"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img
                  src="assets/img/hero-img.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>

              <div
                className="col-lg-6  d-flex flex-column justify-content-center"
                data-aos="fade-in"
              >
                <h1>
                  Build Your IT Business <br />
                  With <span>FTS Tech</span>
                </h1>
                <p>We are team and your IT Partner in Innovation and Growth</p>
                <div className="d-flex">
                  <a href="#contact" className="btn-get-started">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <svg
    className="hero-waves"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28 "
    preserveAspectRatio="none"
  >
    <defs>
      <path
        id="wave-path"
        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
      ></path>
    </defs>
    <g className="wave1">
      <use xlink:href="#wave-path" x="50" y="3"></use>
    </g>
    <g className="wave2">
      <use xlink:href="#wave-path" x="50" y="0"></use>
    </g>
    <g className="wave3">
      <use xlink:href="#wave-path" x="50" y="9"></use>
    </g>
  </svg> */}
        </section>
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3>About Us</h3>
                <h2>Introduction of FTS TECH</h2>
                <p>
                  At <strong>FTS TECH</strong>, we are a cutting-edge software
                  and IT solutions provider dedicated to transforming businesses
                  through innovative technology. With a passion for delivering
                  customized, scalable solutions, we help our clients thrive in
                  a digitally-driven world.
                </p>
              </div>

              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Custom Software Development</h3>
                      <p>
                        Tailored software solutions to meet your specific
                        business needs.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse"></i>
                      <h3>Web and Mobile Applications</h3>
                      <p>
                        We build dynamic and responsive apps for seamless user
                        experiences.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box">
                      <i className="bi bi-command"></i>
                      <h3>Cloud Solutions &amp; DevOps</h3>
                      <p>
                        Streamlined cloud integration and DevOps practices to
                        optimize performance.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon-box">
                      <i className="bi bi-graph-up-arrow"></i>
                      <h3>Quality Assurance &amp; Testing</h3>
                      <p>
                        Comprehensive testing services to ensure the highest
                        quality standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <div>
              <span>we Deal in following It services&nbsp;</span>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="features-item">
                  <i className="bi bi--" style={{ color: "#ffbb2c" }}></i>
                  <h3>Android Development</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="features-item">
                  <i className="bi bi--" style={{ color: "#5578ff" }}></i>
                  <h3>IOS Development</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="features-item">
                  <i className="bi bi--react" style={{ color: "#e80368" }}></i>
                  <h3>Web Development</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="features-item">
                  <i className="bi bi--nut" style={{ color: "#e361ff" }}></i>
                  <h3>QA Testing</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="features-item">
                  <i
                    className="bi bi--shuffle"
                    style={{ color: "#47aeff" }}
                  ></i>
                  <h3>Cloud Services</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="features-item">
                  <i className="bi bi--star" style={{ color: "#ffa76e" }}></i>
                  <h3>WordPress</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="features-item">
                  <i
                    className="bi bi--x-diamond"
                    style={{ color: "#11dbcf" }}
                  ></i>
                  <h3>WIX</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="features-item">
                  <i
                    className="bi bi--camera-video"
                    style={{ color: "#4233ff" }}
                  ></i>
                  <h3>Social Media Marketing</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="features-item">
                  <i
                    className="bi bi--command"
                    style={{ color: "#b2904f" }}
                  ></i>
                  <h3>UI/UX + Figma</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="features-item">
                  <i
                    className="bi bi--dribbble"
                    style={{ color: "#b20969" }}
                  ></i>
                  <h3>ERP Solution</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <div className="features-item">
                  <i
                    className="bi bi--activity"
                    style={{ color: "#ff5828" }}
                  ></i>
                  <h3>Digital Branding</h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <div className="features-item">
                  <i
                    className="bi bi--brightness-high"
                    style={{ color: "#29cc61" }}
                  ></i>
                  <h3>POS Software</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="stats" className="stats section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-emoji-smile"></i>
                <div className="stats-item">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="20"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-journal-richtext"></i>
                <div className="stats-item">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="25"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-headset"></i>
                <div className="stats-item">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="14"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-people"></i>
                <div className="stats-item">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="7"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="details" className="details section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Process</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Process</span>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="feature-box orange">
                  <i className="bi bi-award"></i>
                  <h4>Discovery &amp; Planning</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="feature-box blue">
                  <i className="bi bi-patch-check"></i>
                  <h4>Design</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="feature-box green">
                  <i className="bi bi-sunrise"></i>
                  <h4>Development</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="feature-box red">
                  <i className="bi bi-shield-check"></i>
                  <h4>Testing &amp; Support</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery section">
          <div className="container section-title" data-aos="fade-up">
            <h2>portfolio</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Previous work</span>
            </div>
          </div>

          <div
            className="container-fluid"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://i.ytimg.com/vi/qfj3a6gHvD0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDNDM6miBkNiEd87wbLRXENqd7j0g"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://www.youtube.com/watch?v=qfj3a6gHvD0&amp;ab_channel=FTSTECH"
                      target="_blank"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://i.ytimg.com/vi/47tZg057_xM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLD-YtTV8hRsR3MwCqAJcBs8qV-JEA"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="https://www.youtube.com/watch?v=47tZg057_xM&amp;ab_channel=FTSTECH"
                      target="_blank"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/*  End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://i.ytimg.com/vi/jG9yrZHTyfI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAqIFigIMCAAQARgXIEsofzAP&amp;rs=AOn4CLDjXSSNv4FLv4-ArVoMWqCCXHbSVg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    {/* <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a> */}
                    <a
                      href="https://www.youtube.com/watch?v=jG9yrZHTyfI&amp;ab_channel=FTSTECH"
                      target="_blank"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/*  End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src="https://i9.ytimg.com/vi/m50auQ5oz9E/mqdefault.jpg?sqp=CLDh7rcG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACngWKAgwIABABGE4gXyhlMA8=&rs=AOn4CLDsQiqlQ_0SHiKdsSSuftV-fQbmJQ"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    {/* <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a> */}
                    <a
                      href="https://www.youtube.com/watch?v=m50auQ5oz9E&ab_channel=FTSTECH"
                      target="_blank"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </section>{" "}
        <Testtinomials />
        <section id="team" className="team section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Team</span>
            </div>
          </div>{" "}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src="./assets//img/ebraheem.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ebraheem Ijaz</h4>
                      <span>Senior Software Developer</span>
                    </div>
                    <div className="social">
                      {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
                      {/* <a href=""><i className="bi bi-facebook"></i></a> */}
                      <a href="" target="_blank">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a
                        href="https://portfolio-web-app-rouge.vercel.app/"
                        target="_blank"
                      >
                        <i className="bi bi-globe"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/*  End Team Member */}
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="./assets//img/adil.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Adil Abbasi</h4>
                      <span>Full Stack Developer</span>
                    </div>
                    <div className="social">
                      {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
                      {/* <a href=""><i className="bi bi-facebook"></i></a> */}
                      {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                      <a
                        href="https://www.linkedin.com/in/muhammad-adil-7076301a3/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/*  End Team Member */}
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member">
                  <img
                    src="./assets//img/faheem.jpeg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Faheem</h4>
                      <span>Senior Manger</span>
                    </div>
                    <div className="social">
                      {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
                      {/* <a href=""><i className="bi bi-facebook"></i></a> */}
                      {/* <a href=""><i className="bi bi-instagram"></i></a> */}
                      <a
                        href="https://www.linkedin.com/in/faheem-khan-617293324/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/*  End Team Member */}
              <div
                className="col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member">
                  <img
                    src="./assets//img/ammar.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ammar</h4>
                      <span>Senior Operational Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/*  /Team Section */}
        {/* Pricing Section */}
        <section id="pricing" className="pricing section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Pricing</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Pricing</span>
            </div>
          </div>{" "}
          {/*  End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 gx-lg-5">
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Web Development</h3>
                  <h4>Starts from $200.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>APP Development</h3>
                  <h4>Starts from $300.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>QA Testing</h3>
                  <h4>Starts from $100.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>Marketing</h3>
                  <h4>Starts from $100.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>UI/UX Design</h3>
                  <h4>Starts from $100.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
              <div className="col-lg-6">
                <div className="pricing-item d-flex justify-content-between">
                  <h3>WordPress/WIX</h3>
                  <h4>Starts from $100.00</h4>
                </div>
              </div>{" "}
              {/*  End Pricing Item */}
            </div>
          </div>
        </section>{" "}
        {/*  /Pricing Section */}
        {/* Faq Section */}
        <section id="faq" className="faq section light-background">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
                <div
                  className="content px-xl-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>
                    <span>Frequently Asked </span>
                    <strong>Questions</strong>
                  </h3>
                  <p>
                    Please refer to following faqs or you can always connect
                    with us via phone/email
                  </p>
                </div>

                <div
                  className="faq-container px-xl-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>What services does your company provide?</h3>
                    <div className="faq-content">
                      <p>
                        We offer a wide range of IT services including web
                        development, mobile app development, SEO, digital
                        marketing, and cloud solutions to help businesses grow
                        and scale.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>
                      Do you provide custom web and mobile app development?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Yes, we specialize in developing custom websites and
                        mobile apps tailored to your business requirements,
                        ensuring a seamless user experience and robust
                        functionality.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>How can SEO and digital marketing help my business?</h3>
                    <div className="faq-content">
                      <p>
                        Our SEO and digital marketing services improve your
                        online visibility, drive more traffic to your site, and
                        increase conversions, ultimately helping your business
                        grow.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>What cloud services do you offer?</h3>
                    <div className="faq-content">
                      <p>
                        We provide cloud consulting, migration, and deployment
                        services to help businesses transition to the cloud,
                        ensuring scalability, security, and improved efficiency.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item faq-active">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>How long does it take to complete a project?</h3>
                    <div className="faq-content">
                      <p>
                        The timeline for each project varies depending on the
                        scope and complexity. We work closely with our clients
                        to ensure timely delivery without compromising on
                        quality.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item faq-active">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>
                      Do you offer ongoing support after project completion?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Yes, we provide ongoing maintenance and support to
                        ensure your systems are running smoothly and remain
                        up-to-date with the latest technologies.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                  <div className="faq-item faq-active">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>What industries do you serve?</h3>
                    <div className="faq-content">
                      <p>
                        We cater to a wide range of industries, including
                        e-commerce, healthcare, education, finance, and more,
                        providing tailored solutions to meet specific business
                        needs.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>{" "}
                  {/*  End Faq item*/}
                </div>
              </div>

              <div className="col-lg-5 order-1 order-lg-2">
                <img
                  src="assets/img/faq.jpg"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </section>{" "}
        {/*  /Faq Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <div>
              <span>Check Our</span>{" "}
              <span className="description-title">Contact</span>
            </div>
          </div>{" "}
          {/*  End Section Title */}
          <div className="container" data-aos="fade" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>
                      Fts Tech LLC 30 N Gould St Ste R Sheridan, WY, 82801, USA
                    </p>
                  </div>
                </div>{" "}
                {/*  End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>WhatsApp number</h3>
                    <p>
                      <a href="https://wa.me/17059108964" target="_blank">
                        +1 (705) 910-8964
                      </a>
                    </p>
                  </div>
                </div>{" "}
                {/*  End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="5031343d393e10362423233f3c2524393f3e7e24353338"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                </div>{" "}
                {/*  End Info Item */}
              </div>
              <div className="col-lg-8">
                <form
                  id="myForm"
                  action="#"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message hidden"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>{" "}
              {/*  End Contact Form */}
            </div>
          </div>
        </section>{" "}
        {/*  /Contact Section */}
      </main>

      <footer id="footer" className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">
                  FTS <span style={{ color: "#1acc8d !important" }}>TECH</span>
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>Fts Tech LLC 30 N Gould St Ste&nbsp;</p>
                <p>R Sheridan, WY, 82801, USA</p>
                <p className="mt-3">
                  <strong>Whatsapp Number:</strong>{" "}
                  <span>
                    <a href="https://wa.me/17059108964" target="_blank">
                      +1 (705) 910-8964
                    </a>
                  </span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d6b7b2bbbfb896b0a2a5a5b9baa3a2bfb9b8f8a2b3b5be"
                    >
                      [email&#160;protected]
                    </a>
                  </span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a
                  href="https://www.upwork.com/agencies/1727413105198440448/"
                  style={{ padding: "2%", color: "white" }}
                  target="_blank"
                >
                  {/* <i> */}
                  <svg
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 641 512"
                  >
                    {" "}
                    {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"></path>
                  </svg>
                  {/* </i> */}
                </a>
                <a
                  href="https://www.fiverr.com/coder2"
                  style={{ padding: "1%", color: "white" }}
                  target="_blank"
                >
                  {/* <i className="bi bi-fiverr"> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.02 508.02">
      <defs>
        <style>
          .a {
            fill: #09005e;
          }

          .b {
            fill: #fff;
          }
        </style>
      </defs>
      <circle className="a" cx="254.01" cy="254.01" r="254.01"></circle>
      <circle className="b" cx="315.97" cy="162.19" r="26.87"></circle>
      <path className="b"
        d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
        transform="translate(-1.83 -0.98)"></path>
    </svg> */}
                  {/* </i> */}
                </a>
                {/* <a href=""><i className="bi bi-facebook"></i></a>
<a href=""><i className="bi bi-linkedin"></i></a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>

                <li></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#contact">Web Design</a>
                </li>
                <li>
                  <a href="#contact">Web Development</a>
                </li>
                <li>
                  <a href="#contact">Product Management</a>
                </li>
                <li>
                  <a href="#contact">Marketing</a>
                </li>
                <li>
                  <a href="#contact">Graphic Design</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-4 col-md-12 footer-newsletter">
<h4>Our Newsletter</h4>
<p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
<form action="forms/newsletter.php" method="post" className="php-email-form">
<div className="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
<div className="loading">Loading</div>
<div className="error-message"></div>
<div className="sent-message">Your subscription request has been sent. Thank you!</div>
</form>
</div> */}
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">FTS TECH</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </>
  );
}
