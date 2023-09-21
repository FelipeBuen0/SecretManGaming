import { faBars, faGamepad, faShoppingCart, faTrophy, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Session } from "../../../../services/Session";
import { Button } from "primereact/button"
import { Menu } from "primereact/menu"
import { React, useRef } from "react"

export const EndContentSM = () => {
    const baseStyle = {
        backgroundColor: "var(--foreground-color)",
        color: "#fff",
        border: "none"
    };
    const iconMargin = {marginRight: "8px"}
    const menuLeft = useRef(null)
    const items = [{
        label: 'Biblioteca',
        icon: <FontAwesomeIcon style={iconMargin} icon={faGamepad}/>
    }, {
        label: 'Carrinho',
        icon: <FontAwesomeIcon style={iconMargin} icon={faShoppingCart}/>
    }, {
        label: 'Conquistas',
        icon: <FontAwesomeIcon style={iconMargin} icon={faTrophy}/>
    }];
    return (
            <div className="flex justify-content-between w-55 md:hidden">
                <Menu
                    model={items}
                    popup ref={menuLeft}
                    id="popup_menu_left"
                    className="md:hidden"
                />
                <div className="inline relative img-logo-smg"/>
                <Button
                    icon={<FontAwesomeIcon icon={faUser}/>}
                    className="mr-2"
                    onClick={(event) => 
                        menuLeft.current.toggle(event)
                    }
                    style={baseStyle}
                    aria-controls="popup_menu_left"
                    aria-haspopup
                />
            </div>
    )
}