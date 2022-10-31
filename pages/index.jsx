import Head from 'next/head'
import Layout from '../components/layout/default'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Button
          onClick={() => axios.get('/api/letterCombination/65344')}
          variant="primary">call axios</Button>
      </Layout>
    </div>
  )
}
