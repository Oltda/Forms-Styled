import styled, { css } from "styled-components";

type SliderProps = {
    slideWidth: number;
    slideHeight: number;
}


const centerAll = css`
    display:flex;
    justify-content:center;
    align-items:center;
`



export const SliderWindow = styled.div`
    width: 100%;
    height:100%;
    border: 1px solid gray;
    overflow:hidden;
    position:relative;
`



export const SliderStripe = styled.div`
    position:absolute;
    height:100%;

    display:flex;
    flex-direction:row;
    transition: all ease 1s;

    div{
           height:100%;
           text-align:center;
           display:flex;
           flex-direction: column;
           box-sizing: border-box;
           ${centerAll}

           img{
                width:100%;
                height:100%;
           }
    }
`


export const SliderWrapper = styled.div<SliderProps>`
    position:relative;
    width:${(props) => props.slideWidth}px;
    height:${(props) => props.slideHeight}px;

    ${SliderStripe}{
        div{
             width:${(props) => props.slideWidth}px;
        }
    }
`



const arrowStyles = css`
    border-radius: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    top: 50%;
    width:50px;
    height:50px;
    background:lightgray;
    position:absolute;
    cursor:pointer;
    &:hover{
        background:darkgray;
    }
`

export const LeftArrow = styled.div`
    ${arrowStyles}
    left: -100px;
`
export const RightArrow = styled.div`
 ${arrowStyles}
    right: -100px;
`