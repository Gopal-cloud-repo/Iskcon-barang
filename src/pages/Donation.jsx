import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building, Gift, Users, BookOpen, Home } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const predefinedAmounts = ['₹501', '₹1001', '₹2501', '₹5001', '₹10001'];

  const donationCategories = [
    {
      id: 'general',
      icon: <Heart size={24} />,
      title: 'General Donation',
      description: 'Support our daily temple operations and spiritual activities'
    },
    {
      id: 'prasadam',
      icon: <Gift size={24} />,
      title: 'Prasadam Seva',
      description: 'Sponsor daily prasadam distribution to devotees and visitors'
    },
    {
      id: 'construction',
      icon: <Building size={24} />,
      title: 'Temple Development',
      description: 'Contribute to temple construction and infrastructure development'
    },
    {
      id: 'education',
      icon: <BookOpen size={24} />,
      title: 'Spiritual Education',
      description: 'Support our spiritual education programs and book distribution'
    },
    {
      id: 'festival',
      icon: <Users size={24} />,
      title: 'Festival Celebration',
      description: 'Sponsor special festivals and community celebrations'
    },
    {
      id: 'accommodation',
      icon: <Home size={24} />,
      title: 'Guest House',
      description: 'Support accommodation facilities for visiting devotees'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setShowDonorForm(true);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
    if (e.target.value) {
      setShowDonorForm(true);
    } else {
      setShowDonorForm(false);
    }
  };

  const handleDonorInfoChange = (field, value) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDonate = () => {
    const amount = selectedAmount || `₹${customAmount}`;
    if (!amount || amount === '₹') {
      alert('Please select or enter a donation amount');
      return;
    }
    
    alert(`Thank you for your generous donation of ${amount} for ${donationCategories.find(cat => cat.id === donationType)?.title}!`);
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

  const impactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '1rem'
  };

  const impactIconStyle = {
    width: '32px',
    height: '32px',
    background: '#fef7ed',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerIconStyle}>
            <Heart size={32} />
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Support Our Sacred Mission
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Your generous contribution helps us spread Krishna consciousness, serve the community, 
            and maintain our beautiful temple for future generations.
          </p>
        </div>

        <div style={mainGridStyle}>
          {/* Donation Form */}
          <div className="card">
            <h2 style={{ marginBottom: '1.5rem' }}>Make a Donation</h2>
            
            {/* Donation Category */}
            <div className="form-group">
              <label className="form-label">Choose Donation Category</label>
              <div className="donation-categories">
                {donationCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setDonationType(category.id)}
                    className={`donation-category ${donationType === category.id ? 'active' : ''}`}
                  >
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <div className="category-info">
                      <h4>{category.title}</h4>
                      <p>{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="form-group">
              <label className="form-label">Select Amount</label>
              <div className="amount-grid">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}>₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="form-input"
                  style={{ paddingLeft: '32px' }}
                />
              </div>
            </div>

            {/* Donor Information Form */}
            {showDonorForm && (
              <div className="form-group" style={{ 
                background: '#f8fafc', 
                padding: '1.5rem', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                marginTop: '1rem'
              }}>
                <h3 style={{ marginBottom: '1rem', color: '#1f2937' }}>Donor Information</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={donorInfo.name}
                      onChange={(e) => handleDonorInfoChange('name', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={donorInfo.email}
                      onChange={(e) => handleDonorInfoChange('email', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={donorInfo.phone}
                      onChange={(e) => handleDonorInfoChange('phone', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      value={donorInfo.city}
                      onChange={(e) => handleDonorInfoChange('city', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      value={donorInfo.state}
                      onChange={(e) => handleDonorInfoChange('state', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">PIN Code *</label>
                    <input
                      type="text"
                      placeholder="Enter PIN code"
                      value={donorInfo.pincode}
                      onChange={(e) => handleDonorInfoChange('pincode', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div style={{ marginTop: '1rem' }}>
                  <label className="form-label">Address</label>
                  <textarea
                    placeholder="Enter your complete address"
                    value={donorInfo.address}
                    onChange={(e) => handleDonorInfoChange('address', e.target.value)}
                    className="form-input"
                    rows="3"
                    style={{ resize: 'vertical' }}
                  />
                </div>
                
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', marginBottom: 0 }}>
                  * Required fields. This information will be used for donation receipt and tax exemption certificate.
                </p>
              </div>
            )}

            {/* Payment Method */}
            {showDonorForm && (
              <div className="form-group">
              <label className="form-label">Payment Method</label>
              <div>
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`payment-method ${paymentMethod === 'upi' ? 'active' : ''}`}
                >
                  <div className="payment-icon">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1f2937' }}>UPI Payment</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Pay using Google Pay, PhonePe, Paytm</div>
                  </div>
                </div>
                
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
                >
                  <div className="payment-icon">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1f2937' }}>Credit/Debit Card</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Visa, Mastercard, RuPay accepted</div>
                  </div>
                </div>
              </div>
              </div>
            )}

            {/* Donate Button */}
            {showDonorForm && (
              <button
              onClick={handleDonate}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1.125rem', padding: '16px 24px' }}
            >
              <Heart className="icon" style={{ marginRight: '8px' }} />
              Donate Now
              </button>
            )}

            {showDonorForm && (
              <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center' }}>
              Your donation is secure and helps support our temple activities. 
              Tax exemption certificate will be provided for donations above ₹500.
              </p>
            )}
          </div>

          {/* Donation Impact */}
          <div>
            <div className="card mb-3">
              <h3 style={{ marginBottom: '1rem' }}>Your Impact</h3>
              <div>
                <div style={impactItemStyle}>
                  <div style={impactIconStyle}>
                    <Gift size={16} style={{ color: '#e2580c' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>₹501</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Sponsors prasadam for 10 devotees</p>
                  </div>
                </div>
                <div style={impactItemStyle}>
                  <div style={impactIconStyle}>
                    <BookOpen size={16} style={{ color: '#e2580c' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>₹1001</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Supports spiritual books distribution</p>
                  </div>
                </div>
                <div style={impactItemStyle}>
                  <div style={impactIconStyle}>
                    <Users size={16} style={{ color: '#e2580c' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>₹5001</h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Sponsors a festival celebration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <h3 style={{ marginBottom: '1rem' }}>Why Donate?</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6b7280' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: '#f17316', marginTop: '4px' }}>•</span>
                  <span>Support daily temple operations and maintenance</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: '#f17316', marginTop: '4px' }}>•</span>
                  <span>Enable free prasadam distribution to all visitors</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: '#f17316', marginTop: '4px' }}>•</span>
                  <span>Fund spiritual education and cultural programs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: '#f17316', marginTop: '4px' }}>•</span>
                  <span>Help expand our community outreach initiatives</span>
                </li>
              </ul>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, #fef7ed, #fff7ed)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                "Give, and it will be given to you"
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic', margin: 0 }}>
                Every act of giving is an act of devotion. Your contribution helps us serve Krishna 
                and spread His divine love throughout the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;