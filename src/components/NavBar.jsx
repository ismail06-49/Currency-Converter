import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className="navbar">
            <h1 className="text-center text-3xl text-black my-auto">CurrencyConverter</h1>
            <ul className="flex">
                <li className="link-btn">
                    <Link  to="/" >Home</Link>
                </li>
                <li className="link-btn">
                    <Link to="/about" >About</Link>
                </li>
                <li className="link-btn">
                    <Link to="/contact" >Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}