"use client";

import React, { useState, useEffect } from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./quiz.css";

Chart.register(ArcElement);

const healthcareQuestions = [
    {
      title: "Identify this medical equipment.",
      options: [
        "Stethoscope",
        "Thermometer",
        "Syringe",
        "Blood Pressure Monitor",
      ],
      correctOption: 0,
    },
    {
      title: "Which of these is used for imaging internal body structures?",
      options: [
        "MRI Scanner",
        "X-Ray Machine",
        "ECG Machine",
        "Ultrasound",
      ],
      correctOption: 1,
    },
    {
      title: "Which food item is the healthiest choice?",
      options: [
        "French Fries",
        "Salad",
        "Soda",
        "Ice Cream",
      ],
      correctOption: 1,
    },
    {
      title: "What is the purpose of performing CPR?",
      options: [
        "Restore heartbeat",
        "Measure blood pressure",
        "Detect oxygen levels",
        "Provide nutrition",
      ],
      correctOption: 0,
    },
    {
      title: "What is a good hygiene practice?",
      options: [
        "Washing Hands",
        "Touching Your Face",
        "Using Uncovered Sneezes",
        "Skipping Dental Care",
      ],
      correctOption: 0,
    },
    {
      title: "Which of these helps prevent diseases?",
      options: [
        "Eating Junk Food",
        "Regular Exercise",
        "Skipping Sleep",
        "Excessive Screen Time",
      ],
      correctOption: 1,
    },
    {
      title: "What should you wear in a high-risk pandemic area?",
      options: [
        "Mask",
        "Scarf",
        "Cap",
        "Sunglasses",
      ],
      correctOption: 0,
    },
    {
      title: "What should be a part of your daily diet?",
      options: [
        "Vegetables",
        "Candy",
        "Chips",
        "Fried Chicken",
      ],
      correctOption: 0,
    },
    {
      title: "Which habit is beneficial for mental health?",
      options: [
        "Meditation",
        "Overworking",
        "Skipping Breaks",
        "Staying Indoors All Day",
      ],
      correctOption: 0,
    },
    {
      title: "Which activity helps maintain cardiovascular health?",
      options: [
        "Walking",
        "Sitting All Day",
        "Eating Fatty Foods",
        "Watching TV",
      ],
      correctOption: 0,
    },
  ];
  

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = healthcareQuestions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    const isCorrect = index === currentQuestion.correctOption;
    setResponses([
      ...responses,
      {
        question: currentQuestion.title,
        yourChoice: currentQuestion.options[index],
        correctAnswer: currentQuestion.options[currentQuestion.correctOption],
        isCorrect,
      },
    ]);

    if (currentQuestionIndex < healthcareQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const correctAnswers = responses.filter((response) => response.isCorrect).length;
  const incorrectAnswers = responses.length - correctAnswers;

  const chartData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  useEffect(() => {
    // Shuffle questions to provide random order
    healthcareQuestions.sort(() => 0.5 - Math.random());
  }, []);

  return (
    <div className="quiz-container">
      {!showResults ? (
        <div className="question-card">
          <h2>{currentQuestion.title}</h2>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-section">
  <h2>Quiz Results</h2>
  <div className="pie-chart-container">
    <Pie data={chartData} />
  </div>
  <ul className="response-list">
    {responses.map((response, index) => (
      <li
        key={index}
        className={`response-item ${response.isCorrect ? "correct" : "incorrect"}`}
      >
        <span>{response.question}</span> - <strong>{response.yourChoice}</strong>{" "}
        ({response.isCorrect ? "Correct" : "Incorrect"})
        {!response.isCorrect && (
          <span className="correct-answer">
            Correct Answer: {healthcareQuestions[index].options[healthcareQuestions[index].correctOption]}
          </span>
        )}
      </li>
    ))}
  </ul>
  <button className="retry-button" onClick={() => window.location.reload()}>
    Retry Quiz
  </button>
</div>
      )}
    </div>
  );
};

export default QuizPage;
