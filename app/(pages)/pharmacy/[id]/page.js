'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import GoogleMap from '../../../hooks/useGoogleMap';
import Store from '../../../containers/hospitalStore/hospital/hospitalStore';

export default function ModalPage() {
  const { lat, lng } = Store();
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
      <div className="object-cover aspect-square items-center justify-center flex-col flex bg-white p-4 w-[500px] h-[480px]">
        <div className="w-[600px] h-[550px] flex items-center justify-center bg-black-500 mb-6">
          <GoogleMap realLat={lat} realLng={lng} />
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="w-[150px] text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-4 focus:ring-lime-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-lime-500 dark:hover:bg-lime-600 dark:focus:ring-lime-600"
        >
          Close
        </button>
      </div>
  );
}