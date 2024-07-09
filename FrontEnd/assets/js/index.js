"use strict";

// *********************** CONSTANTS *********************** //

const URL = "http://localhost:5678/api/";

const mainGallery = document.querySelector(".gallery");
const projectTitle = document.querySelector("#portfolio h2");
const filters = document.querySelector(".filters");
const loginLink = document.querySelector("nav :nth-child(3)");

// *********************** VARIABLES *********************** //

let works = [];
let categories = [];

// *********************** FUNCTIONS *********************** //

const getWorks = async () => {
  const response = await fetch(URL + "works");

  works = await response.json();
}

const getCategories = async () => {
  const response = await fetch(URL + "categories");

  categories = await response.json();
}

const displayWorks = () => {
  for (const work of works) {
    console.log(work)

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    figure.id = work.categoryId;
    img.src = work.imageUrl;
    img.alt = work.title;
    figcaption.innerText = work.title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    mainGallery.appendChild(figure);
  }
}

const displayFilters = () => {
  const all = document.createElement("button");
  const allItem = document.createElement("li");

  all.id = "all";
  all.innerText = "Tous";

  allItem.appendChild(all);
  filters.appendChild(allItem);

  for (const category of categories) {
    const button = document.createElement("button");
    const li = document.createElement("li");

    button.id = category.id;
    button.innerText = category.name;

    li.appendChild(button);
    filters.appendChild(li);
  }
}
const getData = async () => {
  await getWorks();
  await getCategories();

  displayWorks();
  displayFilters();
} 

// *********************** MAIN *********************** //

getData();
