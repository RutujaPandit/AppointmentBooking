import './Navbar.css';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-light bg-light" id="navbar">
                <div className="container-fluid">
                    <a id="img" className="navbar-brand" href="/">
                        Cheris Evans
                        <img src="/icon.png" alt=""  className="picture"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
