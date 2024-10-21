const projectsData = [
    {
        image: "assets/images/blogr.jpg",
        languages: ["HTML", "CSS", "SCSS", "JavaScript"],
        description: "BLOGR LANDING PAGE",
        site: "https://barucomarco2091.github.io/blogr-landing-page/",
        code: "https://github.com/BarucoMarco2091/blogr-landing-page"
    },
    {
        image: "assets/images/mortgagecalculator.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "MORTGAGE REPAYMENT CALCULATOR",
        site: "https://barucomarco2091.github.io/Mortgage-calculator/",
        code: "https://github.com/BarucoMarco2091/Mortgage-calculator"
    },
    {
        image: "assets/images/comingsoonpage.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "BASE APPAREL COMING SOON PAGE",
        site: "https://barucomarco2091.github.io/coming-soon-page/",
        code: "https://github.com/BarucoMarco2091/coming-soon-page"
    },
    {
        image: "assets/images/productlistwithcart.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "PRODUCT LIST WITH CART",
        site: "https://barucomarco2091.github.io/Product-list-with-cart/",
        code: "https://github.com/BarucoMarco2091/Product-list-with-cart"
    },
    {
        image: "assets/images/sunnyside.jpg",
        languages: ["HTML", "CSS"],
        description: "AGENCY LANDING PAGE",
        site: "https://barucomarco2091.github.io/sunnysidenew/",
        code: "https://github.com/BarucoMarco2091/sunnysidenew"
    },
    {
        image: "assets/images/recipepage.jpg",
        languages: ["HTML", "CSS"],
        description: "RECIPE PAGE",
        site: "https://barucomarco2091.github.io/recipe-page/",
        code: "https://github.com/BarucoMarco2091/recipe-page"
    },
    {
        image: "assets/images/tipcalculator.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "TIP CALCULATOR APP",
        site: "https://barucomarco2091.github.io/tip-calculator/",
        code: "https://github.com/BarucoMarco2091/tip-calculator"
    },
    {
        image: "assets/images/interativeratingcomponent.jpg",
        languages: ["HTML", "CSS", "JavaScript"],
        description: "INTERATIVE RATING COMPONENT",
        site: "https://barucomarco2091.github.io/interactive-rating-component/",
        code: "https://github.com/BarucoMarco2091/interactive-rating-component",
    },
    {
        image: "assets/images/agecalculatorapp.jpg",
        languages: ["HTML", "SCSS", "JavaScript"],
        description: "AGE CALCULATOR APP",
        site: "https://barucomarco2091.github.io/agecalculatorapp/",
        code:"https://github.com/BarucoMarco2091/agecalculatorapp",
    },
    {
        image: "assets/images/fylolandingpage.jpg",
        languages: ["HTML", "SCSS", "JavaScript"],
        description: "FYLO LANDING PAGE",
        site: "https://barucomarco2091.github.io/fylo-landing-page/",
        code: "https://github.com/BarucoMarco2091/fylo-landing-page",
    },
    {
        image: "assets/images/frontebdquiz.webp",
        languages: ["HTML", "SCSS", "JavaScript"],
        description: "FRONTEND QUIZ APP",
        site: "https://barucomarco2091.github.io/quiz-frontend-mentor/",
        code: "https://github.com/BarucoMarco2091/quiz-frontend-mentor",
    },
];

const experienceData = [
    {
        technology: "HTML",
        experience: "1 Year Experience"
    },
    {
        technology: "CSS",
        experience: "1 Year Experience"
    },
    {
        technology: "Javascript",
        experience: "1 Year Experience"
    },
    {
        technology: "SCSS",
        experience: "Less Than 1 Year Experience"
    },
    {
        technology: "Angular",
        experience: "1 Year Experience"
    },
];

function load() {
    const experience = document.getElementById('experience-container');
    experienceData.forEach(function (item) {
        const newCardGrid = document.createElement('div');
        newCardGrid.className = 'new-card-grid';
        const newCardDiv = document.createElement('div');
        newCardDiv.className = 'new-card-div';
        newCardDiv.innerHTML =
            `
        <h2 class="new-card-title">${item.technology}</h2>
        <span class="new-card-paragraph">${item.experience}</span>
        `;
        experience.appendChild(newCardGrid);
        newCardGrid.appendChild(newCardDiv);
    });
};

function loadProjects() {
    const cardDiv = document.getElementById('card-grid-projects');
    projectsData.forEach((project) => {
        const cardProjectsDiv = document.createElement('div');
        cardProjectsDiv.className = 'card-projects-grid';
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML =
            `
        <div class="new-container">
        <img class="card-img" src="${project.image}" alt="${project.description}">
        </div>
        <h2 class="project-title">${project.description}</h2>
        <h2 class="card-description">${project.languages.join(',')}</h2>
        <a class="card-link active" href="${project.site}" target="_blank">VIEW PROJECT</a>
        <a class="card-link active" href="${project.code}" target="_blank">VIEW CODE</a>
        </div>
        `;
        cardProjectsDiv.appendChild(card);
        cardDiv.appendChild(cardProjectsDiv);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    loadProjects();
    load();
}); 