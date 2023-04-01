import { StyledForm, StyledInput, SubmitBtn, EmailInput, UserNameInput, PassNotMatch, IconContainer } from "./LoginForm.styled";
import { useState, useEffect, useRef } from "react";
import keyIcon from "../../assets/keyIcon.png";


type WrongValues = {
    wrongEmail: boolean;
    wrongUsername: boolean;
}

const LoginForm = () => {
    const [isComplete, setIsComplete] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")

    const mailRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const [wrongVal, setWrongVal] = useState({
        wrongEmail: false,
        wrongUsername: false
    })




    useEffect(() => {
        if (password.trim() != "" && passwordAgain.trim() != "" && password === passwordAgain && email.trim() !== "" && username.trim() !== "") {
            setIsComplete(true)
        }
        else {
            setIsComplete(false)
        }


    }, [password, passwordAgain, email, username])





    const checkBeforeSubmit = (e: any) => {
        const mailIsEmpty: boolean = email.trim() === "";
        const userNameIsEmpty: boolean = username.trim() === "";

        if (mailIsEmpty || userNameIsEmpty) {
            e.preventDefault();
        }

        setWrongVal({ wrongEmail: mailIsEmpty, wrongUsername: userNameIsEmpty })

    }





    return (

        <StyledForm onSubmit={(e) => checkBeforeSubmit(e)} isComplete={isComplete}>
            <IconContainer>
                <img src={keyIcon} />
                <span>✔</span>
            </IconContainer>

            <h1>Please Register</h1>
            <UserNameInput {...wrongVal} onChange={(e) => setUsername(e.target.value)} ref={usernameRef} type="text" placeholder="Username" />
            <EmailInput {...wrongVal} onChange={(e) => setEmail(e.target.value)} ref={mailRef} type="email" placeholder="Email" />
            <StyledInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <StyledInput onChange={(e) => setPasswordAgain(e.target.value)} type="password" placeholder="Password again" />
            <PassNotMatch passwordsMatch={password === passwordAgain}>
                Passwords do not match
            </PassNotMatch>
            <SubmitBtn isComplete={isComplete} type="submit" value="Register" />

        </StyledForm>


    )
}
export default LoginForm;