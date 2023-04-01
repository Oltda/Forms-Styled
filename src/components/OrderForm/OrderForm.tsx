import { KeyboardEvent, ChangeEvent, useRef, useState, useEffect } from "react"
import { useQueryParams } from "../../hooks/useQueryParams"
import { StyledForm, StyledInput, SubmitBtn, EmailInput, UserNameInput, PassNotMatch, IconContainer } from "../LoginForm/LoginForm.styled"
import keyIcon from "../../assets/keyIcon.png";


const OrderForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState<number>(0)
    const [loan, setLoan] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const params = useQueryParams()
    // TEST

    useEffect(() => {
        if (name.trim() !== "" && age > 0) {
            setIsComplete(true)
        } else {
            setIsComplete(false)
        }

    }, [name, age])

    useEffect(() => {
        if (params.name) {
            setName(params.name)
        }
        if (params.age) {
            setAge(params.age)
        }
        if (params.hasLoan) {
            const boolPar: boolean = params.hasLoan === "true";
            setLoan(boolPar)
        }
    }, [])



    const handleAge = (e: ChangeEvent<HTMLInputElement>): number => {
        const output = parseInt(e.currentTarget.value);

        return Number.isNaN(output) ? 0 : output
    }

    //onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.currentTarget.value)} 

    return (
        <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <StyledForm isComplete={isComplete}>
                <IconContainer>
                    <img src={keyIcon} />
                    <span>✔</span>
                </IconContainer>
                <StyledInput onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)} type="text" value={name} placeholder="Customer name" />
                <StyledInput onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(handleAge(e))} type="text" value={age} placeholder="Customer age" />

                <div>
                    <input id="loan" type="checkbox" onChange={() => setLoan(!loan)} checked={loan} />
                    <label htmlFor="loan">Mate pujcku</label>
                </div>

                <SubmitBtn isComplete={isComplete} type="submit" value="Odeslat" />
            </StyledForm>
        </div>
    )
}

export default OrderForm