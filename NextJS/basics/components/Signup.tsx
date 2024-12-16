'use client';

import axios from 'axios';
import { ChangeEventHandler, useState } from 'react';
import { Button } from './Button';
import { useRouter } from 'next/navigation';

export function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className='flex justify-center'>
        <a
          href='#'
          className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'
        >
          <div className='px-10'>
            <div className='text-3xl font-extrabold'>Signup</div>
          </div>
          <div className='pt-2'>
            <LabelledInput
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label='Username'
              placeholder='sakshamtewari3@gmail.com'
            />
            <LabelledInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label='Password'
              type={'password'}
              placeholder='123456'
            />
            <Button
              onClick={async () => {
                await axios.post('http://localhost:3000/api/user', {
                  username,
                  password,
                });

                // navigate the user after signup to home
                router.push('/');
              }}
              label='Signup'
            />
          </div>
        </a>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className='block mb-2 text-sm text-black font-semibold pt-4'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || 'text'}
        id='first_name'
        className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        required
      />
    </div>
  );
}
