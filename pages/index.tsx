
import Layout from "../components/layout";
import axios from "axios";

const Home: any = ({ posts, error }: any) => {
  return (
    <div>
      <aside>
        <div
          style={{
            display: "flex",
            marginBottom: "3.5rem",
          }}
        >
          <img
            src="/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan Abramov"
            style={{
              margin: "auto 0px",
              marginRight: "0.875rem",
              // marginBottom: 0,
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
            }}
          />
          <p
            style={{
              maxWidth: "310px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <p style={{ margin: 0, marginBottom: 15 }}>
              {" "}
              Personal blog by{" "}
              <a
                href="https://mobile.twitter.com/dan_abramov"
                style={{ color: "rgb(209,47,104)" }}
              >
                Dan Abramov
              </a>
            </p>

            <p style={{ margin: 0 }}>I explain with words and code.</p>
          </p>
        </div>
      </aside>
      <main>
        {posts.map((post: any) => {
          return (
            <article>
              <header>
                <h3 style={{ fontSize: "1.75rem", marginBottom: "0.4375rem" }}>
                  <a
                    style={{
                      boxShadow: "none",
                      color: "#d23669",
                      fontWeight: 900,
                    }}
                    rel="bookmark"
                    href={`/post/${post.id}`}
                  >
                    {post.title}
                  </a>
                </h3>
                <small>July 7, 2021 • ☕️☕️☕️ 14 min read</small>
              </header>
              <p style={{ marginBottom: "38px" }}>{post.body}</p>
            </article>
          );
        })}
      </main>
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
