import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleLike, addReaction, addComment, setImage } from "../store/blogSlice";

// ✅ Use the renamed asset
import blogImage from "../assets/blog-image.jpg";

const btn: React.CSSProperties = {
  padding: "0.5rem 0.75rem",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "#fff",
  cursor: "pointer",
};

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const { imageUrl, liked, reactions, comments } = useSelector((s: RootState) => s.blog);
  const [commentText, setCommentText] = React.useState("");

  React.useEffect(() => {
  
    dispatch(setImage(blogImage));
  }, [dispatch]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addComment(commentText));
    setCommentText("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Blog</h1>
      <p style={{ color: "#555", marginBottom: "1.25rem" }}>
        Thoughts on design, creativity, and technology.
      </p>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <img src={imageUrl} alt="Blog visual" style={{ width: "100%", height: 360, objectFit: "cover" }} />

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            padding: "0.75rem 1rem",
            borderTop: "1px solid #eee",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => dispatch(toggleLike())}
            style={{ ...btn, background: liked ? "#e0f2fe" : "#fff", fontWeight: liked ? 600 : 400 }}
            title="Like"
          >
            {liked ? "👍 Liked" : "👍 Like"}
          </button>

          <button onClick={() => dispatch(addReaction("like"))} style={btn} title="React: Like">
            👍 {reactions.like}
          </button>
          <button onClick={() => dispatch(addReaction("love"))} style={btn} title="React: Love">
            ❤️ {reactions.love}
          </button>
          <button onClick={() => dispatch(addReaction("wow"))} style={btn} title="React: Wow">
            😮 {reactions.wow}
          </button>
        </div>

        <form
         onSubmit={handlePost}
         style={{
         display: "grid",
         gridTemplateColumns: "1fr auto", // textarea grows, button fits
         gap: "0.5rem",
         padding: "0.75rem 1rem 1rem",
         alignItems: "stretch",           // make children equal height
        }}
>

          <textarea
  value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
  placeholder="Add a comment…"
  rows={3}
  style={{
    resize: "vertical",
    padding: "0.5rem 0.75rem",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    fontFamily: "inherit",
    minHeight: 40, // baseline so button isn’t tiny
  }}
/>

          <button
  type="submit"
  style={{
    padding: "0 1rem",
    borderRadius: 8,
    border: "1px solid #111827",
    background: "#111827",
    color: "#fff",
    cursor: "pointer",
    alignSelf: "stretch",    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  }}
>
  Post
</button>

        </form>
      </section>

      <section style={{ marginTop: "1rem" }}>
        <h3 style={{ margin: "0.5rem 0 0.75rem" }}>Comments ({comments.length})</h3>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {comments.length === 0 && <div style={{ color: "#777" }}>Be the first to comment.</div>}
          {comments.map((c) => (
            <article key={c.id} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "0.75rem 1rem", background: "#fff" }}>
              <div style={{ fontSize: 12, color: "#888" }}>{new Date(c.createdAt).toLocaleString()}</div>
              <p style={{ margin: "0.25rem 0 0", color: "#333" }}>{c.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
