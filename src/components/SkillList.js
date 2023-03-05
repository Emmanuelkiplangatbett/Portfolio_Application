// import React, { useState } from 'react';

// const Skills = () => {
//   const [skills, setSkills] = useState([
//     { id: 1, name: 'HTML' },
//     { id: 2, name: 'CSS' },
//     { id: 3, name: 'JavaScript' }
//   ]);

//   const handleDelete = (skillId) => {
//     const updatedSkills = skills.filter(skill => skill.id !== skillId);
//     setSkills(updatedSkills);
//   };

//   const handleEdit = (skillId, newName) => {
//     const updatedSkills = skills.map(skill => {
//       if (skill.id === skillId) {
//         return { ...skill, name: newName };
//       } else {
//         return skill;
//       }
//     });
//     setSkills(updatedSkills);
//   };

//   const handleAdd = (newSkillName) => {
//     if (skills.length >= 10) {
//       alert('You have reached the maximum number of skills!');
//       return;
//     }

//     const newSkill = { id: Date.now(), name: newSkillName };
//     setSkills([...skills, newSkill]);
//   };

//   return (
//     <div>
//       <h2>Skills</h2>
//       <ul>
//         {skills.map(skill => (
//           <li key={skill.id}>
//             {skill.name}
//             <button onClick={() => handleDelete(skill.id)}>Delete</button>
//             <button onClick={() => handleEdit(skill.id, prompt('Enter new skill name'))}>Edit</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAdd(prompt('Enter new skill name'))}>Add Skill</button>
//     </div>
//   );
// };

// export default Skills;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Skill.css";

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [editSkill, setEditSkill] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await axios.get('http://localhost:9292/skills');
      setSkills(response.data);
    };
    fetchSkills();
  }, []);

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleEditSkillChange = (event) => {
    setEditSkill(event.target.value);
  };

  const handleEditSkill = (id) => {
    const skill = skills.find((s) => s.id === id);
    setEditSkill(skill.skill_name);
    setEditId(id);
  };

  const handleAddSkill = async () => {
    if (skills.length >= 10) {
      alert('You cannot have more than 10 skills.');
      return;
    }
    const response = await axios.post('http://localhost:9292/skills', { skill_name: newSkill });
    setSkills([...skills, response.data]);
    setNewSkill('');
  };

  const handleUpdateSkill = async () => {
    const response = await axios.patch(`http://localhost:9292/skills/${editId}`, { skill_name: editSkill });
    const updatedSkills = skills.map((s) => {
      if (s.id === editId) {
        s.skill_name = response.data.skill_name;
      }
      return s;
    });
    setSkills(updatedSkills);
    setEditSkill('');
    setEditId(null);
  };

  const handleDeleteSkill = async (id) => {
    await axios.delete(`http://localhost:9292/skills/${id}`);
    const updatedSkills = skills.filter((s) => s.id !== id);
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.skill_name}
            <button onClick={() => handleEditSkill(skill.id)}>Edit</button>
            <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newSkill} onChange={handleNewSkillChange} />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
      {editId && (
        <div>
          <input type="text" value={editSkill} onChange={handleEditSkillChange} />
          <button onClick={handleUpdateSkill} >Update Skill</button>
        </div>
      )}
    </div>
  );
};

export default SkillList;
