import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black  border-yellow-600  font-orangegummy py-10 px-6 md:px-20 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Important Links */}
        <div>
          <h3 className="text-[3A3A3A] font-bold mb-3">🌻 Important Links</h3>
          <ul className="space-y-1 text-white">
            <li><a href="/products/calendars" className="hover:underline">Calendar</a></li>
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Fine Print */}
        <div>
          <h3 className="text-yellow-600 font-bold mb-3">📝 Policies</h3>
          <ul className="space-y-1 text-white">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping & Delivery Policy</a></li>
            <li><a href="/refund" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-yellow-600 font-bold mb-3">📱 Connect with Us</h3>
          <ul className="space-y-1 text-white">
            <li><a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://snapchat.com" target="_blank" className="hover:underline">Snapchat</a></li>
            <li><a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a></li>
          </ul>
          <p className="mt-4 text-xs text-white">
            📧 Contact us at <a href="mailto:neha.doodles@gmail.com" className="underline">neha.doodles@gmail.com</a>
          </p>
        </div>
      </div>

    <div className="mt-10 text-center text-white text-xs space-y-2 text-gray-500">
  <p>© {new Date().getFullYear()} Daminih Arts. All rights reserved.</p>
  <p className='text-[8px]' >
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
