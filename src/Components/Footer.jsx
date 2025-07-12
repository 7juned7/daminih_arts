import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-orangegummy py-10 px-6 md:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* 🌻 Important Links */}
        <nav aria-label="Important Links">
          <h3 className="text-yellow-600 mb-3 font-semibold">🌻 Important Links</h3>
          <ul className="space-y-1">
            <li><a href="/calendars" className="hover:underline">Calendar</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/terms/#contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>

        {/* 📝 Policies */}
        <nav aria-label="Policies">
          <h3 className="text-yellow-600 mb-3 font-semibold">📝 Policies</h3>
          <ul className="space-y-1">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/terms/#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms/#shipping-policy" className="hover:underline">Shipping & Delivery</a></li>
            <li><a href="/terms/#return-policy" className="hover:underline">Refund Policy</a></li>
          </ul>
        </nav>

        {/* 📱 Social Media */}
        <section aria-label="Social Media">
          <h3 className="text-yellow-600 mb-3 font-semibold">📱 Connect with Us</h3>
          <ul className="space-y-1">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Snapchat</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
          </ul>
          <p className="mt-4 text-xs">
            📧 Contact us at <a href="mailto:neha.doodles@gmail.com" className="underline">neha.doodles@gmail.com</a>
          </p>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-400 space-y-2">
        <p>© {new Date().getFullYear()} Daminih Arts. All rights reserved.</p>
        <p className="text-[10px]">
          Developed by{" "}
          <a
            href="https://www.instagram.com/webjuncture/"
            className="underline text-yellow-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebJuncture
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
