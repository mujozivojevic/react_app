import './Content.css';

import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { StartMap } from './maps/StartMap';
import { Map } from './maps/Map';

export function Content() {

    let history = useHistory();
    let [map, setMap] = useState();

    let submit = ({ event, playerName }) => {
        event.stopPropagation();
        event.preventDefault();
        (async () => {
            let response = await fetch("http://localhost:8080/game/newgame", {
                crossDomain: true,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ playerName })
            }).then(response => response.json());
            setMap(response);
            history.push({
                pathname: "/map",
            });
        })();
    }
    
    return <div className="Content">
        <Switch>
            <Route path='/StartMap'>
                <StartMap submit={submit} />
            </Route>
            <Route path='/map'>
                <Map data={map} />
            </Route>
        </Switch>
    </div>
}
export default Content;