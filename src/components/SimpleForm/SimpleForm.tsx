import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SimpleForm.css';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message || 'Form submitted successfully!');
      } else {
        setResponseMessage('Error submitting form');
      }
    } catch (error) {
      setResponseMessage('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={ handleSubmit } className={'form'}>
      <div className={'formInput'}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={ formData.email }
          onChange={ handleChange }
          disabled={ isSubmitting }
        />
      </div>
      <div className={'formInput'}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={ formData.firstName }
          onChange={ handleChange }
          disabled={ isSubmitting }
        />
      </div>
      <div className={'formInput'}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={ formData.lastName }
          onChange={ handleChange }
          disabled={ isSubmitting }
        />
      </div>
      <button type="submit" disabled={ isSubmitting }>
        { isSubmitting ? 'Submitting...' : 'Submit' }
      </button>
      { responseMessage && <p className={'message'}>{ responseMessage }</p> }
    </form>
  );
};

export default SimpleForm;
