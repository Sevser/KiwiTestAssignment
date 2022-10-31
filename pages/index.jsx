import Head from 'next/head'
import Layout from '../components/layout/default'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import KeyboardInput from '../components/common/keyboardInput';
import { useState } from 'react';

export default function Home() {
  const [telNumber, updateNumber] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <KeyboardInput value={telNumber} onChange={(e) => updateNumber(() => e)} />
        <Button
          onClick={() => axios.get('/api/letterCombination/65344')}
          variant="outline-primary">call axios</Button>
      </Layout>
    </div>
  )
}
