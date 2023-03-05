// import React, { useState } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([
//     { id: 1, name: 'Project 1', description: 'This is project 1.' },
//     { id: 2, name: 'Project 2', description: 'This is project 2.' },
//     { id: 3, name: 'Project 3', description: 'This is project 3.' }
//   ]);

//   const handleDelete = (projectId) => {
//     const updatedProjects = projects.filter(project => project.id !== projectId);
//     setProjects(updatedProjects);
//   };

//   const handleEdit = (projectId, newProjectName, newProjectDescription) => {
//     const updatedProjects = projects.map(project => {
//       if (project.id === projectId) {
//         return { ...project, name: newProjectName, description: newProjectDescription };
//       } else {
//         return project;
//       }
//     });
//     setProjects(updatedProjects);
//   };

//   const handleAdd = (newProjectName, newProjectDescription) => {
//     const newProject = { id: Date.now(), name: newProjectName, description: newProjectDescription };
//     setProjects([...projects, newProject]);
//   };

//   return (
//     <div>
//       <h2>Projects</h2>
//       <ul>
//         {projects.map(project => (
//           <li key={project.id}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <button onClick={() => handleDelete(project.id)}>Delete</button>
//             <button onClick={() => handleEdit(project.id, prompt('Enter new project name'), prompt('Enter new project description'))}>Edit</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAdd(prompt('Enter new project name'), prompt('Enter new project description'))}>Add Project</button>
//     </div>
//   );
// };

// export default Projects;



// import React, { useState, useEffect } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9292/projects")
//       .then(response => response.json())
//       .then(data => setProjects(data));
//   }, []);

//   const handleDelete = (projectId) => {
//     const updatedProjects = projects.filter(project => project.id !== projectId);
//     setProjects(updatedProjects);
//   };

//   const handleEdit = (projectId, newProjectTitle, newProjectDescription) => {
//     const updatedProjects = projects.map(project => {
//       if (project.id === projectId) {
//         return { ...project, title: newProjectTitle, description: newProjectDescription };
//       } else {
//         return project;
//       }
//     });
//     setProjects(updatedProjects);
//   };

//   const handleAdd = (newProjectTitle, newProjectDescription) => {
//     const newProject = { id: Date.now(), name: newProjectTitle, description: newProjectDescription };
//     setProjects([...projects, newProject]);
//   };

//   return (
//     <div>
//       <h2>Projects</h2>
//       <ul>
//         {projects.map(project => (
//           <li key={project.id}>
//             <h3>{project.project_title}</h3>
//             <p>{project.project_description}</p>
//             <button onClick={() => handleDelete(project.id)}>Delete</button>
//             <button onClick={() => handleEdit(project.id, prompt('Enter new project title'), prompt('Enter new project description'))}>Edit</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAdd(prompt('Enter new project title'), prompt('Enter new project description'))}>Add Project</button>
//     </div>
//   );
// };

// export default Projects;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "./ProjectList.css";

// function ProjectList() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:9292/projects")
//       .then((response) => setProjects(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddProject = () => {
//     const newProject = {
//       project_title: "New Project",
//       project_description: "This is a new project",
//       project_language: "JavaScript",
//       user_id: 1,
//     };
//     axios
//       .post("http://localhost:9292/projects", newProject)
//       .then((response) => setProjects([...projects, response.data]))
//       .catch((error) => console.log(error));
//   };

//   const handleUpdateProject = (id) => {
//     const projectToUpdate = projects.find((project) => project.id === id);
//     const newTitle = prompt("Enter new title:", projectToUpdate.project_title);
//     const newDescription = prompt("Enter new description:", projectToUpdate.project_description);
//     const newLanguage = prompt("Enter new language:", projectToUpdate.project_language);
//     const updatedProject = {
//       project_title: newTitle,
//       project_description: newDescription,
//       project_language: newLanguage,
//       user_id: projectToUpdate.user_id,
//     };
//     axios
//       .patch(`http://localhost:9292/projects/${id}`, updatedProject)
//       .then((response) => {
//         const updatedProjects = projects.map((project) =>
//           project.id === id ? response.data : project
//         );
//         setProjects(updatedProjects);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleDeleteProject = (id) => {
//     axios
//       .delete(`http://localhost:9292/projects/${id}`)
//       .then(() => {
//         const updatedProjects = projects.filter((project) => project.id !== id);
//         setProjects(updatedProjects);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <h1>Project List</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>
//             <h3>{project.project_title}</h3>
//             <p>{project.project_description}</p>
//             <p>{project.project_language}</p>
//             <button onClick={() => handleUpdateProject(project.id)}>Update</button>
//             <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddProject}>Add Project</button>
//     </div>
//   );
// }

