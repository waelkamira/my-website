import Image from 'next/image';

import Hero from '../components/hero/Hero';

export default function Home() {
  return (
    <main className="page flex justify-center bg-secondary">
      <div className="flex flex-col-reverse items-center lg:justify-between lg:flex-row ">
        <div>
          <Hero />
        </div>
        <div className="relative h-96 sm:h-screen sm:max-w-[1536px] sm:min-w-[600px] max-w-[1536px] min-w-[320px]">
          <Image
            src={'/my-photo.webp'}
            alt="my photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}
