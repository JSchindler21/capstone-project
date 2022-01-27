import e from "cors";
import { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login </h2>
        {error != "" ? <div>{error}</div> : ""}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            onChange={(event) =>
              setDetails({ ...details, name: event.target.value })
            }
            value={details.name}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) =>
              setDetails({ ...details, email: event.target.value })
            }
            value={details.email}
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) =>
              setDetails({ ...details, password: event.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
