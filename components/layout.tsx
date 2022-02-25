import Navbar from "./Navbar";
export default function Layout({ children }: any) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "42rem",
        padding: "1.725rem 1.3125rem",
      }}
    >
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
