import { Users } from '../../dummyData';
import Online from '../Online';

type Props = {
  profile?: boolean;
};

const Rightbar = ({ profile }: Props) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className='flex items-center'>
          <img className='w-8 h-8 mr-3' src='assets/gift.png' />
          <span className=''>
            <b className='font-[300] text-sm'>Pola Foster</b> and{' '}
            <b>3 other friends</b> have their birthday today
          </span>
        </div>
        <img className='w-full rounded-[10px] my-6' src='assets/ad.png' />
        <h4 className='mb-5'>Online Friends</h4>
        <ul className='p-0 m-0 list-none'>
          {Users.map((user, index) => (
            <Online key={`${user.id}-${index}`} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='text-lg font-[600] mb-3'>User Information</h4>
        <div className='mb-8'>
          <div className='mb-3'>
            <span className='font-[500] mr-4 text-[#555]'>City:</span>
            <span className='font-[300]'>New York</span>
          </div>
          <div className='mb-3'>
            <span className='font-[500] mr-4 text-[#555]'>From:</span>
            <span className='font-[300]'>Madrid</span>
          </div>
          <div className='mb-3'>
            <span className='font-[500] mr-4 text-[#555]'>Relationship:</span>
            <span className='font-[300]'>Single</span>
          </div>
        </div>
        <h4>User friends</h4>
        <div className='flex flex-wrap justify-between'>
          <div className='flex flex-col mb-5 cursor-pointer'>
            <img
              className='w-[100px] h-[100px] object-cover rounded-[5px]'
              src='assets/person/1.jpeg'
            />
            <span>Username</span>
          </div>
          <div className='flex flex-col mb-5 cursor-pointer'>
            <img
              className='w-[100px] h-[100px] object-cover rounded-[5px]'
              src='assets/person/2.jpeg'
            />
            <span>Username</span>
          </div>
          <div className='flex flex-col mb-5 cursor-pointer'>
            <img
              className='w-[100px] h-[100px] object-cover rounded-[5px]'
              src='assets/person/3.jpeg'
            />
            <span>Username</span>
          </div>
          <div className='flex flex-col mb-5 cursor-pointer'>
            <img
              className='w-[100px] h-[100px] object-cover rounded-[5px]'
              src='assets/person/4.jpeg'
            />
            <span>Username</span>
          </div>
          <div className='flex flex-col mb-5 cursor-pointer'>
            <img
              className='w-[100px] h-[100px] object-cover rounded-[5px]'
              src='assets/person/5.jpeg'
            />
            <span>Username</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='basis-1/4'>
      <div className='pt-5 pr-5'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
