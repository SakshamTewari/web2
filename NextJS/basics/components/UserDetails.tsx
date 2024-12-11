import axios from 'axios';

export default async function UserDetails() {
  await new Promise((r) => setTimeout(r, 3000)); // added delay
  const userDetails = await getUserData();

  return (
    <div className='flex h-screen items-center justify-center bg-green-50'>
      <div className='text-center border'></div>
      {/* Hi, {userDetails.firstName} [{userDetails.email}] */}
      Hi, {userDetails.name} [{userDetails.email}]
    </div>
  );
}

async function getUserData() {
  const response = await axios.get(
    // `https://dummyjson.com/users/${Math.floor(Math.random() * 100) + 1}`,
    'http://localhost:3000/api/user',
  );
  console.log(response.data);
  return response.data;
}
