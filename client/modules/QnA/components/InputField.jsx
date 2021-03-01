import React from 'react';

const InputField = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <input type="text" value={input} onChange={(event) => handleChange(event)} />
  );
};

export default InputField;
