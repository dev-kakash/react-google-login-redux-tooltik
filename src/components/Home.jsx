import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectIsSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import Details from "./Details";

export const Home = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  console.log(isSignedIn);
  return (
    <div>
      {!isSignedIn ? (
        <>
          {" "}
          <h1> Google login demo</h1>
          <GoogleLogin
            clientId="842064612197-tgt5rqb4vaeal0cup3kun3j6oc5sb47g.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login__button"
              >
                Login with Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </>
      ) : (
        <Details />
      )}
    </div>
  );
};
