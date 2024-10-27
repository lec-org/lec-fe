interface TFeedList {
  id: number;
  title: string;
  desc: string;
  author: {
    name: string;
    url: string;
  }
    views: number;
    likes: number;
    tags: string[];
}
export const feedList: TFeedList[] = [
  {
    id: 1,
    title: 'Technology',
    desc: 'Latest news about technology',
    author: {
      name: 'John Doe',
      url: 'https://example.com/john-doe'
    },
    views: 1000,
    likes: 500,
    tags: ['tech', 'news'],
  }, {
    id: 2,
    title: 'Sports',
    desc: 'Latest news about sports',
    author: {
      name: 'Jane Doe',
      url: 'https://example.com/jane-doe'
    },
    views: 1000,
    likes: 500,
    tags: ['sports', 'news'],
  }, {
    id: 3,
    title: 'Entertainment',
    desc: 'Latest news about entertainment',
    author: {
      name: 'Jane Doe',
      url: ''
    },
    views: 1000,
    likes: 500,
    tags: ['sports', 'news'],
  }, {
    id: 4,
    title: 'Entertainment',
    desc: 'Latest news about entertainment',
    author: {
      name: 'Jane Doe',
      url: 'URL_ADDRESS.com/jane-doe'
    },
    views: 1000,
    likes: 500,
    tags: ['entertainment', 'news'],
  }
]