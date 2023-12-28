import React from 'react'

function Post({post}) {
  return (
    <div className="card post-card" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) =><span class="badge text-bg-primary hastag"># {tag}</span>)}
    
  </div>
</div>
  )
}

export default Post