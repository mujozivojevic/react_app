import { Image, ProgressBar } from "react-bootstrap";
import PlayerImg from "../../assets/player.jpg";


export function Player(props) {
    return <>
        <div className="row" style={{ float: "right" }}>
            <div className="col-sm" style={{ marginTop: "0px", textAlign: "left" }}>
                <span>Health: </span> <ProgressBar style={{ width: "150px" }} now={(props.data.playerDto.health / props.data.playerDto.levelHealth) * 100} label={`${props.data.playerDto.health} / ${props.data.playerDto.levelHealth}`}></ProgressBar>
                <br />
                <span>Damage:  </span> <ProgressBar style={{ width: "150px" }} now={(props.data.playerDto.damage / props.data.playerDto.damage) * 100} label={`${props.data.playerDto.damage} / ${props.data.playerDto.damage}`}></ProgressBar><br />
            </div>
            <div className="col-sm " style={{ marginLeft: "50px" }}>
                <Image src={PlayerImg} className="circleImg" roundedCircle /> <br />
                <span> {props.data.playerDto.name} </span>
            </div>
        </div>
    </>

}