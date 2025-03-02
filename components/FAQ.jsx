import Image from "next/image";

const faqItems = [
  {
    question: "What services does your company provide?",
    answer:
      "We offer a wide range of IT services including web development, mobile app development, SEO, digital marketing, and cloud solutions to help businesses grow and scale.",
  },
  {
    question: "Do you provide custom web and mobile app development?",
    answer:
      "Yes, we specialize in developing custom websites and mobile apps tailored to your business requirements, ensuring a seamless user experience and robust functionality.",
  },
  {
    question: "How can SEO and digital marketing help my business?",
    answer:
      "Our SEO and digital marketing services improve your online visibility, drive more traffic to your site, and increase conversions, ultimately helping your business grow.",
  },
  {
    question: "What cloud services do you offer?",
    answer:
      "We provide cloud consulting, migration, and deployment services to help businesses transition to the cloud, ensuring scalability, security, and improved efficiency.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for each project varies depending on the scope and complexity. We work closely with our clients to ensure timely delivery without compromising on quality.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide ongoing maintenance and support to ensure your systems are running smoothly and remain up-to-date with the latest technologies.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We cater to a wide range of industries, including e-commerce, healthcare, education, finance, and more, providing tailored solutions to meet specific business needs.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* FAQ Content */}
          <div className="lg:col-span-7 lg:order-1 order-2">
            <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span>Frequently Asked </span>
                <span className="text-primary">Questions</span>
              </h3>
              <p className="text-gray-600">
                Please refer to following faqs or you can always connect with us
                via phone/email
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button className="w-full px-6 py-4 flex items-center justify-between text-left">
                    <div className="flex items-center gap-4">
                      <i className="bi bi-question-circle text-primary text-xl"></i>
                      <h3 className="font-semibold text-gray-800">
                        {item.question}
                      </h3>
                    </div>
                    <i
                      className={`bi bi-chevron-right text-gray-400 transition-transform duration-300
                    rotate-90
                    `}
                    ></i>
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 max-h-40 py-4 `}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 lg:order-2 order-1">
            <div
              className="relative aspect-w-4 aspect-h-3"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/assets/img/faq.jpg"
                alt="FAQ illustration"
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
