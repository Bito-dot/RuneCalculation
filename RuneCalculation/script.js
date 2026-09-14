// Extended Suffix Parser & Formatter (up to Quadragintillions)
const SUFFIXES = [
    { suffix: "Noqg", value: 1e150 },
    { suffix: "Ocqg", value: 1e147 },
    { suffix: "Spqg", value: 1e144 },
    { suffix: "Sxqg", value: 1e141 },
    { suffix: "Qnqg", value: 1e138 },
    { suffix: "Qdqg", value: 1e135 },
    { suffix: "Tqg", value: 1e132 },
    { suffix: "Dqg", value: 1e129 },
    { suffix: "Uqg", value: 1e126 },
    { suffix: "qg", value: 1e123 },
    { suffix: "NoTg", value: 1e120 },
    { suffix: "OcTg", value: 1e117 },
    { suffix: "SpTg", value: 1e114 },
    { suffix: "SxTg", value: 1e111 },
    { suffix: "QnTg", value: 1e108 },
    { suffix: "QdTg", value: 1e105 },
    { suffix: "TTg", value: 1e102 },
    { suffix: "DTg", value: 1e99 },
    { suffix: "UTg", value: 1e96 },
    { suffix: "Tg", value: 1e93 },
    { suffix: "NoVt", value: 1e90 },
    { suffix: "OcVt", value: 1e87 },
    { suffix: "SpVt", value: 1e84 },
    { suffix: "SxVt", value: 1e81 },
    { suffix: "QnVt", value: 1e78 },
    { suffix: "QdVt", value: 1e75 },
    { suffix: "TVt", value: 1e72 },
    { suffix: "DVt", value: 1e69 },
    { suffix: "UVt", value: 1e66 },
    { suffix: "Vt", value: 1e63 },
    { suffix: "NoDe", value: 1e60 },
    { suffix: "OcDe", value: 1e57 },
    { suffix: "SpDe", value: 1e54 },
    { suffix: "SxDe", value: 1e51 },
    { suffix: "QnDe", value: 1e48 },
    { suffix: "QdDe", value: 1e45 },
    { suffix: "TDe", value: 1e42 },
    { suffix: "DDe", value: 1e39 },
    { suffix: "UDe", value: 1e36 },
    { suffix: "De", value: 1e33 },
    { suffix: "No", value: 1e30 },
    { suffix: "Oc", value: 1e27 },
    { suffix: "Sp", value: 1e24 },
    { suffix: "Sx", value: 1e21 },
    { suffix: "Qn", value: 1e18 },
    { suffix: "Qd", value: 1e15 },
    { suffix: "T", value: 1e12 },
    { suffix: "B", value: 1e9 },
    { suffix: "M", value: 1e6 },
    { suffix: "k", value: 1e3 }
];

function parseSuffixNumber(input) {
    if (!input) return 0;
    let str = input.toString().trim();

    for (let s of SUFFIXES) {
        let regex = new RegExp(`^([0-9.]+)\\s*${s.suffix}$`, "i");
        let match = str.match(regex);
        if (match) {
            let numPart = parseFloat(match[1]);
            return isNaN(numPart) ? 0 : numPart * s.value;
        }
    }

    let val = parseFloat(str);
    return isNaN(val) ? 0 : val;
}

function formatSuffixNumber(num) {
    if (num === 0) return "0";
    if (num < 1) {
        return num < 0.001 ? num.toExponential(2) : num.toFixed(2);
    }
    if (num < 1000) return num.toFixed(2).replace(/\.00$/, '');

    for (let s of SUFFIXES) {
        if (num >= s.value) {
            return (num / s.value).toFixed(2).replace(/\.00$/, '') + s.suffix;
        }
    }
    return num.toExponential(2);
}

