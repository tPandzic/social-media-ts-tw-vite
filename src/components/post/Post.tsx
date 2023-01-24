import { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

type Props = {
  desc?: string;
  photo: string;
  date: string;
  userId: Number;
  like: Number;
  comment: Number;
};

const Post = ({ desc, photo, date, userId, like, comment }: Props) => {
  const [postLike, setPostLike] = useState<Number>(like);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const likeHandler = () => {
    setPostLike(isLiked ? Number(postLike) - 1 : Number(postLike) + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='w-full rounded-[10px] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] my-[30px] mx-0'>
      <div className='p-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              src={Users.filter((user) => user.id === userId)[0].profilePicture}
              className='w-8 h-8 mr-2 rounded-[50%] object-cover'
            />
            <span className='text-sm font-bold my-0 mx-3 '>
              {Users.filter((user) => user.id === userId)[0].username}
            </span>
            <span className='text-xs'>{date}</span>
          </div>
          <div>
            <MoreVert />
          </div>
        </div>
        {/* CENTER */}
        <div className='my-[20px] mx-0'>
          <span>{desc}</span>
          <img
            src={photo}
            className='mt-5 w-full max-h-[500px] object-contain'
          />
        </div>
        {/* RIGHT */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              className='w-6 h-6 mr-1 cursor-pointer'
              src='/assets/heart.png'
              onClick={likeHandler}
            />
            <img
              className='w-6 h-6 mr-1 cursor-pointer'
              src='/assets/like.png'
              onClick={likeHandler}
            />
            <span className='text-sm'>
              <>{postLike} people like it</>
            </span>
          </div>
          <div>
            <span className='cursor-pointer border-b-2 border-b-gray-200 border-dashed text-sm'>
              <>{comment} comments</>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
