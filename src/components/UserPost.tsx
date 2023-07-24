import React from 'react';


type Props = {
    promise: Promise<Post[]>
}

const UserPost = async ({ promise }: Props) => {
    const posts = await promise

    return (
        <>
            {posts.map(post => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <br />
                </article>
            ))}
        </>
    );
};

export default UserPost;