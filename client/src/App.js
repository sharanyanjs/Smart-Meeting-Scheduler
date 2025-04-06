import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = "YOUR_GOOGLE_CLIENT_ID_HERE";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Smart Meeting Scheduler</h1>
        <p>Login with Google to sync your calendar</p>
        <GoogleLogin
          onSuccess={(response) => {
            console.log("Login Success:", response);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
