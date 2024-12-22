import { getServerSession } from 'next-auth'; // when its a server component , not rendered on a 'client'
import UserDetails from '@/components/UserDetails';

export default async function Users() {
  const session = await getServerSession();
  return (
    <div>
      <UserDetails />

      {JSON.stringify(session)}
    </div>
  );
}
