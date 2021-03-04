import '../Content.css';

import { useState } from "react";
import Button from '@material-ui/core/Button';

import player from '../../assets/player.jpg'

export function StartMap(props) {
    let [playerName, setPlayerName] = useState('');
    return <header className="Content-header">
        <img src={player} className="Content-logo" />
        <form onSubmit={(event) => props.submit({ event, playerName })}>  {/* pocetna forma gdje koristnik unosi svoje ime i šalje request na API */}
            <div className="form-group">
                <input
                    value={playerName}
                    placeholder="Username"
                    type="text"
                    name="Name"
                    onChange={event => setPlayerName(event.target.value)}
                />
            </div>
            <Button type="submit" variant="contained" color="primary">Start new game</Button>
        </form>
    </header>
}