function formatTime(seconds) {
    if (seconds <= 0) return "Instant";
    if (seconds < 60) return `${seconds.toFixed(2)} seconds`;

    const minutes = seconds / 60;
    if (minutes < 60) return `${minutes.toFixed(2)} minutes`;

    const hours = minutes / 60;
    if (hours < 24) return `${hours.toFixed(2)} hours`;

    const days = hours / 24;
    if (days < 7) return `${days.toFixed(2)} days`;

    const weeks = days / 7;
    if (weeks < 4.345) return `${weeks.toFixed(2)} weeks`;

    const months = days / 30.4375;
    if (months < 12) return `${months.toFixed(2)} months`;

    const years = days / 365.25;
    if (years < 1e6) return `${years.toFixed(2)} years`;

    return `${formatSuffixNumber(years)} years`;
}

// Unified Game Data - Prisms integrated directly into Realm Categories
const gameData = {
    "Realm 1": {
        "Basic": [
            { name: "Rookie", baseOdds: 1.25, type: "Normal" },
            { name: "Learner", baseOdds: 6.67, type: "Normal" },
            { name: "Trained", baseOdds: 33.29, type: "Normal" },
            { name: "Skilled", baseOdds: 200, type: "Normal" },
            { name: "Expert", baseOdds: "50k", type: "Normal" },
            { name: "Master", baseOdds: "1M", type: "Normal" },
            { name: "Grandmaster", baseOdds: "40M", type: "Normal" },
            { name: "Celestial", baseOdds: "625B", type: "Normal" },
            { name: "Immortal", baseOdds: "500Sp", type: "Normal" },
            { name: "Shadow", baseOdds: "2.5Sx", type: "Noobinial" },
            { name: "Phantom", baseOdds: "2.5Oc", type: "Noobinial" },
            { name: "Atomic", baseOdds: "300QdDe", type: "Noobinial" },
            { name: "Chronos Core", baseOdds: "3.5QnDe", type: "Noobinial", bg: "linear-gradient(135deg, #0f172a 0%, #312e81 40%, #0284c7 70%, #38bdf8 100%)" }
        ],
        "Super": [
            { name: "Initiate", baseOdds: 1.11, type: "Normal" },
            { name: "Adept", baseOdds: 13.3, type: "Normal" },
            { name: "Veteran", baseOdds: 50, type: "Normal" },
            { name: "Elite", baseOdds: "5k", type: "Normal" },
            { name: "Champion", baseOdds: "200k", type: "Normal" },
            { name: "Ascended", baseOdds: "2M", type: "Normal" },
            { name: "Transcendent", baseOdds: "50M", type: "Normal" },
            { name: "Universal", baseOdds: "20Qn", type: "Normal" },
            { name: "Omnipotent", baseOdds: "12.5Oc", type: "Normal" },
            { name: "Eclipse", baseOdds: "250Sx", type: "Noobinial" },
            { name: "Void", baseOdds: "2.5No", type: "Noobinial" },
            { name: "Primordial", baseOdds: "5UDe", type: "Noobinial" },
            { name: "Oblivion Sigil", baseOdds: "300QnDe", type: "Noobinial" }
        ],
        "Advanced": [
            { name: "Little", baseOdds: 1.01, type: "Normal" },
            { name: "Lesser", baseOdds: "100k", type: "Normal" },
            { name: "Standard", baseOdds: "1M", type: "Normal" },
            { name: "Greater", baseOdds: "50M", type: "Normal" },
            { name: "Superior", baseOdds: "200M", type: "Normal" },
            { name: "Prime", baseOdds: "100B", type: "Normal" },
            { name: "Apex", baseOdds: "1T", type: "Normal" },
            { name: "Ethereal", baseOdds: "50T", type: "Normal" },
            { name: "Divine", baseOdds: "200Qd", type: "Normal" },
            { name: "Infinite", baseOdds: "17.5Oc", type: "Normal" },
            { name: "Abyss", baseOdds: "25Sp", type: "Noobinial" },
            { name: "Enigma", baseOdds: "2.5De", type: "Noobinial" },
            { name: "Seraphim's Tear", baseOdds: "100TDe", type: "Noobinial" },
            { name: "Aetherion", baseOdds: "12.5SxDe", type: "Noobinial" }
        ],
        "Hacker": [
            { name: "Script", baseOdds: 1.01, type: "Normal" },
            { name: "Protocol", baseOdds: "100Qd", type: "Normal" },
            { name: "Cipher", baseOdds: "10Sx", type: "Normal" },
            { name: "Exploit", baseOdds: "1000Sp", type: "Normal" },
            { name: "Kernel", baseOdds: "1No", type: "Normal" },
            { name: "Root", baseOdds: "1De", type: "Normal" },
            { name: "Backdoor", baseOdds: "1UDe", type: "Normal" },
            { name: "Rootkit", baseOdds: "1000Sp", type: "Noobinial" },
            { name: "Masterkey", baseOdds: "20Oc", type: "Noobinial" },
            { name: "Stuxnet", baseOdds: "52.4No", type: "Noobinial" },
            { name: "Glitched", baseOdds: "50Vt", type: "Normal" },
            { name: "Firewall", baseOdds: "20TVt", type: "Normal" },
            { name: "Connor Hacked it", baseOdds: "75SxVt", type: "Normal" },
            { name: "Anti-Cheat", baseOdds: "2OcVt", type: "Normal" },
            { name: "Unstoppable Virus", baseOdds: "1DVt", type: "Noobinial" }
        ],
        "Cosmic Prism": [
            { name: "Lucent", baseOdds: 2.5, type: "Prism" },
            { name: "Chroma", baseOdds: 4, type: "Prism" },
            { name: "Fractal", baseOdds: 20, type: "Prism" },
            { name: "Refraction", baseOdds: 100, type: "Prism" },
            { name: "Tessellation", baseOdds: 200, type: "Prism" },
            { name: "Hyperlight", baseOdds: 333, type: "Prism" },
            { name: "Prism God", baseOdds: "1k", type: "Prism" },
            { name: "Voidglass", baseOdds: "1M", type: "Prism" },
            { name: "Godshard", baseOdds: "100M", type: "Noobinial Prism" },
            { name: "Ultimate Shard", baseOdds: "250B", type: "Noobinial Prism" }
        ]
    },
    "Realm 2": {
        "Snowy": [
            { name: "Snow", baseOdds: 1.01, type: "Normal" },
            { name: "Frost", baseOdds: "1Qn", type: "Normal" },
            { name: "Ice", baseOdds: "100Qn", type: "Normal" },
            { name: "Hail", baseOdds: "2Sx", type: "Normal" },
            { name: "Glacier", baseOdds: "100Sp", type: "Normal" },
            { name: "Blizzard", baseOdds: "500DDe", type: "Normal" },
            { name: "Tundra", baseOdds: "2QdDe", type: "Normal" },
            { name: "Arctic", baseOdds: "400OcDe", type: "Normal" },
            { name: "Permafrost", baseOdds: "190Vt", type: "Normal" },
            { name: "Whiteout", baseOdds: "500SxDe", type: "Noobinial" },
            { name: "Icebound", baseOdds: "500SpDe", type: "Noobinial" },
            { name: "Everfrost", baseOdds: "150OcDe", type: "Noobinial" }
        ],
        "Deepcore": [
            { name: "Dust", baseOdds: 1.01, type: "Normal" },
            { name: "Pebble", baseOdds: "10Sx", type: "Normal" },
            { name: "Hollow", baseOdds: "20Sx", type: "Normal" },
            { name: "Echo", baseOdds: "10Sp", type: "Normal" },
            { name: "Stalagmite", baseOdds: "200Sp", type: "Normal" },
            { name: "Cavern", baseOdds: "50Oc", type: "Normal" },
            { name: "Crystalborn", baseOdds: "10No", type: "Normal" },
            { name: "Earthshaker", baseOdds: "10De", type: "Normal" },
            { name: "Golemheart", baseOdds: "100UDe", type: "Normal" },
            { name: "Stone Titan", baseOdds: "10No", type: "Noobinial" },
            { name: "Cave Guardian", baseOdds: "7.5De", type: "Noobinial" },
            { name: "Deep Spirit", baseOdds: "250De", type: "Noobinial" }
        ],
        "Shard": [
            { name: "Air Shard", baseOdds: 1.01, type: "Normal" },
            { name: "Water Shard", baseOdds: "1.5QdVt", type: "Normal" },
            { name: "Earth Shard", baseOdds: "400QnVt", type: "Normal" },
            { name: "Fire Shard", baseOdds: "75SpVt", type: "Normal" },
            { name: "Ice Shard", baseOdds: "12NoVt", type: "Normal" },
            { name: "Poison Shard", baseOdds: "125UTg", type: "Normal" },
            { name: "Metal Shard", baseOdds: "1.5e104", type: "Normal" },
            { name: "Light Shard", baseOdds: "3.2e106", type: "Normal" },
            { name: "Shadow Shard", baseOdds: "4.0e108", type: "Normal" },
            { name: "Galactic Shard", baseOdds: "5QdVt", type: "Noobinial" },
            { name: "Elemental Shard", baseOdds: "100QdVt", type: "Noobinial" },
            { name: "Dragon Shard", baseOdds: "2QnVt", type: "Noobinial" }
        ]
    },
    "Realm 3": {
        "Dunes": [
            { name: "Marrow", baseOdds: 1.01, type: "Normal" },
            { name: "Femur", baseOdds: "333k", type: "Normal" },
            { name: "Skull", baseOdds: "1B", type: "Normal" },
            { name: "Dune", baseOdds: "375B", type: "Normal" },
            { name: "Oasis", baseOdds: "43.5Qd", type: "Normal" },
            { name: "Mirage", baseOdds: "250Qn", type: "Normal" },
            { name: "Sunspire", baseOdds: "4.29Sp", type: "Normal" },
            { name: "Eternal Sand", baseOdds: "5.08Oc", type: "Normal" },
            { name: "Sphinx", baseOdds: "30DDe", type: "Noobinial" },
            { name: "Anubis", baseOdds: "75NoDe", type: "Noobinial" },
            { name: "Ancient Fragment", baseOdds: "35Vt", type: "Noobinial" }
        ],
        "Sunfire": [
            { name: "Ashen", baseOdds: 1.01, type: "Normal" },
            { name: "Parched", baseOdds: "43.5M", type: "Normal" },
            { name: "Cactus", baseOdds: "6.9B", type: "Normal" },
            { name: "Scorch", baseOdds: "3.65T", type: "Normal" },
            { name: "Spark", baseOdds: "44.6Sx", type: "Normal" },
            { name: "Flare", baseOdds: "4.34Oc", type: "Normal" },
            { name: "Desert Jewel", baseOdds: "7.52UDe", type: "Normal" },
            { name: "Solar Titan", baseOdds: "2.67QdDe", type: "Normal" },
            { name: "Immortal Sun", baseOdds: "3.94SpDe", type: "Normal" },
            { name: "Pharaoh", baseOdds: "200NoDe", type: "Noobinial" },
            { name: "Horus", baseOdds: "1.5Vt", type: "Noobinial" },
            { name: "Secret of Egypt", baseOdds: "300Vt", type: "Noobinial" }
        ],
        "Sunstone Prism": [
            { name: "Cinderfall", baseOdds: 1.01, type: "Prism" },
            { name: "Shadowflare", baseOdds: "1.5B", type: "Prism" },
            { name: "Dawnshard", baseOdds: "75B", type: "Prism" },
            { name: "Lumina", baseOdds: "1.5T", type: "Prism" },
            { name: "Pyrestone", baseOdds: "22.5T", type: "Prism" },
            { name: "Helios", baseOdds: "500T", type: "Prism" },
            { name: "Starforge", baseOdds: "20Qd", type: "Prism" },
            { name: "Celestia", baseOdds: "1.5Qn", type: "Prism" },
            { name: "Eternis", baseOdds: "75T", type: "Noobinial Prism" },
            { name: "Omnira", baseOdds: "1.25Qd", type: "Noobinial Prism" }
        ]
    },
    "Realm 4": {
        "Starlight": [
            { name: "Moonlight", baseOdds: 1.01, type: "Normal" },
            { name: "Sunlight", baseOdds: "500De", type: "Normal" },
            { name: "Invasion", baseOdds: "80DDe", type: "Normal" },
            { name: "Alien", baseOdds: "225QdDe", type: "Normal" },
            { name: "Universe", baseOdds: "925SpDe", type: "Normal" },
            { name: "Gravity", baseOdds: "15UVt", type: "Normal" },
            { name: "Dimensional", baseOdds: "1QnVt", type: "Normal" },
            { name: "Meteor", baseOdds: "75UTg", type: "Normal" },
            { name: "Nebula", baseOdds: "2DTg", type: "Normal" },
            { name: "Supernova", baseOdds: "200DVt", type: "Noobinial" },
            { name: "Galactic Chaos", baseOdds: "2.25TVt", type: "Noobinial" },
            { name: "Chaotic Destruction", baseOdds: "15QnVt", type: "Noobinial" }
        ],
        "Cosma": [
            { name: "Asteroid", baseOdds: 1.01, type: "Normal" },
            { name: "Comet", baseOdds: "150UDe", type: "Normal" },
            { name: "Satellite", baseOdds: "3QdDe", type: "Normal" },
            { name: "Orbit", baseOdds: "700SxDe", type: "Normal" },
            { name: "Cluster", baseOdds: "17.5NoDe", type: "Normal" },
            { name: "Quasar", baseOdds: "525QdVt", type: "Normal" },
            { name: "Pulsar", baseOdds: "2.5e101", type: "Normal" },
            { name: "Black Hole", baseOdds: "1.0e103", type: "Normal" },
            { name: "Magnetar", baseOdds: "7.5TVt", type: "Noobinial" },
            { name: "Event Horizon", baseOdds: "50TVt", type: "Noobinial" },
            { name: "Elemental Creation", baseOdds: "200QnVt", type: "Noobinial" }
        ],
        "Light": [
            { name: "White", baseOdds: 1.01, type: "Normal" },
            { name: "Divine Light", baseOdds: "15NoDe", type: "Normal" },
            { name: "Daylight", baseOdds: "1TVt", type: "Normal" },
            { name: "Elemental Of Light", baseOdds: "1SpVt", type: "Normal" },
            { name: "Protected", baseOdds: "1UTg", type: "Normal" },
            { name: "Creation", baseOdds: "1.0e108", type: "Normal" },
            { name: "Angelic Goodness", baseOdds: "1.0e120", type: "Normal" },
            { name: "Absolute Divinity", baseOdds: "100SxVt", type: "Noobinial" },
            { name: "Light Genesis", baseOdds: "750SxVt", type: "Noobinial" },
            { name: "Ultimate Light", baseOdds: "2OcVt", type: "Noobinial" }
        ],
        "Dark": [
            { name: "Black", baseOdds: 1.01, type: "Normal" },
            { name: "Infinite Darkness", baseOdds: "1TVt", type: "Normal" },
            { name: "Midnight", baseOdds: "1TVt", type: "Normal" },
            { name: "Dark Elemental", baseOdds: "1SpVt", type: "Normal" },
            { name: "Doomed", baseOdds: "1UTg", type: "Normal" },
            { name: "Destruction", baseOdds: "1.0e108", type: "Normal" },
            { name: "Demonic Evil", baseOdds: "1.0e120", type: "Normal" },
            { name: "Absolute Darkness", baseOdds: "2.5SpVt", type: "Noobinial" },
            { name: "Dark Genesis", baseOdds: "50SpVt", type: "Noobinial" },
            { name: "Ultimate Darkness", baseOdds: "25OcVt", type: "Noobinial" }
        ]
    },
    "Realm 5": {
        "Underwater": [
            { name: "Water", baseOdds: 1.01, type: "Normal" },
            { name: "Bubbles", baseOdds: "10B", type: "Normal" },
            { name: "Pond", baseOdds: "10Qd", type: "Normal" },
            { name: "Lake", baseOdds: "10Sx", type: "Normal" },
            { name: "River", baseOdds: "1No", type: "Normal" },
            { name: "Pool", baseOdds: "10DDe", type: "Normal" },
            { name: "Sea", baseOdds: "10SxDe", type: "Normal" },
            { name: "Ocean", baseOdds: "100NoDe", type: "Normal" },
            { name: "Deep Sea", baseOdds: "10UVt", type: "Normal" },
            { name: "Tidal Wave", baseOdds: "10OcVt", type: "Noobinial" },
            { name: "Tsunami", baseOdds: "10NoVt", type: "Noobinial" }
        ],
    }
};

