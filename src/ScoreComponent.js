
import React from 'react';

const ScoreComponent = ({ score, averageScore }) => {
  return (
    <div>
      <h2>Score: {score}%</h2>
      {averageScore && <h3>Average Score: {averageScore}%</h3>}
    </div>
  );
};

export default ScoreComponent;
