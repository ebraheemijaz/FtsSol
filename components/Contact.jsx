"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: "bi-geo-alt",
    title: "Address",
    content: "Fts Tech LLC 30 N Gould St Ste R Sheridan, WY, 82801, USA",
    delay: 200,
  },
  {
    icon: "bi-telephone",
    title: "WhatsApp number",
    content: "+1 (705) 910-8964",
    link: "https://wa.me/17059108964",
    delay: 300,
  },
  {
    icon: "bi-envelope",
    title: "Email Us",
    content: "admin@ftssolution.tech",
    delay: 400,
  },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    // Add your form submission logic here
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
        <div className="text-gray-600">
          <span>Check Our </span>
          <span className="text-primary font-semibold">Contact</span>
        </div>
      </div>

      <div
        className="container mx-auto px-4"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={info.delay}
              >
                <i
                  className={`bi ${info.icon} text-2xl text-primary flex-shrink-0`}
                ></i>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <Link
                      href={info.link}
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {info.content}
                    </Link>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  {isLoading && (
                    <div className="text-gray-600 mb-4">Sending message...</div>
                  )}
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  {isSuccess && (
                    <div className="text-green-500 mb-4">
                      Your message has been sent. Thank you!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
