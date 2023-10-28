import type { Post } from '@src/types';

const getAllPosts = async () => {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
  publication(id: "642d7e9ceaad3d174f7381de") {
    posts(first: 20) {
      edges {
        node {
          slug
          title
          author {
            name
          }
          publishedAt
          url
          coverImage {
            url
          }
          seo {
            title
            description
          }
          content {
            markdown
          }
        }
      }
    }
  }
}`,
    }),
  });

  const json = await response.json();

  return json.data.publication.posts.edges.map(
    (edge: { node: Post }) => edge.node,
  ) as Post[];
};

export default getAllPosts;
