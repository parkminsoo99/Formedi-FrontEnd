import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const useMedicineModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [selectedMedicineId, setSelectedMedicineId] = useState(null); // selectedMedicineId 상태 추가
  const router = useRouter();

  const toggle = useCallback(() => {
    setIsShowing(prevState => !prevState);
  }, []);

  const openModal = useCallback((id) => {
    setSelectedMedicineId(id); // 모달 열 때 선택된 약물의 ID 설정
    setIsShowing(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsShowing(false);
    setSelectedMedicineId(null); // 모달 닫을 때 selectedMedicineId 초기화
  }, []);

  return {
    isShowing,
    toggle,
    openModal,
    closeModal,
    selectedMedicineId // selectedMedicineId 반환
  };
};

export default useMedicineModal;