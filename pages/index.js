import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tiles from "../components/Tiles";



export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Maze</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Tiles />

      </div>
  )
}
