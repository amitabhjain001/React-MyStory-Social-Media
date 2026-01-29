import { useRef } from "react";

const Signup = ({ setSelectedTab }) => {
    const usernameElement = useRef();
    const emailElement = useRef();

    const handleSignup = (event) => {
        event.preventDefault();
        const username = usernameElement.current.value;
        const email = emailElement.current.value;
        setSelectedTab("Home");

        usernameElement.current.value = "";
        emailElement.current.value = "";
    };

    return (
        <div className="signup-container" style={{ margin: "50px 10%", width: "80%" }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        ref={usernameElement}
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        ref={emailElement}
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
