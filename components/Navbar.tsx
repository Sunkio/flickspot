import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='px-10 py-5 fixed bg-white top-0 left-0 w-full z-20'>
      <Link prefetch href='/'>
        <div className='hover:underline duration-300 decoration-amber-600  text-xl'>
          Flick<span className='text-amber-600'>Spot</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
