import React, { useState } from 'react';
import SkillsPage from './SkillsPage';
import UserInfo from './UserInfo';

const ConditionalFormComponent = () => {
  const [tab, setTab] = useState('user info');
  const [skills, setSkills] = useState([]);

  return (
    <div className='mt-5'>
      <h2>Welcome to Conditional Rendering Component!</h2>
      <button className={`btn ${tab == 'user info' ? 'btn-success' : 'btn-secondary'} m-2`} onClick={() => setTab('user info')}>User info</button>
      <button className={`btn ${tab == 'skills' ? 'btn-success' : 'btn-secondary'}`} onClick={() => setTab('skills')}>Skills</button>

      {tab == 'user info' && <UserInfo />}
      {tab == 'skills' && <SkillsPage skills={skills} setSkills={setSkills}  />}
    </div>
  );
};

export default ConditionalFormComponent;
