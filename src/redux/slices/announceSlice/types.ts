export type Announce = {
  announce_id: number;
  announce_title: string;
  description: string;
  announce_content: string;
  published_date: string;
  created_date: string;
  total_view: number;
  is_read: number;
  fullname: string;
  created_user: string;
  sender: string;
  department_sent: string;
  total_user_view: number;
  total_user_comment: number;
  attachment: Attachment[];
};

export type Attachment = {
  attachment_name: string;
  attachment_path: string;
};

export type AnnounceRequest = {
  itemsPerPage: number;
  page: number;
  search: string;
};

export type Comment = {
  comment_id: string;
  reply_comment_id?: string | number;
  comment_content: string;
  image: string | null;
  like_count: number;
  avatar: string;
  username: string;
  created_user: string;
  created_date: string;
  is_like: number;
  total_reply?: number;
  reply?: Comment[];
  author: string;
};

export type LikeDislikePayload = {
  comment_id: string;
  is_like?: number;
  like_count?: number;
};

export type CreateCommentPayload = {
  announce_id: number;
  is_read?: number;
  comment_content: string;
  reply_comment_id?: string;
  image: { uri: string; type: string; name: string } | null;
};

export type ListUserViewedPayload = {
  id: number;
};
