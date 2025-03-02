const processes = [
  {
    title: "Discovery & Planning",
    icon: "bi bi-award",
    color: "bg-orange-500",
    delay: 100,
  },
  {
    title: "Design",
    icon: "bi bi-patch-check",
    color: "bg-blue-500",
    delay: 200,
  },
  {
    title: "Development",
    icon: "bi bi-sunrise",
    color: "bg-green-500",
    delay: 300,
  },
  {
    title: "Testing & Support",
    icon: "bi bi-shield-check",
    color: "bg-red-500",
    delay: 400,
  },
];

export default function Detail() {
  return (
    <section id="details" className="py-16 md:py-24">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Process</h2>
        <div className="text-gray-600">
          <span>Check Our </span>
          <span className="text-primary font-semibold">Process</span>
        </div>
      </div>

      {/* Process Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={process.delay}>
              <div
                className={`
                p-8 rounded-lg text-center group
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:-translate-y-1
                ${process.color} bg-opacity-10 hover:bg-opacity-20
              `}
              >
                <i
                  className={`${
                    process.icon
                  } text-3xl mb-4 ${process.color.replace("bg-", "text-")}`}
                ></i>
                <h4 className="text-xl font-semibold text-gray-800">
                  {process.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
