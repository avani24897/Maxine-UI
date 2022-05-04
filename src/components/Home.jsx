import React from "react";
class Home extends React.Component {
    render() {
        return <div className="row">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="/signin"
                    rel="noopener noreferrer"
                >
                    SignIn
                </a>
            </header>
        </div>;
    }
}

export default Home;