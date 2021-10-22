import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectUserData,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

const Details = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  console.log(userData);
  return (
    <div>
      <h1>{userData?.givenName}</h1>
      <img src={userData?.imageUrl} alt={userData?.name} className="user" />
      <br />
      <GoogleLogout
        clientId="842064612197-tgt5rqb4vaeal0cup3kun3j6oc5sb47g.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="logout__button"
          >
            Logout 😦
          </button>
        )}
        onLogoutSuccess={logout}
      />
    </div>
  );
};

export default Details;
