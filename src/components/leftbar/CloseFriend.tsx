type Props = {
  user: {
    username: string;
    profilePicture: string;
  };
};

const CloseFriend = ({ user }: Props) => {
  return (
    <li className='flex items-center mb-4'>
      <img
        className='w-8 h-8 mr-2 rounded-[50%] object-cover cursor-pointer'
        src={user.profilePicture}
      />
      <span className=''>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
