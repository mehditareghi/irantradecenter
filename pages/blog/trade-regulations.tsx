import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={`min-h-screen main pt-0 text-center`}>
      <Image src='/5-member.png' alt='5-member' width='1920' height='1080' className='pb-6 banner' />
      <div className='padding-x'>
        <div className=' bg-custom-black text-gray-300 rounded-xl mt-10'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Guide to trade regulations of the Eurasian Economic Union</h1>
          </div>
          <article className='text-start px-10 pb-10'>
            <h2 className='font-bold gradient-text'>Mission</h2>
            <ul className='list-disc list-inside'>
              <li>
                Creating conditions for sustainable economic development to improve the standard of living of citizens
              </li>
              <li>Creating a single market for goods, services, labor, and capital</li>
              <li>Ensuring comprehensive modernization, increasing competitiveness, and economic cooperation</li>
            </ul>
            <h2 className='font-bold gradient-text'>Principles</h2>
            <ul className='list-disc list-inside'>
              <li>
                Respecting the independence and territorial integrity of member states and other recognized
                international principles and laws
              </li>
              <li>Respecting the coordinates of the political structure of the member countries</li>
              <li>Common interests, equality, and respect for the national interests of trading partners</li>
              <li>Market economy and fair competition</li>
              <li>
                The integration of the Eurasian economic space as a rule and without exception restrictions at the end
                of transition periods
              </li>
            </ul>
            <h2 className='font-bold gradient-text'>Institutions of the Eurasian Alliance</h2>
            <h2 className='font-bold gradient-text'>Supreme Economic Council of Eurasia</h2>
            <p className='pb-2'>
              The Supreme Eurasian Economic Council (SEEC) is the main body of the Eurasian Economic Union, which
              includes the heads of member states. The meeting of the Eurasian Economic Commission is held at least once
              a year, and the Supreme Council determines the strategy, direction, and vision of the development and the
              form of the union and makes decisions to achieve its goals.
            </p>
            <h2 className='font-bold gradient-text'>Eurasian Intergovernmental Council</h2>
            <p className='pb-2'>
              The Eurasian Intergovernmental Council (EIC) meets at least twice a year at the level of heads of state.
              This meeting, at the suggestion of the council, deals with issues that have not reached a consensus during
              the decision-making process.
            </p>
            <h2 className='font-bold gradient-text'>Eurasian Economic Commission</h2>
            <p className='pb-2'>
              The Eurasian Economic Commission operates as a permanent supranational supervisory institution of the
              Eurasian Economic Union. This institution is a type of supranational government whose headquarters is
              located in Moscow and receives its special powers from national authorities. The commission unites and
              combines the interests of all the countries of the Union. Eurasian Economic Commission applies the
              principle of equality of member states regardless of economic power, territory, and population.
            </p>
            <p className='pb-2'>
              Due to the importance of the Eurasian Economic Commission, to learn more about this commission, include
              the following
            </p>
            <ol className='list-decimal list-inside'>
              <li>
                About the body of this commission and the relations of these countries in the body of the commission and
                its goals
              </li>
              <li>The main areas of activity of the Commission</li>
              <p className='pb-2'>
                Visit <a href='www.eurasiancommission.org/en/pages/about.aspx' className='gradient-text-without-width'>this website</a>.
              </p>
            </ol>
          </article>
        </div>
      </div>
    </main>
  );
}
