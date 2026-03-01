import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import Nav from "../../shared/components/Nav";
import logo from "../../../assets/Instanamelogo.png";
import Pro from "../../../assets/profile.png";
import { NavLink } from "react-router";

const Feed = () => {
  const { feed, handleGetFeed, loading, handleLike, handleUnlike } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1 style={{color:'gray'}}>Feed is loading.....</h1>
      </main>
    );
  }
  return (
    <main className="feed-page">
      <div className="main-container">
        <aside className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Nav />
          </div>
          <div className="links">
            <div className="link">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-home-4-line"></i> Home
              </NavLink>

              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-search-line"></i> Search
              </NavLink>

              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-compass-3-line"></i> Explore
              </NavLink>

              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-messenger-line"></i> Message
              </NavLink>

              <NavLink
                to="/notifications"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-heart-line"></i> Notifications
              </NavLink>

              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-add-box-line"></i> Create
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "menu active" : "menu"
                }
              >
                <i className="ri-account-circle-line"></i> Profile
              </NavLink>
            </div>
            <p>
              <i className="ri-menu-line"></i> More
            </p>
          </div>
        </aside>
        <div className="feed">
          <div className="posts">
            {feed.map((post) => {
              return (
                <Post
                  user={post.user}
                  post={post}
                  loading={loading}
                  handleLike={handleLike}
                  handleUnlike={handleUnlike}
                />
              );
            })}
          </div>
        </div>
        <aside className="right">
          <div className="account">
            <div className="switch-account">
              <div className="profile">
                <img src={Pro} alt="" />
                <div>
                  <h4>Codeeat</h4>
                  <p>Codeeat</p>
                </div>
              </div>
              <button className="swt-btn">Switch</button>
            </div>

            <div className="suggestion">
              <div className="see-all">
                <h4>Suggestions For You</h4>
                <button>See All</button>
              </div>
              <div className="switch-account">
                <div className="profile">
                  <img src={Pro} alt="" />
                  <div>
                    <h4>Codeeat</h4>
                    <p>Codeeat</p>
                  </div>
                </div>
                <button className="swt-btn">Follow</button>
              </div>
              <div className="switch-account">
                <div className="profile">
                  <img src={Pro} alt="" />
                  <div>
                    <h4>Codeeat</h4>
                    <p>Codeeat</p>
                  </div>
                </div>
                <button className="swt-btn">Follow</button>
              </div>
              <div className="switch-account">
                <div className="profile">
                  <img src={Pro} alt="" />
                  <div>
                    <h4>Codeeat</h4>
                    <p>Codeeat</p>
                  </div>
                </div>
                <button className="swt-btn">Follow</button>
              </div>
              <div className="switch-account">
                <div className="profile">
                  <img src={Pro} alt="" />
                  <div>
                    <h4>Codeeat</h4>
                    <p>Codeeat</p>
                  </div>
                </div>
                <button className="swt-btn">Follow</button>
              </div>
              <div className="switch-account">
                <div className="profile">
                  <img src={Pro} alt="" />
                  <div>
                    <h4>Codeeat</h4>
                    <p>Codeeat</p>
                  </div>
                </div>
                <button className="swt-btn">Follow</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Feed;
