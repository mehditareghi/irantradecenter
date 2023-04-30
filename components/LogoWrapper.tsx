import Link from 'next/link';
import CustomLink from './CustomLink';
/* import styles from '@/styles/header.module.scss'; */
/* import Logo from './Logo'; */

const LogoWrapper = ({src, alt, name, url, style}) => {
  return (
    <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
      <Link href={url} target='_blank'>
        <img src={src} alt={alt} width='25' height='25' className={`${style} inline-block p-2`} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default LogoWrapper;
