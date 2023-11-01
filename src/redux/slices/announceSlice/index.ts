import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Announce, Comment, CreateCommentPayload, LikeDislikePayload, ListUserViewedPayload } from './types';
import { updateComment } from './functions';

export interface AnnounceState {
  announceHome: {
    announceList: Announce[];
    total_unread: number;
  };
  announceDetail: Announce;
  comments: {
    data: Comment[];
    isLoading: boolean;
  };
  isRefreshListAnnounce: boolean;
  listUserViewed: [];
}

const initialState: AnnounceState = {
  announceHome: {
    announceList: [],
    total_unread: 0,
  },
  announceDetail: {
    announce_id: 0,
    announce_title: '',
    description: '',
    announce_content: '',
    published_date: '',
    created_date: '',
    total_view: 0,
    is_read: 0,
    fullname: '',
    created_user: '',
    sender: '',
    department_sent: '',
    total_user_view: 0,
    total_user_comment: 0,
    attachment: [],
  },
  comments: {
    data: [],
    isLoading: false,
  },
  isRefreshListAnnounce: false,
  listUserViewed: [],
};

const announceSlice = createSlice({
  name: 'announce',
  initialState,
  reducers: {
    setListAnnounceHome: (state: AnnounceState, action: PayloadAction<Partial<AnnounceState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getAnnounceDetail: (state: AnnounceState, _: PayloadAction<{ id: number; isRead: number }>) => {},
    setAnnounceDetail: (state: AnnounceState, action: PayloadAction<Partial<AnnounceState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setIsRefreshListAnnounce: (state, action) => {
      state.isRefreshListAnnounce = action.payload;
    },
    markAsRead: (state: AnnounceState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    getListComment: (state: AnnounceState, _: PayloadAction<number>) => {
      return {
        ...state,
        comments: {
          data: [...state.comments.data],
          isLoading: true,
        },
      };
    },
    setListComment: (state: AnnounceState, action: PayloadAction<Partial<AnnounceState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    likeDislikeComment: (state: AnnounceState, action: PayloadAction<LikeDislikePayload>) => {},
    setLikeDislikeComment: (state: AnnounceState, _: PayloadAction<LikeDislikePayload>) => {
      return {
        ...state,
      };
    },
    createComment: (state: AnnounceState, _: PayloadAction<CreateCommentPayload>) => {
      return {
        ...state,
      };
    },
    getListUserViewed: (state: AnnounceState, _: PayloadAction<ListUserViewedPayload>) => {
      return {
        ...state,
      };
    },
    setListUserViewed: (state, action) => {
      state.listUserViewed = action.payload.data;
    },
  },
});

export const {
  setListAnnounceHome,

  getAnnounceDetail,
  setAnnounceDetail,

  markAsRead,
  setIsRefreshListAnnounce,

  getListComment,
  setListComment,

  likeDislikeComment,
  setLikeDislikeComment,
  createComment,

  getListUserViewed,
  setListUserViewed,
} = announceSlice.actions;
export default announceSlice.reducer;
