import React from "react";
import "../stylesheet/technologies.css";
import techno from "../assests/technologies.svg";
import react from "../assests/techstack/react.svg";
import html from "../assests/techstack/html.svg";
import css from "../assests/techstack/css.svg";
import js from "../assests/techstack/js.svg";
import figma from "../assests/techstack/figma.svg";
import netlify from "../assests/techstack/netlify.svg";
import php from "../assests/techstack/php.svg";
import postman from "../assests/techstack/postman.svg";
import docker from "../assests/techstack/docker.svg";
import tailwind from "../assests/techstack/tailwind.svg";
import java from "../assests/techstack/java.svg";
import aws from "../assests/techstack/aws.svg";
import mongo from "../assests/techstack/mongo.svg";
import github from "../assests/techstack/github.svg";
import azure from "../assests/techstack/azure.svg";
import gcloud from "../assests/techstack/gcloud.svg";
import c from "../assests/techstack/c++.svg";
import vue from "../assests/techstack/vue.svg";
import dj from "../assests/techstack/dj.svg";
import vscode from "../assests/techstack/vscode.svg";
import vite from "../assests/techstack/vite.svg";
import git from "../assests/techstack/git.svg";
import angular from "../assests/techstack/angular.svg";

const data = [
  {
    img: react,
    techName: "React",
  },
  {
    img: html,
    techName: "HTML",
  },
  {
    img: css,
    techName: "CSS",
  },
  {
    img: js,
    techName: "Java Script",
  },
  {
    img: figma,
    techName: "Figma",
  },
  {
    img: netlify,
    techName: "Netlify",
  },
  {
    img: php,
    techName: "PHP",
  },
  {
    img: angular,
    techName: "Angular",
  },
  {
    img: git,
    techName: "Git",
  },
  {
    img: vite,
    techName: "Vite",
  },
  {
    img: vscode,
    techName: "VScode",
  },
  {
    img: dj,
    techName: "DJ",
  },
  {
    img: vue,
    techName: "Vue",
  },
  {
    img: c,
    techName: "C++",
  },
  {
    img: azure,
    techName: "Azure",
  },
  {
    img: github,
    techName: "GitHub",
  },
  {
    img: mongo,
    techName: "MongoDB",
  },
  {
    img: aws,
    techName: "AWS",
  },
  {
    img: postman,
    techName: "Postman",
  },
  {
    img: java,
    techName: "JAVA",
  },
  {
    img: tailwind,
    techName: "Tailwind",
  },
  {
    img: docker,
    techName: "Docker",
  },
];

function Tools_and_Technologies() {
  return (
    <div className="technologies">
      <div className="technologies-title">Tools and Technologies </div>
      <div className="technologies-body">
        <div className="technologies-img">
          <img src={techno} alt="" />
        </div>
        <div className="technologies-feed">
          {data.map((card, index) => (
            <div className="tech-card" key={card.techName}>
              <div className="tech-img">
                <img src={card.img} alt="" />
              </div>
              <div className="tech-name">{card.techName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools_and_Technologies;
