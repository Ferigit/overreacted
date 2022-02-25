import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/layout";

const Post: any = ({ post, error }: any) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "42rem",
        padding: " 2.625rem 1.3125rem",
      }}
    >
      <article>
        <header>
          <h1>{post.title}</h1>
          <p
            style={{
              fontSize: "0.83255rem",
              lineHeight: "1.75rem",
              display: "block",
              marginTop: " 1.75rem",
              markerStart: "-1.4rem",
            }}
          >
            July 7, 2021 • ☕️☕️☕️ 14 min read
          </p>
          <p>{post.body}</p>
        </header>
      </article>
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
