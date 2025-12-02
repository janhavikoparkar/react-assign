import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleLike, addReaction, addComment, setImage } from "../store/blogSlice";

// ✅ Hero image
import blogImage from "../assets/blog-image.jpg";

// ✅ New gallery images
import photo1 from "../assets/blog-photo-1.jpg";
import photo2 from "../assets/blog-photo-2.jpg";
import photo3 from "../assets/blog-photo-3.jpg";

// ✅ Videos
import video1 from "../assets/blog-video-1.mp4";
import video2 from "../assets/blog-video-2.mp4";

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
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null); // ✅ for clickable photos

  // ✅ Simple article content
  const article = (
    <article style={{ display: "grid", gap: "0.75rem", lineHeight: 1.7, color: "#222" }}>
      <h2 style={{ margin: 0 }}>The Dance Behind the Lens</h2>

      <p>
        Reflections in Motion: A Genuine Look Back at Our Videography Project.
        When our group first got together for the videography project, I figured it would mostly be
        about figuring out how to use cameras and stay on top of our filming schedule. Sure, I
        expected some technical hurdles, but I had no idea how much I&apos;d actually learn from the
        whole process or how much closer I&apos;d feel to my teammates. What began as just an
        ordinary class assignment gradually turned into a meaningful experience where I discovered
        things about light, movement, teamwork, and even about myself. We chose self-reflection and
        self-expression as the theme for our video. Since the subject was so personal and emotional,
        we needed to be really thoughtful about how our visuals and movements would tie into it.
        This pushed me to really focus on every little detail, and it fundamentally changed my
        perspective on videography.
      </p>

      <p>
        One of the first things I noticed while filming was how much lighting influenced the mood of
        a scene. The weather was unpredictable. At first, I thought the clouds would be a hassle.
        When the clouds rolled in, the colors got softer and less vibrant, and I worried it would
        ruin our shots. The diffused light from the clouds gave a calm and dreamy vibe that fit
        perfectly with our theme of self-reflection. It softened the dancer&apos;s movements and
        made the entire scene feel more introspective. Instead of resisting the changes in weather,
        we learned to adapt and use the light and wind to our advantage. This experience taught me
        that if we embrace the natural light, we can create moments that feel more genuine and
        emotional than anything we could have planned.
      </p>

      <p>
        Given that our video focused on contemporary dance, capturing movement was a major
        challenge. Filming a dancer is a whole different ball game compared to shooting someone
        who&apos;s just standing still. Dance is unpredictable. We had to stay alert, stay on our
        toes, and always think ahead. We experimented with various techniques to capture the
        movement. We used wide shots to showcase the full dance and tracking shots where we followed
        the dancer with the camera. Each method taught us something new about how to use the camera
        to enhance the emotional impact of the performance.
      </p>

      <p>
        For this project, we worked with three different cameras. The Sony A7 Mark III with the GM
        24 lens gave us high-quality footage for our main scenes. The DJI Pocket 3 was super
        portable and let us grab dynamic shots while following the dancer. And the Sony PC120 MiniDV
        camera provided behind-the-scenes footage with that nostalgic, old-school vibe. Using these
        three devices helped me see just how much the choice of camera affects the final product.
        Each camera has its own unique characteristics. The Sony A7 produces sharp, clear images,
        the DJI Pocket captures smooth motion, and the MiniDV gives a grainy, warm look that feels a
        lot more personal. When we blended all this footage together, the final video was rich with
        different layers of emotion and texture. It made me realise that the equipment we choose
        isn&apos;t just a technical choice; it shapes the story we want to tell.
      </p>

      <p>
        While the technical aspects were important, the most surprising part of this project was how
        close we became as a group. We spent long hours filming, editing, brainstorming ideas, and
        tackling problems together. The more we worked together, the more at ease we felt with one
        another. We supported each other when things didn&apos;t go right, shared thoughts, and
        helped each other hone our ideas. What started as casual chats during breaks blossomed into
        genuine connections. I realised I wasn&apos;t just collaborating with classmates; I was
        forming new friendships. This experience highlighted how creative projects can bring people
        together in such a unique way. When you share the ups and downs of planning, failing, trying
        again, dreaming, and creating, it naturally fosters closeness. Ultimately, the friendships
        we nurtured became one of the highlights of this assignment.
      </p>

      <p>
        Looking back, this project instilled in me the value of adaptability. Not everything goes
        according to plan, but sometimes those unexpected moments turn out to be the most beautiful.
        More than anything, it showed me that collaboration is about more than just splitting tasks.
        It&apos;s about sharing ideas, uplifting one another, and growing together. The final video
        reflects our theme of self-expression but also encapsulates our team&apos;s journey and the
        friendships that blossomed along the way. In the end, this assignment became so much more
        than just a task. It was a space for learning, reflecting, experimenting, and connecting
        with others. I&apos;ll carry these lessons with me into my future work and studies.
      </p>
    </article>
  );

  // ✅ Media arrays
  const photos: string[] = [photo1, photo2, photo3];
  const videos: string[] = [video1, video2];

  React.useEffect(() => {
    dispatch(setImage(blogImage));
  }, [dispatch]);

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    dispatch(addComment(commentText.trim()));
    setCommentText("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Blog</h1>
      <p style={{ color: "#555", marginBottom: "1.25rem" }}>
        
CS6041 - Assignment 5: Blog
      </p>

      {/* Card – ONLY hero image + reactions + comment form */}
      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {/* Hero image */}
        <img
          src={imageUrl}
          alt="Blog visual"
          style={{ width: "100%", height: 360, objectFit: "cover" }}
        />

        {/* Reactions bar */}
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

        {/* Comment form */}
        <form
          onSubmit={handlePost}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "0.5rem",
            padding: "0.75rem 1rem 1rem",
            alignItems: "stretch",
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
              minHeight: 40,
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

      {/* ✅ Article + Photos + Videos as a separate section BELOW the card */}
      <section
        style={{
          marginTop: "1.5rem",
          padding: "1.5rem",
          borderRadius: 16,
          background: "#fff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {article}

        {/* Photos */}
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ margin: "0.75rem 0", textAlign: "center" }}>Photos</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            {photos.map((src, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => setLightboxImage(src)} // ✅ click to open
              >
                <img
                  src={src}
                  alt={`Blog photo ${i + 1}`}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ margin: "0.75rem 0", textAlign: "center" }}>Videos</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            {videos.map((src, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <video
                  src={src}
                  controls
                  style={{
                    width: "100%",
                    height: 220,
                    display: "block",
                    background: "#000",
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Comments list */}
      <section style={{ marginTop: "1rem" }}>
        <h3 style={{ margin: "0.5rem 0 0.75rem" }}>Comments ({comments.length})</h3>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {comments.length === 0 && <div style={{ color: "#777" }}>Be the first to comment.</div>}
          {comments.map((c) => (
            <article
              key={c.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "0.75rem 1rem",
                background: "#fff",
              }}
            >
              <div style={{ fontSize: 12, color: "#888" }}>
                {new Date(c.createdAt).toLocaleString()}
              </div>
              <p style={{ margin: "0.25rem 0 0", color: "#333" }}>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ✅ Lightbox overlay for clicked photo */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <img
              src={lightboxImage}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: 16,
                display: "block",
              }}
            />
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                padding: "0.4rem 0.9rem",
                borderRadius: 999,
                border: "none",
                background: "#f9fafb",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
