import { faBars, faRightFromBracket, faCog, faQuestionCircle, faUsers, faHashtag} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Session } from "../../../../services/Session";
import { Button } from "primereact/button"
import { Menu } from "primereact/menu"
import { React, useRef } from "react"

export const StartContent = () => {
    const baseStyle = {
        backgroundColor: "var(--foreground-color)",
        color: "#fff",
        border: "none"
    };
    const iconMargin = {marginRight: "8px"}
    const menuLeft = useRef(null)
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
            Session.logoff();
            window.location.href = '/login'
        }
    }];
    return (
            <div>
                <Menu
                    model={items}
                    popup
                    ref={menuLeft}
                    id="popup_menu_left"
                />

                <Button
                    icon={<FontAwesomeIcon icon={faBars} />}
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