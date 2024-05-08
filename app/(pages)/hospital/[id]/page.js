'use client'
import { useSearchParams } from 'next/navigation'
export default function modalPage({params}) {
  const {id} = params
  console.log(id)
  const searchParams = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
      <div>REAL-111</div>
  );
}