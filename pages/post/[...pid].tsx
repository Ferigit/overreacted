import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/layout";

const Post: any = ({ post, error }: any) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="post-content">
      <article>
        <header>
          <h1>{post.title}</h1>
          <p className="post-body">July 7, 2021 • ☕️☕️☕️ 14 min read</p>
          <p>{post.body}</p>
        </header>
      </article>
      <style jsx>{`
        .post-content {
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
        .post-body {
          font-size: 0.83255rem;
          line-height: 1.75rem;
          display: block;
          margin-top: 1.75rem;
          marker-start: -1.4rem;
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = async ({ query }: any) => {
  const { pid } = query;
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + pid
    );
    const post = res.data;
    return { post };
  } catch (error) {
    return { error };
  }
};

Post.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default Post;
