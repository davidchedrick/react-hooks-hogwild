import HogCard from "./HogCards";

function HogArea({ hogs }) {

    const hogTiles = hogs.map(hog => {
        return (
            <HogCard 
                key={hog.name}
                hog={hog}
            />
        )
    })

    return(
        <div className="ui three stackable cards">
            {hogTiles}
        </div>
    )
}

export default HogArea