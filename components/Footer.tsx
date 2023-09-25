import Link from 'next/link';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='px-10 py-5 bg-white w-full py-3 border-t-[1px] shadow-sm text-gray-500 text-sm'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between'>
        <div className='flex items-center gap-3'>
          <p className='flex items-center gap-1'>
            <AiOutlineCopyrightCircle className='mt-[1px]' />
            Tanja Schmidt - {currentYear}
          </p>
        </div>

        {/*TODO: Add hover action for footer links*/}
        <div className='flex gap-6'>
          <div>
            <Link href='https://github.com/Sunkio' target='_blank' rel='noopener noreferrer'>
              <BsGithub className='w-6 h-6 text-cr-black/50 hover:text-amber-600 duration-300 cursor-pointer' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/tanja-schmidt-dev/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin className='w-6 h-6 hover:text-amber-600 duration-300 cursor-pointer' />
          </Link>
          <Link href='https://twitter.com/tanja_codes' target='_blank' rel='noopener noreferrer'>
            <BsTwitter className='w-6 h-6 hover:text-amber-600 duration-300 cursor-pointer' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
