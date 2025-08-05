'use client';
import React, { useState } from 'react';

type Faq = {
  question: string;
  answer: string;
};

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm mb-4 overflow-hidden">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <h3 className="text-base font-semibold text-primary pr-4 md:text-xl">{question}</h3>
       
       <span className='text-xl font-bold text-primary'> {isOpen? '-':"+"}</span>
      </button>

      <div
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-grey font-poppins">{answer}</p>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: Faq[] = [
   {
  question: 'Must I pay online to secure my gadget order?',
  answer:
    'No, online payment is not strictly required to place your order. You can choose to pay online instantly during checkout or opt for payment on delivery (if available in your area). Your gadget will be reserved regardless of your payment method.',
},
{
  question: 'Can I modify or reschedule my order?',
  answer:
    'Yes, you can! We understand that preferences may change. If you checked out as a guest and paid online, kindly contact our support team via WhatsApp or phone to make changes. If you have an account, simply log in to your dashboard to manage or reschedule your order anytime.',
}

     
  ];

  return (
    <>
      

      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </section>

   
    </>
  );
};

export default FAQPage;
