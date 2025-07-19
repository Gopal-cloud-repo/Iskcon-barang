import React from 'react';
import { Heart, Users, BookOpen, Globe, Star, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart size={24} />,
      title: "Devotion",
      description: "Pure love and devotion to Lord Krishna through daily worship and spiritual practices"
    },
    {
      icon: <Users size={24} />,
      title: "Community",
      description: "Building a strong spiritual community that supports each other's spiritual growth"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Knowledge",
      description: "Sharing the timeless wisdom of Bhagavad Gita and Vedic scriptures"
    },
    {
      icon: <Globe size={24} />,
      title: "Service",
      description: "Selfless service to humanity through various charitable and spiritual activities"
    }
  ];

  const achievements = [
    {
      icon: <Users size={20} />,
      number: "5000+",
      label: "Devotees Served"
    },
    {
      icon: <BookOpen size={20} />,
      number: "1000+",
      label: "Books Distributed"
    },
    {
      icon: <Heart size={20} />,
      number: "50+",
      label: "Festivals Celebrated"
    },
    {
      icon: <Award size={20} />,
      number: "15+",
      label: "Years of Service"
    }
  ];

  const programs = [
    {
      title: "Daily Aarti & Darshan",
      description: "Experience the divine presence of Lord Krishna through our daily morning and evening aarti ceremonies.",
      time: "4:30 AM & 7:00 PM"
    },
    {
      title: "Bhagavad Gita Classes",
      description: "Weekly classes on the Bhagavad Gita to understand the profound spiritual wisdom of Lord Krishna.",
      time: "Every Sunday 6:00 PM"
    },
    {
      title: "Prasadam Distribution",
      description: "Free distribution of sanctified food (prasadam) to all visitors and devotees daily.",
      time: "After every aarti"
    },
    {
      title: "Festival Celebrations",
      description: "Grand celebrations of Krishna's festivals including Janmashtami, Radhashtami, and Govardhan Puja.",
      time: "Throughout the year"
    }
  ];

  const pageStyle = {
    background: 'linear-gradient(135deg, #fef7ed, #f0f9ff)',
    minHeight: '100vh',
    padding: '3rem 0'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  };

  const headerIconStyle = {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #f49238, #e2580c)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: '0 auto 1.5rem',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
  };

  const sectionStyle = {
    padding: '3rem 0'
  };

  const achievementStyle = {
    textAlign: 'center',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const achievementIconStyle = {
    width: '48px',
    height: '48px',
    background: '#fef7ed',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: '#e2580c'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerIconStyle}>
            <Star size={32} />
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            About ISKCON Barang
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
            The International Society for Krishna Consciousness (ISKCON) Barang is dedicated to 
            spreading the timeless wisdom and love of Lord Krishna throughout the community and beyond.
          </p>
        </div>

        {/* Mission & Vision */}
        <section style={sectionStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Target size={24} style={{ color: '#e2580c', marginRight: '12px' }} />
                <h2 style={{ margin: 0 }}>Our Mission</h2>
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                To spread Krishna consciousness throughout society by distributing the teachings of 
                Bhagavad Gita and Srimad Bhagavatam, establishing temples, and creating a spiritual 
                community where people can develop their relationship with Krishna through devotional service.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Globe size={24} style={{ color: '#e2580c', marginRight: '12px' }} />
                <h2 style={{ margin: 0 }}>Our Vision</h2>
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                To create a world where every individual can experience the joy and peace that comes 
                from a loving relationship with Krishna, fostering unity, compassion, and spiritual 
                growth in our community and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section style={sectionStyle}>
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Values</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              The principles that guide our spiritual journey and community service
            </p>
          </div>
          
          <div className="grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#fef7ed',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e2580c',
                    flexShrink: 0
                  }}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {value.title}
                    </h3>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section style={sectionStyle}>
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Impact</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Serving the community with love and devotion since 2009
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {achievements.map((achievement, index) => (
              <div key={index} style={achievementStyle}>
                <div style={achievementIconStyle}>
                  {achievement.icon}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e2580c', marginBottom: '0.5rem' }}>
                  {achievement.number}
                </h3>
                <p style={{ color: '#6b7280', margin: 0, fontWeight: '500' }}>
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs & Activities */}
        <section style={sectionStyle}>
          <div className="text-center mb-4">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Programs</h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              Regular spiritual activities and community programs
            </p>
          </div>
          
          <div className="grid grid-2">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                  <Clock size={20} style={{ color: '#e2580c', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {program.title}
                    </h3>
                    <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                      {program.description}
                    </p>
                    <p style={{ color: '#e2580c', fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>
                      {program.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section style={sectionStyle}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #fef7ed, #fff7ed)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Our History</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1rem' }}>
                ISKCON Barang was established in 2009 with the vision of creating a spiritual oasis 
                in the heart of Cuttack, Odisha. What began as a small gathering of devoted souls 
                has grown into a vibrant spiritual community that serves thousands of people annually.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our temple has been blessed by the presence of many senior devotees and spiritual 
                teachers who have guided our community in understanding the profound teachings of 
                Lord Krishna. Through their mercy and the dedication of our local devotees, we have 
                been able to establish regular programs, festivals, and community services.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, margin: 0 }}>
                Today, ISKCON Barang stands as a beacon of spiritual light, offering solace, wisdom, 
                and divine love to all who seek it. We continue to grow and serve, always remembering 
                our founder-acharya Srila Prabhupada's mission to spread Krishna consciousness 
                throughout the world.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ ...sectionStyle, textAlign: 'center' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #f17316, #ff8c00)', color: 'white' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Join Our Spiritual Family</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
              Whether you're seeking spiritual guidance, community connection, or ways to serve, 
              you're always welcome at ISKCON Barang.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn" style={{ background: 'white', color: '#e2580c' }}>
                <Users className="icon" style={{ marginRight: '8px' }} />
                Visit Our Temple
              </button>
              <button className="btn btn-outline">
                <BookOpen className="icon" style={{ marginRight: '8px' }} />
                Join Our Classes
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;