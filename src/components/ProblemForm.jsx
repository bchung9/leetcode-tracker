import React, { useState } from 'react';

const ProblemForm = ({ addProblem }) => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Not Started'); // Adding back the status dropdown

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure that title is provided and other fields are filled.
    if (!title.trim()) {
      alert('Please enter a problem name');
      return;
    }

    const newProblem = {
      title, 
      difficulty,
      status
    };

    addProblem(newProblem);
    setTitle(''); // Clear the form after submission
    setStatus('Not Started'); // Reset status field
  };

  return (
    <form onSubmit={handleSubmit} className="problem-form">
      <input
        type="text"
        placeholder="Problem Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      {/* Adding back the Status dropdown */}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Problem</button>
    </form>
  );
};

export default ProblemForm;
