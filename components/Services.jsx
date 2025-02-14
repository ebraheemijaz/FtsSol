const services = [
  { name: "Android Development", icon: "bi-", color: "#ffbb2c", delay: 100 },
  { name: "IOS Development", icon: "bi-", color: "#5578ff", delay: 200 },
  { name: "Web Development", icon: "bi-react", color: "#e80368", delay: 300 },
  { name: "QA Testing", icon: "bi-nut", color: "#e361ff", delay: 400 },
  { name: "Cloud Services", icon: "bi-shuffle", color: "#47aeff", delay: 500 },
  { name: "WordPress", icon: "bi-star", color: "#ffa76e", delay: 600 },
  { name: "WIX", icon: "bi-x-diamond", color: "#11dbcf", delay: 700 },
  {
    name: "Social Media Marketing",
    icon: "bi-camera-video",
    color: "#4233ff",
    delay: 800,
  },
  { name: "UI/UX + Figma", icon: "bi-command", color: "#b2904f", delay: 900 },
  { name: "ERP Solution", icon: "bi-dribbble", color: "#b20969", delay: 1000 },
  {
    name: "Digital Branding",
    icon: "bi-activity",
    color: "#ff5828",
    delay: 1100,
  },
  {
    name: "POS Software",
    icon: "bi-brightness-high",
    color: "#29cc61",
    delay: 1200,
  },
];

export default function Services() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       once: true,
  //       mirror: false,
  //   });
  // }, []);

  return (
    <section id="features" className="py-16 md:py-24">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <div className="text-gray-600">
          <span>we Deal in following IT services</span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <i
                  className={`bi ${service.icon} text-3xl mb-4`}
                  style={{ color: service.color }}
                ></i>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
