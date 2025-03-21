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
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=12", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=13", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=14", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=15", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=16", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=17", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=18", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=19", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=11", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=21", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=31", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=41", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=51", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "koke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },{ title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=4", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=5", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=10", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=12", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=13", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=14", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=15", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=16", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=17", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=18", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=19", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=11", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=21", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=31", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=41", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=51", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "koke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },{ title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=4", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=5", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=10", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=12", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=13", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=14", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=15", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=16", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=17", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=18", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=19", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=11", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=21", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=31", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=41", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=51", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "koke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },{ title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=1", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=2", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=3", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=4", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=5", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=10", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=12", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=13", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=14", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=15", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=16", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=17", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=18", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=19", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=11", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=21", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=31", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=41", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=51", source: "#" },
    { title: "Joke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=6", source: "#" },
    { title: "Weather App", desc: "A simple weather app.", img: "https://picsum.photos/250?random=7", source: "#" },
    { title: "Stock Tracker", desc: "Track live stock market data.", img: "https://picsum.photos/250?random=8", source: "#" },
    { title: "koke Generator", desc: "Get random jokes.", img: "https://picsum.photos/250?random=9", source: "#" }
    
    
];

function createProjectCard({ title, desc, img, source }) {
    const card = document.createElement("div");
    card.classList.add("gallery-card");
    card.innerHTML = `
        <img data-src="${img}" class="lazy-load" alt="${title}">
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${source}" class="view-code">View Source Code</a>
    `;
    return card;
}

function displayProjects(filterText = "") {
    const container = document.getElementById("galleryContainer");
    const counterElement = document.getElementById("downloadCounter");

    if (!container) return;

    container.innerHTML = "";
    const filteredProjects = projects.filter(({ title }) =>
        title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredProjects.length === 0) {
        container.innerHTML = `<p class="no-results">No matching projects found.</p>`;
        if (counterElement) counterElement.style.display = "none"; // Hide counter
        return;
    }

    if (counterElement) counterElement.style.display = "block"; // Show counter

    const fragment = document.createDocumentFragment();
    filteredProjects.forEach(project => fragment.appendChild(createProjectCard(project)));
    container.appendChild(fragment);

    lazyLoadImages(); // Initialize lazy loading after adding new elements
}

// 🔹 Lazy Load Images using Intersection Observer
function lazyLoadImages() {
    const images = document.querySelectorAll(".lazy-load");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute("data-src");
                    img.removeAttribute("data-src");
                    img.classList.remove("lazy-load");
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: "50px" } // Loads images slightly before they enter view
    );

    images.forEach(img => observer.observe(img));
}

document.addEventListener("DOMContentLoaded", () => {
    displayProjects();

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            displayProjects(e.target.value);
        });
    }
});

// 🔹 Download counter logic
let downloadCount = localStorage.getItem("downloadCount") ? parseInt(localStorage.getItem("downloadCount")) : 100;

function updateDownloadCount() {
    const counterElement = document.getElementById("downloadCounter");
    if (counterElement) {
        counterElement.innerText = `Downloaded Project: ${downloadCount}`;
    }
}

function startAutoIncrement() {
    setInterval(() => {
        downloadCount++;
        localStorage.setItem("downloadCount", downloadCount);
        updateDownloadCount();
    }, 2000);
}

window.onload = function () {
    updateDownloadCount();
    startAutoIncrement();
};
