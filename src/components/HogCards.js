import { useState } from "react"
import HogDetails from "./HogDetails"

function HogCard({ hog }) {
    const [isHidden, setIsHidden] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
   
   
    function handleDetailsClick() {
        setShowDetails(prevShowDetails => !prevShowDetails)
        
    }
    if(isHidden) return null
    const {name, image, specialty} = hog

    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                <img src={image} alt={name}/>
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <div className="description">
                Specialty: {specialty}
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog} /> : null}
                <button  
                    className="ui button" 
                    onClick={handleDetailsClick}
                >
                    {showDetails ? "Less Info" : "More Info"}
                </button>
                <button  className="ui button" 
                    onClick={() => setIsHidden(true)} 
                >
                    Hide Me{" "}
                    <span role="img" aria-label="snot">
                        🐽
                    </span>
                </button>
            </div>
        </div>
    )
}

export default HogCard