import React, {useState} from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Contacts.css';

const Contacts = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    industry: 'Finance',
    concern: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for sharing your concern with us. We appreciate your input. Our team will review your submission and address your issue shortly. You will receive a response via email.");
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };


  return (
    <div className="contacts-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <h1> Contact Us </h1>
      <div className="form-container">
      <form className="form">
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Your Industry:
          <select name="industry" value={formData.industry} onChange={handleChange}>
            <option value="Finance">Finance</option>
            <option value="Banking">Banking</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>
        </label>
        <label>
          Your Concern:
          <textarea name="concern" value={formData.concern} onChange={handleChange}></textarea>
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
    <br/> <br /> <br /> <br />
    </div>
  )
}

export default Contacts