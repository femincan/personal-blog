import type { PostPreview } from '@src/types';

const getLatestPosts = async () => {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
  publication(id: "${import.meta.env.HASHNODE_PUBLICATION_ID}") {
    posts(first: 6) {
      edges {
        node {
          slug
          title
          publishedAt
          coverImage {
            url
          }
          brief
        }
      }
    }
  }
}`,
    }),
  });

  const json = await response.json();

  return json.data.publication.posts.edges.map(
    (edge: { node: PostPreview }) => edge.node,
  ) as PostPreview[];
};

export default getLatestPosts;
