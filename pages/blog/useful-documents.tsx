import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='main'>
      <div className='padding-x'>
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