// UI Elements
const speedInput = document.getElementById("speedSec");
const speedBoost = document.getElementById("speedBoost");
const bulkInput = document.getElementById("bulk");
const bulkBoost = document.getElementById("bulkBoost");
const luckInput = document.getElementById("luck");
const luckBoost = document.getElementById("luckBoost");
const hideInstantToggle = document.getElementById("hideInstantToggle");

const prismSpeedInput = document.getElementById("prismSpeedSec");
const prismSpeedBoost = document.getElementById("prismSpeedBoost");
const prismBulkInput = document.getElementById("prismBulk");
const prismBulkBoost = document.getElementById("prismBulkBoost");
const prismLuckInput = document.getElementById("prismLuck");
const prismLuckBoost = document.getElementById("prismLuckBoost");
const prismHideInstantToggle = document.getElementById("prismHideInstantToggle");

const realmContainer = document.getElementById("realmContainer");
const categoryContainer = document.getElementById("categoryContainer");
const rpsOutput = document.getElementById("rpsOutput");
const prismRpsOutput = document.getElementById("prismRpsOutput");
const runeResultContainer = document.getElementById("runeResultContainer");

let activeRealm = "";
let activeCategory = "";

function saveInputsToStorage() {
    localStorage.setItem("rune_speedSec", speedInput ? speedInput.value : "");
    localStorage.setItem("rune_speedBoost", speedBoost ? speedBoost.checked : false);
    localStorage.setItem("rune_bulk", bulkInput ? bulkInput.value : "");
    localStorage.setItem("rune_bulkBoost", bulkBoost ? bulkBoost.checked : false);
    localStorage.setItem("rune_luck", luckInput ? luckInput.value : "");
    localStorage.setItem("rune_luckBoost", luckBoost ? luckBoost.checked : false);
    if (hideInstantToggle) localStorage.setItem("rune_hideInstant", hideInstantToggle.checked);

    localStorage.setItem("prism_speedSec", prismSpeedInput ? prismSpeedInput.value : "");
    localStorage.setItem("prism_speedBoost", prismSpeedBoost ? prismSpeedBoost.checked : false);
    localStorage.setItem("prism_bulk", prismBulkInput ? prismBulkInput.value : "");
    localStorage.setItem("prism_bulkBoost", prismBulkBoost ? prismBulkBoost.checked : false);
    localStorage.setItem("prism_luck", prismLuckInput ? prismLuckInput.value : "");
    localStorage.setItem("prism_luckBoost", prismLuckBoost ? prismLuckBoost.checked : false);
    if (prismHideInstantToggle) localStorage.setItem("prism_hideInstant", prismHideInstantToggle.checked);

    localStorage.setItem("active_realm", activeRealm);
    localStorage.setItem("active_category", activeCategory);
}

