function SignIn() {
  return <div className="form-body">
    <div className="row">
      <div className="form-holder">
        <div className="form-content">
          <div className="form-items">
            <h3>Maxine</h3>
            <div className="page-links">
              <a href="/signin" className="active">SignIn</a><a href="/signup">Signup</a>
            </div>
            <form>
              <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
              <input className="form-control" type="password" name="password" placeholder="Password" required />
              <div className="form-button">
                <button id="submit" type="submit" className="ibtn">Login</button>
                <a href="/forget">Forget password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default SignIn;