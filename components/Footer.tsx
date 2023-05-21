import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-custom-black fs-sm text-gray-300 footer-size'>
      <div className=' padding-x footer'>
        <div className='footer-address'>
          <p className='font-bold pb-1 gradient-text'>Address</p>
          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-map-pin'></p>
            <p className='pb-2'> No 3, Fardad Alley, Sarallah St, Moghadas Ardebili St, Velenjak, Tehran, Iran</p>
          </div>

          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-map-pin'></p>
            <p className='pb-2'>IranTardeCenter, 9th St, Aring G district, Kotayk, Armenia</p>
          </div>
        </div>

        <div>
          <p className='font-bold pb-1 gradient-text'>Phone</p>
          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-phone'></p>
            <p className='pb-2'>+98 21 26 70 69 11</p>
          </div>
          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-newspaper'></p>
            <p className='pb-2'>+98 21 26 70 69 54</p>
          </div>
          <div className='pb-2'>
            <p className='font-bold pb-1 gradient-text'>Social Media</p>
            <div className='flex justify-left gap-3'>
              <Link href='https://instagram.com/irantradecenter_am' target='_blank'>
                <p className='text-primary bf-i-ph-instagram-logo'></p>
              </Link>
              <Link href='https://wa.me/+989120602647' target='_blank'>
                <p className='text-primary bf-i-ph-whatsapp-logo'></p>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='pb-2'>
            <p className='font-bold pb-1 gradient-text'>Useful Links</p>
            <Link href='https://tpo.ir' className='block text-primary'>
              TPO
            </Link>
            <Link href='https://egfi.ir' className='block text-primary'>
              EGFI
            </Link>
            <Link href='https://mimt.gov.ir' className='block text-primary'>
              MIMT
            </Link>
          </div>
        </div>
      </div>

      <div className='padding-x'>
        <hr className='text-gray-300 pb-2' />
        <div className='flex justify-center fs-sm text-gray-300'>Copyright &copy; 2023 | All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
