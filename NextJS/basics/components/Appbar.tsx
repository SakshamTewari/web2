'use client';

import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Appbar() {
  // const router = useRouter();

  const session = useSession();

  return (
    <div>
      <button
        style={{
          color: 'white',
          background: 'black',
          borderRadius: '4px',
          padding: '4px 4px',
        }}
        onClick={() => {
          //   router.push('/api/auth/signin');
          signIn();
        }}
      >
        Signin
      </button>

      {JSON.stringify(session)}
    </div>
  );
}
