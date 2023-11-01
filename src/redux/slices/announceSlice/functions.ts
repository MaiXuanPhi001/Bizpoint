import { Comment, LikeDislikePayload } from './types';

export const updateComment = (comments: Comment[], payload: LikeDislikePayload): Comment[] => {
  const res = comments.map(comment => {
    if (comment.comment_id == payload.comment_id) {
      return {
        ...comment,
        is_like: payload.is_like,
        like_count: payload.is_like ? comment.like_count + 1 : comment.like_count - 1,
      };
    } else {
      if (comment.reply && comment.reply.length > 0) {
        const result = comment.reply.map(reply => {
          if (reply.comment_id == payload.comment_id) {
            console.log(payload);
            return {
              ...reply,
              is_like: payload.is_like,
              like_count: payload.is_like ? reply.like_count + 1 : reply.like_count - 1,
            };
          } else {
            return reply;
          }
        });

        return {
          ...comment,
          reply: result,
        };
      } else {
        return comment;
      }
    }
  });

  return res;
};
