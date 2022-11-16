import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/default';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { CombinationViewer, KeyboardInput } from '../components/common/index';

import styles from '../styles/Home.module.css';
import letterCombinations from '../utills/letterCombinations';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
export default function Home() {
  const [telNumber, updateNumber] = useState('');
  const [showModal, updateShowModal] = useState<boolean>(false);
  const [request, setRequest] = useState<Promise<void> | null>(null);
  const [listCombination, setListCombination] = useState([]);

  const getListCombination = async () => {
    if (!request) {
      setRequest(() => {
        setListCombination(() => []);
        return axios
          .get(`${next.router.basePath}/api/letterCombination/${telNumber}`)
          .then(res => {
            setListCombination(() => res.data.data);
          })
          .catch(() => {
            setListCombination(() => letterCombinations(telNumber) as never[]);
          })
          .finally(() => {
            setRequest(() => null);
          });
      })
    }
  }

  const openHelpMenu = () => {
    updateShowModal(() => !showModal);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout openHelpMenu={openHelpMenu}>
        <KeyboardInput value={telNumber} onChange={(e) => updateNumber(() => e)} />
        <div className={`container ${styles.resultContainer}`}>
          <div className={styles.buttonContainer}>
            <Button
              disabled={!telNumber}
              onClick={getListCombination}
              variant="outline-primary">get All combinations</Button>
          </div>
          <CombinationViewer
            pending={request !== null}
            list={listCombination} />
        </div>
        <Modal show={showModal} onHide={() => updateShowModal(() => false)}>
          <ModalHeader>
            <ModalTitle>
              Letter Combinations of a Phone Number
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
            <br /><br />
            A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
            <br />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => updateShowModal(() => false)}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </Layout>
    </div>
  )
}
