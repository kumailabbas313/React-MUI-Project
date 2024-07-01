import React, { createContext, useState, useContext } from 'react';

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([
    { text: "Great service!", author: "Customer 1" },
    { text: "Highly recommend!", author: "Customer 2" },
    { text: "Exceptional quality!", author: "Customer 3" }
  ]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleSelectTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleDeleteTestimonial = (testimonialText) => {
    const updatedTestimonials = testimonials.filter(testimonial => testimonial.text !== testimonialText);
    setTestimonials(updatedTestimonials);
    if (selectedTestimonial && selectedTestimonial.text === testimonialText) {
      setSelectedTestimonial(null);
    }
  };

  return (
    <TestimonialContext.Provider
      value={{
        testimonials,
        selectedTestimonial,
        onSelectTestimonial: handleSelectTestimonial,
        onDeleteTestimonial: handleDeleteTestimonial,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error('useTestimonial must be used within a TestimonialProvider');
  }
  return context;
};
