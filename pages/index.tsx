import Layout from "../components/layout";
import axios from "axios";

const Home: any = ({ posts, error }: any) => {
  return (
    <div>
      <aside>
        <div className="aside-container">
          <img
            src="/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan Abramov"
            className="aside-image"
          />
          <p className="aside-content">
            <p className="aside-title">
              Personal blog by
              <a
                href="https://mobile.twitter.com/dan_abramov"
                style={{ color: "rgb(209,47,104)" }}
              >
                Dan Abramov
              </a>
            </p>

            <p className="aside-subtitle">I explain with words and code.</p>
          </p>
        </div>
      </aside>
      <main>
        {posts.map((post: any) => {
          return (
            <article>
              <header>
                <h3 className="post-card">
                  <a
                    className="post-card-link"
                    rel="bookmark"
                    href={`/post/${post.id}`}
                  >
                    {post.title}
                  </a>
                </h3>
                <small>July 7, 2021 • ☕️☕️☕️ 14 min read</small>
              </header>
              <p className="post-card-body">{post.body}</p>
            </article>
          );
        })}
      </main>
      <style jsx>{`
      .aside-container{
        display: flex;
        margin-bottom: 3.5rem
      }
        .post-card {
          font-size: 1.75rem;
          margib-bottom: 0.4375rem;
        }
        .post-card-link {
          box-shadow: none;
          color: #d23669;
          font-weight: 900;
        }
        .post-card-body {
          margin-bottom: 38px;
        }
        .aside-subtitle {
          margin: 0px;
        }
        .aside-title {
          margin: 0, marginBottom: 15
        }
        .aside-content {
          max-width: 310px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          alignContent: flex-end;
        }
        .aside-image{
          margin: auto 0px;
          margin-right: 0.875rem;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
Home.getInitialProps = async (ctx: any) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = res.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

Home.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default Home;
