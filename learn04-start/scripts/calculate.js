function addDate() {
  let today = new Date();
  document.getElementById("today").innerHTML = today;
  document.getElementById("name").value = "";
  document.getElementById("rm1length").value = "";
  document.getElementById("rm1width").value = "";
  document.getElementById("rm1height").value = "";
  document.getElementById("rm1cost").value = "";
}

function estimate() {
  let name = document.getElementById("name").value;
  let length = parseFloat(document.getElementById("rm1length").value);
  let width = parseFloat(document.getElementById("rm1width").value);
  let height = parseFloat(document.getElementById("rm1height").value);

  if (!name || !length || !width || !height) {
    alert("Please fill in all fields.");
    return;
  }

  let totalSqFt = length * width + length * height * 2;
  let cost = totalSqFt * 0.65;
  document.getElementById("rm1cost").value = cost;

  let roomsSelected = parseInt(document.getElementById("rooms").value, 10);

  if (roomsSelected >= 2) {
    let length2 = parseFloat(document.getElementById("rm2length").value);
    let width2 = parseFloat(document.getElementById("rm2width").value);
    let height2 = parseFloat(document.getElementById("rm2height").value);

    if (isNaN(length2) || isNaN(width2) || isNaN(height2)) {
      alert("Please fill in all fields for Room 2.");
      return;
    }

    let totalSqFt2 = length2 * width2 + length2 * height2 * 2;
    let cost2 = totalSqFt2 * 0.65;
    document.getElementById("rm2cost").value = cost2;
    totalCost += cost2;
  }

  if (roomsSelected >= 3) {
    let length3 = parseFloat(document.getElementById("rm3length").value);
    let width3 = parseFloat(document.getElementById("rm3width").value);
    let height3 = parseFloat(document.getElementById("rm3height").value);

    if (isNaN(length3) || isNaN(width3) || isNaN(height3)) {
      alert("Please fill in all fields for Room 3.");
      return;
    }

    var totalCost = cost;
    document.getElementById("estimate").innerHTML =
      name + ", your total estimate is $" + totalCost;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  addDate();
  const btn = document.getElementById("estimateBtn");
  if (!btn) {
    console.error('No element with id "estimateBtn" found.');
    return;
  }
  btn.addEventListener("click", estimate);
  const roomSelector = document.getElementById("rooms");
  roomSelector.addEventListener("change", () => {
    const value = parseInt(roomSelector.value, 10);

    document.getElementById("room1").style.display = "block";

    document.getElementById("room2").style.display =
      value >= 2 ? "block" : "none";

    document.getElementById("room3").style.display =
      value >= 3 ? "block" : "none";
  });

  roomSelector.dispatchEvent(new Event("change"));
});
