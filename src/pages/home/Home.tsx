import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className='flex w-full'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
