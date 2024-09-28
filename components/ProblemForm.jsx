import React, { useState } from 'react';

const ProblemForm = ({ addProblem }) => {
  const [problemName, setProblemName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (problemName) {
      addProblem({ problemName, difficulty, status });
      setProblemName('');
      setDifficulty('Easy');
      setStatus('Not Started');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={problemName}
        onChange={(e) => setProblemName(e.target.value)}
        placeholder="Problem Name"
        style={styles.input}
      />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={styles.select}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" style={styles.button}>Add Problem</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '200px',
    fontSize: '16px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ProblemForm;
