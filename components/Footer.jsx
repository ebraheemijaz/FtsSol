import Link from "next/link";

const usefulLinks = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Services", href: "#" },
];

const services = [
  { name: "Web Design", href: "#contact" },
  { name: "Web Development", href: "#contact" },
  { name: "Product Management", href: "#contact" },
  { name: "Marketing", href: "#contact" },
  { name: "Graphic Design", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-6">
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold">
                FTS <span className="text-primary">TECH</span>
              </span>
            </Link>

            <div className="space-y-2 text-gray-300">
              <p>Fts Tech LLC 30 N Gould St Ste</p>
              <p>R Sheridan, WY, 82801, USA</p>
              <p className="mt-4">
                <strong>Whatsapp Number: </strong>
                <Link
                  href="https://wa.me/17059108964"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  +1 (705) 910-8964
                </Link>
              </p>
              <p>
                <strong>Email: </strong>
                <span>admin@ftssolution.tech</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.upwork.com/agencies/1727413105198440448/"
                target="_blank"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 641 512"
                >
                  <path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z" />
                </svg>
              </Link>
              <Link
                href="https://www.fiverr.com/coder2"
                target="_blank"
                className="text-white hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 508.02 508.02"
                >
                  <circle
                    fill="currentColor"
                    cx="254.01"
                    cy="254.01"
                    r="254.01"
                  />
                  <circle fill="white" cx="315.97" cy="162.19" r="26.87" />
                  <path
                    fill="white"
                    d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-300">
            © Copyright <strong className="text-white px-1">FTS TECH</strong>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
