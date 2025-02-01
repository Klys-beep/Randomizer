const agents = [
    { name: "Brimstone", image: "images/Brimstone_icon.jpg" },
    { name: "Phoenix", image: "images/Phoenix_icon.jpg" },
    { name: "Sage", image: "images/Sage_icon.jpg" },
    { name: "Sova", image: "images/Sova_icon.jpg" },
    { name: "Viper", image: "images/Viper_icon.jpg" },
    { name: "Cypher", image: "images/Cypher_icon.jpg" },
    { name: "Reyna", image: "images/Reyna_icon.jpg" },
    { name: "Killjoy", image: "images/Killjoy_icon.jpg" },
    { name: "Breach", image: "images/Breach_icon.jpg" },
    { name: "Omen", image: "images/Omen_icon.jpg" },
    { name: "Jett", image: "images/Jett_icon.jpg" },
    { name: "Raze", image: "images/Raze_icon.jpg" },
    { name: "Skye", image: "images/Skye_icon.jpg" },
    { name: "Yoru", image: "images/Yoru_icon.jpg" },
    { name: "Astra", image: "images/Astra_icon.jpg" },
    { name: "KAY/O", image: "images/KAYO_icon.jpg" },
    { name: "Chamber", image: "images/Chamber_icon.jpg" },
    { name: "Neon", image: "images/Neon_icon.jpg" },
    { name: "Fade", image: "images/Fade_icon.jpg" },
    { name: "Harbor", image: "images/Harbor_icon.jpg" },
    { name: "Gekko", image: "images/Gekko_icon.jpg" },
    { name: "Deadlock", image: "images/Deadlock_icon.jpg" },
    { name: "Iso", image: "images/Iso_icon.jpg" },
    { name: "Clove", image: "images/Clove_icon.jpg" },
    { name: "Vyse", image: "images/Vyse_icon.jpg" },
    { name: "Teho", image: "images/Teho_icon.jpg" }
];

const agentImage = document.getElementById('agent-image');
const agentName = document.getElementById('agent-name');
const randomizeButton = document.getElementById('randomize-button');

function getRandomAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    return agents[randomIndex];
}

function updateAgentDisplay() {
    const randomAgent = getRandomAgent();
    agentImage.src = randomAgent.image;
    agentImage.alt = randomAgent.name;
    agentName.textContent = randomAgent.name;

    // Add animation
    agentImage.classList.remove('fade-in');
    void agentImage.offsetWidth; // Trigger reflow to restart animation
    agentImage.classList.add('fade-in');
}

randomizeButton.addEventListener('click', updateAgentDisplay);

// Initialize with a random agent on page load
window.onload = updateAgentDisplay;
