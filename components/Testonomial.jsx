"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    content:
      "Working with FTS TECH was a fantastic experience! They developed a custom SaaS application for our business, and the results exceeded our expectations. Their attention to detail, technical expertise, and ability to understand our unique requirements were exceptional. The final product is user-friendly, scalable, and perfectly tailored to our needs. Communication was smooth, deadlines were met, and they went above and beyond to ensure we were satisfied. Highly recommend them for any SaaS development project!",
    image:
      "https://static.wixstatic.com/media/97e423_8261e6c8bb864a91972e31eabc34cd96~mv2.jpg/v1/fill/w_574,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/97e423_8261e6c8bb864a91972e31eabc34cd96~mv2.jpg",
    name: "Nick Ross",
    title: "CEO",
    company: "CloudCapsule",
    companyUrl: "https://www.cloudcapsule.io/",
  },
  {
    content:
      "I would highly recommend ebraheem(FTS CEO) to anyone looking for a Javascript developer. Communication was solid and I can confirm that ebraheem is very knowledgeable in the domain. Thank you for the effort you've put into the projects. Hopefully we will be able to continue to work together soon!",
    // image: "assets/img/testimonials/testimonials-1.jpg",
    name: "TWAN",
    title: "Upwork Client",
    companyUrl: "https://www.cloudcapsule.io/",
  },
  {
    content:
      "Work was performed in a proper and diligent manner, with attention to details and to the feedback provided, with good very good communication along the process. Ebraheem took the time to explain to me technical details, with pros and cons for available alternatives. Highly recommended. Will work again on specific tasks! Thank you!",
    //   image: "assets/img/testimonials/testimonials-2.jpg",
    name: "Wilsson",
    title: "Upwork Client",
  },
  {
    content:
      "I recently had the pleasure of working with ebraheem on the Fiverr platform, and I must say that I am thoroughly impressed with the level of expertise and professionalism he brought to the table. Our company, Arpitools, had been struggling with a forgot password issue for our mobile app, and ebraheem was able to quickly diagnose and resolve the problem for us. His communication throughout the process was excellent, keeping us updated on his progress and ensuring that we were satisfied with the end result. He also went above and beyond by offering additional suggestions to improve the overall functionality of our app. I would highly recommend ebraheem to anyone in need of technical support",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/960b6b7b608cff1ad48eee84e329d983-1198986541664599469898/JPEG_20221001_014428_5149239765728611381.jpg",
    name: "santiagolest804",
    title: "Fiverr Client",
  },
  {
    content:
      "FTS TECH(formely known as Coder2) did a great job! He understood the requirements perfectly and delivered super quickly. Thanks a lot",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ead61367f279a82e617f85982d9b728f-1605271709863/3fe747bd-af31-40e7-a432-8ca9d4b71bf1.png",
    name: "dibe84",
    title: "Fiverr Client",
  },
];

export default function Testimonial() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       once: true,
  //     });
  //   }, []);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gray-900 text-white"
    >
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4 md:px-8 py-8">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-gray-400">
                    {testimonial.title}
                    {testimonial.company && (
                      <>
                        <a
                          href={testimonial.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light transition-colors"
                        >
                          {testimonial.company}
                        </a>
                      </>
                    )}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
