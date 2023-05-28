import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={`min-h-screen main pt-0 text-center`}>
      <Image src='/tenderss.png' alt='Tender' width='1920' height='1080' className='pb-6 banner' />
      <div className='padding-x'>
        <div className=' bg-custom-black text-gray-300 rounded-xl mt-10'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Tenders of Armenia</h1>
          </div>
          <article className='text-start px-10 pb-10'>
            <p className='pb-2'>
              The tender portal of Armenia can be accessed through the link below. To access tender information, you
              must register on the relevant website and pay the membership fee. The annual membership fee for
              non-Armenian companies is 300 dollars, which has been reduced to 150 dollars for Iranian companies.
            </p>
            <p className='py-2'>https://www.tender.am/en/</p>
            <p className='py-2'>
              Tenders financed by the Asian Development Bank (ADB) are also available through the following link:
            </p>
            <p className='py-2'>https://www.adb.org/projects/tenders/country/arma</p>
          </article>
        </div>
      </div>
    </main>
  );
}
