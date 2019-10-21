// news/{newsId}
interface News {
  title: string;
  body: string;
  visits: number;
  tags: string[];
}

// news/{newsId}/newsComments/{commentId}
interface NewsCommments {
  commenterId: string;
  comment: string;
}
