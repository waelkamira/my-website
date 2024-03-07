import { LuLinkedin } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import Link from 'next/link';
import { ImProfile } from 'react-icons/im';
import { SlEnvolopeLetter } from 'react-icons/sl';

export default function FooterPage() {
  return (
    <section className=" mt-2 ">
      <div className="flex gap-4 justify-center ">
        <Link
          download
          target="_blank"
          href={'cv wael kamira.docx'}
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          {/* <ImProfile className="text-primary text-2xl hover:text-secondary p-2" /> */}
          <h6 className="text-primary text-lg hover:text-secondary px-[7px] pt-[7.5px] pb-[5px] m-0">
            CV
          </h6>
        </Link>

        <Link
          href={'Cover letter wael kamira.docx'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <SlEnvolopeLetter className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/wael-kamira-9b709726b/'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <LuLinkedin className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
        <Link
          href={'https://github.com/waelkamira'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <FiGithub className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
        <Link
          href={'https://www.facebook.com/WaelKhamira/'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <FiFacebook className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
      </div>
    </section>
  );
}
