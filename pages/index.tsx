import LogoWrapper from '@/components/LogoWrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`min-h-screen pb-16 text-center`}>
      <Image src='/ParsHilal.png' alt='remotion' width='1920' height='1080' className='pb-6 w-full' />
      <div className='px-96'>
        <div className='text-center'>
          <p className='text-gray-300 pb-5 text-justify-center'>
            Pars Hilal Caspian Company, as a private company, established Iran&apos;s business center in Armenia on a
            land of over 18,000 square meters to develop business relations and benefit from the capacity of the
            powerful private sector to achieve the country&apos;s export goals in one of the best business locations.
          </p>
          <Link href='/about-us' className='text-black bg-primary rounded-lg p-2 bf-i-ph-info'>
            About Us
          </Link>
        </div>
        <br />
        <br />
        <div className='boxes'>
          <div className=' bg-black text-gray-300 rounded-xl'>
            <div className='p-5'>
              <h3>Business Partners</h3>
              <div className=' grid grid-cols-6 grid-rows-3 items-center justify-center'>
                <LogoWrapper src='logos/NIGC.png' alt='NIGC' name='NIGC' style='w-24' url='https://nigc.ir' />
                <LogoWrapper src='logos/NIGC.png' alt='NIOC' name='NIOC' style='w-24' url='https://nioc.ir' />
                <LogoWrapper src='logos/NIGC.png' alt='NIPC' name='NIPC' style='w-24' url='https://nipc.ir' />
                <LogoWrapper src='logos/tamin.png' alt='tamin' name='SSIC' style='w-20' url='https://ssic.ir' />
                <LogoWrapper src='logos/khalijfars.png' alt='PGPIC' name='PGPIC' style='w-24' url='https://pgpic.ir' />
                <LogoWrapper src='logos/IranKhodro.png' alt='IKCO' name='IKCO' style='w-20' url='https://ikco.ir' />
                <LogoWrapper
                  src='logos/dokhaniat.png'
                  alt='Iran Tobacco Company'
                  name='Iran Tobacco Company'
                  style='w-20'
                  url='https://tobacco.ir'
                />
                <LogoWrapper src='logos/egfi.png' alt='EGFI' name='EGFI' style='w-24' url='https://egfi.ir' />
                <LogoWrapper
                  src='logos/mellat.png'
                  alt='Mellat Bank'
                  name='Mellat Bank'
                  style='w-24'
                  url='https://bankmellat.ir'
                />
                <LogoWrapper
                  src='logos/sarmayegozari.png'
                  alt='Invest in Iran'
                  name='Invest in Iran'
                  style='w-24'
                  url='https://investiniran.ir'
                />
                <LogoWrapper src='logos/minoo.png' alt='Minoo' name='Minoo' style='w-20' url='https://minoogroup.com' />
                <LogoWrapper src='logos/mihan.png' alt='Mihan' name='Mihan' style='w-24' url='https://mihan-food.com' />
                <LogoWrapper src='logos/zob.png' alt='ESCO' name='ESCO' style='w-24' url='https://esfahansteel.ir' />
                <LogoWrapper
                  src='logos/sang.png'
                  alt='Iran Central Iron Ore'
                  name='Iran Central Iron Ore'
                  style='w-24'
                  url='https://icioc.ir'
                />
                <LogoWrapper src='logos/jpc.png' alt='JPC' name='JPC' style='w-24' url='https://jpcomplex.ir' />
                <LogoWrapper
                  src='logos/sepahanOil.png'
                  alt='Sepahan Oil'
                  name='Sepahan Oil'
                  style='w-24'
                  url='https://sepahanoil.com'
                />
                <LogoWrapper
                  src='logos/daroo.png'
                  alt='Daroopakhsh'
                  name='Daroopakhsh'
                  style='w-20'
                  url='https://dppharma.com'
                />
                <LogoWrapper
                  src='logos/bahonarCopperInd.png'
                  alt='Bahonar Copper Ind'
                  name='Bahonar Copper Ind.'
                  style='w-24'
                  url='https://csp.ir'
                />
              </div>
            </div>
          </div>
          <div className=' bg-black text-gray-300 rounded-xl row-span-2'>
            <div className='p-5'>
              <h3>Services</h3>
              <div className='flex flex-col gap-4'>
                <div>
                  <p className='bf-i-ph-presentation-chart fs-4xl text-primary'></p>
                  <p>International Marketing</p>
                </div>
                <div>
                  <p className='bf-i-ph-garage fs-4xl text-primary'></p>
                  <p>Customs, Logistic and Inventory</p>
                </div>
                <div>
                  <p className='bf-i-ph-chart-line fs-4xl text-primary'></p>
                  <p>Investment Advice</p>
                </div>
                <div>
                  <p className='bf-i-ph-bank fs-4xl text-primary'></p>
                  <p>Financial and Banking Services</p>
                </div>
                <div>
                  <p className='bf-i-ph-buildings fs-4xl text-primary'></p>
                  <p>Company Registration</p>
                </div>
                <div>
                  <p className='bf-i-ph-briefcase fs-4xl text-primary'></p>
                  <p>Insurance Policy and Guarantee</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' bg-black text-gray-300 rounded-xl'>
            <div className='p-5'>
              <h3>Catalog</h3>
              <Image src='/catalog.png' alt='remotion' width='150' height='150' className='inline pr-10' />
              {/*               <p className='pb-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur dolorem impedit numquam
                explicabo aspernatur quod quam sint, porro voluptas?
              </p> */}
              <Link
                href='https://irantradecenter.am/wp-content/uploads/2022/12/Catalogue_PHC_FinalSmall_Size_min.pdf'
                target='_blank'
                className='text-black bg-primary rounded-lg p-2 bf-i-ph-cloud-arrow-down'
              >
                Download Our Catalog
              </Link>
            </div>
          </div>
          <div className=' bg-black text-gray-300 rounded-xl col-span-2'>
            <div className='p-5'>
              <h3>Certificates</h3>
              <div className='flex p-6 gap-4'>
                <div>
                  <Image src='/Certificate1.png' alt='Certificate1' width='1920' height='1080' className='rounded-xl' />
                </div>
                <div>
                  <Image src='/Certificate2.png' alt='Certificate2' width='1920' height='1080' className='rounded-xl' />
                </div>
                <div>
                  <Image src='/Certificate3.png' alt='Certificate3' width='1920' height='1080' className='rounded-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
