import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building, Gift, Users, BookOpen, Home } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const predefinedAmounts = ['₹501', '₹1001', '₹2501', '₹5001', '₹10001'];

  const donationCategories = [
    {
      id: 'general',
      icon: <Heart className="text-saffron-500" size={24} />,
      title: 'General Donation',
      description: 'Support our daily temple operations and spiritual activities'
    },
    {
      id: 'prasadam',
      icon: <Gift className="text-saffron-500" size={24} />,
      title: 'Prasadam Seva',
      description: 'Sponsor daily prasadam distribution to devotees and visitors'
    },
    {
      id: 'construction',
      icon: <Building className="text-saffron-500" size={24} />,
      title: 'Temple Development',
      description: 'Contribute to temple construction and infrastructure development'
    },
    {
      id: 'education',
      icon: <BookOpen className="text-saffron-500" size={24} />,
      title: 'Spiritual Education',
      description: 'Support our spiritual education programs and book distribution'
    },
    {
      id: 'festival',
      icon: <Users className="text-saffron-500" size={24} />,
      title: 'Festival Celebration',
      description: 'Sponsor special festivals and community celebrations'
    },
    {
      id: 'accommodation',
      icon: <Home className="text-saffron-500" size={24} />,
      title: 'Guest House',
      description: 'Support accommodation facilities for visiting devotees'
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleDonate = () => {
    const amount = selectedAmount || `₹${customAmount}`;
    if (!amount || amount === '₹') {
      alert('Please select or enter a donation amount');
      return;
    }
    
    // Here you would integrate with actual payment gateway
    alert(`Thank you for your generous donation of ${amount} for ${donationCategories.find(cat => cat.id === donationType)?.title}!`);
  };

  return (
    <div className="gradient-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Heart className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Support Our Sacred Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous contribution helps us spread Krishna consciousness, serve the community, 
            and maintain our beautiful temple for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Make a Donation</h2>
            
            {/* Donation Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose Donation Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {donationCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setDonationType(category.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                      donationType === category.id
                        ? 'border-saffron-500 bg-saffron-50'
                        : 'border-gray-200 hover:border-saffron-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {category.icon}
                      <span className="font-medium text-gray-800">{category.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'border-saffron-500 bg-saffron-500 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-saffron-300'
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full p-4 rounded-lg border-2 flex items-center space-x-3 transition-all duration-200 ${
                    paymentMethod === 'upi'
                      ? 'border-saffron-500 bg-saffron-50'
                      : 'border-gray-200 hover:border-saffron-300'
                  }`}
                >
                  <Smartphone className="text-saffron-500" size={24} />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">UPI Payment</div>
                    <div className="text-sm text-gray-600">Pay using Google Pay, PhonePe, Paytm</div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-lg border-2 flex items-center space-x-3 transition-all duration-200 ${
                    paymentMethod === 'card'
                      ? 'border-saffron-500 bg-saffron-50'
                      : 'border-gray-200 hover:border-saffron-300'
                  }`}
                >
                  <CreditCard className="text-saffron-500" size={24} />
                  <div className="text-left">
                    <div className="font-medium text-gray-800">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">Visa, Mastercard, RuPay accepted</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full btn-primary text-lg py-4"
            >
              <Heart className="inline mr-2" size={20} />
              Donate Now
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Your donation is secure and helps support our temple activities. 
              Tax exemption certificate will be provided for donations above ₹500.
            </p>
          </div>

          {/* Donation Impact */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-saffron-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="text-saffron-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">₹501</h4>
                    <p className="text-sm text-gray-600">Sponsors prasadam for 10 devotees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-saffron-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-saffron-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">₹1001</h4>
                    <p className="text-sm text-gray-600">Supports spiritual books distribution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-saffron-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-saffron-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">₹5001</h4>
                    <p className="text-sm text-gray-600">Sponsors a festival celebration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Donate?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-saffron-500 mt-1">•</span>
                  <span>Support daily temple operations and maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-saffron-500 mt-1">•</span>
                  <span>Enable free prasadam distribution to all visitors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-saffron-500 mt-1">•</span>
                  <span>Fund spiritual education and cultural programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-saffron-500 mt-1">•</span>
                  <span>Help expand our community outreach initiatives</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-gradient-to-br from-saffron-50 to-orange-50">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                "Give, and it will be given to you"
              </h3>
              <p className="text-gray-600 text-sm italic">
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