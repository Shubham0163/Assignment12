import React, { useState } from 'react';
import { QUESTIONS } from './questions';
import ScoreComponent from './ScoreComponent';

const QuestionComponent = () => {
  const [responses, setResponses] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [averageScore, setAverageScore] = useState(null);
  const [totalScores, setTotalScores] = useState([]);

  const handleResponse = (response) => {
    const updatedResponses = { ...responses, [currentQuestionIndex]: response };
    setResponses(updatedResponses);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = () => {
    const yesCount = Object.values(responses).filter((response) => response === 'Yes').length;
    const score = (yesCount / Object.keys(responses).length) * 100;
    return score.toFixed(2);
  };

  const handleCalculateScore = () => {
    const score = calculateScore();
    setTotalScores([...totalScores, score]);
    setAverageScore(calculateAverageScore());
  };

  const calculateAverageScore = () => {
    const total = totalScores.reduce((acc, curr) => acc + parseFloat(curr), 0);
    return (total / totalScores.length).toFixed(2);
  };

  return (
    <div>
      {currentQuestionIndex <= Object.keys(QUESTIONS).length ? (
        <div>
          <p>{QUESTIONS[currentQuestionIndex]}</p>
          <button onClick={() => handleResponse('Yes')}>Yes</button>
          <button onClick={() => handleResponse('No')}>No</button>
        </div>
      ) : (
        <div>
          <ScoreComponent score={calculateScore()} averageScore={averageScore} />
          <button onClick={handleCalculateScore}>Calculate Score</button>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
