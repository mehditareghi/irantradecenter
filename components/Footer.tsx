import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-custom-black h-52'>
      <div className='text-gray-300 padding-x fs-sm grid grid-cols-2 gap-8 justify-center items-center pb-2 py-2'>
        <div>
          <p className='font-bold pb-1'>Contact Info</p>
          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-map-pin'></p>
            <p className='pb-2'>No 3, Fardad Alley, Sarallah St, Moghadas Ardebili St, Velenjak, Tehran, Iran</p>
          </div>

          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-phone'></p>
            <p className='pb-2'>+98 21 26 70 69 11</p>
          </div>

          <div className='flex justify-left gap-2'>
            <p className='text-primary bf-i-ph-newspaper'></p>
            <p className='pb-2'>+98 21 26 70 69 54</p>
          </div>
        </div>

        <div>
          <div className='pb-2'>
            <p className='font-bold pb-1'>Useful Links</p>
            <Link href='/gallery' className='block text-primary'>
              Gallery
            </Link>
            <Link href='/about-us' className='block text-primary'>
              About Us
            </Link>
          </div>

          <div className='pb-2'>
            <p className='font-bold pb-1'>Social Media</p>
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
      </div>

      <div className='padding-x'>
        <hr className='text-gray-300 pb-2' />
        <div className='flex justify-center fs-sm text-gray-300'>Copyright &copy; 2023 | All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
