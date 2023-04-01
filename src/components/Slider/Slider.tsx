import { SliderWindow, SliderStripe, LeftArrow, SliderWrapper, RightArrow } from "./Slider.styled";
import React, { ReactNode, useRef, useState, useEffect } from "react";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SliderProps = {
    children?: ReactNode;
    slideWidth: number
    slideHeight: number
}

const Slider = ({ children, slideWidth, slideHeight }: SliderProps) => {
    const stripeRef = useRef<HTMLDivElement>(null)
    const [stripePosition, setStripePosition] = useState(0)
    //const childrenLength: number = React.Children.toArray(children).length
    const stripe = stripeRef.current!;
    const [stripeWidth, setStripeWidth] = useState(0)





    useEffect(() => {

        const pruh: HTMLElement = document.querySelector(".stripe")!
        setStripeWidth(pruh.offsetWidth)
    }, [])





    const moveSlide = (direction: string) => {


        let directionVal: number;

        if (direction === "left") {

            if (stripePosition - slideWidth + stripeWidth === 0) {
                return;
            }
            directionVal = -slideWidth;
        }

        else {

            if (stripePosition === 0) {
                return;
            }
            directionVal = slideWidth;
        }

        stripe.style!.transform = `translateX(${stripePosition + directionVal}px)`;
        setStripePosition(stripePosition + directionVal)

    }



    return (
        <SliderWrapper slideHeight={slideHeight} slideWidth={slideWidth} >
            <LeftArrow onClick={() => moveSlide("left")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </LeftArrow>

            <RightArrow onClick={() => moveSlide("right")}>
                <FontAwesomeIcon icon={faArrowRight} />
            </RightArrow>
            <SliderWindow>
                <SliderStripe className="stripe" ref={stripeRef}>
                    {children}
                </SliderStripe>
            </SliderWindow>
        </SliderWrapper>
    )
}

export default Slider;