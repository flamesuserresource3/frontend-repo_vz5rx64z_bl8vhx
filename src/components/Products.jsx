const products = [
  {
    id: 1,
    name: 'Vitamin C 1000mg',
    desc: 'Immune support with timed-release formula.',
    price: 12.99,
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Omega-3 Fish Oil',
    desc: 'Heart and brain health with high EPA/DHA.',
    price: 18.5,
    img: 'https://images.unsplash.com/photo-1573883431205-d81979c4beac?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Allergy Relief',
    desc: 'Non-drowsy formula for seasonal allergies.',
    price: 9.99,
    img: 'https://images.unsplash.com/photo-1587854692152-1c155f5f1c02?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Pain Relief 500mg',
    desc: 'Fast-acting caplets for headache & muscle pain.',
    price: 7.49,
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Products</h2>
            <p className="text-gray-600 mt-1">Carefully selected essentials for everyday wellness.</p>
          </div>
          <a href="#" className="text-green-700 hover:text-green-800 font-medium">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-700">${p.price.toFixed(2)}</span>
                  <button className="rounded-md bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
