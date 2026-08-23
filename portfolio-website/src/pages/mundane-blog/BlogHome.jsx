import "./BlogHome.css";
import BlogBanner from "../../assets/blog/home-blog/every-letter-I-sent-you.jpg";

function BlogHome() {
  return (
    <div className="blog-home">
      <div className="wrapper">
        <div className="lid one"></div>
        <div className="lid two"></div>

        <div className="envelope"></div>

        <div className="letter">
          <img
            src={BlogBanner}
            alt="Blog Banner"
            className="blog-banner"
          />

          <div className="text">
            <h1>Every Letter I Sent You</h1>
            <p>A collection of Selene's fractured thoughts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHome;