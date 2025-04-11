import React from "react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-xl font-bold text-indigo-600">Stunning Events</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Events</a>
          <a href="#" className="hover:text-indigo-600">About</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover & Book Stunning Events</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">Experience unforgettable moments through curated events near you.</p>
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:scale-105 transition-transform">Explore Now</button>
      </section>

      {/* Event Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-8 text-center">Upcoming Events</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map(id => (
            <div key={id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <img src={`https://source.unsplash.com/random/400x250?event,${id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">Event Title {id}</h4>
                <p className="text-sm text-gray-600">Short event description here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-indigo-50">
        <h4 className="text-3xl font-bold mb-4">Don't Miss Out!</h4>
        <p className="max-w-xl mx-auto mb-6 text-gray-700">Sign up now to get updates on exciting events coming your way.</p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Join Newsletter</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 Stunning Events. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
