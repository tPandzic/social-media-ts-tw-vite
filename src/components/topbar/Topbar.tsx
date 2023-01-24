import { Search, Person, Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='h-[50px] w-full bg-blue-500 flex items-center sticky top-0 z-[999]'>
      <div className='basis-1/4'>
        <span className='text-[24px] ml-4 font-bold text-white cursor-pointer'>
          Tomislav
        </span>
      </div>
      <div className='basis-1/2'>
        <div className='w-full h-[30px] bg-white rounded-[30px] flex items-center'>
          <Search fontSize='medium' className='ml-3' />
          <input
            placeholder='Search for friends, posts or video'
            className='rounded-none w-[70%] focus:outline-none'
          />
        </div>
      </div>
      <div className='basis-1/4 flex items-center justify-around text-white'>
        <div className='topbarLinks'>
          <span className='ml-5 text-[14px] cursor-pointer'>Homepage</span>
          <span className='ml-5 text-[14px] cursor-pointer'>Timeline</span>
        </div>
        <div className='flex'>
          <div className='mr-[15px] cursor-pointer relative'>
            <Person />
            <span className='w-[15px] h-[15px] bg-red-500 rounded-[50%] text-white absolute -top-[5px] -right-[5px] flex items-center justify-center text-[12px] p-1'>
              {Math.floor(Math.random() * 10)}
            </span>
          </div>
          <div className='mr-[15px] cursor-pointer relative'>
            <Chat />
            <span className='w-[15px] h-[15px] bg-red-500 rounded-[50%] text-white absolute -top-[5px] -right-[5px] flex items-center justify-center text-[12px] p-1'>
              {Math.floor(Math.random() * 10)}
            </span>
          </div>
          <div className='mr-[15px] cursor-pointer relative'>
            <Notifications />
            <span className='w-[15px] h-[15px] bg-red-500 rounded-[50%] text-white absolute -top-[5px] -right-[5px] flex items-center justify-center text-[12px] p-1'>
              {Math.floor(Math.random() * 10)}
            </span>
          </div>
        </div>
        <img
          src='/assets/person/1.jpeg'
          className='w-8 h-8 rounded-[50%] object-cover cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Topbar;
