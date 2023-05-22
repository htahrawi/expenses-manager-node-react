import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  user: null,
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      useEffectad: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        return new Promise((resolve, reject) => {
          axios
            .get("http://localhost:5000/api/logout")
            .then((data) => {
              console.log("AXIOS INTERCEPTOR LOGOUT", data);
              dispatch({
                type: "LOGOUT",
                payload: null,
              });
              window.localStorage.removeItem("user");
              navigate('/auth')
            })
            .catch((err) => {
              console.log("AXIOS INTERCEPTOR ERR", err);
              reject(err);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("http://localhost:5000/api/csrf-token");
      axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };
    getCsrfToken();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
