//Dispatch => Call API =>Update state based on success or failure

import api, { setAuthToken } from "../../utils/api";
import {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserFail,
  logoutSuccess,
  logoutFail,
  updateRequest,
  updateSuccess,
  updateFail,
  updateReset,
  clearErrors,
} from "../slices/userSlice";

// LOGIN

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await api.post("/v1/users/login", {
      email,
      password,
    });
    if (data.token) {
      setAuthToken(data.token);
    }
    dispatch(loginSuccess(data.data.user));
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.errMessage ||
      error.response?.data?.error?.message ||
      error.message ||
      "Login failed";

    dispatch(loginFail(message));
  }
};

//Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    // If userData is FormData (file upload), let the browser set Content-Type
    const config =
      userData instanceof FormData ? {} : { headers: { "Content-Type": "application/json" } };

    const { data } = await api.post("/v1/users/signup", userData, config);
    if (data.token) {
      setAuthToken(data.token);
    }
    dispatch(loginSuccess(data.data.user));
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.errMessage ||
      error.response?.data?.error?.message ||
      error.message ||
      "Signup failed";

    dispatch(loginFail(message));
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  // try{
  //     dispatch(loginRequest())

  //     const {data} = await api.get("/v1/users/me")

  //     dispatch(loginSuccess(data.user))

  // }catch(error){
  //     dispatch(loadUserFail(error.response?.data?.message))
  // }

  try {
    dispatch(loginRequest());

    const { data } = await api.get("/v1/users/me");

    console.log("loadUser response:", data);

    dispatch(loginSuccess(data.user));
  } catch (error) {
    console.log("loadUser error:", error.response);

    const message =
      error.response?.data?.message ||
      error.response?.data?.errMessage ||
      error.response?.data?.error?.message ||
      error.message ||
      "Load user failed";

    dispatch(loadUserFail(message));
  }
};

//update profile

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch(updateRequest());

    const { data } = await api.put("/v1/users/me/update", userData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(updateSuccess(data.success));
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.errMessage ||
      error.response?.data?.error?.message ||
      error.message ||
      "Update failed";

    dispatch(updateFail(message));
  }
};

//logout
export const logout = () => async (dispatch) => {
  try {
    await api.get("/v1/users/logout");
    setAuthToken(null);
    dispatch(logoutSuccess());
  } catch (error) {
    setAuthToken(null);
    const message =
      error.response?.data?.message ||
      error.response?.data?.errMessage ||
      error.response?.data?.error?.message ||
      error.message ||
      "Logout failed";

    dispatch(logoutFail(message));
  }
};
