import React from 'react';

const ProblemList = ({ problems, updateProblem, deleteProblem }) => {
  const handleCheckboxChange = (index) => {
    const updatedProblem = {
      ...problems[index],
      status: problems[index].status === 'Completed' ? 'In Progress' : 'Completed'
    };
    updateProblem(index, updatedProblem);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'green';
      case 'Medium':
        return 'orange';
      case 'Hard':
        return 'red';
      default:
        return 'white';
    }
  };

  return (
    <div className="problem-list">
      {problems.length === 0 ? (
        <p>No problems added yet.</p>
      ) : (
        problems.map((problem, index) => (
          <div
            key={index}
            className={`problem-item ${problem.status === 'Completed' ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={problem.status === 'Completed'}
              onChange={() => handleCheckboxChange(index)}
            />
            <p>
              {problem.title} -{' '}
              <span style={{ color: getDifficultyColor(problem.difficulty) }}>
                {problem.difficulty}
              </span>{' '}
              - {problem.status}
            </p>
            <div>
              <button onClick={() => deleteProblem(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProblemList;
