type Props = {};

const Register = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-[#f0f2f5] flex items-center justify-center'>
      <div className='w-[70%] h-[70%] flex'>
        <div className='basis-1/2 flex flex-col justify-center'>
          <h3 className='text-[50px] font-[800] text-[#1775ee]'>
            Tomislav logo
          </h3>
          <span className='text-2xl'>
            Connect with friends and the world around you on Tomislav's.
          </span>
        </div>
        <div className='basis-1/2 flex flex-col justify-center'>
          <div className='h-[400px] p-5 bg-white rounded-xl flex flex-col justify-between'>
            <input
              placeholder='Username'
              className='h-[50px] rounded-xl border-[1px] border-gray-500 text-lg pl-5 focus:outline-none'
            />
            <input
              placeholder='Email'
              className='h-[50px] rounded-xl border-[1px] border-gray-500 text-lg pl-5 focus:outline-none'
            />
            <input
              placeholder='Password'
              className='h-[50px] rounded-xl border-[1px] border-gray-500 text-lg pl-5 focus:outline-none'
            />
            <input
              placeholder='Confirm Password'
              className='h-[50px] rounded-xl border-[1px] border-gray-500 text-lg pl-5 focus:outline-none'
            />
            <button className='h-[50px] rounded-[10px] border-none bg-blue-600 text-white text-xl font-[500] cursor-pointer'>
              Sign Up
            </button>
            <button className='h-[50px] rounded-[10px] border-none bg-green-600 text-white text-xl font-[500] cursor-pointer'>
              Log Into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