function loadSavedInputs() {
    if (speedInput && localStorage.getItem("rune_speedSec") !== null) speedInput.value = localStorage.getItem("rune_speedSec");
    if (speedBoost && localStorage.getItem("rune_speedBoost") !== null) speedBoost.checked = localStorage.getItem("rune_speedBoost") === "true";
    if (bulkInput && localStorage.getItem("rune_bulk") !== null) bulkInput.value = localStorage.getItem("rune_bulk");
    if (bulkBoost && localStorage.getItem("rune_bulkBoost") !== null) bulkBoost.checked = localStorage.getItem("rune_bulkBoost") === "true";
    if (luckInput && localStorage.getItem("rune_luck") !== null) luckInput.value = localStorage.getItem("rune_luck");
    if (luckBoost && localStorage.getItem("rune_luckBoost") !== null) luckBoost.checked = localStorage.getItem("rune_luckBoost") === "true";
    if (hideInstantToggle && localStorage.getItem("rune_hideInstant") !== null) hideInstantToggle.checked = localStorage.getItem("rune_hideInstant") === "true";

    if (prismSpeedInput && localStorage.getItem("prism_speedSec") !== null) prismSpeedInput.value = localStorage.getItem("prism_speedSec");
    if (prismSpeedBoost && localStorage.getItem("prism_speedBoost") !== null) prismSpeedBoost.checked = localStorage.getItem("prism_speedBoost") === "true";
    if (prismBulkInput && localStorage.getItem("prism_bulk") !== null) prismBulkInput.value = localStorage.getItem("prism_bulk");
    if (prismBulkBoost && localStorage.getItem("prism_bulkBoost") !== null) prismBulkBoost.checked = localStorage.getItem("prism_bulkBoost") === "true";
    if (prismLuckInput && localStorage.getItem("prism_luck") !== null) prismLuckInput.value = localStorage.getItem("prism_luck");
    if (prismLuckBoost && localStorage.getItem("prism_luckBoost") !== null) prismLuckBoost.checked = localStorage.getItem("prism_luckBoost") === "true";
    if (prismHideInstantToggle && localStorage.getItem("prism_hideInstant") !== null) prismHideInstantToggle.checked = localStorage.getItem("prism_hideInstant") === "true";
}

