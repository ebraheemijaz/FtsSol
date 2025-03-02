import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <Image
        src="/assets/img/hero-bg-2.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Build Your IT Business <br />
              With <span className="text-primary">FTS Tech</span>
            </h1>
            <p className="text-xl mb-8">
              We are team and your IT Partner in Innovation and Growth
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/assets/img/hero-img.png"
              alt="Hero illustration"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
