import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Coursal() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="min-h-full min-w-full ">
            <p className="flex w-full items-center justify-center pt-12 text-4xl font-light tracking-wide text-gray-800">

                Choose what's right for you
            </p>
            <Carousel className="min-h-full  w-full py-8 "
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}

                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                // centerMode={true}
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"

            >
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/001.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Business</p></div>
                </div>

                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/002.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Credit Cards</p></div>
                </div>

                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/003.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Checking</p></div>
                </div>

                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/008.png" alt="icon" className="w-15 h-12" /></div>
                    <div><p className="text-lg text-blue-500"> Travel</p></div>
                </div>

                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/004.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Savings</p></div>
                </div>

                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/005.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Home Loans</p></div>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/006.png" alt="icon" className="w-15 h-14" /></div>
                    <div><p className="text-lg text-blue-500"> Auto</p></div>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/007.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Investments</p></div>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/009.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Comercial</p></div>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/010.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Schedule a meeting</p></div>
                </div>
                <div className="flex items-center justify-center w-full flex-col">
                    <div><img src="/011.png" alt="icon" className="w-15 h-15" /></div>
                    <div><p className="text-lg text-blue-500"> Free Credit score</p></div>
                </div>

            </Carousel>
        </div>

    )
}