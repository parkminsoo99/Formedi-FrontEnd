"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './medicine.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Medicine() {
    const [medicines, setMedicines] = useState([]);
    const tabTexts = ["All Medicine", "Antipyretic", "Analgesic", "Digestive", "Tonic", "Astringent", "Anti-inflammatory"];

    useEffect(() => {
        // useEffect 내에서 API 호출
        axios.get('/medicines')
            .then(response => {
                // 응답이 성공하면 데이터를 상태에 저장
                setMedicines(response.data);
            })
            .catch(error => {
                // 오류 처리
                console.error('Error fetching medicines:', error);
            });
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 호출

    return (
        <div className={styles.medicineContainer}>
            <div style={{ position: 'relative', width: '1300px', height: '633px' }}>
            <Image src="/images/medicine.png" alt="Medicine Image" width={1300} height={633} style={{ marginTop: '44px' }}/>
            <div style={{ position: 'absolute', top: '245px', left: '692px', color: '#FFF', fontSize: '48px', fontWeight: 700 }}>
                Are you worried because<br/>the pharmacy is closed?
            </div>
            <div style={{ position: 'absolute', top: '370px', left: '692px', color: '#69BC2E', fontSize: '16px', fontWeight: 500 }}>
                Find the medicine at the convenience store easily.
            </div>
            </div>
            <div className={styles.searchAndTabsContainer}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Medicine Search..."
                    />
                </div>
                <div className={styles.tabContainer}>
                    {tabTexts.map((text, index) => (
                        <div
                            key={index}
                            className={styles.tab}
                        >
                            {text}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.listContainer}>
                {medicines.map((medicine, index) => (
                    <div key={medicine.id} className={styles.listItemContainer}>
                        <Image src={medicine.medicine_image} alt="Medicine" width={340} height={240} style={{ borderRadius: '12px' }}/>
                        <div className={styles.medicineDetail}>
                            <p className={styles.medicineText}>{medicine.medicine_name_en}</p>
                            <Link href={`/medicine/${medicine.medicine_id}`}>
                            <button className={styles.moreDetailButton}>More Detail</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}