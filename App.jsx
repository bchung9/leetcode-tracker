import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProblemForm from './components/ProblemForm'; 
import ProblemList from './components/ProblemList';

const App = () => {
  const [problems, setProblems] = useState([]);

  const addProblem = (problem) => {
    setProblems([...problems, problem]);
  };

  const updateProblem = (index, updatedProblem) => {
    const updatedProblems = [...problems];
    updatedProblems[index] = updatedProblem;
    setProblems(updatedProblems);
  };

  const deleteProblem = (index) => {
    const updatedProblems = problems.filter((_, i) => i !== index);
    setProblems(updatedProblems);
  };

  return (
    <div style={styles.container}>
      {/* Navbar with login, register, and logout functionality */}
      <Navbar />

      {/* Centered content */}
      <div style={styles.problemContainer}>
        <h1 style={styles.header}>LeetCode Problem Tracker</h1>
        <ProblemForm addProblem={addProblem} />
        <ProblemList
          problems={problems}
          updateProblem={updateProblem}
          deleteProblem={deleteProblem}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    paddingTop: '60px',
    backgroundColor: '#2f2f2f', 
    color: 'white',
  },
  problemContainer: {
    marginTop: '20px',
    width: '90%',
    maxWidth: '800px',
    textAlign: 'center',
  },
  header: {
    fontSize: '36px',
    marginBottom: '20px',
    color: 'white',
  },
};

export default App;
