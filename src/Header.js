import "./Header.scss";

function Header() {
    return(
        <header className="header">
            <a href='index.html' className="header-heading-link">
                <h1 className="header-heading">
                    Пред
                    <span className="header-heading-item">ска</span>
                    <span className="header-heading-item heading-item-special">за</span>
                    <span className="header-heading-item">ния</span>
                </h1>
            </a>  
        </header>
    )
}

export default Header;