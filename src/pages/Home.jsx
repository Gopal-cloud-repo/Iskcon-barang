import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Calendar, Star, Gift } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="text-saffron-500" size={32} />,
      title: "Spiritual Classes",
      description: "Daily Bhagavad Gita classes and spiritual discourses to deepen your understanding of Krishna consciousness."
    },
    {
      icon: <Users className="text-saffron-500" size={32} />,
      title: "Community Programs",
      description: "Join our vibrant community for festivals, cultural programs, and spiritual gatherings throughout the year."
    },
    {
      icon: <Gift className="text-saffron-500" size={32} />,
      title: "Prasadam Distribution",
      description: "Experience the divine taste of Krishna prasadam, prepared with love and devotion in our temple kitchen."
    }
  ];

  const upcomingEvents = [
    {
      date: "15 Jan",
      title: "Makar Sankranti Celebration",
      time: "6:00 PM onwards"
    },
    {
      date: "26 Jan",
      title: "Republic Day Special Program",
      time: "5:00 PM onwards"
    },
    {
      date: "14 Feb",
      title: "Vasant Panchami Festival",
      time: "Morning 10:00 AM"
    }
  ];

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-white font-bold text-4xl">ॐ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-saffron-600">ISKCON Barang</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the divine bliss of Krishna consciousness at our beautiful temple in Barang, Cuttack. 
              Join us in our spiritual journey of devotion, service, and enlightenment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donation" className="btn-primary">
              <Heart className="inline mr-2" size={20} />
              Support Our Mission
            </Link>
            <button className="btn-secondary">
              <Calendar className="inline mr-2" size={20} />
              Visit Temple
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Sacred Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the various ways we serve the community and spread Krishna consciousness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for these special celebrations and spiritual gatherings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-saffron-100 text-saffron-600 font-bold py-2 px-4 rounded-lg mr-4">
                    {event.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-saffron-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Spiritual Family
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your support helps us continue our mission of spreading love, peace, and Krishna consciousness 
            throughout the community. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation" className="bg-white text-saffron-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Heart className="inline mr-2" size={20} />
              Make a Donation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-saffron-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              <Star className="inline mr-2" size={20} />
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;