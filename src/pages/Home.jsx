import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Calendar, Star, Gift } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <BookOpen className="icon-large" style={{ color: '#f17316' }} />,
      title: "Spiritual Classes",
      description: "Daily Bhagavad Gita classes and spiritual discourses to deepen your understanding of Krishna consciousness."
    },
    {
      icon: <Users className="icon-large" style={{ color: '#f17316' }} />,
      title: "Community Programs",
      description: "Join our vibrant community for festivals, cultural programs, and spiritual gatherings throughout the year."
    },
    {
      icon: <Gift className="icon-large" style={{ color: '#f17316' }} />,
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

  const heroStyle = {
    background: 'linear-gradient(135deg, #fef7ed, #f0f9ff)',
    padding: '6rem 0',
    textAlign: 'center'
  };

  const servicesStyle = {
    padding: '4rem 0',
    background: 'white'
  };

  const eventsStyle = {
    padding: '4rem 0',
    background: '#f9fafb'
  };

  const ctaStyle = {
    padding: '4rem 0',
    background: 'linear-gradient(135deg, #f17316, #ff8c00)',
    color: 'white',
    textAlign: 'center'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem'
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="container">
          <div className="hero-logo">
            <span>ॐ</span>
          </div>
          <h1 style={{ marginBottom: '1rem' }}>
            Welcome to <span style={{ color: '#e2580c' }}>ISKCON Barang</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Experience the divine bliss of Krishna consciousness at our beautiful temple in Barang, Cuttack. 
            Join us in our spiritual journey of devotion, service, and enlightenment.
          </p>
          
          <div style={buttonGroupStyle}>
            <Link to="/donation" className="btn btn-primary">
              <Heart className="icon" style={{ marginRight: '8px' }} />
              Support Our Mission
            </Link>
            <button className="btn btn-secondary">
              <Calendar className="icon" style={{ marginRight: '8px' }} />
              Visit Temple
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={servicesStyle}>
        <div className="container">
          <div className="text-center mb-6">
            <h2>Our Sacred Services</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Discover the various ways we serve the community and spread Krishna consciousness
            </p>
          </div>
          
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <div style={{ marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={eventsStyle}>
        <div className="container">
          <div className="text-center mb-6">
            <h2>Upcoming Events</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Join us for these special celebrations and spiritual gatherings
            </p>
          </div>
          
          <div className="grid grid-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  {event.date}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{event.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={ctaStyle}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>
            Join Our Spiritual Family
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 2rem' }}>
            Your support helps us continue our mission of spreading love, peace, and Krishna consciousness 
            throughout the community. Every contribution makes a difference.
          </p>
          <div style={buttonGroupStyle}>
            <Link to="/donation" className="btn" style={{ background: 'white', color: '#e2580c' }}>
              <Heart className="icon" style={{ marginRight: '8px' }} />
              Make a Donation
            </Link>
            <button className="btn btn-outline">
              <Star className="icon" style={{ marginRight: '8px' }} />
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;