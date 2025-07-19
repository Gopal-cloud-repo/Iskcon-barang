import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building, Gift, Users, BookOpen, Home, Shield, CheckCircle, Star, Globe } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [frequency, setFrequency] = useState('one-time');
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    panNumber: ''
  });

  const predefinedAmounts = [
    { amount: '₹501', impact: 'Sponsors prasadam for 10 devotees' },
    { amount: '₹1001', impact: 'Supports daily temple operations' },
    { amount: '₹2501', impact: 'Funds spiritual education programs' },
    { amount: '₹5001', impact: 'Sponsors a festival celebration' },
    { amount: '₹10001', impact: 'Major temple development support' },
    { amount: '₹25001', impact: 'Significant infrastructure contribution' }
  ];

  const donationCategories = [
    {
      id: 'general',
      icon: <Heart size={24} />,
      title: 'General Donation',
      description: 'Support our daily temple operations and spiritual activities',
      impact: 'Helps maintain temple facilities and daily worship'
    },
    {
      id: 'prasadam',
      icon: <Gift size={24} />,
      title: 'Prasadam Seva',
      description: 'Sponsor daily prasadam distribution to devotees and visitors',
      impact: 'Feeds hungry souls with sanctified food'
    },
    {
      id: 'construction',
      icon: <Building size={24} />,
      title: 'Temple Development',
      description: 'Contribute to temple construction and infrastructure development',
      impact: 'Creates lasting spiritual infrastructure'
    },
    {
      id: 'education',
      icon: <BookOpen size={24} />,
      title: 'Spiritual Education',
      description: 'Support our spiritual education programs and book distribution',
      impact: 'Spreads Krishna consciousness through knowledge'
    },
    {
      id: 'festival',
      icon: <Users size={24} />,
      title: 'Festival Celebration',
      description: 'Sponsor special festivals and community celebrations',
      impact: 'Brings joy and spiritual upliftment to community'
    },
    {
      id: 'accommodation',
      icon: <Home size={24} />,
      title: 'Guest House',
      description: 'Support accommodation facilities for visiting devotees',
      impact: 'Provides shelter for spiritual seekers'
    }
  ];

  const paymentMethods = [
    {
      id: 'upi',
      icon: <Smartphone size={24} />,
      title: 'UPI Payment',
      description: 'Google Pay, PhonePe, Paytm, BHIM',
      fee: 'No processing fee'
    },
    {
      id: 'card',
      icon: <CreditCard size={24} />,
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay, Amex',
      fee: '2.5% processing fee'
    },
    {
      id: 'netbanking',
      icon: <Building size={24} />,
      title: 'Net Banking',
      description: 'All major banks supported',
      fee: '1.5% processing fee'
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
    if (e.target.value && parseInt(e.target.value) >= 100) {
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

  const handleDonate = async () => {
    const amount = selectedAmount ? selectedAmount.replace('₹', '') : customAmount;
    if (!amount || parseInt(amount) < 100) {
      alert('Minimum donation amount is ₹100');
      return;
    }

    if (!donorInfo.name || !donorInfo.email || !donorInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Prepare payment data
      const paymentData = {
        amount: parseInt(amount) * 100, // Convert to paise for Razorpay
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: {
          donation_type: donationType,
          donor_name: donorInfo.name,
          donor_email: donorInfo.email,
          donor_phone: donorInfo.phone
        }
      };

      // Initialize Razorpay payment
      const options = {
        key: 'rzp_test_1234567890', // Replace with your Razorpay key
        amount: paymentData.amount,
        currency: paymentData.currency,
        name: 'ISKCON Barang',
        description: `Donation for ${donationCategories.find(cat => cat.id === donationType)?.title}`,
        image: '/favicon.ico',
        order_id: paymentData.receipt,
        handler: function (response) {
          setIsProcessing(false);
          alert(`Thank you ${donorInfo.name} for your generous donation of ₹${amount}! Payment ID: ${response.razorpay_payment_id}. Your donation receipt will be sent to ${donorInfo.email}`);
          
          // Reset form after successful payment
          setSelectedAmount('');
          setCustomAmount('');
          setShowDonorForm(false);
          setDonorInfo({
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            panNumber: ''
          });
        },
        prefill: {
          name: donorInfo.name,
          email: donorInfo.email,
          contact: donorInfo.phone
        },
        notes: paymentData.notes,
        theme: {
          color: '#e2580c'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      // Check if Razorpay is loaded
      if (typeof window.Razorpay !== 'undefined') {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Fallback to UPI payment link for demo
        const upiLink = `upi://pay?pa=iskconbarang@paytm&pn=ISKCON%20Barang&am=${amount}&cu=INR&tn=Donation%20for%20${donationType}`;
        window.open(upiLink, '_blank');
        setIsProcessing(false);
        alert('UPI payment link opened. Complete the payment in your UPI app.');
      }
    } catch (error) {
      setIsProcessing(false);
      alert('Payment failed. Please try again.');
    }
  };

  const pageStyle = {
    background: `linear-gradient(rgba(254, 247, 237, 0.9), rgba(240, 249, 255, 0.9)), url('https://images.pexels.com/photos/8828489/pexels-photo-8828489.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: '2rem 0'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const headerIconStyle = {
    width: '80px',
    height: '80px',
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
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const trustBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '6px',
    fontSize: '0.875rem',
    color: '#166534',
    marginBottom: '1rem'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        {/* Header */}
        <div style={headerStyle}>
          <div style={headerIconStyle}>
            <Heart size={40} />
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #e2580c, #f49238)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Support Our Sacred Mission
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Your generous contribution helps us spread Krishna consciousness, serve the community, 
            and maintain our beautiful temple for future generations.
          </p>
          
          {/* Trust Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={trustBadgeStyle}>
              <Shield size={16} />
              <span>Secure Payment</span>
            </div>
            <div style={trustBadgeStyle}>
              <CheckCircle size={16} />
              <span>80G Tax Exemption</span>
            </div>
            <div style={trustBadgeStyle}>
              <Star size={16} />
              <span>Trusted by 5000+ Devotees</span>
            </div>
          </div>
        </div>

        <div style={mainGridStyle}>
          {/* Donation Form */}
          <div className="card" style={{ order: 1 }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Globe size={24} style={{ color: '#e2580c' }} />
              Make a Donation
            </h2>
            
            {/* Donation Frequency */}
            <div className="form-group">
              <label className="form-label">Donation Frequency</label>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <button
                  onClick={() => setFrequency('one-time')}
                  className={`btn ${frequency === 'one-time' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ flex: 1, border: frequency === 'one-time' ? 'none' : '2px solid #d1d5db', color: frequency === 'one-time' ? 'white' : '#6b7280' }}
                >
                  One-time
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`btn ${frequency === 'monthly' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ flex: 1, border: frequency === 'monthly' ? 'none' : '2px solid #d1d5db', color: frequency === 'monthly' ? 'white' : '#6b7280' }}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Donation Category */}
            <div className="form-group">
              <label className="form-label">Choose Seva Category</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {donationCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setDonationType(category.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '1rem',
                      border: `2px solid ${donationType === category.id ? '#e2580c' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: donationType === category.id ? '#fef7ed' : 'white'
                    }}
                  >
                    <div style={{ color: '#e2580c', marginTop: '2px' }}>
                      {category.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px', fontSize: '0.95rem' }}>
                        {category.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '0 0 4px 0', lineHeight: 1.4 }}>
                        {category.description}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: '#e2580c', margin: 0, fontWeight: '500' }}>
                        {category.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="form-group">
              <label className="form-label">Select Donation Amount</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                {predefinedAmounts.map((item) => (
                  <button
                    key={item.amount}
                    onClick={() => handleAmountSelect(item.amount)}
                    style={{
                      padding: '1rem',
                      border: `2px solid ${selectedAmount === item.amount ? '#e2580c' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      background: selectedAmount === item.amount ? '#e2580c' : 'white',
                      color: selectedAmount === item.amount ? 'white' : '#1f2937',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '4px' }}>
                      {item.amount}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                      {item.impact}
                    </div>
                  </button>
                ))}
              </div>
              
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontWeight: 'bold' }}>₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount (min ₹100)"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="form-input"
                  style={{ paddingLeft: '32px', fontSize: '1rem' }}
                  min="100"
                />
              </div>
              {customAmount && parseInt(customAmount) < 100 && (
                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>
                  Minimum donation amount is ₹100
                </p>
              )}
            </div>

            {/* Donor Information Form */}
            {showDonorForm && (
              <div style={{ 
                background: '#f8fafc', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0',
                marginTop: '1rem'
              }}>
                <h3 style={{ marginBottom: '1rem', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={20} style={{ color: '#e2580c' }} />
                  Donor Information
                </h3>
                
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
                  <label className="form-label">Complete Address</label>
                  <textarea
                    placeholder="Enter your complete address"
                    value={donorInfo.address}
                    onChange={(e) => handleDonorInfoChange('address', e.target.value)}
                    className="form-input"
                    rows="2"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label className="form-label">PAN Number (for 80G certificate)</label>
                  <input
                    type="text"
                    placeholder="Enter PAN number for tax exemption"
                    value={donorInfo.panNumber}
                    onChange={(e) => handleDonorInfoChange('panNumber', e.target.value.toUpperCase())}
                    className="form-input"
                    maxLength="10"
                  />
                  <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '4px' }}>
                    Required for donations above ₹2000 for 80G tax exemption certificate
                  </p>
                </div>
              </div>
            )}

            {/* Payment Method */}
            {showDonorForm && (
              <div className="form-group">
                <label className="form-label">Choose Payment Method</label>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '1rem',
                        border: `2px solid ${paymentMethod === method.id ? '#e2580c' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: paymentMethod === method.id ? '#fef7ed' : 'white'
                      }}
                    >
                      <div style={{ color: '#e2580c' }}>
                        {method.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '2px' }}>
                          {method.title}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          {method.description}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '500' }}>
                        {method.fee}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Donate Button */}
            {showDonorForm && (
              <div>
                <button
                  onClick={handleDonate}
                  disabled={isProcessing}
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    fontSize: '1.125rem', 
                    padding: '16px 24px',
                    background: isProcessing ? '#9ca3af' : 'linear-gradient(135deg, #e2580c, #f49238)',
                    border: 'none',
                    cursor: isProcessing ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isProcessing ? (
                    <>
                      <div style={{ 
                        width: '20px', 
                        height: '20px', 
                        border: '2px solid #ffffff', 
                        borderTop: '2px solid transparent', 
                        borderRadius: '50%', 
                        animation: 'spin 1s linear infinite',
                        marginRight: '8px'
                      }} />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Heart className="icon" style={{ marginRight: '8px' }} />
                      Donate {selectedAmount || (customAmount ? `₹${customAmount}` : '')} Securely
                    </>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
                  <Shield size={16} style={{ color: '#059669' }} />
                  <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0, textAlign: 'center' }}>
                    Your donation is secure and encrypted. Tax exemption receipt will be sent via email.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Information */}
          <div style={{ order: 2 }}>
            {/* Impact Section */}
            <div className="card mb-3" style={{ background: 'linear-gradient(135deg, #fef7ed, #fff7ed)' }}>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={20} style={{ color: '#e2580c' }} />
                Your Impact
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { amount: '₹501', impact: 'Sponsors prasadam for 10 devotees', icon: <Gift size={16} /> },
                  { amount: '₹1001', impact: 'Supports daily temple operations', icon: <Heart size={16} /> },
                  { amount: '₹2501', impact: 'Funds spiritual education programs', icon: <BookOpen size={16} /> },
                  { amount: '₹5001', impact: 'Sponsors a festival celebration', icon: <Users size={16} /> }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      background: '#fef7ed', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#e2580c'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: '#e2580c', fontSize: '0.9rem' }}>{item.amount}</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Donate */}
            <div className="card mb-3">
              <h3 style={{ marginBottom: '1rem' }}>Why Your Support Matters</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6b7280' }}>
                {[
                  'Maintain daily temple operations and deity worship',
                  'Provide free prasadam to all visitors',
                  'Support spiritual education and cultural programs',
                  'Help expand community outreach initiatives',
                  'Preserve and promote Vedic culture and values'
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                    <CheckCircle size={16} style={{ color: '#059669', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust & Security */}
            <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Trusted & Secure
              </h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={16} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '0.875rem', color: '#166534' }}>256-bit SSL encryption</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={16} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '0.875rem', color: '#166534' }}>80G tax exemption available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Star size={16} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '0.875rem', color: '#166534' }}>Trusted by 5000+ devotees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Donation;