import React from 'react';
import Item from '../../components/layout/Item';
import Link from 'next/link';
export default function EducationPage() {
  return (
    <section className="page mt-12 pt-4 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16  w-ful p-8">
        <div className="flex flex-col items-center  w-fit">
          <div>
            <h1 className="mb-2 left-4 p-4">Education</h1>
            <Item
              date={'2009-2011'}
              title={'Damascus University'}
              description={
                'I studied Civil Engineering at Damascus University from 2009 to 2011, immersing myself in the principles and practices of the field. The rigorous curriculum provided me with a solid foundation for my future pursuits in engineering.'
              }
            />
          </div>
          <Item
            date={'2011-2019'}
            title={'Moving To Turkey'}
            description={
              'From 2011 to 2019, I delved into the realms of graphic design and 3D modeling, honing my skills and expertise in these creative domains. During this period, I gained valuable experience through employment at esteemed companies such as Factor-H and Marka in Turkey.'
            }
          />
          <Item
            date={'2019-2024'}
            title={'Programming Journey'}
            description={
              'Between 2019-2024, I learned Python then This journey led me to specialize in both frontend and backend web development, and become a full stack developer. I got a certificate from Re-Coded Organization through their intensive bootcamp program.'
            }
          />
        </div>
        <div className="flex flex-col items-center w-fit">
          <div>
            <h1 className="mb-2 left-4 p-4">Experience</h1>
            <Item
              date={'2023-2024'}
              title={'Food Ordering App '}
              description={
                'For this project, I utilized Next.js 14, React.js, and Tailwind CSS for frontend development. Next Auth ensured secure authentication, MongoDB as the database backbone. Cloudinary and Stripe integration enhanced functionalities for image management and secure payments.'
              }
              link={'https://pizza-ordering-app-fawn.vercel.app/'}
            />
          </div>
          <Item
            date={'2023-2024'}
            title={'IMDB Clone App'}
            description={
              'For the IMDB Clone App, I employed React, Next.js, and Tailwind CSS to build a sleek user interface. JavaScript and HTML formed the core for functionality and structure, ensuring a seamless experience. This blend of technologies resulted in a polished and immersive platform.'
            }
            link={'https://imdb-clone-azure-xi.vercel.app/'}
          />
          <Item
            date={'2023-2024'}
            title={'Google Search Engine Clone'}
            description={
              'For the Google Search Engine Clone, I utilized React, Next.js, and Tailwind CSS for frontend. JavaScript and HTML provided core functionality, while CSS handled styling.'
            }
            link={'https://google-clone-fawn-phi.vercel.app/'}
          />
        </div>
      </div>
    </section>
  );
}
