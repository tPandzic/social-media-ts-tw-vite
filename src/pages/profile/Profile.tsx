import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <Topbar />
      <div className='flex w-full'>
        <Leftbar />
        <div className=''>
          <div>
            <div className='h-[320px] relative'>
              <img
                src='assets/post/3.jpeg'
                alt='cover image'
                className='w-full h-[250px] object-cover'
              />
              <img
                src='assets/person/7.jpeg'
                alt='user avatar'
                className='w-[150px] h-[150px] rounded-[50%] object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px]'
              />
            </div>
            {/* profile info */}
            <div className='flex flex-col items-center'>
              <h4 className='text-2xl font-bold'>Tomislav Pandzic</h4>
              <span className='font-[300]'>Desc for User</span>
            </div>
          </div>
          <div className='flex'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
