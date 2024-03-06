import MainText from '../../components/layout/MainText';
import { ContactUs } from '../../components/layout/ContactByEmail';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="page my-4">
      <div className="flex flex-col items-center mt-24">
        <MainText subText={'Contact'} mainText={'Me'} />
        <ContactUs />
      </div>
    </section>
  );
}
