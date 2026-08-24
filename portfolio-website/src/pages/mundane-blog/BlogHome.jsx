import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogHome.css";
import BlogBanner from "../../assets/blog/home-blog/every-letter-I-sent-you.jpg";

function BlogHome() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHovered) return;

    const timer = setTimeout(() => {
      navigate("/mundane-blog/list");
    }, 1600); 

    return () => clearTimeout(timer);
  }, [isHovered, navigate]);

  return (
    <div
      className="blog-home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        </div>
      </div>
    </div>
  );
}

export default BlogHome;