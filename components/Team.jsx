"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ebraheem Ijaz",
    role: "Senior Software Developer",
    image: "/assets/img/ebraheem.jpeg",
    socials: {
      linkedin: "",
      website: "https://portfolio-web-app-rouge.vercel.app/",
    },
  },
  {
    name: "Adil Abbasi",
    role: "Full Stack Developer",
    image: "/assets/img/adil.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/muhammad-adil-7076301a3/",
    },
  },
  {
    name: "Faheem",
    role: "Senior Manger",
    image: "/assets/img/faheem.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/faheem-khan-617293324/",
    },
  },
  {
    name: "Ammar",
    role: "Senior Operational Manager",
    image: "/assets/img/ammar.jpg",
  },
];

export default function Team() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //       once: true,
  //     });
  //   }, []);

  return (
    <section id="team" className="py-16 md:py-24">
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Team</h2>
        <div className="text-gray-600">
          <span>Check Our </span>
          <span className="text-primary font-semibold">Team</span>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="relative group rounded-lg">
                {/* Member Image */}
                <div className="aspect-w-3 aspect-h-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Member Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-xl font-semibold mb-2">
                        {member.name}
                      </h4>
                      <p className="text-gray-300 mb-4">{member.role}</p>

                      {/* Social Links */}
                      {member.socials && (
                        <div className="flex gap-4 text-white/90">
                          {member.socials.linkedin && (
                            <Link
                              href={member.socials.linkedin}
                              target="_blank"
                              className="hover:text-primary transition-colors"
                            >
                              <i className="bi bi-linkedin text-xl"></i>
                            </Link>
                          )}
                          {member.socials.website && (
                            <Link
                              href={member.socials.website}
                              target="_blank"
                              className="hover:text-primary transition-colors"
                            >
                              <i className="bi bi-globe text-xl"></i>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
