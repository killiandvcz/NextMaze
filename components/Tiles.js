import * as React from "react";
import styles from "../styles/components/Tiles.module.css"
import Tile from '../components/Tile'
import {Gate0000, Gate0001, Gate0010, Gate0011, Gate0100, Gate0101, Gate0110, Gate0111, Gate1000, Gate1001, Gate1010, Gate1011, Gate1100, Gate1101, Gate1110, Gate1111} from '../components/Gates'

export default class Tiles extends React.Component{

    render() {
        let tiles = []

        for (let i = 0; i < 36*36 ; i++){
            let y = Math.floor((1/36)*i) + 1;
            let x = i +1 - (36 * (y-1));
            tiles.push(
                <Tile x={x} y={y}>

                </Tile>
            )
        }

        return (
            <div className={styles.tiles}>
                {tiles}
            </div>
        )
    }
}