function initRealms() {
    if (!realmContainer) return;
    realmContainer.innerHTML = "";

    const realms = Object.keys(gameData);
    const savedRealm = localStorage.getItem("active_realm");
    activeRealm = (savedRealm && gameData[savedRealm]) ? savedRealm : realms[0];

    realms.forEach(realm => {
        let btn = document.createElement("button");
        btn.className = `btn-select ${realm === activeRealm ? "active" : ""}`;
        btn.textContent = realm;
        btn.addEventListener("click", () => {
            activeRealm = realm;
            document.querySelectorAll("#realmContainer .btn-select").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            updateCategories();
        });
        realmContainer.appendChild(btn);
    });

    updateCategories();
}

function updateCategories() {
    if (!categoryContainer) return;
    categoryContainer.innerHTML = "";
    if (!gameData[activeRealm]) return;

    const categories = Object.keys(gameData[activeRealm]);
    const savedCategory = localStorage.getItem("active_category");
    activeCategory = (savedCategory && gameData[activeRealm][savedCategory]) ? savedCategory : categories[0];

    categories.forEach(category => {
        let btn = document.createElement("button");
        btn.className = `btn-select ${category === activeCategory ? "active" : ""}`;
        btn.textContent = category;
        btn.addEventListener("click", () => {
            activeCategory = category;
            document.querySelectorAll("#categoryContainer .btn-select").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            calculate();
        });
        categoryContainer.appendChild(btn);
    });

    calculate();
}

