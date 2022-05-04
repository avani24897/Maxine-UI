import React from "react";
class Signup extends React.Component {
  render() {
    return <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Maxine</h3>
              <div className="page-links">
                <a href="/signin">SignIn</a><a href="/signup" className="active">Signup</a>
              </div>
              <form>
                <input className="form-control" type="text" name="name" placeholder="Full Name" required />
                <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
                <input className="form-control" type="password" name="password" placeholder="Password" required />
                <div className="form-button">
                  <button id="submit" type="submit" className="ibtn">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Signup;