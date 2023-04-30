import Link from 'next/link';
import CustomLink from './CustomLink';
/* import styles from '@/styles/header.module.scss'; */
/* import Logo from './Logo'; */

const Header = () => {
  return (
    <header className='text-gray-300 bg-black w-full h-16 flex items-center justify-center fixed'>
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
          <Link href='/gallery' className=''>
            Gallery
          </Link>
          <Link href='/contact-us' className=''>
            Contact Us
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
