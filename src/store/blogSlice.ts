import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Reaction = "like" | "love" | "wow";

export type Comment = { id: string; text: string; createdAt: number };

export type BlogState = {
  imageUrl: string;
  liked: boolean;
  reactions: Record<Reaction, number>;
  comments: Comment[];
};

const initialState: BlogState = {
  imageUrl: "", 
  liked: false,
  reactions: { like: 0, love: 0, wow: 0 },
  comments: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    toggleLike(state) {
      state.liked = !state.liked;
      if (state.liked) state.reactions.like += 1;
      else if (state.reactions.like > 0) state.reactions.like -= 1;
    },
    addReaction(state, action: PayloadAction<Reaction>) {
      state.reactions[action.payload] += 1;
    },
    addComment(state, action: PayloadAction<string>) {
      const text = action.payload.trim();
      if (!text) return;
      state.comments.unshift({
        id: (globalThis.crypto?.randomUUID?.() as string) ?? String(Date.now()),
        text,
        createdAt: Date.now(),
      });
    },
    setImage(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
    },
  },
});

export const { toggleLike, addReaction, addComment, setImage } = blogSlice.actions;
export default blogSlice.reducer;
