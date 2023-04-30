import Link from 'next/link';

const LogoWrapper = ({src, alt, name, url, style}: any) => {
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
