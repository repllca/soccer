import React, { useState } from "react";

const UserNameInput: React.FC<{ setName: (name: string) => void }> = ({ setName }) => {
  const [inputName, setInputName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="name">名前を入力:</label>
      <input
        type="text"
        id="name"
        value={inputName}
        onChange={handleChange}
        placeholder="名前"
      />
      <button onClick={() => setName(inputName)}>名前を設定</button>
    </div>
  );
};

export default UserNameInput;
