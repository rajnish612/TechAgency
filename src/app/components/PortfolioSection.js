const portfolioItems = [
  {
    title: "Summer Editorial",
    category: "Lookbook",
    imageUrl: "https://picsum.photos/200/305",
  },
  {
    title: "Street Style Campaign",
    category: "Brand Shoot",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Runway '24",
    category: "Event",
    imageUrl: "https://picsum.photos/200/301",
  },
  {
    title: "Modern Muse",
    category: "Photography",
    imageUrl: "https://picsum.photos/200/302",
  },
  {
    title: "Bold & Elegant",
    category: "Fashion Film",
    imageUrl: "https://picsum.photos/200/303",
  },
  {
    title: "Haute Couture",
    category: "Designer Collection",
    imageUrl: "https://picsum.photos/200/304",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
        <p className="text-gray-400 mb-12">
          A glimpse into our campaigns, shoots, and collaborations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <span className="text-sm text-pink-400">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
