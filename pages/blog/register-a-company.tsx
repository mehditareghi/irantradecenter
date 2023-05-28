import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={`min-h-screen main pt-0 text-center`}>
      <Image src='/registernow.png' alt='Register Now' width='1920' height='1080' className='pb-6 banner' />
      <div className='padding-x'>
        <div className=' bg-custom-black text-gray-300 rounded-xl mt-10'>
          <div className='p-5 flex justify-center'>
            <h1 className='gradient-text'>
              How to register a limited liability company by foreign citizens in Armenia?
            </h1>
          </div>
          <article className='text-start px-10 pb-10'>
            <p className='pb-2'>
              To register a company, you should go to the Armenian State Registration Office (Companies Registration
              Office) and the required documents are as follows:
            </p>
            <ol className='list-decimal list-inside'>
              <li>
                Submitting a copy of the founder&apos;s passport that has been translated and confirmed (it is
                recommended in three copies, which includes the cost of about 5 thousand drams.)
              </li>
              <li>
                Completing the company establishment application form that is provided to the applicant by the 3. The
                completed form of the founders&apos; decision to establish the company
              </li>
              <li>The completed form of the founders&apos; decision to establish the company</li>
              <li>The company&apos;s articles of association that have been approved by the founder or founders.</li>
              <li>Information on the head of the executive body of the legal entity (passport copy)</li>
              <li>
                Completing the form related to the real beneficiary, which is provided to the applicant by the
                company&apos;s department. If the forms have already been completed and are available to the
                registration office, the registration will be done immediately, otherwise, it will take two working
                days.
              </li>
              <li>
                The cost of registering a company in Armenia depends on the type of registered company and usually does
                not include any fees. (Government fees for registering a sole proprietorship are 3000 AMD and zero for a
                limited liability company).
              </li>
              <li>
                After registering the company in the company registration office, you will be given a certificate of
                establishment and a tax code at the place of registration.
              </li>
              <li>Making a seal (it costs about 8 to 12 thousand drams)</li>
            </ol>
            <p className='py-2'>
              After registering the company, it is necessary to open a bank account. Having a bank account is mandatory
              for a limited liability company, and the following documents are required to open a bank account:
            </p>
            <ul className='list-disc list-inside'>
              <li>Original company registration document</li>
              <li>The principle of the statute</li>
              <li>Copy of passport of the director and founders</li>
            </ul>
            <p className='py-2'>
              Company registration can also be done online by referring to the website (https://www.e-register.ama) of
              the Armenian Companies Registration Office.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
