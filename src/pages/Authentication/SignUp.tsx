import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
          PureDrops: Clean Water For Every Community
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-800 max-w-2xl mx-auto">
          Join us in bringing clean, safe water to those who need it most. Raise funds, make an impact, and transform lives.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Donate Now
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition">
            Start a Campaign
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Water?</h2>
        <p className="text-lg text-gray-600">
          Over 700 million people lack access to clean water. We believe everyone deserves this basic human right. PureDrops helps individuals and organizations raise funds to bring clean water solutions to the communities that need them most.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "1. Start a Campaign",
                desc: "Create a fundraising page to support a water project in a specific community.",
              },
              {
                title: "2. Share Your Story",
                desc: "Use your voice on social media and beyond to bring people into your cause.",
              },
              {
                title: "3. Fund the Mission",
                desc: "All funds go directly to vetted water projects powered by our partners on the ground.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="flex flex-wrap justify-center gap-10 text-blue-700 font-semibold text-xl">
            <div>
              🌍 50+ Communities Reached
            </div>
            <div>
              💧 1M+ Liters of Water Delivered
            </div>
            <div>
              🤝 10,000+ Donors Worldwide
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Amina, Ghana",
                quote:
                  "Thanks to PureDrops, our village now has a clean well! Our children are healthier and we are filled with hope.",
              },
              {
                name: "Chris, Donor",
                quote:
                  "I started a birthday fundraiser and raised over $500 for clean water. It felt amazing to make a difference.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-left">
                <p className="italic text-gray-700 mb-2">“{t.quote}”</p>
                <p className="font-bold text-blue-700">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg mb-6">
          Help us bring clean water to the people who need it most. Every drop counts.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4 text-center">
        <p className="mb-2">© {new Date().getFullYear()} PureDrops. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