function calculate() {
    // 1. Calculate Rune Stats
    let rawSpeedSec = parseFloat(speedInput.value);
    if (isNaN(rawSpeedSec) || rawSpeedSec < 0.05) rawSpeedSec = 0.05;
    let runeFinalSpeed = (1 / rawSpeedSec) * (speedBoost.checked ? 2.0 : 1.0);
    let runeFinalBulk = parseSuffixNumber(bulkInput.value) * (bulkBoost.checked ? 2.0 : 1.0);
    let runeFinalLuck = parseSuffixNumber(luckInput.value) * (luckBoost.checked ? 2.0 : 1.0);
    const runeTotalRps = runeFinalSpeed * runeFinalBulk;

    // 2. Calculate Prism Stats
    let rawPrismSpeedSec = parseFloat(prismSpeedInput.value);
    if (isNaN(rawPrismSpeedSec) || rawPrismSpeedSec < 0.05) rawPrismSpeedSec = 0.05;
    let prismFinalSpeed = (1 / rawPrismSpeedSec) * (prismSpeedBoost.checked ? 2.0 : 1.0);
    let prismFinalBulk = parseSuffixNumber(prismBulkInput.value) * (prismBulkBoost.checked ? 2.0 : 1.0);
    let prismFinalLuck = parseSuffixNumber(prismLuckInput.value) * (prismLuckBoost.checked ? 2.0 : 1.0);
    const prismTotalRps = prismFinalSpeed * prismFinalBulk;

    // Update RPS Displays
    if (rpsOutput) rpsOutput.innerText = formatSuffixNumber(runeTotalRps);
    if (prismRpsOutput) prismRpsOutput.innerText = formatSuffixNumber(prismTotalRps);

    if (!activeRealm || !activeCategory || !gameData[activeRealm] || !gameData[activeRealm][activeCategory]) {
        if (runeResultContainer) runeResultContainer.innerHTML = "";
        return;
    }

    const itemsList = gameData[activeRealm][activeCategory];
    if (!itemsList || itemsList.length === 0) return;

    // Determine if selected category is a Prism category
    const isPrismCategory = activeCategory.toLowerCase().includes("prism");
    const shouldHideInstant = isPrismCategory
        ? (prismHideInstantToggle ? prismHideInstantToggle.checked : false)
        : (hideInstantToggle ? hideInstantToggle.checked : false);

    let htmlOutput = "";

    itemsList.forEach(item => {
        const isNoobinial = item.type.toLowerCase().includes("noobinial");

        // Strict Isolation: Prism categories use Prism Luck & Prism RPS; Rune categories use Rune Luck & Rune RPS
        const currentLuck = isPrismCategory ? prismFinalLuck : runeFinalLuck;
        const currentRps = isPrismCategory ? prismTotalRps : runeTotalRps;

        const effectiveLuck = isNoobinial ? 1.0 : (currentLuck > 0 ? currentLuck : 1.0);
        const rawBaseOdds = parseSuffixNumber(item.baseOdds);
        const effectiveOdds = rawBaseOdds / effectiveLuck;
        const avgSeconds = currentRps > 0 ? effectiveOdds / currentRps : 0;
        const isInstant = effectiveOdds <= 1 || avgSeconds < 0.01;

        if (shouldHideInstant && isInstant && !isNoobinial) return;

        let oddsDisplay = isInstant ? `<span class="instant">Instant Collect</span>` : `1 / ${formatSuffixNumber(effectiveOdds)} chance`;
        let timeDisplay = isInstant ? `<span class="instant">Instant</span>` : formatTime(avgSeconds);

        htmlOutput += `
  <div class="rune-card ${isPrismCategory ? "prism-card" : ""} ${isNoobinial ? "noobinial" : ""}" 
       data-name="${item.name.toLowerCase().replace(/\s+/g, '-')}"
       data-type="${item.type.toLowerCase().replace(/\s+/g, '-')}"
       style="${item.bg ? `background: ${item.bg} !important;` : ''}">
    <div class="rune-title">${item.name}</div>
    <div class="rune-badge">${activeCategory} • <span class="rune-type">${item.type}</span></div>
    <div class="rune-stat"><strong>Base Odds:</strong> 1 / ${formatSuffixNumber(rawBaseOdds)}</div>
    <div class="rune-stat"><strong>Effective Odds:</strong> ${oddsDisplay}</div>
    <div class="rune-stat"><strong>Avg Time to Get:</strong> <code>${timeDisplay}</code></div>
  </div>
`;
    });

    if (runeResultContainer) runeResultContainer.innerHTML = htmlOutput;
    saveInputsToStorage();
}

