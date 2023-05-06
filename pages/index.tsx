import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={`min-h-screen main pt-0 text-center`}>
      <Image src='/ParsHilal.png' alt='remotion' width='1920' height='1080' className='pb-6 banner' />
      <div className='padding-x'>
        <div className='text-center'>
          <p className='text-gray-300 pb-5 text-start'>
            Pars Hilal Caspian Company, as a private company, with official permission from the Trade Promotion
            Organization of the Islamic Republic of Iran established Iran&apos;s business center in Armenia on a land of
            over 18,000 square meters to develop business relations and benefit from the capacity of the powerful
            private sector to achieve the country&apos;s export goals in one of the best business locations.
          </p>
          <Link href='https://tpo.ir' target='_blank' className='text-custom-black bg-primary rounded-lg p-2'>
            <Image src='/st.png' alt='TPO' width={20} height={20} className='inline' />
            <p className='inline'>   TPO.ir</p>
          </Link>
        </div>
        <br />
        <br />
        <div className='boxes-home'>
          <div className=' bg-custom-black text-gray-300 rounded-xl'>
            <div className='p-5'>
              <h3>Business Partners</h3>
              <div className='logos-home'>
                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://nigc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NIGC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NIGC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://nioc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NIOC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NIOC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://nipc.ir' target='_blank'>
                    <Image src='/NIGC.png' alt='NIPC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>NIPC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://ssic.ir' target='_blank'>
                    <Image src='/tamin.png' alt='SSIC' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>SSIC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://pgpic.ir' target='_blank'>
                    <Image src='/khalijfars.png' alt='PGPIC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>PGPIC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://ikco.ir' target='_blank'>
                    <Image src='/IranKhodro.png' alt='IKCO' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>IKCO</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://egfi.ir' target='_blank'>
                    <Image src='/egfi.png' alt='EGFI' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>EGFI</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://minoogroup.com' target='_blank'>
                    <Image src='/minoo.png' alt='Minoo' width='25' height='25' className='w-20 inline-block p-2' />
                    <p>Minoo</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://mihan-food.com' target='_blank'>
                    <Image src='/mihan.png' alt='Mihan' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>Mihan</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://esfahansteel.ir' target='_blank'>
                    <Image src='/zob.png' alt='ESCO' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>ESCO</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
                  <Link href='https://jpcomplex.ir' target='_blank'>
                    <Image src='/jpc.png' alt='JPC' width='25' height='25' className='w-24 inline-block p-2' />
                    <p>JPC</p>
                  </Link>
                </div>

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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

                <div className='rounded-xl inline-block p-2 items-center justify-center fs-sm hover:bg-hover'>
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
          <div className=' bg-custom-black text-gray-300 rounded-xl row-span-2 p-5'>
            <h3>Services</h3>
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
          <div className=' bg-custom-black text-gray-300 rounded-xl catalog-grid'>
            <div className='catalog-home'>
              <h3>Catalog</h3>
              <Image src='/catalog.png' alt='remotion' width='150' height='150' className='inline catalog-image-home' />
              {/*               <p className='pb-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tenetur dolorem impedit numquam
                explicabo aspernatur quod quam sint, porro voluptas?
              </p> */}
              <Link
                href='https://irantradecenter.am/wp-content/uploads/2022/12/Catalogue_PHC_FinalSmall_Size_min.pdf'
                target='_blank'
                className='text-custom-black bg-primary rounded-lg p-2 bf-i-ph-cloud-arrow-down'
              >
                Download Our Catalog
              </Link>
            </div>
          </div>
          <div className=' bg-custom-black text-gray-300 rounded-xl col-span-2'>
            <div className='p-5'>
              <h3>Certificates</h3>
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
