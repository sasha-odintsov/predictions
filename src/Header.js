import "./Header.scss";
import { NavLink, Link } from 'react-router-dom';

function Header({ title1, title2, title3, title4 }) {
    return(
        <header className="header">
            <Link to='/' className="header-heading-link">
                <h1 className="header-heading">
                    {title1}
                    <span className="header-heading-item">{title2}</span>
                    <span className="header-heading-item heading-item-special">{title3}</span>
                    <span className="header-heading-item">{title4}</span>
                </h1>
            </Link>  
            <div className="header-lang-wrap">
                <NavLink to='/' className='lang-link'>РУС</NavLink>
                <NavLink to='/eng' className='lang-link'>ENG</NavLink>
            </div>
        </header>
    )
}

export default Header;