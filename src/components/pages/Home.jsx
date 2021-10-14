
import React, {useEffect, useState } from 'react';

const Home = () => {

    const provider = 'github';
    const redirect = window.location.pathname;
    const [userInfo, setUserInfo] = useState();
  
    useEffect(() => {

      (async () => {

        setUserInfo(await getUserInfo());
      })();

    }, []);
  
    async function getUserInfo() {
      try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      } catch (error) {
        console.error('No profile could be found');
        return undefined;
      }
    }

  return(<div className="offset-5 mt-4">
  <h5 className="mb-2">Logga in för att läsa bloggen</h5>
  <div>
  {!userInfo &&
    (
      <a className="btn btn-success mt-2 offset-1" key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
      {provider}
      </a>
      )}                     
      {userInfo && <a className="btn btn-success mt-2 mb-4 " href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
  </div>
        {userInfo && (
          <div>
            <div>
              <p>Du är inloggad som: </p>
              <p>{userInfo && userInfo.userDetails}</p>
            </div>
          </div>
        )}
      </div>
    );
  
}

export default Home;
