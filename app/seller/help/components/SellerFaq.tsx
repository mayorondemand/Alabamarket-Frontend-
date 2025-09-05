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
    <div className="border border-primary bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-top w-full p-3 text-left focus:outline-none"
      >
        <h3 className="text-base font-semibold text-primary pr-4 md:text-lg">{question}</h3>
       
       <span className='text-xl font-bold text-primary'> {isOpen? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3.99609 13H20.0001C20.2653 13 20.5197 12.8946 20.7072 12.7071C20.8947 12.5196 21.0001 12.2652 21.0001 12C21.0001 11.7348 20.8947 11.4804 20.7072 11.2929C20.5197 11.1054 20.2653 11 20.0001 11H3.99609C3.73088 11 3.47652 11.1054 3.28899 11.2929C3.10145 11.4804 2.99609 11.7348 2.99609 12C2.99609 12.2652 3.10145 12.5196 3.28899 12.7071C3.47652 12.8946 3.73088 13 3.99609 13Z" fill="#172556"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13 6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V11H6C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13H11V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18V13H18C18.2652 13 18.5196 12.8946 18.7071 12.7071C18.8946 12.5196 19 12.2652 19 12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H13V6Z" fill="#172556"/>
</svg>}</span>
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

const SellerFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: Faq[] = [
   {
  question: 'How do I list a new product?',
  answer:
    'No, online payment is not strictly required to place your order. You can choose to pay online instantly during checkout or opt for payment on delivery (if available in your area). Your gadget will be reserved regardless of your payment method.',
},
{
  question: 'What is required for seller verification?',
  answer:
    'Yes, you can! We understand that preferences may change. If you checked out as a guest and paid online, kindly contact our support team via WhatsApp or phone to make changes. If you have an account, simply log in to your dashboard to manage or reschedule your order anytime.',
}
,
{
  question: 'What is the video call feature?',
  answer:
    'Yes, you can! We understand that preferences may change. If you checked out as a guest and paid online, kindly contact our support team via WhatsApp or phone to make changes. If you have an account, simply log in to your dashboard to manage or reschedule your order anytime.',
},
{
  question: 'What was my listing rejected?',
  answer:
    'Yes, you can! We understand that preferences may change. If you checked out as a guest and paid online, kindly contact our support team via WhatsApp or phone to make changes. If you have an account, simply log in to your dashboard to manage or reschedule your order anytime.',
},
{
  question: 'How do Boost plans work?',
  answer:
    'Yes, you can! We understand that preferences may change. If you checked out as a guest and paid online, kindly contact our support team via WhatsApp or phone to make changes. If you have an account, simply log in to your dashboard to manage or reschedule your order anytime.',
}

     
  ];

  return (
    <>
      

      
      <section className="bg-filterBg rounded-lg">
        <div>
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

export default SellerFaq;
