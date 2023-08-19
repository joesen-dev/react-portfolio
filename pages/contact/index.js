import { useEffect, useRef, useState } from 'react';

// react-ga
import ReactGA from 'react-ga';

// icons
import { BsArrowRight } from 'react-icons/bs';

// helpers
import { validateEmail } from '../../utils/helpers';

// keep form here temporarily
const tempForm = (
  <form
    className='flex-1 flex flex-col gap-6 w-full mx-auto z-40'
    id='contact-form'
    // ref={form}
    // onSubmit={handleSubmit}
  >
    {/* group */}
    <div className='flex gap-x-6 w-full'>
      <input
        type='text'
        placeholder='name'
        // onBlur={handleChange}
        name='user_name'
        className='input'
      />
      <input
        type='email'
        placeholder='email'
        // onBlur={handleChange}
        name='user_email'
        className='input'
      />
    </div>
    <input
      type='text'
      placeholder='subject'
      // onBlur={handleChange}
      name='subject'
      maxLength={50}
      className='input'
    />
    <textarea
      placeholder='message'
      // onBlur={handleChange}
      name='message'
      rows='6'
      className='textarea'></textarea>
    {/* {errorMessage && (
      <div>
        <p className='text-base text-red-700'>{errorMessage}</p>
      </div>
    )} */}
    <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
        Let&apos;s talk
      </span>
      <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
    </button>
  </form>
);

const Contact = () => {
  // form state
  const [formState, setFormState] = useState({
    user_name: '',
    subject: '',
    user_email: '',
    message: '',
  });
  const { user_name, subject, user_email, message } = formState;

  // email sent state
  const [emailSent, setEmailSent] = useState(false);

  // form ref
  const form = useRef();

  // error message state
  const [errorMessage, setErrorMessage] = useState('');

  // form change handler
  function handleChange(e) {
    if (e.target.name === 'user_email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    console.log(formState);
    setEmailSent(true);
    form.current.reset(); // Reset the form

    // TODO: add validation. Form should not have any empty fields.

    // emailjs
    //   .sendForm(
    //     process.env.SERVICE_ID,
    //     process.env.TEMPLATE_ID,
    //     form.current,
    //     process.env.PUBLIC_KEY
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //       console.log('Message sent successfully!');
    // setEmailSent(true);
    //       e.target.reset();
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  }

  // Track page view for the about page
  useEffect(() => {
    ReactGA.pageview('/contact');
  }, []);

  return (
    <div className='h-ful bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full min-w-[700px]'>
          {/* text */}
          {/* <h2 className='h2 text-center mb-12'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </h2> */}
          <h2 className='h2 text-center mb-12'>
            Under <span className='text-accent'>maintenance.</span>
          </h2>
          {/* form */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
