import React from 'react';

const ProblemList = ({ problems, updateProblem, deleteProblem }) => {
  const handleCheckboxChange = (index) => {
    const updatedProblem = { ...problems[index] };
    updatedProblem.status = updatedProblem.status === 'Completed' ? 'In Progress' : 'Completed';
    updateProblem(index, updatedProblem);
  };

  const getColorForDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'green';
      case 'Medium':
        return 'orange';
      case 'Hard':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <ul style={styles.list}>
      {problems.length === 0 && <p style={styles.noProblemsText}>No problems added yet.</p>}
      {problems.map((problem, index) => (
        <li key={index} style={styles.item}>
          <input
            type="checkbox"
            checked={problem.status === 'Completed'}
            onChange={() => handleCheckboxChange(index)}
            style={styles.checkbox}
          />
          <span style={styles.problemName}>{problem.problemName}</span>
          <span style={{ ...styles.difficulty, color: getColorForDifficulty(problem.difficulty) }}>
            {problem.difficulty}
          </span>
          <span style={styles.status}>{problem.status}</span>
          <button style={styles.deleteButton} onClick={() => deleteProblem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: 'white',
    color: 'black',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  itemHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  checkbox: {
    marginRight: '10px',
  },
  problemName: {
    flex: 1,
    textAlign: 'left',
  },
  difficulty: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    textAlign: 'center',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  noProblemsText: {
    color: 'white',
    fontSize: '18px',
  },
};

export default ProblemList;
