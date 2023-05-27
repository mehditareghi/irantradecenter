import { Horse, Heart, Cube } from '@phosphor-icons/react';

export default function Page() {
  return (
    <main className='main'>
      <div className='padding-x flex flex-col gap-4'>
        <div className=' bg-custom-black text-gray-300 rounded-xl'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Eurasia Logistic</h1>
          </div>
          <div className='text-start px-10 pb-10'>
            <p className='pb-2'>
              The international transport fleet of Eurasia Logistics has 60 flatbed trailers, tents, and fuel tankers
              for 4 materials, 35 refrigerated trailers, more than 100 trucks, and 25 LPG tankers.
            </p>
            <p className='pb-2'>
              Eurasia Logistics Company will provide services including various sensitive and non-sensitive movements in
              all areas, facilitating the process, and saving time, the fastest and safest movement for all products.
            </p>
            <p>
              Eurasia Logistics International Transport Company, registered under the number 421101234107 in Armenia,
              with more than 5 years of brilliant experience in the field of specialized land and mixed international
              transport, has been able to provide all reliable, accurate services by using its facilities, experiences,
              and capabilities. and economic international freight transportation from all ports, docks, and production
              centers in domestic and transit geography. The managers of this international transportation company
              always try to follow the principles that they have inherited from their predecessors and have put
              innovation and creativity at the forefront of their affairs by using the facilities of different
              departments and their combination, they have been able to Get the best international transport company in
              Eurasia. Eurasia Logistics Company is ready to provide services to its customers in the field of road and
              combined transportation as well as export and import, transit, clearance, packaging, logistics, and
              warehousing. You can share your cargo declaration with us through communication channels. Ask us for the
              right speed and rate as well as easy cargo transportation.
            </p>
          </div>
        </div>
        <div className=' bg-custom-black text-gray-300 rounded-xl'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>Our Services</h1>
          </div>
          <div className='text-start px-10 pb-10'>
            <table className='b-1 border-primary border-separate rounded-xl'>
              <tbody>
                <tr className='rounded-tl-xl rounded-tr-xl'>
                  <td className='b-1 border-primary p-2 rounded-tl-xl'>Unloading, loading, and storage in Armenia</td>
                  <td className='b-1 border-primary p-2'>Clearance of goods in Armenia</td>
                  <td className='b-1 border-primary p-2 rounded-tr-xl'>Transportation in the main countries of the Eurasian region</td>
                </tr>
                <tr>
                  <td className='b-1 border-primary p-2 rounded-bl-xl'>
                    Has a permanent office in Tehran, Yerevan, and the Iran-Armenia border region (Norduz border)
                  </td>
                  <td className='b-1 border-primary p-2'>
                    Ability to place all kinds of petrochemical products, minerals, fresh and frozen food, iron and
                    heavy machinery, etc.
                  </td>
                  <td className='b-1 border-primary p-2 rounded-br-xl'>
                    Service Center to provide parking services, repairs, accommodation for drivers, and restaurants in
                    one of the best locations in Yerevan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
