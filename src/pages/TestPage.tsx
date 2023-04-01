import Slider from "../components/Slider/Slider";
import LoginForm from "../components/LoginForm/LoginForm";


const TestPage = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {/* <Slider slideHeight={500} slideWidth={600}>
                <div>
                    <img style={{ width: "100%", height: "100%" }} src="https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_4x3.jpg" />
                </div>
                <div>
                    <img style={{ width: "100%", height: "100%" }} src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg" />
                </div>
                <div>
                    <img style={{ width: "100%", height: "100%" }} src="https://travellersworldwide.com/wp-content/uploads/2022/07/Shutterstock_248799484.jpg.webp" />
                </div>
            </Slider> */}


            <Slider slideHeight={500} slideWidth={600}>
                <div>
                    <h1>Slide one</h1>
                    <p>jhdkjha djah skdj haskdjh dsadad
                        dsadaddasdasdasd asd asd asd
                        as dasd asdas ada
                    </p>
                </div>
                <div>
                    <h1>Slide two</h1>
                    <p>jhdkjha djah skdj haskdjh dsadad
                        dsadaddasdasdasd asd asd asd
                        as dasd asdas ada
                    </p>
                </div>
            </Slider>
        </div>
    )
}

export default TestPage;