import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <li>
                    <Link to="/">Welcome</Link>
                </li>
                <li>
                    <Link to="/message">Message</Link>
                </li>
            </nav>
        </>
    );
};

export default Nav;