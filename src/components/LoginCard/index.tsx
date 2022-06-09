import "./styles.css";

const LoginCard = () => {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
          <button>Fazer Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
