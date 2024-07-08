import React, { useState } from 'react';
import image1 from '../Images/Information Desk/side-view-line-call-centre-employees-are-smiling 1.png';
import './HaveQuestion.css';

const HaveQuestion = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    requirements: '',
    attachment: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      tempErrors.email = 'E-mail is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'E-mail is invalid';
    }
    if (!formData.requirements) {
        tempErrors.requirements = 'Requirements or Problems are required';
    } else if (formData.requirements.length > 25) {
        tempErrors.requirements = 'Requrements or Problems should be at least 25 charecter'
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
      // Perform the form submission logic here (e.g., send data to server)
    }
  };

  return (
    <div className='question-body'>
      <p className='queation-heading'>Have a question?</p>
      <p className='question-p'>
        We're here to help! Feel free to reach out to us via the contact form below, and we will contact you within a business day.
      </p>

      <div className='question-content'>
        <div className='question-body-left'>
          <div className='question-body-left-image'>
            <img src={image1} alt="" />
          </div>
        </div>
        <div className='question-body-right'>
          <div className='question-form'>
            <form className='form' onSubmit={handleSubmit}>
              <input
                className='question-input'
                type="text"
                name="fullName"
                placeholder='Full Name'
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}

              <input
                className='question-input'
                type="text"
                name="email"
                placeholder='E-mail'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <textarea
                className='question-input textarea'
                name="requirements"
                placeholder='Requirements or Problems'
                value={formData.requirements}
                onChange={handleChange}
              />
              {errors.requirements && <p className="error">{errors.requirements}</p>}

              <input
                className='question-input'
                type="text"
                name="attachment"
                placeholder='Attachment link (if any)'
                value={formData.attachment}
                onChange={handleChange}
              />

              <button className='form-button'>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
