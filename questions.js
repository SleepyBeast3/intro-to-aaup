// ===== EDIT THIS FILE: Firebase settings + event title + questions =====
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB97EHMX-hn_d2uuHTogYBE0wDi-pU5Drc",
  authDomain: "intro-to-aaup.firebaseapp.com",
  databaseURL: "https://intro-to-aaup-default-rtdb.firebaseio.com",
  projectId: "intro-to-aaup",
  appId: "1:168097049754:web:b0b84fe210d5e7a9ae4323"
};
window.EVENT_TITLE = "Introduction to AAUP";

// Add `multi: true` to let people pick more than one answer.
// Options are lettered A, B, C... automatically.
// Optional: add `correct: N` (0 = first option, 1 = second, ...) to a single-choice question
// and the presenter gets a "Reveal answer" button for it. Leave it off for opinion questions.
// Keep the committee question LAST: the CSV export reads it.
window.QUESTIONS = [
  { text: "Question 1?", correct: 2, options: ["Cat", "Dog", "Platypus", "Mushroom"] },
  { text: "Question 2?", correct: 1, options: ["Red", "Blue", "Green", "Purple"] },
  { text: "Question 3?", options: ["Apple", "Banana", "Mango", "Walnut"] },
  { text: "Question 4?", options: ["Mercury", "Venus", "Jupiter", "Neptune"] },
  { text: "Question 5?", options: ["Piano", "Violin", "Trumpet", "Kazoo"] },
  { text: "Question 6?", options: ["Paris", "Tokyo", "Cairo", "Lima"] },
  { text: "Question 7?", options: ["Bicycle", "Canoe", "Train", "Hot air balloon"] },
  { text: "Question 8?", options: ["Soccer", "Chess", "Curling", "Archery"] },
  { text: "Question 9?", options: ["Snow", "Fog", "Thunder", "Rainbow"] },
  { text: "I'm interested serving on or helping with FACT for these topics:", multi: true, options: [
    "Examining Program Chair Work",
    "Reviewing Dental Benefits",
    "Improving College-wide Training on College Tools, Processes, and Systems",
    "Assessing AI Impacts on Faculty Working Conditions",
    "None of the above"
  ]}
];
