import Image from "next/image";

const galleryItems = [
  {
    imageUrl:
      "https://i.ytimg.com/vi/qfj3a6gHvD0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNDM6miBkNiEd87wbLRXENqd7j0g",
    link: "https://www.youtube.com/watch?v=qfj3a6gHvD0&ab_channel=FTSTECH",
  },
  {
    imageUrl:
      "https://i.ytimg.com/vi/47tZg057_xM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-YtTV8hRsR3MwCqAJcBs8qV-JEA",
    link: "https://www.youtube.com/watch?v=47tZg057_xM&ab_channel=FTSTECH",
  },
  {
    imageUrl:
      "https://i.ytimg.com/vi/jG9yrZHTyfI/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAqIFigIMCAAQARgXIEsofzAP&rs=AOn4CLDjXSSNv4FLv4-ArVoMWqCCXHbSVg",
    link: "https://www.youtube.com/watch?v=jG9yrZHTyfI&ab_channel=FTSTECH",
  },
  {
    imageUrl:
      "https://i9.ytimg.com/vi/m50auQ5oz9E/mqdefault.jpg?sqp=CLSsvr0G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACngWKAgwIABABGE4gXyhlMA8=&rs=AOn4CLBXF2yEH1TEbHjheTVZbj6Fwsa2VQ",
    link: "https://www.youtube.com/watch?v=m50auQ5oz9E&ab_channel=FTSTECH",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div
        className="container mx-auto px-4 text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <div className="text-gray-600">
          <span>Check Our </span>
          <span className="text-primary font-semibold">Previous work</span>
        </div>
      </div>

      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {galleryItems.map((item, index) => (
            <div key={index} className="h-full">
              <div className="relative group h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.imageUrl}
                  alt="Portfolio item"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <i className="bi bi-link-45deg text-3xl hover:text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
