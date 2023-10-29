import type { Blog } from '@src/types';

const blogOgImageUrl =
  'https://femincan.dev/api/og/home?og=eyJ0aXRsZSI6IkZ1cmthbiUyMEVtaW4lMjBDYW4ncyUyMFRlY2glMjBCbG9nIiwiZG9tYWluIjoiZmVtaW5jYW4uZGV2IiwiZm9sbG93ZXJzIjoxMiwicGhvdG8iOiJodHRwczovL2Nkbi5oYXNobm9kZS5jb20vcmVzL2hhc2hub2RlL2ltYWdlL3VwbG9hZC92MTY4NDQzNDMzNTAxNi9KWlFZa1BnREgucG5nIiwiYmdjb2xvciI6IiMyRDMyMzkiLCJsb2dvIjoiaHR0cHM6Ly9jZG4uaGFzaG5vZGUuY29tL3Jlcy9oYXNobm9kZS9pbWFnZS91cGxvYWQvdjE2OTU0NjQ1MTI1MDIvdlQ5SU5pN09nLnBuZyIsIm1ldGEiOiJJJ20lMjBhJTIwc2VsZi10YXVnaHQlMkMlMjBwYXNzaW9uYXRlJTIwZnJvbnQtZW5kJTIwZGV2ZWxvcGVyJTIwd2hvJTIwZW5qb3lzJTIwd3JpdGluZyUyMFR5cGVTY3JpcHQlMjBhbmQlMjBzdHJpdmVzJTIwdG8lMjBiZWNvbWUlMjBhJTIwYmV0dGVyJTIwZGV2ZWxvcGVyLiIsImZhdmljb24iOiJodHRwczovL2Nkbi5oYXNobm9kZS5jb20vcmVzL2hhc2hub2RlL2ltYWdlL3VwbG9hZC92MTY4NDM1NjE4NDU3Mi9EOG9vSEFOUVYucG5nIiwiYXJ0aWNsZXMiOjMsImlzRGVmYXVsdE1vZGVEYXJrIjp0cnVlfQ==';

const getBlogData = async () => {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
  publication(id: "${import.meta.env.HASHNODE_PUBLICATION_ID}") {
    title
    about {
      text
    }
    favicon
    headerColor
    author {
      profilePicture
      name
      bio {
        text
      }
      socialMediaLinks {
        twitter
        github
        linkedin
      }
    }
  }
}`,
    }),
  });

  const json = await response.json();

  const { headerColor, ...res } = json.data.publication;

  return {
    ...res,
    ogImageUrl: blogOgImageUrl,
    themeColor: headerColor,
  } as Blog;
};

export default getBlogData;
