import React from "react";
import { useParams, Link } from "react-router-dom";

const projectsData = {
  1: {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/clean-water.jpg",
    status: "ongoing",
    fullDescription:
      "Our Clean Water Initiative aims to address the global water crisis by providing sustainable access to clean and safe drinking water in rural communities across developing countries. Through the installation of water purification systems, well drilling, and community education programs, we are working to reduce water-borne diseases and improve overall health and quality of life.",
    impact:
      "To date, we have provided clean water access to over 100,000 people in 50 communities.",
    startDate: "January 2020",
    endDate: "Ongoing",
  },
  2: {
    id: 2,
    title: "Education for All",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/education.jpg",
    status: "ongoing",
    fullDescription:
      "Our Clean Water Initiative aims to address the global water crisis by providing sustainable access to clean and safe drinking water in rural communities across developing countries. Through the installation of water purification systems, well drilling, and community education programs, we are working to reduce water-borne diseases and improve overall health and quality of life.",
    impact:
      "To date, we have provided clean water access to over 100,000 people in 50 communities.",
    startDate: "January 2020",
    endDate: "Ongoing",
  },
  3: {
    id: 3,
    title: "Sustainable Agriculture",
    description:
      "Providing clean and safe drinking water to rural communities in developing countries.",
    image: "/Sustainable-Agriculture.png",
    status: "ongoing",
    fullDescription:
      "Our Clean Water Initiative aims to address the global water crisis by providing sustainable access to clean and safe drinking water in rural communities across developing countries. Through the installation of water purification systems, well drilling, and community education programs, we are working to reduce water-borne diseases and improve overall health and quality of life.",
    impact:
      "To date, we have provided clean water access to over 100,000 people in 50 communities.",
    startDate: "January 2020",
    endDate: "Ongoing",
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl mt-8 font-extrabold text-gray-900 sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500">{project.description}</p>
        </div>

        <div className="mt-12">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-xl"
            src={project.image}
            alt={project.title}
          />

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900">
              About this Project
            </h3>
            <p className="mt-4 text-gray-600">{project.fullDescription}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Status</dt>
              <dd className="mt-2 text-sm text-gray-500">{project.status}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Impact</dt>
              <dd className="mt-2 text-sm text-gray-500">{project.impact}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Start Date</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {project.startDate}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">End Date</dt>
              <dd className="mt-2 text-sm text-gray-500">{project.endDate}</dd>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-lime-300"
            >
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
