import React, { useState } from 'react';

const ResumeForm = () => {
  const [resumeInfo, setResumeInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    educationDetails: [
      { collegeName: '', yearOfPassing: '', grade: '' }
    ],
    projectDetails: [
      { projectName: '', description: '', computerSkill: '' }
    ]
  });

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEducationDetailsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationDetails = [...resumeInfo.educationDetails];
    updatedEducationDetails[index][name] = value;
    setResumeInfo(prevState => ({ ...prevState, educationDetails: updatedEducationDetails }));
  };

  const handleProjectDetailsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjectDetails = [...resumeInfo.projectDetails];
    updatedProjectDetails[index][name] = value;
    setResumeInfo(prevState => ({ ...prevState, projectDetails: updatedProjectDetails }));
  };

  const addEducationDetail = () => {
    setResumeInfo(prevState => ({
      ...prevState,
      educationDetails: [...prevState.educationDetails, { collegeName: '', yearOfPassing: '', grade: '' }]
    }));
  };

  const addProjectDetail = () => {
    setResumeInfo(prevState => ({
      ...prevState,
      projectDetails: [...prevState.projectDetails, { projectName: '', description: '', computerSkill: '' }]
    }));
  };

  const handleDeleteEducationDetail = (index) => {
    const updatedEducationDetails = [...resumeInfo.educationDetails];
    updatedEducationDetails.splice(index, 1);
    setResumeInfo(prevState => ({ ...prevState, educationDetails: updatedEducationDetails }));
  };

  const handleDeleteProjectDetail = (index) => {
    const updatedProjectDetails = [...resumeInfo.projectDetails];
    updatedProjectDetails.splice(index, 1);
    setResumeInfo(prevState => ({ ...prevState, projectDetails: updatedProjectDetails }));
  };

  const handleSubmit = () => {
    console.log(resumeInfo);
  };

  return (
    <div>
      <div>
        <h1>Contact Details</h1>
        <h3>Name</h3>
        <input type='text' placeholder='Enter Your Name' name='name' onChange={handleContactDetailsChange} />
        <h3>Last Name</h3>
        <input type='text' placeholder='Enter Your Last Name' name='lastName' onChange={handleContactDetailsChange} />
        <h3>Address</h3>
        <input type='text' placeholder='Enter Your Address' name='address' onChange={handleContactDetailsChange} />
        <h3>Email</h3>
        <input type='text' placeholder='Enter Your Email' name='email' onChange={handleContactDetailsChange} />
      </div>

      <div>
        <h1>Education Details</h1>
        <button onClick={addEducationDetail}>Add</button>
        {resumeInfo.educationDetails.map((edu, index) => (
          <div style={{ display: 'flex' }} key={index}>
            <div>
              <h3>College/School Name</h3>
              <input type='text' placeholder='Enter Your College/School Name' name='collegeName' value={edu.collegeName} onChange={(e) => handleEducationDetailsChange(index, e)} />
            </div>
            <div>
              <h3>Year Of Passing</h3>
              <input type='text' placeholder='Enter Year Of Passing' name='yearOfPassing' value={edu.yearOfPassing} onChange={(e) => handleEducationDetailsChange(index, e)} />
            </div>
            <div>
              <h3>Grade</h3>
              <input type='text' placeholder='Enter Your Grade' name='grade' value={edu.grade} onChange={(e) => handleEducationDetailsChange(index, e)} />
            </div>
            <div>
            <h3>Actions</h3>
            <button onClick={() => handleDeleteEducationDetail(index)}>Delete</button>            </div>
            
          </div>
        ))}
      </div>

      <div>
        <h1>Project Details</h1>
        <button onClick={addProjectDetail}>Add</button>
        {resumeInfo.projectDetails.map((proj, index) => (
          <div style={{ display: 'flex' }} key={index}>
            <div>
              <h3>Project Name</h3>
              <input type='text' placeholder='Enter Your Project Name' name='projectName' value={proj.projectName} onChange={(e) => handleProjectDetailsChange(index, e)} />
            </div>
            <div>
              <h3>Description</h3>
              <input type='text' placeholder='Enter Description' name='description' value={proj.description} onChange={(e) => handleProjectDetailsChange(index, e)} />
            </div>
            <div>
              <h3>Computer Skill</h3>
              <input type='text' placeholder='Enter Computer Skill' name='computerSkill' value={proj.computerSkill} onChange={(e) => handleProjectDetailsChange(index, e)} />
            </div>
            <div>
              <h3>Actions</h3>
              <button onClick={() => handleDeleteProjectDetail(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResumeForm;