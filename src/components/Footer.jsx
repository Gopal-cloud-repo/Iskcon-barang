import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ॐ</span>
              </div>
              <h3 className="text-xl font-bold">ISKCON Barang</h3>
            </div>
            <p className="text-gray-300 mb-4">
              International Society for Krishna Consciousness - Spreading the message of love, peace, and devotion through the teachings of Lord Krishna.
            </p>
            <p className="text-sm text-gray-400">
              "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare<br />
              Hare Rama, Hare Rama, Rama Rama, Hare Hare"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-saffron-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300">ISKCON Temple</p>
                  <p className="text-gray-300">Barang, Cuttack</p>
                  <p className="text-gray-300">Odisha, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-saffron-400 flex-shrink-0" size={16} />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-saffron-400 flex-shrink-0" size={16} />
                <p className="text-gray-300">info@iskconbarang.org</p>
              </div>
            </div>
          </div>

          {/* Temple Timings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Temple Timings</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="text-saffron-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 font-medium">Morning Aarti</p>
                  <p className="text-gray-400 text-sm">4:30 AM - 5:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-saffron-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 font-medium">Evening Aarti</p>
                  <p className="text-gray-400 text-sm">7:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-saffron-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 font-medium">Darshan Hours</p>
                  <p className="text-gray-400 text-sm">5:00 AM - 12:00 PM</p>
                  <p className="text-gray-400 text-sm">4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ISKCON Barang. All rights reserved. | Spreading Krishna Consciousness with Love and Devotion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;