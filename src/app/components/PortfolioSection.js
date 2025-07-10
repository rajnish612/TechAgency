const portfolioItems = [
  {
    title: "Summer Editorial",
    category: "Lookbook",
    imageUrl:
      "https://images.unsplash.com/photo-1644495799968-dd9b4118aef3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Street Style Campaign",
    category: "Brand Shoot",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Runway '24",
    category: "Event",
    imageUrl:
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Muse",
    category: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1567524667890-dba7c551ee1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bold & Elegant",
    category: "Fashion Film",
    imageUrl: "https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Haute Couture",
    category: "Designer Collection",
    imageUrl: "https://images.unsplash.com/photo-1665472832709-982b28634160?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
