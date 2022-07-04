import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { storageKeys } from "../hooks/useLocalStorage.enum";
import { login } from "./services/user";
import "../styles/Login.css"

const useLoginStatus = () => {

  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(storageKeys.autorized.description, false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const resetInputs = () => {
    setUser('');
    setPassword('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isLoging = await login({user, password});
      if (isLoging)
      {
        setIsAuthenticated(isLoging);
        setMessageError("");
      }
      if (!isLoging)
        setMessageError("password or user incorrect");
    } catch (err) {
      setMessageError(err.toString());
    }

    resetInputs();

  }

  const updateUser = (e) => setUser(e?.target?.value);
  const updatePassword = (e) => setPassword(e?.target?.value);

  const classStateHandler = messageError?.length ? "errmsg" : "offscreen";
  return {
    updatePassword,
    updateUser,
    handleSubmit,
    user,
    password,
    isAuthenticated,
    messageError,
    classStateHandler,
  }

}

export const Login = () => {
  const {
    user,
    password,
    updatePassword,
    updateUser,
    handleSubmit,
    isAuthenticated,
    messageError,
    classStateHandler
  } = useLoginStatus();
  return (
    <>
      {isAuthenticated ? (
        <Navigate replace={true} to="/" />
      ) : (

        <div className="DIV">
        <section className="Sec">
          <p className={classStateHandler} aria-live="assertive">
            {messageError}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} className="Fo">
            <label htmlFor="username">Username:</label>
            <input
              focus="true"
              type="text"
              id="username"
              autoComplete="off"
              onChange={updateUser}
              value={user}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={updatePassword}
              value={password}
              required
            />
            <br />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              {/*put router link here*/}
              <a href="http://localhost:3000/Vendor">Sign Up</a>
            </span>
          </p>
        </section>
        </div>
      )}
    </>
  )
};

const Logssin = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="https://www.holbertoncolombia.com/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autocomplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              {/*put router link here*/}
              <a href="http://localhost:3000/Vendor">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
