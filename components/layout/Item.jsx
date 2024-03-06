import Link from 'next/link';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';

export default function Item({ date, title, description, link = '' }) {
  return (
    <div className="relative border-0 border-l-2 border-solid border-primary px-4 pb-4">
      <FaCircle className="absolute -left-2.5 -top-1 text-lg text-primary" />
      <div className="item border-2 outline outline-1 outline-primary p-4 rounded-lg lg:h-52 xl:h-40">
        <h5 className="my-2">
          <BsCalendar2DateFill className="text-green-500 mr-2" /> {date}
        </h5>
        <h1 className="text-primary my-0">{title}</h1>
        <p className=" text-wrap my-2">
          {description}{' '}
          <span>
            {link ? (
              <Link
                href={link}
                target="_blank"
                className="underline hover:text-primary"
              >
                Click Me To See The Project
              </Link>
            ) : (
              ''
            )}
          </span>
        </p>
      </div>
    </div>
  );
}
