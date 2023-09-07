import React, { useState } from "react";
import './carousel.css'

const Carousel = ({ array, id }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [fullView, setFullView] = useState(false)
    const [src, setSrc] = useState('')

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const largeImage = (e) => {
        setSrc(e.target.src)
        setFullView(true)
    }

    return (
        <div id={id} className="carousel">
            {/* <div className="zoom-container">
                <img data-bs-toggle='tooltip' title="Click to Enlarge" onClick={largeImage} className="thumbnail" src={array[currentIndex]} alt="concert" />
                <div className="zoomOverlay" >Click Image To Enlarge</div>
            </div> */}
            <img onClick={largeImage} className="carouselImages"
                key={currentIndex}
                src={array[currentIndex]}
            />
            {fullView && (
                <div className="thumbnailModal">
                    <span className="closeMod" onClick={() => setFullView(false)}>&times;</span>
                    <img className="thumbnailContent" src={array[currentIndex]} />
                    
            <div className="indicator">
                {array.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
                </div>
            )}

            <div className="indicator">
                {array.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>





    )
}

export default Carousel