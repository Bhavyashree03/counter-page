import React, { useState, useEffect } from 'react';

function FormFilling() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    collegeId: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showDetails, setShowDetails] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  useEffect(() => {
    if (submittedData) {
      // Change document title only when form is submitted
      document.title = "Form Submitted";
    }
  }, [submittedData]);

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="div-container">
      <div className="form-container">
        <p>Student Details</p>
        <hr />
        <p>Name: </p>
        <input
          name="name"
          placeholder="Enter Your Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <p>Email: </p>
        <input
          name="email"
          placeholder="Enter Your Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>College: </p>
        <input
          name="college"
          placeholder="Enter Your College"
          type="text"
          value={formData.college}
          onChange={handleChange}
        />
        <p>College ID: </p>
        <input
          name="collegeId"
          placeholder="Enter Your College ID"
          type="text"
          value={formData.collegeId}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {submittedData && (
        <>
          <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="submitted-details">
              <p>Submitted Details:</p>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>College: {submittedData.college}</p>
              <p>College ID: {submittedData.collegeId}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FormFilling;
