'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Button from './Button';

export const ContactUs = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const createPromise = new Promise(async (resolve, reject) => {
      const promise = emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVES_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
          }
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
      if (promise) {
        resolve();
        setUserInfo({ name: '', email: '', message: '' });
      } else {
        reject();
      }
    });

    toast.promise(createPromise, {
      loading: 'Sending ...',
      success: 'Your Message Successfully Sended',
      error: 'Something Went Wrong Please Try Again Later',
    });
  };

  return (
    <div className="p-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-4 max-w-[600px] "
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 w-full">
          <div className="w-full">
            <label className="text-xl ">Name: </label>
            <input
              value={userInfo?.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              required
              type="text"
              name="user_name"
              className="w-full rounded-sm outline-none shadow-none focus:border-primary border-secondary text-xl"
            />
          </div>
          <div className="w-full px-2">
            <label className="text-xl">Email: </label>
            <input
              value={userInfo?.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              required
              type="email"
              name="user_email"
              className="w-full rounded-sm outline-none shadow-none focus:border-primary border-secondary text-xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <label className="text-xl my-2">Message:</label>
          <textarea
            value={userInfo?.message}
            onChange={(e) =>
              setUserInfo({ ...userInfo, message: e.target.value })
            }
            required
            name="message"
            className="w-full rounded-sm outline-none shadow-none focus:border-primary border-secondary text-xl min-h-[200px]"
          />
        </div>
        <div>
          <Button name={'Send'} type={'submit'} />
        </div>
      </form>
    </div>
  );
};
