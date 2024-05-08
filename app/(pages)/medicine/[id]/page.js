import React from 'react';
import { useRouter } from 'next/router';

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;

    return (
        <div>
            <h1>Detail Page</h1>
            <p>Medicine ID: {id}</p>
        </div>
    );
}
