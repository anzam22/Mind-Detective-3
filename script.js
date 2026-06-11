let xp = 0;

function openScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ---------------- XP SYSTEM ---------------- */
function addXP(amount) {
  xp += amount;

  let rank = "Rookie";
  if (xp > 50) rank = "Investigator";
  if (xp > 120) rank = "Analyst";
  if (xp > 200) rank = "Master Detective";

  document.getElementById("xp").innerText = "XP: " + xp;
  document.getElementById("rank").innerText = "Rank: " + rank;
}

/* ---------------- MISSIONS ---------------- */
function chooseMission(choice) {
  let result = document.getElementById("missionResult");

  if (choice === "B") {
    result.innerHTML = "✔ Correct! Nervous behavior indicates guilt.";
    addXP(30);
  } else {
    result.innerHTML = "❌ Wrong suspect. Observe behavior more carefully.";
  }
}

/* ---------------- PUZZLES ---------------- */
function solvePuzzle(correct) {
  let result = document.getElementById("puzzleResult");

  if (correct) {
    result.innerHTML = "✔ Genius! Pattern detected.";
    addXP(20);
  } else {
    result.innerHTML = "❌ Incorrect logic.";
  }
}

/* ---------------- SIMPLE AI MENTOR ---------------- */
function askAI() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  if (input.includes("lie")) {
    reply = "To detect lies, watch eye movement, pauses, and inconsistent stories.";
  }
  else if (input.includes("observe")) {
    reply = "Focus on small details: hands, eyes, posture, and reaction time.";
  }
  else if (input.includes("body")) {
    reply = "Body language reveals emotions even when words lie.";
  }
  else if (input.includes("think")) {
    reply = "Fast thinking improves with pattern practice and timed puzzles.";
  }
  else {
    reply = "I recommend training observation and logic daily.";
  }

  document.getElementById("aiReply").innerText = reply;
}