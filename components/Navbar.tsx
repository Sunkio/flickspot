import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='px-10 pt-5'>
      <Link prefetch href='/'>
        Flick<span className='text-amber-600'>Spot</span>
      </Link>
    </nav>
  );
};

export default Navbar;
