import * as React from "react";
import styles from '../styles/components/Gates.module.css'

export class Gate0000 extends React.Component{
    render(){
        return(
            <div className={styles.void}>

            </div>
        )
    }
}

export class Gate1000 extends React.Component{
    render(){
        return(
            <div className={`${styles.top}`}>

            </div>
        )
    }
}

export class Gate0100 extends React.Component{
    render(){
        return(
            <div className={`${styles.right}`}>

            </div>
        )
    }
}

export class Gate0010 extends React.Component{
    render(){
        return(
            <div className={`${styles.bottom}`}>

            </div>
        )
    }
}

export class Gate0001 extends React.Component{
    render(){
        return(
            <div className={`${styles.left}`}>

            </div>
        )
    }
}

export class Gate1001 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1100 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.right}`}>

            </div>
        )
    }
}

export class Gate0110 extends React.Component{
    render(){
        return(
            <div className={`${styles.right} ${styles.bottom}`}>

            </div>
        )
    }
}

export class Gate0011 extends React.Component{
    render(){
        return(
            <div className={`${styles.bottom} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1010 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.bottom}`}>

            </div>
        )
    }
}

export class Gate0101 extends React.Component{
    render(){
        return(
            <div className={`${styles.right} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1101 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.right} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1110 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.right} ${styles.bottom}`}>

            </div>
        )
    }
}

export class Gate0111 extends React.Component{
    render(){
        return(
            <div className={`${styles.right} ${styles.bottom} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1011 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.bottom} ${styles.left}`}>

            </div>
        )
    }
}

export class Gate1111 extends React.Component{
    render(){
        return(
            <div className={`${styles.top} ${styles.bottom} ${styles.right} ${styles.left}`}>

            </div>
        )
    }
}