import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000, 
  });

  if (isLoading) {
    return (
      <div>
        <h2>Posts</h2>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Posts</h2>
        <p style={{ color: 'red' }}>Error: {error.message}</p>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts ({posts?.length || 0} total)</h2>
      
      <button onClick={() => refetch()} disabled={isRefetching}>
        {isRefetching ? 'Refetching...' : 'Refresh Posts'}
      </button>

      <div>
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {posts && posts.length > 10 && (
        <p>Showing first 10 of {posts.length} posts</p>
      )}
    </div>
  );
};

export default PostsComponent;