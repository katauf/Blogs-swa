import React from "react";

const Home = ({ user }) => {
  const redirect = `/`;

  return (
    <div className="login-text">
      {!user && (
        <span>
          <a
            key="github"
            href={`/.auth/login/github?post_login_redirect_uri=${redirect}`}
          >
            <h4>github</h4>
          </a>{" "}
        </span>
      )}
      {user && (
        <div>
          <p>
            <span>
              {user && user?.userDetails} ({user && user?.identityProvider})
            </span>
            <span>
              {" "}
              <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>
                Logout
              </a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
