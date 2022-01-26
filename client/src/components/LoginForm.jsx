import e from "cors";
import { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Login </h2>
        {/* Error! */}
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
