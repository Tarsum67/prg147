// scripts/index.js

var guardians = [
  {
    name: "Attal",
    classType: "Warlock",
    favoriteWeapon: "Fatebringer",
    bio: "Astra channels Arc energy to Heal allies and Blind enemies.",
    imgs: "imgs/Attal.png",
  },
  {
    name: "Kabr",
    classType: "Titan",
    favoriteWeapon: "Furies III",
    bio: "Kabr is the shield of the team, creating safe zones and holds the front lines.",
    imgs: "imgs/Kabr.png",
  },
  {
    name: "Wolf",
    classType: "Hunter",
    favoriteWeapon: "Sworn Oath",
    bio: "Wolf uses agility and precision to take out high-value targets quickly with its high damage solar abilities",
    imgs: "imgs/wolf.png",
  },
  {
    name: "Jolder",
    classType: "Titan",
    favoriteWeapon: "The Huckleberry",
    bio: "Jolder uses Void energy to create barriers and protect allies. She is deadly throwing her shield to suppress enemies.",
    imgs: "imgs/Jolder.png",
  },
  {
    name: "Gwynn",
    classType: "Warlock",
    favoriteWeapon: "Octant Riot Disperser",
    bio: "Gwynn uses Void energy to weaken enemies and empower allies.She is deadly at close rang with her scythe.",
    imgs: "imgs/Gwynn.png",
  },
];

var listEl, templateEl;

function init() {
  listEl = document.getElementById("list");
  templateEl = document.getElementById("item-template");
  renderList();
}

function renderList() {
  listEl.innerHTML = "";
  guardians.forEach(function (g) {
    var node = templateEl.content.cloneNode(true);
    var btn = node.querySelector(".name-btn");
    var box = node.querySelector(".bio-box");
    var imgEl = node.querySelector(".hero");

    btn.textContent = g.name + " • " + g.classType.toUpperCase();

    btn.addEventListener("click", function () {
      if (box.hidden) {

        box.querySelector(".title").textContent = g.name;
        box.querySelector(".meta-line").textContent = "Favorite Weapon: " + g.favoriteWeapon;
        box.querySelector(".bio").textContent = g.bio;

        imgEl.src = g.imgs;
        imgEl.alt = g.name + " image";

        box.hidden = false;
      } else {
        box.hidden = true;
      }
    });

    listEl.appendChild(node);
  });
}
