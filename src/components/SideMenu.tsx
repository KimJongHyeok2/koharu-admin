import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faAd, faTools } from '@fortawesome/free-solid-svg-icons';
import useSidemenu from '../hooks/useSidemenu';

import '../styles/sidemenu.scss';
import Logo from '../images/logo/koharu.png';

function SideMenu() {
    const { onSubMenu, onHandleSubMenu } = useSidemenu();
    return(
        <div className="sidemenu-wrapper">
            <ul className="menu-list">
                <li className="ml-title"><img src={Logo} alt="Logo" /></li>
                <li className="ml-default">
                    <Link to="/">
                        <div className="icon">
                            <FontAwesomeIcon icon={faChartBar} size="2x" />
                        </div>
                    </Link>
                </li>
                <li className="ml-default active" onClick={() => onHandleSubMenu(0)}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faAd} size="2x" />
                    </div>
                </li>
                <li className="ml-default">
                    <Link to="/layout">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTools} size="2x" />
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className={`menu-sub-list${onSubMenu && onSubMenu.handle ? ' on' : ''}`}>
                <li>Sub SideMenu</li>
            </ul>
        </div>
    );
};

export default React.memo(SideMenu);
