import React, { useState } from 'react';
import './InterestPartnership.css';

const InterestPartnership = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    companyRole: '',
    contactNumber: '',
    proposal: '',
    attachment: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.companyName) tempErrors.companyName = 'Company Name is required';
    if (!formData.yourName) tempErrors.yourName = 'Your Name is required';
    if (!formData.companyRole) tempErrors.companyRole = 'Company Role is required';
    if (!formData.contactNumber) {
      tempErrors.contactNumber = 'Contact Number is required';
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      tempErrors.contactNumber = 'Contact Number must be a valid number';
    } else if (formData.contactNumber.length<11){
      tempErrors.contactNumber = 'Contact Number must be at least 11 digit long'
    }
    if (!formData.proposal) {
        tempErrors.proposal = 'Proposal is required';
    } else if (formData.proposal.length < 25) {
        tempErrors.proposal = 'Proposal must be at least 25 characters long';
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
    <div className='interest-main'>
      <div className='interest-body'>
        <p className='a'>Interested in Partnership?</p>
        <p className='b'>The Smart Factory Ecosystem</p>
        <p className='c'>We're open to collaborations with businesses and organizations. Reach out to us via the contact form below to discuss potential partnerships and mutual success.</p>
        <form className='interest interestForm' onSubmit={handleSubmit}>
          <div className='interest-1'>
            <input
              className='interest-form A'
              type="text"
              name="companyName"
              placeholder='Company Name'
              value={formData.companyName}
              onChange={handleChange}
            />
            {/* {errors.companyName && <p className="error error2">{errors.companyName}</p>} */}
            <input
              className='interest-form A'
              type="text"
              name="yourName"
              placeholder='Your Name'
              value={formData.yourName}
              onChange={handleChange}
            />
            {/* {errors.yourName && <p className="error error2">{errors.yourName}</p>} */}
          </div>
          <div className='interest-2'>
            <input
              className='interest-form A'
              type="text"
              name="companyRole"
              placeholder='Company Role'
              value={formData.companyRole}
              onChange={handleChange}
            />
            {/* {errors.companyRole && <p className="error error2">{errors.companyRole}</p>} */}
            <input
              className='interest-form A'
              type="text"
              name="contactNumber"
              placeholder='Contact Number'
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {/* {errors.contactNumber && <p className="error error2">{errors.contactNumber}</p>} */}
          </div>
          <textarea
            className='interest-form B'
            name="proposal"
            placeholder='Proposal'
            value={formData.proposal}
            onChange={handleChange}
          />
          {/* {errors.proposal && <p className="error error2">{errors.proposal}</p>} */}
          <input
            className='interest-form C'
            type="text"
            name="attachment"
            placeholder='Attachment (if any)'
            value={formData.attachment}
            onChange={handleChange}
          />
          <button>Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default InterestPartnership;
