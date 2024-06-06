"use strict";

// *********************** CONSTANTS *********************** //

const URL = "http://localhost:5678/api/";

const mainGallery   = document.querySelector(".gallery");
const projectTitle  = document.querySelector("#portfolio h2");
const loginLink     = document.querySelector("nav :nth-child(3)");

// *********************** VARIABLES *********************** //

let works = [];
let categories = [];

// *********************** FUNCTIONS *********************** //

// TODO : créer une fonction getWorks et une fonction getCategories

const getWorks = async () => {
    const response = await fetch("http://localhost:5678/api/works");
    allWorks = await response.json();
};

const getCategories = async () => {
    const response = await fetch("https://localhost:5678/api/catgories");
    allCategories = await response.json();
};

// *********************** MAIN *********************** //

console.log("mainGallery : ", typeof mainGallery, mainGallery);
console.log("projectTitle : ", typeof projectTitle, projectTitle);
console.log("loginLink : ", typeof loginLink, loginLink);
