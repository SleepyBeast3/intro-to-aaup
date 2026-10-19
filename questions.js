// ===== EDIT THIS FILE: Firebase settings + event title + questions =====
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB97EHMX-hn_d2uuHTogYBE0wDi-pU5Drc",
  authDomain: "intro-to-aaup.firebaseapp.com",
  databaseURL: "https://intro-to-aaup-default-rtdb.firebaseio.com",
  projectId: "intro-to-aaup",
  appId: "1:168097049754:web:b0b84fe210d5e7a9ae4323"
};
window.EVENT_TITLE = "AAUP Quiz Bowl!";

// Add `multi: true` to let people pick more than one answer.
// Options are lettered A, B, C... automatically.
// Optional: add `correct: N` (0 = first option, 1 = second, ...) to a single-choice question
// and the presenter gets a "Reveal answer" button for it. Leave it off for opinion questions.
// Make sure to keep the committee question LAST: the CSV export reads it.
window.QUESTIONS = [
  { text: "1.	AAUP became the faculty union at CState in: ", correct: 1, options: ["1969", "1988", "1989", "1990"] },
  { text: "2. Before AAUP was the faculty union, CState faculty had to:", correct: 0, options: [
    "Work 50 weeks every year with no term off and no guaranteed raises", 
    "Chisel your class notes into rocks", 
    "Teach classes entirely in Pig Latin", 
    "Expect to be flogged if you forgot to turn in no-show rosters"
   ]},
  { text: "3. There’s a frog on some Cincinnati State AAUP logos because:", correct: 2, options: [
    "Amphibians are cool -- they're cold-blooded!", 
    "It represents the union's ability to transition and metamorphose", 
    "It's a symbol of resistance, solidarity, and union pride", 
    "It's an old logo from the National AAUP"
   ]},
  { text: "4. Typically, contract negotiations at Cincinnati State occur:", correct: 2, options: [
    "Every year", 
    "Every other year", 
    "Every three years", 
    "None of the above"
   ]},
  { text: "5. The current AAUP contract expires:", correct: 2, options: [
    "In August 2027", 
    "In August 2028", 
    "In August 2029", 
    "In August 2030"
   ]},
  { text: "6. All full-time faculty are members of AAUP and have the right to vote on officers and contracts.", correct: 1, options: [
    "True", 
    "False"
   ]},
  { text: "7. Once you have tenure, you can't lose your job at Cincinnati State.", correct: 1, options: [
    "True", 
    "False"
   ]},
  { text: "8. Those who can use the title of \"Professor\" in their syllabi, email signatures, etc. are:", correct: 3, options: [
    "All faculty, both full-time and adjuncts", 
    "All full-time faculty", 
    "All tenured and tenure-track faculty", 
    "All tenured faculty"
   ]},
  { text: "9. ACF means:", correct: 0, options: [
    "Annually Contracted Faculty", 
    "Active & Concerned Faculty", 
    "Assistant Coordinator of Faculty", 
    "Ancient Crones who are still Faculty"
   ]},
  { text: "10. Faculty have a right to be involved in the hiring of every College administrator.", correct: 1, options: [
    "True", 
    "False"
   ]},
  { text: "11. Faculty have the opportunity to evaluate their administrators.", correct: 0, options: [
    "True", 
    "False"
   ]},
  { text: "12. When you have a question about the AAUP contract, do this first:", correct: 0, options: [
    "Ask the AAUP Contract Compliance Officer", 
    "Ask HR", 
    "Ask your associate dean, dean, or director", 
    "Ask a trusted friend and mentor"
   ]},
  { text: "13. My department chair schedules me to teach at times I don't like, and I've tried to discuss it with them. My next step is:", correct: 2, options: [
    "Talk to the AAUP Compliance Officer", 
    "Talk to HR", 
    "Talk to the Dean/Associate Dean", 
    "Suck it up, buttercup"
   ]},
  { text: "14. I’m a chair and I’m asked to do more and more extra work without any extra pay—is there a contractual solution to my problem?", correct: 0, options: [
    "Yes", 
    "No"
   ]},
  { text: "15. Required weekly office hours for full-time faculty are:", correct: 0, options: [
    "10 hours (at least 4 face-to-face and up to 6 virtual)", 
    "10 hours (at least 6 face-to-face and up to 4 virtual)", 
    "10 hours (all face-to-face)", 
    "4 hours face-to-face (virtual office hours aren't real)"
   ]},
  { text: "16. Faculty can teach as much overload as they want, with no limits.", correct: 1, options: [
    "True", 
    "False"
   ]},
  { text: "17. Service to the College includes all of the following except:", correct: 3, options: [
    "Serving on a Faculty Senate committee", 
    "Being an officer in a professional organization", 
    "Volunteering at Commencement", 
    "Volunteering to coach my kid’s soccer team"
   ]},
  { text: "18. A sabbatical and a special project are the same.", correct: 1, options: [
    "True", 
    "False"
   ]},
  { text: "19. Full-time, non-ACF faculty get longevity raises:", correct: 1, options: [
    "At tenure, and after completing years 10, 15, 20, and 25", 
    "At tenure, and after completing years 8, 10, 15, 20, 25, 28, and 30", 
    "At tenure, and after completing years 10, 20, and 30", 
    "CState faculty don’t get longevity raises"
   ]},
  { text: "20. My dean sent me an email about having a meeting for “oral counseling.” My next step is:", correct: 2, options: [
    "Ignore the message—if it’s really important, the dean will send it again", 
    "Ask around and see if anyone else got a similar message", 
    "Reply to the dean and set up a meeting", 
    "Talk to the AAUP Contract Compliance Officer"
   ]},
  { text: "21. Free parking for faculty is guaranteed in the AAUP contract.", correct: 0, options: [
    "True", 
    "False"
   ]},
   { text: "22. To learn what’s going on with AAUP, I should:", correct: 3, options: [
    "Attend Chapter meetings", 
    "Check my email for occasional messages from Abbey", 
    "Talk to an AAUP officer", 
    "All of the above"
   ]},
  { text: "23. I'm considering running for AAUP Member-at-Large. What's the time commitment?", correct: 0, options: [
    "90 minutes once-a-week, plus other duties as assigned", 
    "90 minutes once-a-month, plus other duties as assigned", 
    "No commitment – Member-at-Large doesn’t do anything", 
    "You’re always on call"
   ]},
  { text: "24. Who is in charge of Cincinnati State AAUP?", correct: 3, options: [
    "President Abbey Yee", 
    "Contract Compliance Officer Greg Klein", 
    "Vice President Julie McLaughlin", 
    "YOU!!! (but you also elect officers to carry out the day-to-day work of the union)"
   ]},
  { text: "25. I'm interested in serving on or helping with FACT for these topics (select all that apply):", multi: true, options: [
    "Examining Program Chair Work",
    "Reviewing Dental Benefits",
    "Improving College-wide Training on College Tools, Processes, and Systems",
    "Assessing AI Impacts on Faculty Working Conditions",
    "None of the above"
  ]}
];
