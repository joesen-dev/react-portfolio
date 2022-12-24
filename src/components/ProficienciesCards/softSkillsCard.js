import soft from '../../assets/images/soft.png';

export default function SoftSkillsCard() {
  return (
    // Soft Skills
    <div className='text-center shadow-2xl p-10 rounded-xl my-10 bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-1'>
      <img
        src={soft}
        width={100}
        height={100}
        style={{
          margin: 'auto',
        }}
        alt=''
      />
      <h3 className='text-lg font-medium pt-8 pb-2 text-red-600'>
        Soft Skills
      </h3>
      <div className='text-gray-800 py-1 dark:text-white'>
        <p>Problem Solving</p>
        <p>Communication</p>
        <p>Collaboration</p>
        <p>Persuasion </p>
        <p>Adaptability</p>
        <p>Time Management</p>
      </div>
    </div>
  );
}
