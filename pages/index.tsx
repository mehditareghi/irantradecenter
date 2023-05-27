import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`min-h-screen main pt-0 text-center`}>
      <Image
        src='/ParsHilal.png'
        alt='Iran Trade Center in Armenia'
        width='1920'
        height='1080'
        className='pb-6 banner'
      />
      <h1 className='sr-only'>Iran Trade Center in Armenia</h1>
      <div className='padding-x'>
        <div className='text-center'>
          <p className='text-gray-300 pb-5 text-start'>
            Pars Hilal Caspian Company, as a private company, with official permission from the Trade Promotion
            Organization of the Islamic Republic of Iran established Iran&apos;s trade center in Armenia on a land of
            over 18,000 square meters to develop business relations and benefit from the capacity of the powerful
            private sector to achieve the country&apos;s export goals in one of the best business locations.
          </p>
          <Link href='https://tpo.ir' target='_blank' className='py-2 px-6 btn'>
            <Image src='/st.png' alt='TPO' width={20} height={20} className='inline' />
            <p className='inline text-custom-black'> TPO.ir</p>
          </Link>
        </div>
        <br />
        <br />
        <div className='boxes-home'>
          {/* Business Partners Section */}
          <div className=' bg-custom-black text-gray-300 rounded-xl col-span-2'>
            <div className='p-5'>
              <div className='flex justify-center'>
                <h3 className='gradient-text'>Business Partners</h3>
              </div>
              <div className='logos-home'>
                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://nigc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NIGC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NIGC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://nioc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NIOC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NIOC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://nipc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NPC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NPC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://ssic.ir' target='_blank'>
                    <Image src='/tamin.png' alt='SSIC' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>SSIC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://pgpic.ir' target='_blank'>
                    <Image src='/khalijfars.png' alt='PGPIC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>PGPIC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://ikco.ir' target='_blank'>
                    <Image src='/IranKhodro.png' alt='IKCO' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>IKCO</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://tobacco.ir' target='_blank'>
                    <Image
                      src='/dokhaniat.png'
                      alt='Iran Tobacco Company'
                      width='25'
                      height='25'
                      className='w-20 inline-block p-2'
                    />
                    <p>Iran Tobacco Company</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://egfi.ir' target='_blank'>
                    <Image src='/egfi.png' alt='EGFI' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>EGFI</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://bankmellat.ir' target='_blank'>
                    <Image
                      src='/mellat.png'
                      alt='Mellat Bank'
                      width='25'
                      height='25'
                      className='w-24 inline-block p-2'
                    />
                    <p>Mellat Bank</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://investiniran.ir' target='_blank'>
                    <Image
                      src='/sarmayegozari.png'
                      alt='Invest in Iran'
                      width='25'
                      height='25'
                      className='w-24 inline-block p-2'
                    />
                    <p>Invest in Iran</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://minoogroup.com' target='_blank'>
                    <Image src='/minoo.png' alt='Minoo' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>Minoo</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://mihan-food.com' target='_blank'>
                    <Image src='/mihan.png' alt='Mihan' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>Mihan</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://esfahansteel.ir' target='_blank'>
                    <Image src='/zob.png' alt='ESCO' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>ESCO</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://icioc.ir' target='_blank'>
                    <Image
                      src='/sang.png'
                      alt='Iran Central Iron Ore'
                      width='25'
                      height='25'
                      className='w-24 inline-block p-2'
                    />
                    <p>Iran Central Iron Ore</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://jpcomplex.ir' target='_blank'>
                    <Image src='/jpc.png' alt='JPC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>JPC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://sepahanoil.com' target='_blank'>
                    <Image
                      src='/sepahanOil.png'
                      alt='Sepahan Oil'
                      width='25'
                      height='25'
                      className='w-24 inline-block p-2'
                    />
                    <p>Sepahan Oil</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://dppharma.com' target='_blank'>
                    <Image
                      src='/daroo.png'
                      alt='Daroopakhsh'
                      width='25'
                      height='25'
                      className='w-20 inline-block p-2'
                    />
                    <p>Daroopakhsh</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm grayscale'>
                  <Link href='https://csp.ir' target='_blank'>
                    <Image
                      src='/bahonarCopperInd.png'
                      alt='Bahonar Copper Ind.'
                      width='25'
                      height='25'
                      className='w-24 inline-block p-2'
                    />
                    <p>Bahonar Copper Ind.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Services Section */}
          <div className=' bg-custom-black text-gray-300 rounded-xl row-span-2 p-5'>
            <div className='flex justify-center'>
              <h3 className='gradient-text'>Services</h3>
            </div>
            <div className='flex flex-col gap-fixer'>
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
          {/* Catalog Section */}
          <div className='bg-custom-black text-gray-300 rounded-xl'>
            <div className='flex flex-col p-4 gap-2'>
              <div className='flex justify-center'>
                <h3 className='gradient-text'>Iran Trade Center&apos;s Catalog</h3>
              </div>
              <p className='pb-4'>
                Click on the button below for more information about the collection as well as to learn more about our
                capacities and services
              </p>
              <Link
                href='https://irantradecenter.am/wp-content/uploads/2022/12/Catalogue_PHC_FinalSmall_Size_min.pdf'
                target='_blank'
                className='btn p-2'
              >
                <p className='text-custom-black bf-i-ph-cloud-arrow-down'>Download Our Catalog</p>
              </Link>
            </div>
          </div>
          {/* New Section */}
          <div className=' bg-custom-black text-gray-300 rounded-xl'>
            <div className='flex flex-col p-4 gap-2'>
              <div className='flex justify-center'>
                <h3 className='gradient-text'>Eurasia Logistic</h3>
              </div>
              <div className='logistic-grid px-4'>
                <Image src='/Eurasia-logo.png' alt='Eurasia Logistic' width='90' height='40' className='' />
                <p className='text-start'>Eurasia Logistics is your transportation solution</p>
              </div>
              <Link href='/eurasia-logistic' className='btn p-2'>
                <p className='text-custom-black bf-i-ph-airplane-in-flight'>View Logistic Services</p>
              </Link>
            </div>
          </div>
          {/* Certificates Section */}
          <div className=' bg-custom-black text-gray-300 rounded-xl col-span-3'>
            <div className='p-5'>
              <div className='flex justify-center'>
                <h3 className='gradient-text'>Certificates</h3>
              </div>
              <div className='certificates-home'>
                <div>
                  <Image
                    src='/Certificate1.png'
                    alt='Certificate1'
                    width='1920'
                    height='1080'
                    className='rounded-xl certificate-single'
                  />
                </div>
                <div>
                  <Image
                    src='/Certificate2.png'
                    alt='Certificate2'
                    width='1920'
                    height='1080'
                    className='rounded-xl certificate-single'
                  />
                </div>
                <div>
                  <Image
                    src='/Certificate3.png'
                    alt='Certificate3'
                    width='1920'
                    height='1080'
                    className='rounded-xl certificate-single'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
