const stats = [
  {
    icon: "bi bi-emoji-smile",
    end: 20,
    label: "Happy Clients",
  },
  {
    icon: "bi bi-journal-richtext",
    end: 25,
    label: "Projects",
  },
  {
    icon: "bi bi-headset",
    end: 14,
    label: "Hours Of Support",
  },
  {
    icon: "bi bi-people",
    end: 7,
    label: "Hard Workers",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-gray-50">
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <i className={`${stat.icon} text-4xl text-primary mb-4`}></i>
              <div className="stats-item">
                <span className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.end}
                </span>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
