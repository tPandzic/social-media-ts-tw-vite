export interface UsersType {
  id: Number;
  profilePicture: string;
  username: string;
}

export interface PostType {
  id?: Number;
  desc?: string;
  photo: string;
  date: string;
  userId: Number;
  like: Number;
  comment: Number;
}
