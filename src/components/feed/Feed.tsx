import Post from '../post/Post';
import Share from '../shared/Share';
import { Posts } from '../../dummyData';
import { PostType } from '../types';

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className='basis-[75%]'>
      <div className='p-5'>
        <Share />
        {Posts.map((post: PostType, index) => (
          <Post
            key={`${post.id}-${index}`}
            desc={post.desc}
            photo={post.photo}
            date={post.date}
            userId={post.userId}
            like={post.like}
            comment={post.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
