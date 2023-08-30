import React, { useRef } from "react";
import "./Header.css";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faTrophy } from "@fortawesome/free-solid-svg-icons";
import 'primeicons/primeicons.css';
        
export default function Header() {
    const baseStyle = {
        backgroundColor: "var(--foreground-color)",
        color: "#fff",
        border: "none"
    };
    const menuLeft = useRef(null)
    const _menuLeft = useRef(null)
    const items = [{
        label: 'Comunidade',
        icon: 'pi pi-hashtag'
    }, {
        label: 'Amigos',
        icon: 'pi pi-users'
    }, {
        label: 'Suporte',
        icon: 'pi pi-question-circle'
    }, {  
        label: 'Configurações',
        icon: 'pi pi-cog',
        command: () => {
            //router.push('/fileupload');
        }
    }, {  
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => {
            localStorage.removeItem("auth")
        }
    }];

    const _items = [{
        label: 'Biblioteca',
        icon: <FontAwesomeIcon icon={faGamepad}/>
    }, {
        label: 'Conquistas',
        icon: <FontAwesomeIcon icon={faTrophy}/>
    }]

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
             icon="pi pi-bars"
             className="mr-2"
             onClick={(event) => 
                menuLeft.current.toggle(event)
            }
             style={baseStyle}
             aria-controls="popup_menu_left"
             aria-haspopup
            />

            <span className="brand-name">SecretManGaming</span>
            </div>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Menu
             model={_items}
             popup ref={_menuLeft}
             id="popup_menu_left"
            />

            <Button
             icon="pi pi-user"
             className="mr-2"
             onClick={(event) => 
                _menuLeft.current.toggle(event)
            }
             style={baseStyle}
             aria-controls="popup_menu_left"
             aria-haspopup
            />

            <Button
             icon="pi pi-shopping-cart"
             style={baseStyle}
             className="mr-2"
            />
        </React.Fragment>
    );

    return (
        <div className="toolbar-header">
            <Toolbar
             start={startContent}
             end={endContent} 
             style={{
                backgroundColor: "var(--foreground-color)",
                color: "#fff",
                padding: "4px",
                border: "none"
            }}/>
        </div>
    );
}