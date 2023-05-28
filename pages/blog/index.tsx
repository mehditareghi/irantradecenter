import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='main'>
      <div className='padding-x'>
        <div className=' bg-custom-black text-gray-300 rounded-xl'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Blog</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link href='/blog/register-a-company' className='block px-8 pb-4'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text-without-width font-bold'>
                  How to register a limited liability company by foreign citizens in Armenia?
                </h2>
                <p className='text-start text-gray-400'>
                  To register a company, you should go to the Armenian State Registration Office (Companies Registration
                  Office) and the required documents are as follows...
                </p>
              </div>
            </Link>

            <Link href='/blog/starting-trade-with-armenia' className='block px-8 pb-4'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text-without-width font-bold'>Starting Trade with Armenia</h2>
                <p className='text-start text-gray-400'>
                  Armenia imports more than 5 billion dollars annually, among which two countries, China, and Russia,
                  have a good share of this market. Of course, for a long time...
                </p>
              </div>
            </Link>

            <Link href='/blog/tenders-of-armenia' className='block px-8 pb-4'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text-without-width font-bold'>Tenders of Armenia</h2>
                <p className='text-start text-gray-400'>
                  The tender portal of Armenia can be accessed through the link below. To access tender information, you
                  must register on the relevant website and pay the membership fee...
                </p>
              </div>
            </Link>

            <Link href='/blog/trade-regulations' className='block px-8 pb-8'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text-without-width font-bold'>Guide to trade regulations of the Eurasian Economic Union</h2>
                <p className='text-start text-gray-400'>
                  The Supreme Eurasian Economic Council (SEEC) is the main body of the Eurasian Economic Union, which
                  includes the heads of member states. The meeting of the Eurasian...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
