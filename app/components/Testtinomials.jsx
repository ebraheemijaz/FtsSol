"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testtinomials() {
  useEffect(() => {
    const swiper = new Swiper(".init-swiper", {
      modules: [Autoplay, Pagination],
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Working with FTS TECH was a fantastic experience! They
                  developed a custom SaaS application for our business, and the
                  results exceeded our expectations. Their attention to detail,
                  technical expertise, and ability to understand our unique
                  requirements were exceptional. The final product is
                  user-friendly, scalable, and perfectly tailored to our needs.
                  Communication was smooth, deadlines were met, and they went
                  above and beyond to ensure we were satisfied. Highly recommend
                  them for any SaaS development project!"
                </p>
                <div className="profile mt-auto">
                  <img
                    src="https://static.wixstatic.com/media/97e423_8261e6c8bb864a91972e31eabc34cd96~mv2.jpg/v1/fill/w_574,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/97e423_8261e6c8bb864a91972e31eabc34cd96~mv2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Nick Ross</h3>
                  <h4>
                    CEO{" "}
                    <a href="https://www.cloudcapsule.io/" target="_blank">
                      {" "}
                      CloudCapsule{" "}
                    </a>
                  </h4>
                </div>
              </div>
            </div>{" "}
            {/*  End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  I would highly recommend ebraheem(FTS CEO) to anyone looking
                  for a Javascript developer. Communication was solid and I can
                  confirm that ebraheem is very knowledgeable in the domain.
                  Thank you for the effort you've put into the projects.
                  Hopefully we will be able to continue to work together soon!"
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>TWAN</h3>
                  <h4>Upwork Client</h4>
                </div>
              </div>
            </div>{" "}
            {/*  End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  "Work was performed in a proper and diligent manner, with
                  attention to details and to the feedback provided, with good
                  very good communication along the process. Ebraheem took the
                  time to explain to me technical details, with pros and cons
                  for available alternatives. Highly recommended. Will work
                  again on specific tasks! Thank you!"
                </p>
                <div className="profile mt-auto">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3> Wilsson</h3>
                  <h4>Upwork Client</h4>
                </div>
              </div>
            </div>{" "}
            {/*  End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  I recently had the pleasure of working with ebraheem on the
                  Fiverr platform, and I must say that I am thoroughly impressed
                  with the level of expertise and professionalism he brought to
                  the table. Our company, Arpitools, had been struggling with a
                  forgot password issue for our mobile app, and ebraheem was
                  able to quickly diagnose and resolve the problem for us. His
                  communication throughout the process was excellent, keeping us
                  updated on his progress and ensuring that we were satisfied
                  with the end result. He also went above and beyond by offering
                  additional suggestions to improve the overall functionality of
                  our app. I would highly recommend ebraheem to anyone in need
                  of technical support
                </p>
                <div className="profile mt-auto">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>santiagolest804</h3>
                  <h4>Fiverr Client</h4>
                </div>
              </div>
            </div>{" "}
            {/*  End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  FTS TECH(formely known as Coder2) did a great job! He
                  understood the requirements perfectly and delivered super
                  quickly. Thanks a lot
                </p>
                <div className="profile mt-auto">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ead61367f279a82e617f85982d9b728f-1605271709863/3fe747bd-af31-40e7-a432-8ca9d4b71bf1.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>dibe84</h3>
                  <h4>Fiverr Client</h4>
                </div>
              </div>
            </div>{" "}
            {/*  End testimonial item */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
