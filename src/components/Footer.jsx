import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const footerStyle = {
    background: '#111827',
    color: 'white',
    padding: '3rem 0'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const logoIconStyle = {
    width: '32px',
    height: '32px',
    background: 'linear-gradient(135deg, #f49238, #e2580c)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '12px'
  };

  const sectionTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '12px'
  };

  const iconStyle = {
    color: '#f49238',
    marginTop: '2px',
    flexShrink: 0
  };

  const textStyle = {
    color: '#d1d5db',
    lineHeight: 1.5
  };

  const subtextStyle = {
    color: '#9ca3af',
    fontSize: '0.875rem'
  };

  const copyrightStyle = {
    borderTop: '1px solid #374151',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#9ca3af'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Temple Info */}
          <div>
            <div style={logoStyle}>
              <div style={logoIconStyle}>
                <span>ॐ</span>
              </div>
              <h3 style={sectionTitleStyle}>ISKCON Barang</h3>
            </div>
            <p style={{ ...textStyle, marginBottom: '1rem' }}>
              International Society for Krishna Consciousness - Spreading the message of love, peace, and devotion through the teachings of Lord Krishna.
            </p>
            <p style={subtextStyle}>
              "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare<br />
              Hare Rama, Hare Rama, Rama Rama, Hare Hare"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={sectionTitleStyle}>Contact Information</h3>
            <div style={contactItemStyle}>
              <MapPin style={iconStyle} size={16} />
              <div>
                <p style={textStyle}>ISKCON Temple</p>
                <p style={textStyle}>Barang, Cuttack</p>
                <p style={textStyle}>Odisha, India</p>
              </div>
            </div>
            <div style={contactItemStyle}>
              <Phone style={iconStyle} size={16} />
              <p style={textStyle}>+91 98765 43210</p>
            </div>
            <div style={contactItemStyle}>
              <Mail style={iconStyle} size={16} />
              <p style={textStyle}>info@iskconbarang.org</p>
            </div>
          </div>

          {/* Temple Timings */}
          <div>
            <h3 style={sectionTitleStyle}>Temple Timings</h3>
            <div style={contactItemStyle}>
              <Clock style={iconStyle} size={16} />
              <div>
                <p style={{ ...textStyle, fontWeight: '500' }}>Morning Aarti</p>
                <p style={subtextStyle}>4:30 AM - 5:30 AM</p>
              </div>
            </div>
            <div style={contactItemStyle}>
              <Clock style={iconStyle} size={16} />
              <div>
                <p style={{ ...textStyle, fontWeight: '500' }}>Evening Aarti</p>
                <p style={subtextStyle}>7:00 PM - 8:00 PM</p>
              </div>
            </div>
            <div style={contactItemStyle}>
              <Clock style={iconStyle} size={16} />
              <div>
                <p style={{ ...textStyle, fontWeight: '500' }}>Darshan Hours</p>
                <p style={subtextStyle}>5:00 AM - 12:00 PM</p>
                <p style={subtextStyle}>4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div style={copyrightStyle}>
          <p>
            © 2024 ISKCON Barang. All rights reserved. | Spreading Krishna Consciousness with Love and Devotion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;