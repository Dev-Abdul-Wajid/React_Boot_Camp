import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SkillsPage = () => {
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '' && experience !== '') {
      setSkills((prevSkills) => [...prevSkills, `${newSkill}, ${experience} year`]);
      setNewSkill('');
      setExperience('')

      // toast.success('Skill Added successfully!', {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 1000,
      //   hideProgressBar: true,
      // });
    }
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);

    // toast.info('Skill Deleted successfully!', {
    //   position: toast.POSITION.TOP_CENTER,
    //   autoClose: 1000,
    //   hideProgressBar: true,
    // });
  };

  return (
    <div>
      <h4>Skills page</h4>
      <div>
        <input type="text" placeholder="Skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
        <input className='mx-2' type="number" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <button className='btn btn-primary' onClick={addSkill}>Add Skill</button>
      </div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className='mb-2'>
            {skill}
            <button className='btn btn-danger mx-2' onClick={() => deleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default SkillsPage;
