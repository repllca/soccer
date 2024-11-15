import React from "react";
import LoginButton from "./LoginButton";
import UserNameInput from "./UserNameInput";
const Loginform: React.FC = () => {
    const [name,setName] = React.useState<string>("");
    return (
        <div>    
            <UserNameInput setName={setName} />
            <LoginButton name = {name}/>
        </div>
    );
};

export default Loginform;