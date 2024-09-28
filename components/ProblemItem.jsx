import React, { useState } from 'react';

const ProblemItem = ({ problem, index, updateProblem, deleteProblem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProblem, setUpdatedProblem] = useState(problem);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateProblem(index, updatedProblem);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProblem({ ...updatedProblem, [name]: value });
  };

  return (
    <div className="problem-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={updatedProblem.name}
            onChange={handleChange}
          />
          <select
            name="difficulty"
            value={updatedProblem.difficulty}
            onChange={handleChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            name="status"
            value={updatedProblem.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{problem.name}</p>
          <p>Difficulty: {problem.difficulty}</p>
          <p>Status: {problem.status}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteProblem(index)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ProblemItem;
