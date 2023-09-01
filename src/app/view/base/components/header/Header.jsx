import React, { useRef } from "react";
import "./Header.css";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faTrophy, faShoppingCart, faUser, faBars, faRightFromBracket, faCog, faQuestionCircle, faUsers, faHashtag } from "@fortawesome/free-solid-svg-icons";
import 'primeicons/primeicons.css';
        
export default function Header() {
    const iconMargin = {marginRight: "8px"}
    const menuLeft = useRef(null)
    const _menuLeft = useRef(null)
    const baseStyle = {
        backgroundColor: "var(--foreground-color)",
        color: "#fff",
        border: "none"
    };
    const items = [{
        label: 'Comunidade',
        icon: <FontAwesomeIcon style={iconMargin} icon={faHashtag}/>
    }, {
        label: 'Amigos',
        icon: <FontAwesomeIcon style={{marginRight: "4px"}} icon={faUsers}/>
    }, {
        label: 'Suporte',
        icon: <FontAwesomeIcon style={iconMargin} icon={faQuestionCircle}/>
    }, {  
        label: 'Configurações',
        icon: <FontAwesomeIcon style={iconMargin} icon={faCog}/>,
        command: () => {
            //router.push('/fileupload');
        }
    }, {  
        label: 'Sair',
        icon: <FontAwesomeIcon style={iconMargin} icon={faRightFromBracket}/>,
        command: () => {
            localStorage.removeItem("auth")
            window.location.href = '/login'
        }
    }];
    /** 
     * @constant smartphone_items
     * The content visible for smartphone users
     * ---------------
     * A model for @menu of smartphone users. He shows the menu in a @popup
     * with a reference @ref to left at the user's Icon, in the rifght.
     * It's buttons include:
     * 1 - Library;
     * 2 - Trophies;
     * 3 - ShoppingCar.
     * ---------------
    */
    const smartphone_items = [{
        label: 'Biblioteca',
        icon: <FontAwesomeIcon style={iconMargin} icon={faGamepad}/>
    }, {
        label: 'Carrinho',
        icon: <FontAwesomeIcon style={iconMargin} icon={faShoppingCart}/>
    }, {
        label: 'Conquistas',
        icon: <FontAwesomeIcon style={iconMargin} icon={faTrophy}/>
    }]
    /** 
     * @constant StartContent
     * The content at the start of header
     * @Menu Menu
     * ---------------
     * Menu is a component that has a dropdown based on a model. In that
     * case the model is @items @constant. He shows the menu in a @popup
     * with a reference @ref to left. It's buttons include:
     * 1 - Community;
     * 2 - Friends;
     * 3 - Support;
     * 4 - Settings;
     * 5 - Log out
     * ---------------
    */
    const startContent = (
        <React.Fragment>
            <div>
            <Menu
                model={items}
                popup
                ref={menuLeft}
                id="popup_menu_left"
            />

            <Button
                icon= {<FontAwesomeIcon icon={faBars}/>}
                className="mr-2"
                onClick={(event) => 
                    menuLeft.current.toggle(event)
                }
                style={baseStyle}
                aria-controls="popup_menu_left"
                aria-haspopup
            />
            </div>
        </React.Fragment>
    );
    /** 
     * @constant CenterContent
     * ---------------
     * The content at the center of header
     * ---------------
     * basically it's the webapp logo, the first div is the block.
     * the inside div is the image
     * ---------------
    */
    const CenterContent = (
        <React.Fragment>
            <div className="hidden md:inline-flex  align-items-center ml-8">
                <div className="img-logo-smg mr-4"></div>
                SecretManGaming
            </div>
        </React.Fragment>
    )
    const endContent = (
        <React.Fragment>
            <div className="flex justify-content-between w-55 md:hidden">
                <Menu
                    model={smartphone_items}
                    popup ref={_menuLeft}
                    id="popup_menu_left"
                    className="md:hidden"
                />
                <div className="inline relative img-logo-smg"/>
                <Button
                    icon={<FontAwesomeIcon icon={faUser}/>}
                    className="mr-2"
                    onClick={(event) => 
                        _menuLeft.current.toggle(event)
                    }
                    style={baseStyle}
                    aria-controls="popup_menu_left"
                    aria-haspopup
                />
            </div>
            {/** @desktop section
            */}
            <div className="hidden md:flex">
                <Button
                    icon={<FontAwesomeIcon icon={faShoppingCart}/>}
                    style={baseStyle}
                    className="mr-2"
                />
                <Button
                    icon={<FontAwesomeIcon icon={faGamepad}/>}
                    style={baseStyle}
                    className="mr-2"
                />
                <Button
                    icon={<FontAwesomeIcon icon={faTrophy}/>}
                    style={baseStyle}
                    className="mr-2"
                    aria-controls="popup_menu_left"
                    aria-haspopup
                />
                <Button
                    icon={<FontAwesomeIcon icon={faUser}/>}
                    className="mr-2"
                    style={baseStyle}
                    aria-controls="popup_menu_left"
                    aria-haspopup
                />
            </div>
        </React.Fragment>
    );

    return (
            <Toolbar
             start = {startContent}
             end = {endContent}
             center = {CenterContent}
             className = "fixed flex justify-content-between h-3rem max-w-screen w-screen"
             style = {{
                backgroundColor: "var(--foreground-color)",
                color: "#fff",
                padding: "4px",
                border: "none"
            }}/>
    );
}