import styled, { css } from 'styled-components';

type FormProps = {
    isComplete: boolean;
}

type InputProps = {
    wrongEmail: boolean;
    wrongUsername: boolean;
}

type PasswordProps = {
    passwordsMatch: boolean
}



export const IconContainer = styled.div`
    text-align:center;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
    overflow:hidden;
    background-color:lightgray;

    img{
        position:absolute;
        height: 40px;
        top:50%;
        transform: translate(-50%, -50%);
        transition: all 0.5s ease;
    }

    span{
        position:absolute;
        left:50%;
        height:30px;
        transform: translate(-50%, -50%);
        font-size: 20px;  
        transition: all 0.5s ease;
    }
`

export const StyledForm = styled.form<FormProps>`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 500px;
    //text-align:center;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left:20px;
    padding-right:20px;
    background-color:#fff;
    border-radius: 5px;
    position:relative;

    h1{
        text-align:center;
    }

    ${IconContainer}{     
    img{
         top: ${(props) => props.isComplete ? '-100px' : '50%'};
        }

    span{
        top: ${(props) => props.isComplete ? '50%' : '-100px'};
        }

    }
`



export const FormIconWrap = styled.div`
  
    height: 60px;
    width: 60px;
    border-radius: 50px;
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:lightgray;
     
    img{
        position:absolute;
        height: 40px;
        top: -100px;
    }

    p{
        position:absolute;
        bottom: -100px;
    }
`


const sharedInputStyle = css`
    border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
    border:none;
    border-bottom: 1px solid lightblue;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 5px;
    font-size: 15px;  

    &:focus{
        outline:none;
        border-bottom: 2px solid blue;
    }
`


const getBorderedInputStyles = (val: boolean) => {
    return `
    ${sharedInputStyle}
    border-bottom: ${val ? '2px solid red' : '1px solid blue'};
  `;
};


export const StyledInput = styled.input`
    ${sharedInputStyle}
`

export const EmailInput = styled.input <InputProps>` 
   ${(props) => getBorderedInputStyles(props.wrongEmail)}
`

export const UserNameInput = styled.input <InputProps>` 
    ${(props) => getBorderedInputStyles(props.wrongUsername)}
`


export const SubmitBtn = styled.input<FormProps>`
    
    width: 100%;
    margin-top: 20px;
    background: rgb(17,141,184);
    background: linear-gradient(0deg, rgba(17,141,184,1) 0%, rgba(43,223,200,1) 100%);
    padding: 8px;
    border: none;
    color:#fff;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
    //pointer-events:${(props) => props.isComplete ? "auto" : "none"};
    
    &:hover{
        background: rgb(180,236,255);
        background: linear-gradient(0deg, rgba(180,236,255,1) 0%, rgba(43,223,200,1) 100%);
    }

`

export const PassNotMatch = styled.p<PasswordProps>`
    color:red;
    opacity: ${(props) => props.passwordsMatch ? "0" : "1"};
    transition: ease 1s;
    font-size: 15px;
    position:relative;
    text-align:left;
    margin-top: -5px;
   
`