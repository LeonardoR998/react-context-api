export default function PostCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <div>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
