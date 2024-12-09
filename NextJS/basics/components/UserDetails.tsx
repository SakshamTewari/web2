import axios from 'axios';

export default async function UserDetails(){
    const userDetails = await getUserData();

    return(
        <div>
            Hi, {userDetails.firstName} [{userDetails.email}]
        </div>
    )
}

async function getUserData(){
    const response = await axios.get(`https://dummyjson.com/users/${Math.floor(Math.random() * 100) + 1}`);
    console.log(response.data);
    return response.data;
}