import { faGamepad, faShoppingCart, faTrophy, faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "primereact/button"
import { React } from "react"
export const EndContent = () => {
    const baseStyle = {
        backgroundColor: "var(--foreground-color)",
        color: "#fff",
        border: "none"
    };
    return (
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
    )
}