// export default ProjectList;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ProjectList() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:9292/projects")
//       .then((response) => setProjects(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddProject = () => {
//     const newTitle = prompt("Enter project title:");
//     const newDescription = prompt("Enter project description:");
//     const newLanguage = prompt("Enter project language:");
//     const newUser_id = prompt("Enter user id:");
//     const newProject = {
//       project_title: newTitle,
//       project_description: newDescription,
//       project_language: newLanguage,
//       user_id: newUser_id,
//     };
//     axios
//       .post("http://localhost:9292/projects", newProject)
//       .then((response) => setProjects([...projects, response.data]))
//       .catch((error) => console.log(error));
//   };

//   const handleUpdateProject = (id) => {
//     const projectToUpdate = projects.find((project) => project.id === id);
//     const newTitle = prompt("Enter new title:", projectToUpdate.project_title);
//     const newDescription = prompt("Enter new description:", projectToUpdate.project_description);
//     const newLanguage = prompt("Enter new language:", projectToUpdate.project_language);
//     const newUser_id = prompt("Enter new user id:", projectToUpdate.user_id);
//     const updatedProject = {
//       project_title: newTitle,
//       project_description: newDescription,
//       project_language: newLanguage,
//       user_id: newUser_id,
//     };
//     axios
//       .patch(`http://localhost:9292/projects/${id}`, updatedProject)
//       .then((response) => {
//         const updatedProjects = projects.map((project) =>
//           project.id === id ? response.data : project
//         );
//         setProjects(updatedProjects);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleDeleteProject = (id) => {
//     axios
//       .delete(`http://localhost:9292/projects/${id}`)
//       .then(() => {
//         const updatedProjects = projects.filter((project) => project.id !== id);
//         setProjects(updatedProjects);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <h1>Project List</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>
//             <h3>{project.project_title}</h3>
//             <p>{project.project_description}</p>
//             <p>{project.project_language}</p>
//             <p>user id: {project.user_id}</p>
//             <button onClick={() => handleUpdateProject(project.id)}>Update</button>
//             <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddProject}>Add Project</button>
//     </div>
//   );
// }

// export default ProjectList;

import React, { useState, useEffect } from "react";
import axios from "axios";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9292/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddProject = () => {
    const newTitle = prompt("Enter project title:");
    const newDescription = prompt("Enter project description:");
    const newLanguage = prompt("Enter project language:");
    const newUser_id = prompt("Enter user id:");
    const newProject = {
      project_title: newTitle,
      project_description: newDescription,
      project_language: newLanguage,
      user_id: newUser_id,
    };
    axios
      .post("http://localhost:9292/projects", newProject)
      .then((response) => setProjects([...projects, response.data]))
      .catch((error) => console.log(error));
  };

  const handleUpdateProject = (id) => {
    const projectToUpdate = projects.find((project) => project.id === id);
    const newTitle = prompt("Enter new title:", projectToUpdate.project_title);
    const newDescription = prompt("Enter new description:", projectToUpdate.project_description);
    const newLanguage = prompt("Enter new language:", projectToUpdate.project_language);
    const newUser_id = prompt("Enter new user id:", projectToUpdate.user_id);
    const updatedProject = {
      project_title: newTitle,
      project_description: newDescription,
      project_language: newLanguage,
      user_id: newUser_id,
    };
    axios
      .patch(`http://localhost:9292/projects/${id}`, updatedProject)
      .then((response) => {
        const updatedProjects = projects.map((project) =>
          project.id === id ? response.data : project
        );
        setProjects(updatedProjects);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteProject = (id) => {
    axios
      .delete(`http://localhost:9292/projects/${id}`)
      .then(() => {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.project_title}</h3>
            <p>{project.project_description}</p>
            <p>{project.project_language}</p>
            <p>user id: {project.user_id}</p>
            <button onClick={() => handleUpdateProject(project.id)}>Update</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
}

export default ProjectList;


