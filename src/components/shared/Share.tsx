import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

type Props = {};

const Share = (props: Props) => {
  return (
    <div className='w-full h-[170px] rounded-[10px] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]'>
      <div className='p-3'>
        <div className='flex items-center'>
          <img
            src='/assets/person/1.jpeg'
            className='w-[50px] h-[50px] rounded-[50px] object-cover mr-3'
          />
          <input
            placeholder="What's on your mind?"
            className='border-none w-[80%] focus:outline-0 p-2'
          />
        </div>
        <hr className='m-5' />
        <div className='flex items-center justify-between'>
          <div className='flex ml-5'>
            <div className='flex items-center mr-3 cursor-pointer'>
              <PermMedia htmlColor='tomato' className='mr-3' />
              <span className='text-sm font-bold'>Photo or Video</span>
            </div>
            <div className='flex items-center mr-3 cursor-pointer'>
              <Label htmlColor='blue' className='mr-3' />
              <span className='text-sm font-bold'>Tag</span>
            </div>
            <div className='flex items-center mr-3 cursor-pointer'>
              <Room htmlColor='green' className='mr-3' />
              <span className='text-sm font-bold'>Location</span>
            </div>
            <div className='flex items-center mr-3 cursor-pointer'>
              <EmojiEmotions htmlColor='goldenrod' className='mr-3' />
              <span className='text-sm font-bold'>Feelings</span>
            </div>
          </div>
          <button className='border-0 p-2 rounded-[5px] bg-red-500 font-bold mr-5 cursor-pointer text-white'>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
