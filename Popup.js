import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Popup.css";

const DateInput = ({ handleDateChange, date, error }) => (
  <div className="form-group mb-3">
    <label className="form-label">
      Preferred Consultation Date<span className="text-danger">*</span>
    </label>
    <input
      type="date"
      value={date}
      name="preferred_date"
      onChange={handleDateChange}
      className="form-control"
      required
    />
    {error && <div className="text-danger error-message">{error}</div>}
  </div>
);

const PhoneInputGfg = ({ phone, setPhone, phoneError, setPhoneError }) => {
  const handlePhoneChange = (value) => {
    setPhone(value);
    const phoneDigits = value.replace(/\D/g, ''); // Extract digits from phone value
    if (phoneDigits.length < 10) {
      setPhoneError('Mobile number must contain exactly 10 digits.');
    } else {
      setPhoneError(null);
    }
  };

  return (
    <div className="form-group mb-3">
      <label className="form-label">
        Mobile Number<span className="text-danger">*</span>
      </label>
      <PhoneInput
        className="number form-control"
        required
        country={"in"}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          name: 'from_mobile',
          required: true,
          autoFocus: true
        }}
      />
      {phoneError && <div className="text-danger error-message">{phoneError}</div>}
    </div>
  );
};

const ContactUsPopup = ({ isOpen, onClose }) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState(null);
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nameValue)) {
      setNameError('Name should not contain numbers or special characters.');
    } else {
      setNameError(null);
    }
    setName(nameValue);
  };

  const handleCompanyNameChange = (e) => {
    const companyNameValue = e.target.value;
    if (companyNameValue.trim() === '') {
      setCompanyNameError('Company Name is required.');
    } else {
      setCompanyNameError(null);
    }
    setCompanyName(companyNameValue);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError('Please enter an email address from gmail.com, outlook.com, or yahoo.com');
    } else {
      setEmailError(null);
    }
    setEmail(emailValue);
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    const dayOfWeek = selectedDate.getDay();

    if (selectedDate < currentDate) {
      setDateError('The date cannot be a past date');
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
      setDateError('Please refrain from scheduling on weekends.');
    } else {
      setDate(e.target.value);
      setDateError(null);
    }
  };

  const handleMessageChange = (e) => {
    const messageValue = e.target.value;
    if (messageValue.trim() === '') {
      setMessageError('Your message cannot be empty.');
    } else {
      setMessageError(null);
    }
    setMessage(messageValue);
  };


  // "service_zi8xtlb",
  // "template_ayucl6i",
  // form.current,
  // "UpSr0sdz75bSvFIZq"


  const sendEmail = (e) => {
    e.preventDefault();
    if (nameError || dateError || emailError || phoneError || companyNameError || messageError) {
      return;
    }




    emailjs
      .sendForm("service_zi8xtlb", "template_sfrjnu6", form.current, "UpSr0sdz75bSvFIZq")
      .then(
        (response) => {
          console.log("ok!", response.status, response.text);
          onClose("Thanks for Reaching Out! We will email you the consultation slot based on your preferred date.");
        },
        (error) => {
          console.log("end", error);
          onClose("Failed to send message. Please try again.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="popup-title">Schedule Now!</p>
        <button className="close-button" onClick={() => onClose(null)}>
          ×
        </button>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group mb-3">
            <label className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="from_name"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && <div className="text-danger error-message">{nameError}</div>}
          </div>
          <div className="form-group mb-3">
            <label className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="from_email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <div className="text-danger error-message">{emailError}</div>}
          </div>
          <DateInput
            handleDateChange={handleDateChange}
            date={date}
            error={dateError}
          />
          <PhoneInputGfg
            phone={phone}
            setPhone={setPhone}
            phoneError={phoneError}
            setPhoneError={setPhoneError}
          />
          <div className="form-group mb-3">
            <label className="form-label">
              Company Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              name="company_name"
              value={companyName}
              onChange={handleCompanyNameChange}
              required
            />
            {companyNameError && <div className="text-danger error-message">{companyNameError}</div>}
          </div>
          <div className="form-group mb-3">
            <label className="form-label">
              Your Message<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              rows="4"
              required
            ></textarea>
            {messageError && <div className="text-danger error-message">{messageError}</div>}
          </div>
          <div className="form-group">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPopup;
