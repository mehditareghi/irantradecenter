import LogoWrapper from '@/components/LogoWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`pb-16 text-center`}>
      <div className='px-96'>
        <br />
        <br />
        <br />

        <div className='text-center'></div>
        <br />
        <br />
        <div className=''>
          <div className=' bg-black text-gray-300 rounded-xl'>
            <div className='p-5'>
              <h3>Photo Gallery</h3>
              <div className='grid grid-cols-3 p-6 gap-4'>
                <div className=''>
                  <Image src='/gallery/Bern.png' alt='Bern' width='1920' height='1080' className='rounded-xl ' />
                  <p className='text-gray-300 fs-sm'>Bern</p>
                </div>
                <div className=''>
                  <Image
                    src='/gallery/Blue & P.png'
                    alt='Blue & P'
                    width='1920'
                    height='1080'
                    className='rounded-xl '
                  />
                  <p className='text-gray-300 fs-sm'>Blue & P</p>
                </div>
                <div className=''>
                  <Image
                    src='/gallery/Blue & P2.png'
                    alt='Blue & P'
                    width='1920'
                    height='1080'
                    className='rounded-xl '
                  />
                  <p className='text-gray-300 fs-sm'>Blue & P</p>
                </div>
                <div className=''>
                  <Image
                    src='/gallery/ICIO.png'
                    alt='Iran Central Iron Ore'
                    width='1920'
                    height='1080'
                    className='rounded-xl '
                  />
                  <p className='text-gray-300 fs-sm'>Iran Central Iron Ore</p>
                </div>
                <div className=''>
                  <Image src='/gallery/IT.png' alt='Iran Tobacco' width='1920' height='1080' className='rounded-xl ' />
                  <p className='text-gray-300 fs-sm'>Iran Tobacco Company</p>
                </div>
                <div className=''>
                  <Image src='/gallery/IT2.png' alt='Iran Tobacco' width='1920' height='1080' className='rounded-xl ' />
                  <p className='text-gray-300 fs-sm'>Iran Tobacco Company</p>
                </div>
                <div className=''>
                  <Image
                    src='/gallery/146 squre meters.png'
                    alt='146 squre meters'
                    width='1920'
                    height='1080'
                    className='rounded-xl'
                  />
                  <p className='text-gray-300 fs-sm'>146 squre meters</p>
                </div>
                <div>
                  <Image
                    src='/gallery/73 squre meters.png'
                    alt='73 squre meters'
                    width='1920'
                    height='1080'
                    className='rounded-xl'
                  />
                  <p className='text-gray-300 fs-sm'>73 squre meters</p>
                </div>
                <div className=''>
                  <Image
                    src='/gallery/33 squre meters.png'
                    alt='33 squre meters'
                    width='1920'
                    height='1080'
                    className='rounded-xl '
                  />
                  <p className='text-gray-300 fs-sm'>33 squre meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
