// medicineModal.js

import React, { useCallback, useRef, useEffect, useState } from 'react';
import styles from './medicineModal.module.css';
import axios from 'axios';

const MedicineModal = ({ children, isShowing, hide, medicineId }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const [medicineData, setMedicineData] = useState(null); // 상태 추가
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 모달이 열릴 때마다 API 호출
    if (isShowing && medicineId) {
        setLoading(true);
      axios.get(`/medicines/${medicineId}`) // medicineId를 이용해 특정 약품의 데이터 가져오기
        .then(response => {
          setMedicineData(response.data); // 데이터 상태에 저장
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching medicine details:', error);
          setLoading(false);
        });
    }
  }, [isShowing, medicineId]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        hide(); // 모달 닫기 함수 호출
      }
    },
    [hide, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") hide(); // ESC 키를 눌러 모달을 닫음
    },
    [hide]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  if (!isShowing) return null;

  return (
    <div
      ref={overlay}
      className={styles.overlay}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={styles['modal-wrapper']}
      >
        {loading ? (
          // 로딩 중일 때
          <p>Loading...</p>
        ) : (
          // 로딩이 완료되면 데이터 출력
          medicineData ? (
            // medicineData가 있을 때만 데이터를 출력
            <div>
              <h2>{medicineData.medicineCategory.categoryName}</h2>
              <p><strong>Efficacy:</strong> {medicineData.medicine_efficacy}</p>
              <p><strong>Instructions:</strong> {medicineData.instructions}</p>
              <p><strong>Caution:</strong> {medicineData.medicine_caution}</p>
              <p><strong>Side Effects:</strong> {medicineData.medicine_side_effect}</p>
            </div>
          ) : (
            // 데이터가 없을 때
            <p>No data available.</p>
          )
        )}
      </div>
    </div>
  );
};

export default MedicineModal;
