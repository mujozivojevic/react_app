import '../Content.css';

import React from 'react'
import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { DenseTable } from './Sidebar'
import { Message } from './Message';

export function Map(props) {
    const [map, setMap] = useState(props.data);
    const [win, setWin] = useState(false);

    //////////////////////////////////////////////////////////////////////////////////////////
    // API REQUESTS
    let fight = () => {
        (async () => {
            let response = await fetch("http://localhost:8080/game/" + map.playerId + "/fight", {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            setMap(response);
            console.log("isWin", map.isWin)
            if (map.isWin === true) { setWin(true); }
            console.log("map", map)
        })();
    }

    let flee = () => {
        (async () => {
            let response = await fetch("http://localhost:8080/game/" + map.playerId + "/flee", {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            setMap(response);

        })();
    }

    let move = () => {
        (async () => {
            let response = await fetch("http://localhost:8080/game/" + map.playerId + "/move", {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            setMap(response);
        })();
    }

    let item = () => {
        (async () => {
            let response = await fetch("http://localhost:8080/game/" + map.playerId + "/item", {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            setMap(response);
        })();
    }

    let heal = () => {
        (async () => {
            let response = await fetch("http://localhost:8080/game/" + map.playerId + "/heal", {
                crossDomain: true,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json());
            setMap(response);

        })();
        //////////////////////////////////////////////////////////////////////
    }
    return <>
        <div className='Map'>
            <div className="sidebar">
                {map.playerDto.items.length ?
                    <DenseTable data={map}></DenseTable> // Tabela sa itemima koje player posjeduje
                    : <span>No items </span>
                }
            </div>
            <div className="main">
                <div className="enemy">
                    <Enemy data={map}></Enemy> 
                </div>
                <div className="player">
                    <Player data={map}></Player>
                </div>
                <div className="message">
                    <Message data={map.message}></Message>
                </div>
                <div className="button">
                    {win === false || map.playerDto.isDeath === false ? <> {/* ako je igrac pobijedio sve monstere ili ako je izgubio,  onda mu se prikazuje samo Start new game Button  */}
                        {/* ako ima monster u dungenu, onda prikazi buttone FIGTH i FLEE */}
                        {map.monsterDto != null ?
                            (<>
                                <Button variant="contained" color="primary" onClick={fight}> FIGHT </Button>
                                <Button variant="contained" color="secondary" onClick={flee}>FLEE</Button>
                            </>
                            ) : map.itemDto != null ? (
                                <>
                                    <Button variant="contained" onClick={item} color="primary" >ITEM</Button>
                                    <Button variant="contained" onClick={move} color="primary" > MOVE</Button>
                                </>) : <> {/* ako nema monstera onda prikazi button MOVE */}
                                    <Button variant="contained" onClick={move} color="primary" > MOVE</Button> </>
                        }
                        <Button variant="contained" onClick={heal} color="primary" >HEAL</Button>
                    </> : <>
                            <Button variant="contained" color="primary" component={Link} to={'/startmap'}>Start new game</Button>
                        </>

                    }
                </div>
            </div>
        </div>
    </>
}