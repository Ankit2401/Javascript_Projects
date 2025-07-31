const questions = [
  {
    question: "Which city is known as the Pink City of India?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Delhi"],
    answer: "Jaipur"
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Which river is the longest in India?",
    options: ["Yamuna", "Godavari", "Brahmaputra", "Ganga"],
    answer: "Ganga"
  },
  {
    question: "How many states are there in India?",
    options: ["28", "29", "27", "30"],
    answer: "28"
  },
  {
    question: "Which Indian state is known as the 'Spice Garden'?",
    options: ["Kerala", "Tamil Nadu", "Assam", "Karnataka"],
    answer: "Kerala"
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    answer: "1947"
  },
  {
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Sunflower", "Marigold"],
    answer: "Lotus"
  },
  {
    question: "Which is the highest civilian award in India?",
    options: ["Padma Bhushan", "Padma Vibhushan", "Bharat Ratna", "Gallantry Award"],
    answer: "Bharat Ratna"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which Indian state has the longest coastline?",
    options: ["Kerala", "Maharashtra", "Andhra Pradesh", "Gujarat"],
    answer: "Gujarat"
  },
  {
    question: "Which is the largest state in India by area?",
    options: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
    answer: "Rajasthan"
  },
  {
    question: "Which Indian city is called the Silicon Valley of India?",
    options: ["Delhi", "Hyderabad", "Pune", "Bengaluru"],
    answer: "Bengaluru"
  },
  {
    question: "What is the national animal of India?",
    options: ["Elephant", "Tiger", "Lion", "Leopard"],
    answer: "Tiger"
  },
  {
    question: "Who is known as the Father of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Rajendra Prasad"],
    answer: "B.R. Ambedkar"
  },
   {
    question: "What is the capital of Kerala?",
    options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Kannur"],
    answer: "Thiruvananthapuram"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  }
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.innerText = `${currentIndex + 1}. ${current.question}`;
  optionsEl.innerHTML = "";
  scoreBox.innerText = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectOption(li, option);
    optionsEl.appendChild(li);
  });

  nextBtn.disabled = true;
}

function selectOption(element, selected) {
  [...optionsEl.children].forEach(li => li.classList.remove("selected"));
  element.classList.add("selected");
  selectedOption = selected;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (selectedOption === questions[currentIndex].answer) {
    score += 10; // 10 marks per correct answer
  }

  currentIndex++;
  selectedOption = null;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.innerText = "🎉 Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.innerText = `Your Final Score: ${score} / ${questions.length * 10}`;
}

loadQuestion();
