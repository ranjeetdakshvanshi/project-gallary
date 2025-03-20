const projects = [
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=4", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=5", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=10", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=4", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=5", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=10", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    
];

function createProjectCard({ title, desc, img, source }) {
    const card = document.createElement("div");
    card.classList.add("gallery-card");

    card.innerHTML = `
        <img src="${img}" alt="${title}">
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${source}" class="view-code">View Source Code</a>
    `;
    return card;
}

function displayProjects(filterText = "") {
    const container = document.getElementById("galleryContainer");
    container.innerHTML = "";

    const filteredProjects = projects.filter(({ title }) =>
        title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredProjects.length === 0) {
        container.innerHTML = `<p class="no-results">No matching projects found.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    filteredProjects.forEach(project => fragment.appendChild(createProjectCard(project)));
    container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", () => {
    displayProjects();

    document.getElementById("searchInput").addEventListener("input", (e) => {
        displayProjects(e.target.value);
    });
});
