import React, { useState } from "react";
import miamateur from "../assets/images/miamateur.png";
import routesync from "../assets/images/routesync.png";
import mangacollect from "../assets/images/mangacollect.png";
import maxiasso from "../assets/images/maxiasso.png"

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      id: 1,
      title: "Miamateur",
      description: "Cooking website",
      img: miamateur,
    },
    {
      id: 2,
      title: "RouteSync",
      description: "route optimization for paris subway",
      img: routesync,
    },
    {
      id: 3,
      title: "MangaCollect",
      description: "Book seller",
      img: mangacollect,
    },
    {
      id: 4,
      title: "MaxiAsso",
      description: "asso",
      img: maxiasso,
    }
  ];

  return (
    <>
      <div id="projects" className=" bg-[#171717] text-white py-32">
        <h1 className="text-center text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {projects.map((item, key) => <ProjectCard key={key} item={item}/>)}
        </div>
      </div>
    </>
  );
}

export default Projects;
