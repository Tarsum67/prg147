

// Define the class
class TrainingSession {
  constructor(discipline, coach, durationMin, intensity, location) {
    this.discipline = discipline;
    this.coach = coach;
    this.durationMin = durationMin;
    this.intensity = intensity;
    this.location = location;
  }

  stats() {
    const effort = this.describeIntensity();
    return `${this.discipline} with ${this.coach} for ${this.durationMin} minutes at ${this.location}. 
    Intensity level: ${this.intensity}/10 (${effort}).`;
  }

  describeIntensity() {
    if (this.intensity >= 8) return "Hard";
    if (this.intensity >= 5) return "Moderate";
    if (this.intensity > 0) return "Light";
    return "Unspecified";
  }

  static averageIntensity(sessions) {
    const total = sessions.reduce((sum, s) => sum + s.intensity, 0);
    return (total / sessions.length).toFixed(1);
  }
}

// Create four instances
const session1 = new TrainingSession("Jiu-Jitsu", "Coach Curran", 60, 8, "Curran Jiu-Jitsu - Crystal Lake");
const session2 = new TrainingSession("Muay Thai", "Kru Nate", 45, 7, "Curran Jiu-Jitsu - Boxing Studio");
const session3 = new TrainingSession("Weight Training", "Self", 75, 6, "Lifetime Fitness - Weight Room");
const session4 = new TrainingSession("Mobility Recovery", "Self", 30, 3, "Home Gym");

// Display each session
document.getElementById("result1").textContent = session1.stats();
document.getElementById("result2").textContent = session2.stats();
document.getElementById("result3").textContent = session3.stats();
document.getElementById("result4").textContent = session4.stats();

// Show average intensity
const sessions = [session1, session2, session3, session4];
document.getElementById("avgIntensity").textContent =
  `Average Intensity: ${TrainingSession.averageIntensity(sessions)}/10`;

document.getElementById("year").textContent = new Date().getFullYear();
