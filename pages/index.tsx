import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/default';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { CombinationViewer, KeyboardInput } from '../components/common/index';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [telNumber, updateNumber] = useState('');
  const [request, setRequest] = useState<Promise<void> | null>(null);
  const [listCombination, setListCombination] = useState([]);

  const getListCombination = async () => {
    if (!request) {
      setRequest(() => {
        setListCombination(() => []);
        return axios
          .get(`/api/letterCombination/${telNumber}`)
          .then(res => {
            setListCombination(() => res.data.data);
          })
          .catch(console.error)
          .finally(() => {
            setRequest(() => null);
          });
      })
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <KeyboardInput value={telNumber} onChange={(e) => updateNumber(() => e)} />
        <div className={`container ${styles.resultContainer}`}>
          <div className={styles.buttonContainer}>
            <Button
              disabled={!telNumber}
              onClick={getListCombination}
              variant="outline-primary">call axios</Button>
          </div>
          <CombinationViewer
            pending={request !== null}
            list={listCombination} />
        </div>

      </Layout>
    </div>
  )
}
