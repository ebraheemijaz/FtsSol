// import AOS from "aos";
// import "aos/dist/aos.css";
import Image from "next/image";
export default function About() {
  //   useEffect(() => {
  // AOS.init({
  //   duration: 1000,
  //   easing: "ease-in-out",
  //   once: true,
  //   mirror: false,
  // });
  //   }, []);

  return (
    <section id="about" className="py-16 md:py-24">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-xl text-gray-600 font-medium">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Introduction of FTS TECH
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>FTS TECH</strong>, we are a cutting-edge software and
              IT solutions provider dedicated to transforming businesses through
              innovative technology. With a passion for delivering customized,
              scalable solutions, we help our clients thrive in a
              digitally-driven world.
            </p>
          </div>

          {/* Icon Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-buildings text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">
                Custom Software Development
              </h3>
              <p className="text-gray-600">
                Tailored software solutions to meet your specific business
                needs.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-clipboard-pulse text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">
                Web and Mobile Applications
              </h3>
              <p className="text-gray-600">
                We build dynamic and responsive apps for seamless user
                experiences.
              </p>
            </div>

            {/* Box 3 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-command text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">
                Cloud Solutions & DevOps
              </h3>
              <p className="text-gray-600">
                Streamlined cloud integration and DevOps practices to optimize
                performance.
              </p>
            </div>

            {/* Box 4 */}
            <div
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-graph-up-arrow text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">
                Quality Assurance & Testing
              </h3>
              <p className="text-gray-600">
                Comprehensive testing services to ensure the highest quality
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
