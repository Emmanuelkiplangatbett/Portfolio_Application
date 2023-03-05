// import NavBar from "../components/NavBar";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

function MainPage() {
  const [user, setUser] = useState(null);

  function handleSignUp(email, password) {
    setUser({ email });
  }

  function handleSignIn(email, password) {
    setUser({ email });
  }

  return (
    <div className="MainPage">
      {user ? (
        <div>
        
          <h2>Welcome, {user.email}!</h2>
          <button onClick={() => setUser(null)}>Sign out</button>
        </div>
      ) : (
        <div>
          <SignUpForm onSignUp={handleSignUp} />
          <SignInForm onSignIn={handleSignIn} />
        </div>
      )}
       <Link to="Login" classname="button">login</Link>
       
    </div>
  );
}

export default MainPage;
