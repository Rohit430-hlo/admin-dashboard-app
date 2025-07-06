import React from 'react';

const EditorHeader = ({ category, title }) => {
  return (
    <div className="mb-5">
      <p className="text-gray-500">{category}</p>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export { EditorHeader };
