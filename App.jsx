import React from "react";

const WA_PHONE = "918097740726"; // WhatsApp number (91 = India country code)
const INSTA_LINK =
  "https://www.instagram.com/aafreez_boutique?igsh=ajN3ancwcmlzaXht";

const PRODUCTS = [
  {
    id: 1,
    name: "Pakistani Suit - Stitched",
    price: "₹800",
    image: "https://i.postimg.cc/DfSWPBJ0/pak-800-blk.jpg",
  },
  {
    id: 2,
    name: "Indian Suit - Unstitched",
    price: "₹1800",
    image: "https://via.placeholder.com/300x400.png?text=Indian+Suit",
  },
  {
    id: 3,
    name: "Baby Dress",
    price: "₹1200",
    image: "https://via.placeholder.com/300x400.png?text=Baby+Clothes",
  },
];

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold">
            AB
          </div>
          <span className="text-xl font-bold">Aafreez Boutique</span>
        </div>
        <nav className="space-x-6">
          <a href="#categories" className="hover:text-pink-600">
            Categories
          </a>
          <a href="#products" className="hover:text-pink-600">
            Products
          </a>
          <a href="#contact" className="hover:text-pink-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-pink-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aafreez Boutique</h1>
        <p className="text-lg mb-6">
          Pakistani Suits | Indian Suits | Stitched & Unstitched | Baby Clothes
        </p>
        <a
          href={`https://wa.me/${WA_PHONE}`}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {["Pakistani Suits", "Indian Suits", "Stitched", "Unstitched", "Baby Clothes"].map(
            (cat, i) => (
              <div
                key={i}
                className="p-4 border rounded-lg shadow hover:bg-pink-50 cursor-pointer"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Collection</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="border rounded-lg shadow hover:shadow-lg">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-pink-600 font-semibold">{p.price}</p>
                <a
                  href={`https://wa.me/${WA_PHONE}?text=Hello, I want to order ${p.name}`}
                  className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
        <div className="space-x-6">
          <a
            href={INSTA_LINK}
            target="_blank"
            className="text-pink-600 font-semibold"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${WA_PHONE}`}
            target="_blank"
            className="text-green-600 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-6">
        © {new Date().getFullYear()} Aafreez Boutique. All Rights Reserved.
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WA_PHONE}`}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
}

export default App;
