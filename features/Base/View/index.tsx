import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');

  const fetchData = async () => {
    const response = await fetch('/base');
    const { name } = await response.json();
    setName(name);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 bg-white shadow">
        Hello, <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
}

export { App };
