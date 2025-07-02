import Aos from "aos";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <footer className="bg-[#3d2b1f] text-white mt-20 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center md:text-left px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#ffffff1a]">
        {/* Left Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-yellow-100 flex justify-center md:justify-start items-center gap-2">
            <span id="logo">🏺</span>
            <span className="flex tracking-wide">Artifact Archive</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Preserving the past for the future. Explore and contribute to our
            collection of globally significant artifacts.
          </p>
          <div className="flex gap-5 justify-center md:justify-start">
            <FaFacebook className="text-gray-300 text-2xl"></FaFacebook>
            <FaTwitter className="text-gray-300 text-2xl"></FaTwitter>
            <FaInstagram className="text-gray-300 text-2xl"></FaInstagram>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-pink-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/all-artifacts" className="hover:text-pink-400 transition">
                All Artifacts
              </a>
            </li>
            <li>
              <a
                href="/add-artifact"
                className="hover:text-pink-400 transition"
              >
                Add Artifact
              </a>
            </li>
            <li>
              <a href="/artifact-by-email" className="hover:text-pink-400 transition">
                My Added Artifacts
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@artifacttracker.com"
                className="hover:text-pink-400"
              >
                support@artifacttracker.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-pink-400">
                +1 234 567 890
              </a>
            </li>
            <li>Location: Old Heritage Street, Dhaka</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-6 border-t border-[#ffffff1a] text-sm text-gray-400">
        © {new Date().getFullYear()} Historical Artifacts Tracker. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
