import EnemyImg from "../../assets/Malzahar.png";
import Item from "../../assets/BronzeSword.png";

import { Image, ProgressBar } from "react-bootstrap";



export function Enemy(props) {
    return <>
        {props.data.monsterDto != null ? /* ako postji monster prikazi njegove podatke*/
            <div className="container">
                <div className="row">
                    <div className="col-sm " style={{ marginRight: "-700px" }}>
                        <Image src={EnemyImg} roundedCircle /> <br />
                        <span style={{ marginRight: "0px", textAlign: "center" }}> {props.data.monsterDto.name} </span>
                    </div>
                    <div className="col-sm" style={{ marginTop: "0px" }}>
                        <span>Health: </span> <ProgressBar style={{ width: "150px" }} now={(props.data.monsterDto.health / props.data.monsterDto.health) * 100} label={`${props.data.monsterDto.health} / ${props.data.monsterDto.health}`}></ProgressBar>
                        <br />
                        <span>Damage:  </span> <ProgressBar style={{ width: "150px" }} now={(props.data.monsterDto.damage / props.data.monsterDto.damage) * 100} label={`${props.data.monsterDto.damage} / ${props.data.monsterDto.damage}`}></ProgressBar><br />
                    </div>
                </div>
            </div>
            : props.data.itemDto != null ? /* ako nemam montera a ima Item, prikazi item podatke */
                <div className="container">
                    <div className="row">
                        <div className="col-sm " style={{ marginRight: "-700px" }}>
                            <img src={Item} className="circleImg" /> <br />
                            <span> {props.data.itemDto.name} </span>
                        </div>
                        <div className="col-sm" style={{ marginTop: "50px" }}>
                            <span>Type: {props.data.itemDto.type} </span><br />
                            <span>Increase by: {props.data.itemDto.increaseBy} </span><br />
                        </div>
                    </div>
                </div>
                : <span>No monster and item in this dungeon</span> /* ako nema ni itema ni mostera onda ispiši ovu poruku */

        }
    </>
}