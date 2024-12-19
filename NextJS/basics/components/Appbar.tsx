'use client';

import { useRouter } from 'next/navigation';

export function Appbar() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push('/api/auth/signin');
        }}
      >
        Signin
      </button>
    </div>
  );
}
