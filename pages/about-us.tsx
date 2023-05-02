import ContactForm from '@/components/ContactForm';

export default function Page() {
  return (
    <main className='main'>
      <div className='padding-x flex flex-col gap-4'>
        <div className='text-center'></div>
        <div className=' bg-custom-black text-gray-300 rounded-xl'>
          <div className='p-5'>
            <h1>About Us</h1>
          </div>
          <article className='text-start px-10 pb-10'>
            <h2 className='font-bold text-center'>Introduction to Pars Hilal Caspian</h2>
            <p className='text-justify pb-2'>
              In the year 2021, Pars Hilal Caspian Company received permission from the Trade Development Organization
              of IRI to establish and operate the Iranian business center in Armenia. This business center is ready for
              operation in an environment of more than 18000 square meters in a strategic area and on the way from
              Yerevan to Swan Lake one of the busiest areas of Armenia:
            </p>
            <p className='text-justify pb-2'>
              The general industry site with an area of 18,000 square meters includes 107 booths ranging in size from 33
              meters to 146 meters, with a conference room, B2B meeting room, and events room, spaces that can be
              allocated for environmental advertising, open space for holding events, conferences, and festivals. It is
              used for various industries, including national, pharmaceutical, health, cosmetic, food, laboratory
              equipment, medical, industrial, and agricultural industries, as well as construction industries.
            </p>
            <h2 className='font-bold pt-2 text-center'>The goals of Pars Hilal Caspian</h2>
            <p className='text-justify'>
              The purpose of setting up the Iranian business center in Armenia is to know the market situation and
              commercial capacities and introduce them to businessmen, as well as support Iranian companies in Armenia.
              Conquering the Eurasian market is one of the main goals of entering the Armenian market. Iranian
              businessmen can enter the Eurasian Union market through Armenia and use the exemptions of this market. At
              the same time, things like:
            </p>
            <ul className='text-justify list-disc list-inside'>
              <li>
                Using Iran&apos;s transit capacity to transfer goods from the Persian Gulf countries to the member
                countries of the Eurasian Union and to activate the North-South Corridor
              </li>
              <li>Solving the problem of bank transfers using the clearing method</li>
              <li>Joint ventures with Armenia in various business fields</li>
              <li>Adding knowledge-based goods to the composition of Iran&apos;s export goods</li>
              <li>Taking a serious look at the tourism industry by setting up tourism and medical agencies</li>
              <li>Construction of joint industrial estates</li>
              <li>Setting up production lines for various products</li>
              <li>Exchange of products from Armenia, Iran, and Arab countries with the swap method</li>
              <li>Providing technical and engineering services</li>
              <li>
                Another goal of the trustees of Pars Hilal Caspian Company is to set up an Iranian business center in
                Armenia.
              </li>
            </ul>
          </article>
        </div>

        <div className=' bg-custom-black text-gray-300 rounded-xl pb-6'>
          <h3 className='p-5'>Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
