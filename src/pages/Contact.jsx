import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const pageStyle = {
    background: 'linear-gradient(135deg, #fef7ed, #f0f9ff)',
    minHeight: '100vh',
    padding: '3rem 0'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem'
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

  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '1.5rem',
    padding: '1rem',
    background: '#fef7ed',
    borderRadius: '8px'
  };

  const iconStyle = {
    color: '#e2580c',
    marginTop: '2px',
    flexShrink: 0
  };

  const mapStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    border: 'none',
    marginTop: '1rem'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerIconStyle}>
            <Phone size={32} />
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            We'd love to hear from you. Get in touch with us for any questions, 
            spiritual guidance, or to learn more about our temple activities.
          </p>
        </div>

        <div style={mainGridStyle}>
          {/* Contact Information */}
          <div>
            <div className="card mb-3">
              <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
              
              <div style={contactItemStyle}>
                <MapPin style={iconStyle} size={24} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Temple Address
                  </h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>
                    ISKCON Temple<br />
                    Barang, Cuttack<br />
                    Odisha - 754005<br />
                    India
                  </p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <Phone style={iconStyle} size={24} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Phone Numbers
                  </h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>
                    Temple Office: +91 98765 43210<br />
                    President: +91 98765 43211<br />
                    Emergency: +91 98765 43212
                  </p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <Mail style={iconStyle} size={24} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Email Addresses
                  </h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>
                    General Inquiries: info@iskconbarang.org<br />
                    Donations: donations@iskconbarang.org<br />
                    Events: events@iskconbarang.org
                  </p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <Clock style={iconStyle} size={24} />
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Temple Timings
                  </h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>
                    Morning Aarti: 4:30 AM - 5:30 AM<br />
                    Darshan: 5:00 AM - 12:00 PM<br />
                    Evening Darshan: 4:00 PM - 9:00 PM<br />
                    Evening Aarti: 7:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Find Us</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890123!2d85.8123456!3d20.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzI0LjQiTiA4NcKwNDgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                style={mapStyle}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISKCON Barang Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  <User size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <MessageSquare size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="spiritual">Spiritual Guidance</option>
                  <option value="events">Events & Programs</option>
                  <option value="donations">Donations</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="accommodation">Guest House Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="form-input"
                  rows="5"
                  style={{ resize: 'vertical' }}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '1.125rem', padding: '16px 24px' }}
              >
                <Send className="icon" style={{ marginRight: '8px' }} />
                Send Message
              </button>
            </form>

            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center' }}>
              We typically respond to messages within 24 hours. For urgent matters, 
              please call us directly at +91 98765 43210.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;