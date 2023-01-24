type Props = {
  user: {
    username: string;
    profilePicture: string;
  };
};

const Online = ({ user }: Props) => {
  return (
    <li className='flex items-center mb-4'>
      <div className='mr-3 relative'>
        <img
          className='w-10 h-10 rounded-[50%] object-cover'
          src={user.profilePicture}
        />
        <span className='w-3 h-3 rounded-[50%] bg-lime-300 absolute -top-1 right-0 border-2 border-white border-solid'></span>
      </div>
      <span className='font-[500]'>{user.username}</span>
    </li>
  );
};

export default Online;
