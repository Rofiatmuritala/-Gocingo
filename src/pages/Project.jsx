// src/pages/Projects.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/clean-water.jpg",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Building schools and providing educational resources in underprivileged areas.",
    image: "/education.jpg",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Sustainable Agriculture",
    description:
      "Teaching sustainable farming techniques to improve food security and livelihoods.",
    image: "/Sustainable-Agriculture.png",
    status: "ongoing",
  },
  {
    id: 4,
    title: "Healthcare Outreach",
    description:
      "Mobile clinics providing essential healthcare services to remote communities.",
    image: "/Health.jpg",
    status: "completed",
  },
  {
    id: 5,
    title: "Renewable Energy",
    description: "Implementing solar power solutions in off-grid communities.",
    image: "/Energy.jpg",
    status: "completed",
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.status === filter
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore the initiatives that are making a difference in communities
            around the world.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${
                filter === "all"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-4 py-2 rounded-md ${
                filter === "ongoing"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md ${
                filter === "completed"
                  ? "bg-lime-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Completed
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white overflow-hidden shadow-lg rounded-lg"
              >
                <Link to={`/projects/${project.id}`}>
                  <img
                    className="w-full h-48 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          project.status === "ongoing"
                            ? "bg-lime-100 text-lime-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {project.status === "ongoing" ? "Ongoing" : "Completed"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// import React, { useEffect, useState } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch('/path/to/projects.json')
//       .then(response => response.json())
//       .then(data => setProjects(data.projects));
//   }, []);

//   return (
//     <div>
//       {projects.map(project => (
//         <div key={project.id}>
//           <h2>{project.title}</h2>
//           <p>{project.description}</p>
//           <img src={project.image} alt={project.title} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;
