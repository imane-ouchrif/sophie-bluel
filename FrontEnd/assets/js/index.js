"use strict";

// *********************** CONSTANTS *********************** //

const URL = "http://localhost:5678/api/";

const mainGallery = document.querySelector(".gallery");
const projectTitle = document.querySelector("#portfolio h2");
const loginLink = document.querySelector("nav :nth-child(3)");

// *********************** VARIABLES *********************** //

let works = [];
let categories = [];

// *********************** FUNCTIONS *********************** //

const getWorks = async () => {
  const response = await fetch(URL + "works");

  return await response.json();
}

const getCategories = async () => {
  const response = await fetch(URL + "categories");

  return await response.json();
}

const getData = async () => {
  works = await getWorks();
  categories = await getCategories();
} 

// *********************** MAIN *********************** //

getData();

console.log("works : ", typeof works, works);
console.log("categories : ", typeof categories, categories);
