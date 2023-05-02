/* import styles from '@/styles/header.module.scss'; */
/* import Logo from './Logo'; */

const ContactForm = () => {
/*   const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
    const response = await fetch ("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log("message sent successfully");
    }
    if (!response.ok) {
      console.log("error sending message");
    }
  }; */
  return (
    <form>
      <div className='flex flex-col px-10 text-start pb-2'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          autoComplete='off'
          id='name'
          minLength={3}
          maxLength={150}
          required
          className='bg-background rounded-lg px-5 h-12'
        />
      </div>
      <div className='flex flex-col px-10 text-start pb-2'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          autoComplete='off'
          id='email'
          required
          minLength={5}
          maxLength={150}
          className='bg-background rounded-lg px-5 h-12'
        />
      </div>

      <div className='px-10 pb-6 text-start'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          required
          minLength={10}
          maxLength={1000}
          cols={30}
          rows={10}
          placeholder='Write your message here!'
          className='bg-background rounded-lg text-gray-300 p-5 w-full'
        ></textarea>
      </div>
      <div className='text-end px-10'>
        <button type='submit' className='text-custom-black bg-primary rounded-lg p-2 bf-i-ph-arrow-circle-right'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
