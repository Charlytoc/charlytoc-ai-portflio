import { svgs } from "../helpers/svgs"
export default function Map () {
    return <>
    <div className="map-container">
    <div className="map">
        <h1>Explore the map and discover a little</h1>
        <div className="place mountain">
                {svgs.mountain}
                <div className="treasure">
                <a href="">Hobbies</a>
                {svgs.chest}
            </div>
        </div>
        <div className="place castle">
                {svgs.castle}
                <div className="treasure">
                <a href="">Contact</a>
                {svgs.chest}
            </div>
        </div>
        <div className="place compu">
                {svgs.computer}
                <div className="treasure">
                <a href="">Projects</a>
                {svgs.chest}
            </div>
        </div>
    </div>
    </div></>
}

