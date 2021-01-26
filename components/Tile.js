import * as React from "react";
import styles from '../styles/components/Tile.module.css'
import ntol from 'number-to-letter'

export default class Tile extends React.Component{
    render() {
        return (
            <div className={styles.Tile}>
                {ntol(this.props.x - 1)}{this.props.y}
            </div>
        )

    }

}