// Event Listeners - Runes
if (hideInstantToggle) hideInstantToggle.addEventListener("change", calculate);
[speedInput, speedBoost, bulkInput, bulkBoost, luckInput, luckBoost].forEach(el => {
    if (el) {
        el.addEventListener("input", calculate);
        el.addEventListener("change", calculate);
    }
});

if (speedInput) {
    speedInput.addEventListener("blur", () => {
        if (parseFloat(speedInput.value) < 0.05 || isNaN(parseFloat(speedInput.value))) {
            speedInput.value = "0.05";
            calculate();
        }
    });
}

// Event Listeners - Prisms
if (prismHideInstantToggle) prismHideInstantToggle.addEventListener("change", calculate);
[prismSpeedInput, prismSpeedBoost, prismBulkInput, prismBulkBoost, prismLuckInput, prismLuckBoost].forEach(el => {
    if (el) {
        el.addEventListener("input", calculate);
        el.addEventListener("change", calculate);
    }
});

if (prismSpeedInput) {
    prismSpeedInput.addEventListener("blur", () => {
        if (parseFloat(prismSpeedInput.value) < 0.05 || isNaN(parseFloat(prismSpeedInput.value))) {
            prismSpeedInput.value = "0.05";
            calculate();
        }
    });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadSavedInputs();
    initRealms();
});