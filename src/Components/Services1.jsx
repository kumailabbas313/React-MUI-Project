// src/Components/Services1.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { TestimonialContext } from '../context/TestimonialContext';
import { useCardContext } from '../context/CardContext'; // Correct hook usage

const Services1 = () => {
  const { formValues } = useContext(FormContext);
  const { selectedTestimonial } = useContext(TestimonialContext);
  const { cardComponent } = useCardContext(); // Correct hook usage

  return (
    <div>
      <h2>Submitted Form Values</h2>
      <p>Name: {formValues.name}</p>
      <p>Email: {formValues.email}</p>
      <p>Message: {formValues.message}</p>
      <br></br>

      {selectedTestimonial && (
        <div>
          <h3>Selected Testimonial:</h3>
          <p>{selectedTestimonial.text}</p>
          <p>- {selectedTestimonial.author}</p>
          <br></br>
        </div>
      )}

      {cardComponent && (
        <div>
          <h3>Shared Card:</h3>
          {cardComponent}
        </div>
      )}
      <br></br>
    </div>
  );
};

export default Services1;
