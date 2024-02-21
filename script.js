const projectsContainer = document.getElementById("projects-container");

const portfolios = [
  {
    id: 1,
    title: "Food Api",
    description:
      "Food API, an innovative and essential component of our project, is designed to revolutionize the way we engage with culinary experiences. This API serves as a gateway to a rich repository of gastronomic information, offering a diverse spectrum of recipes, ingredient details, and cuisine insights. Seamlessly integrated into our platform, Food API empowers users to explore, discover, and appreciate the world of food in a dynamic and interactive manner. Whether you're a seasoned chef looking for inspiration or a home cook eager to try something new, Food API provides a user-friendly interface for effortless navigation. With real-time updates, customizable collections, and a wealth of culinary knowledge at your fingertips, Food API is not just a tool but a culinary companion that enhances the joy of cooking and sharing delectable meals.",
    technologies: ["React", "Redux", "CSS", "NodeJs", "Sequelize"],

    image:
      "https://drive.google.com/uc?export=view&id=1XeyDq7I30i5zFVWjQQGhQTW-8VQtP9ew",
    url: "https://food-api-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Dogs Api",
    description:
      "Dogs API, the heart of our project, brings a delightful and informative touch to the world of canines. This API acts as a comprehensive database, offering a treasure trove of details about various dog breeds, their characteristics, and care requirements. Seamlessly integrated into our platform, Dogs API opens a door to a canine wonderland, allowing users to explore breeds, learn about their histories, and make informed decisions about pet adoption. With an intuitive interface, users can easily search for specific breeds, view images, and access essential information such as size, temperament, and exercise needs. Whether you're a passionate dog enthusiast, a prospective pet owner, or simply curious about the furry companions that enrich our lives, Dogs API enhances your experience by providing a centralized hub for canine knowledge. Join us in celebrating the diverse and fascinating world of dogs with Dogs API.",
    technologies: ["React", "Redux", "CSS", "NodeJs", "Sequelize"],
    image:
      "https://drive.google.com/uc?export=view&id=1HGh55TDKSY12H92jhEOxRvO4ATeLonQ4",
    url: "https://dogs-api-lilac.vercel.app/",
  },
];

const customTechnologies = (arr) => {
  return arr
    .map(
      (item, index) => `<p class="tech-item" id="${index}-${item}">${item}</p>`
    )
    .join("");
};

const displayProjects = (arr) => {
  projectsContainer.innerHTML = arr
    .map(({ id, title, description, technologies, image, url }) => {
      return `
            <div class="project-card" id="project-${id}">
                <a href="${url}" target="_blank"><img src="${image}" alt="${id} - ${title}" class="project-image"/></a>
                <h2 class="project-title">${title}</h2>
                <p class="project-description">${
                  description.length > 50
                    ? description.slice(0, 50) + "..."
                    : description
                }</p>
                <div class="tech-container">
                    ${customTechnologies(technologies)}
                </div>
            </div>
        `;
    })
    .join("");
};

displayProjects(portfolios);
