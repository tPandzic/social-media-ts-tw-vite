import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@mui/icons-material';
import CloseFriend from './CloseFriend';
import { Users } from '../../dummyData';

type Props = {};

const Leftbar = (props: Props) => {
  const listItemStyle = `flex items-center mb-5`;
  return (
    <div className='basis-1/4 h-[calc(100vh_-_50px)] overflow-y-scroll sticky top-[50px]'>
      <div className='p-5 '>
        <ul className='p-0 m-0 list-none'>
          <li className={listItemStyle}>
            <RssFeed className='mr-4' />
            <span className=''>Feed</span>
          </li>
          <li className={listItemStyle}>
            <Chat className='mr-4' />
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className={listItemStyle}>
            <PlayCircleFilledOutlined className='mr-4' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className={listItemStyle}>
            <Group className='mr-4' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className={listItemStyle}>
            <Bookmark className='mr-4' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className={listItemStyle}>
            <HelpOutline className='mr-4' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className={listItemStyle}>
            <WorkOutline className='mr-4' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className={listItemStyle}>
            <Event className='mr-4' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className={listItemStyle}>
            <School className='mr-4' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='w-[150px] rounded-[5px] border-0 p-3 font-[500] '>
          Show More
        </button>
        <hr className='my-5 mx-0' />
        {/* Friends */}
        <ul className='m-0 p-0 list-none'>
          {Users.map((user, index) => (
            <CloseFriend key={`${user.id}-${index}`} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
