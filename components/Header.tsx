import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div>
        {/*         <div className='flex'></div> */}
        <nav className='text-primary flex gap-6'>
          <Link href='/'>
            <img src='/ParsLogo.png' alt='Pare Helal' width='25' height='25' className='w-6' />
            {/*           <Logo /> */}
          </Link>
          {/*           <Link href='/' className='px-4'>
            Services
          </Link> */}
          <Link href='/' className=''>
            Home
          </Link>
          <Link href='/gallery' className=''>
            Gallery
          </Link>
          <Link href='/about-us' className=''>
            About Us
          </Link>
          {/*           <Link
            href='/'
          >
            test4
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
