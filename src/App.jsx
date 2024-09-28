import React, { useState, useEffect } from 'react';
import ProblemList from './components/ProblemList';
import ProblemForm from './components/ProblemForm';
import './App.css';

const App = () => {
  const [problems, setProblems] = useState([]);

  // Load problems from localStorage
  useEffect(() => {
    const storedProblems = localStorage.getItem('leetcodeProblems');
    if (storedProblems) {
      setProblems(JSON.parse(storedProblems));
    }
  }, []);

  // Save problems to localStorage whenever problems change
  useEffect(() => {
    localStorage.setItem('leetcodeProblems', JSON.stringify(problems));
  }, [problems]);

  const addProblem = (problem) => {
    setProblems([...problems, problem]);
  };

  const updateProblem = (index, updatedProblem) => {
    const newProblems = [...problems];
    newProblems[index] = updatedProblem;
    setProblems(newProblems);
  };

  const deleteProblem = (index) => {
    const newProblems = problems.filter((_, i) => i !== index);
    setProblems(newProblems);
  };

  return (
    <div className="app">
      <h1>LeetCode Problem Tracker</h1>
      <ProblemForm addProblem={addProblem} />
      <ProblemList
        problems={problems}
        updateProblem={updateProblem}
        deleteProblem={deleteProblem}
      />
    </div>
  );
};

export default App;
