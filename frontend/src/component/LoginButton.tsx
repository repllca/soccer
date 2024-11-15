import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginButton: React.FC<{ name: string }> = ({ name }) => {
    const navigate = useNavigate();
  const handleLogin = () => {
    if (name.trim()) {
      Cookies.set("userName", name, { expires: 7 });

      alert("名前が保存されました！");
      navigate("/HomePage");
    } else {
      alert("名前を入力してください");
    }
  };

  return (
    <button onClick={handleLogin}>ログイン</button>
  );
};

export default LoginButton;
