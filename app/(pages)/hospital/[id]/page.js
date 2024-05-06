'use client'
import { useSearchParams } from 'next/navigation'
import PharmacyMap from '@/app/components/pharmacy/pharmacyCard/pharmacyMap';
export default function modalPage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
      <div>REAL-111</div>
  );
};
