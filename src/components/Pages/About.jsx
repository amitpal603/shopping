import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-purple-700">ANmall</span> — your one-stop destination for quality, affordability, and convenience in online shopping.
        </p>
      </section>

      {/* Who We Are */}
      <section className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2025, ANmall is a leading eCommerce platform committed to making shopping simple and enjoyable. With a wide range of products — from electronics to fashion and home essentials — we bring trusted brands to your fingertips.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-purple-100 rounded p-5 shadow text-center">
          <h3 className="text-xl font-bold mb-2 text-purple-700">Fast Delivery</h3>
          <p className="text-gray-600">Lightning-fast delivery across India, so you never have to wait too long for your order.</p>
        </div>

        <div className="bg-purple-100 rounded p-5 shadow text-center">
          <h3 className="text-xl font-bold mb-2 text-purple-700">24/7 Support</h3>
          <p className="text-gray-600">Have a question? Our customer support is always ready to help, day or night.</p>
        </div>

        <div className="bg-purple-100 rounded p-5 shadow text-center">
          <h3 className="text-xl font-bold mb-2 text-purple-700">Secure Payments</h3>
          <p className="text-gray-600">We use industry-leading encryption and payment systems to ensure your transactions are safe.</p>
        </div>
      </section>

      {/* Meet the Team (Optional) */}
      <section className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet the Team</h2>
        <p className="text-gray-600">
          Our diverse team is passionate about technology, retail, and creating amazing customer experiences. From developers to designers to logistics pros — we’re all here to serve you better.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-3">Have questions?</h2>
        <p className="text-gray-600 mb-6">Reach out through our <span className="text-purple-600 font-medium">Contact</span> page — we’d love to hear from you!</p>
        <a
          href="/contact"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default About;
