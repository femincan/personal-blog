import type { About } from '@src/types';

const getAboutPageData = async () => {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
  publication(id: "${import.meta.env.HASHNODE_PUBLICATION_ID}") {
    url
    staticPage(slug: "about") {
      slug
      content {
        markdown
      }
    }
  }
}`,
    }),
  });

  const json = await response.json();
  const pageData = json.data.publication.staticPage;
  const url = `${json.data.publication.url}/${pageData.slug}`;

  return {
    url,
    content: { markdown: pageData.content.markdown },
  } as About;
};

export default getAboutPageData;
