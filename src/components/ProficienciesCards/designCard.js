import design from '../../assets/images/design.png';

export default function DesignCard() {
  return (
    // FRONT-END
    <div className='text-center shadow-2xl p-10 rounded-xl my-10 bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-1'>
      <img
        src={design}
        width={100}
        height={100}
        style={{
          margin: 'auto',
        }}
        alt=''
      />
      <h3 className='text-lg font-medium pt-8 pb-2 text-red-600'>
        Front-end Proficiencies
      </h3>
      <div className='text-gray-800 py-1 dark:text-white'>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Responsive Design</p>
        <p>React</p>
        <p>Bootstrap</p>
      </div>
    </div>
  );
}
