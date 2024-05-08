import React from 'react';
import styles from './styles/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          {/* <div className={styles.content}>
            ForMedi
          </div> */}
          <Image src="/imgs/main_logo.png" alt="Logo Image" width={760} height={165} style={{ marginBottom: '40px' }}/>
          <div className={styles.secondContent}>
            Easy to find foreign language-speaking<br/>medical institutions in Seoul!
          </div>
        </div>
      </div>
      <div className={styles.howContainer}>
        <div className={styles.how}>
          How to use?
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionItem}>
            <Image src="/imgs/main_search.png" alt="How Image" width={400} height={232.23} />
            <div className={styles.box}>
              #Search
            </div>
            <div className={styles.boxText}>
              Users can search for<br/>pharmacies/hospitals with<br/>medication guidance in the<br/>language they want and<br/>search for locations.
            </div>
          </div>
          <div className={styles.descriptionItem}>
            <Image src="/imgs/main_medicine.png" alt="How Image" width={400} height={232.23} unoptimized />
            <div className={styles.box}>
              #Medicine
            </div>
            <div className={styles.boxText}>
              Additionally, it provides<br/>information on 13<br/>preparatory medicines you<br/>can buy at convenience<br/>stores.
            </div>
          </div>
          <div className={styles.descriptionItem}>
            <Image src="/imgs/main_language.png" alt="How Image" width={400} height={232.23} />
            <div className={styles.box}>
              #Language
            </div>
            <div className={styles.boxText}>
              Our service is available by<br/>translating into various<br/>languages, and you can set<br/>the language on My Page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}