const agents = [
    { name: "Brimstone", image: "images/brimstone_icon.jpg" },
    { name: "Phoenix", image: "images/phoenix_icon.jpg" },
    { name: "Sage", image: "images/sage_icon.jpg" },
    { name: "Sova", image: "images/sova_icon.jpg" },
    { name: "Viper", image: "images/viper_icon.jpg" },
    { name: "Cypher", image: "images/cypher_icon.jpg" },
    { name: "Reyna", image: "images/reyna_icon.jpg" },
    { name: "Killjoy", image: "images/killjoy_icon.jpg" },
    { name: "Breach", image: "images/breach_icon.jpg" },
    { name: "Omen", image: "images/omen_icon.jpg" },
    { name: "Jett", image: "images/jett_icon.jpg" },
    { name: "Raze", image: "images/raze_icon.jpg" },
    { name: "Skye", image: "images/skye_icon.jpg" },
    { name: "Yoru", image: "images/yoru_icon.jpg" },
    { name: "Astra", image: "images/astra_icon.jpg" },
    { name: "KAY/O", image: "images/kayo_icon.jpg" },
    { name: "Chamber", image: "images/chamber_icon.jpg" },
    { name: "Neon", image: "images/neon_icon.jpg" },
    { name: "Fade", image: "images/fade_icon.jpg" },
    { name: "Harbor", image: "images/harbor_icon.jpg" },
    { name: "Gekko", image: "images/gekko_icon.jpg" },
    { name: "Deadlock", image: "images/deadlock_icon.jpg" },
    { name: "Iso", image: "images/iso_icon.jpg" },
    { name: "Clove", image: "images/clove_icon.jpg" },
    { name: "Vyse", image: "images/vyse_icon.jpg" },
    { name: "Teho", image: "images/teho_icon.jpg" }
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
