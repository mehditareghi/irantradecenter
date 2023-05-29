import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='main'>
      <div className='padding-x'>
        <div className=' bg-custom-black text-gray-300 rounded-xl mt-12 mb-6'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Starting Trade with Armenia</h1>
          </div>
          <article className='text-start px-10 pb-10'>
            <p className='pb-2'>
              Armenia imports more than 5 billion dollars annually, among which two countries, China, and Russia, have a
              good share of this market. Of course, for a long time, Turkey and Azerbaijan also had extensive exports to
              this country, but some political disputes caused the economic relations of these countries to become dark,
              and as it seems, the relations of the mentioned countries with Armenia are on the way to improvement.
            </p>
            <p className='py-2'>
              Armenia&apos;s imports reached more than 5 billion dollars in 2021, which increased by 17% compared to the
              previous year. Russia, supplying 32.5% of the import needs of Armenia, is considered one of its main trade
              partners of Armenia, China has taken the second place with 14.8%, and Iran has exported more than 314
              million dollars of goods and services to Armenia with a share of about 7%, it has been able to get the
              third place in meeting the import needs of Armenia. Major items of goods imported by Armenia include gas,
              light oils and their products, electrical appliances, cars and car parts, medicine, jewelry, fruits and
              vegetables, clothes, food, and...
            </p>
            <p className='py-2'>
              In the following, we refer to comprehensive information about shopping centers and industry in Armenia to
              enter this market:
            </p>
            <p className='py-2'>(This page will be completed over time)</p>
          </article>
        </div>
        <div className=' bg-custom-black text-gray-300 rounded-xl'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Useful Documents</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Link
              href='/بانک اطلاعات شرکت های ارمنستانی در زمینه مصالح ساختمانی.pdf'
              target='_blank'
              className='block px-8 pb-4'
            >
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text font-bold'>Document 1</h2>
                <p className='text-start text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur quo eius vitae, ipsa
                  repudiandae accusamus, facere enim unde deleniti corporis sint? Voluptatibus, dicta magnam?
                </p>
              </div>
            </Link>

            <Link
              href='/شرکت ها و فروشگاه های کفش و محصولات چرمی ارمنستان.pdf'
              target='_blank'
              className='block px-8 pb-4'
            >
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text font-bold'>Document 2</h2>
                <p className='text-start text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis, libero deserunt aliquid
                  nulla error suscipit iure obcaecati ipsum corporis cum rem inventore quis ducimus.
                </p>
              </div>
            </Link>

            <Link href='/شرکت های داروسازی ارمنستان.pdf' target='_blank' className='block px-8 pb-4'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text font-bold'>Document 3</h2>
                <p className='text-start text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam debitis, ad exercitationem
                  recusandae, corporis dolore perferendis facilis architecto, odio quod dolores commodi. Eum, amet?
                </p>
              </div>
            </Link>

            <Link href='/فروشگاه زنجیره ای یروان سیتی.pdf' target='_blank' className='block px-8 pb-4'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text font-bold'>Document 4</h2>
                <p className='text-start text-gray-400'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, ex ut velit excepturi a quisquam
                  debitis fugit distinctio maiores iure, explicabo quaerat quod odio soluta.
                </p>
              </div>
            </Link>

            <Link href='/فروشگاه لوازم خانگی وگا.pdf' target='_blank' className='block px-8 pb-8'>
              <div className='bg-background p-4 rounded-xl'>
                <h2 className='gradient-text font-bold'>Document 5</h2>
                <p className='text-start text-gray-400'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, ex ut velit excepturi a quisquam
                  debitis fugit distinctio maiores iure, explicabo quaerat quod odio soluta.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
