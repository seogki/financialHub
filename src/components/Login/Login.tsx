import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import axios from "axios"


interface User {
    id? : string,
    password? : string
}

const Login = () => {

    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        axios.get("/Acct").then((response) => {
            setUser(response.data);
            console.log(response)
        }) 
    },[])
        return ( 
                <div className={"flex-center full-size"}>
                <LoginForm {...user}></LoginForm>
                </div>
            )
}

export default Login 