import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I upload my music?',
      answer: 'You can upload your music directly through our dashboard. Navigate to the "Uploads" section, select your audio files, and fill in the required metadata like song title, artist name, and genre.'
    },
    {
      question: 'What is the royalty percentage?',
      answer: 'We offer a competitive royalty rate. You receive 85% of all net revenue generated from your music across all platforms. Detailed earning reports are available in your "Earnings" tab.'
    },
    {
      question: 'How long does it take for my music to go live?',
      answer: 'Typically, it takes 24-48 hours for our team to review your submission. Once approved, your music will be live on all major streaming platforms within 5-7 business days.'
    },
    {
      question: 'Can I request a takedown of my song?',
      answer: 'Yes, you can request a takedown at any time. Go to the "My Music" section, find the release you want to remove, and click on the "Request Takedown" option. The process usually takes 7-10 business days to complete across all stores.'
    },
     {
      question: 'How do I update my payment information?',
      answer: 'You can update your bank or payment details from the "My Banks" or "Payment Settings" page in your account dashboard. For security reasons, changes may take up to 24 hours to be verified.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div 
            className={openIndex === index ? 'faq-item open' : 'faq-item'} 
            key={index}
          >
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>
            <div className={openIndex === index ? 'faq-answer open' : 'faq-answer'}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;