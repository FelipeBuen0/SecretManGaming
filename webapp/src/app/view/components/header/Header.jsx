import React from "react";
import "./Header.css";
import { Toolbar } from 'primereact/toolbar';
import { StartContent } from "./items/StartContent";
import { EndContentSM } from "./items/EndContentSM";
import { CenterContent } from "./items/CenterContent";
import { EndContent } from "./items/EndContent";
import 'primeicons/primeicons.css';
export default function Header() {
    const startContent = (StartContent);
    const centerContent = (CenterContent)
    const endContent = (
        <React.Fragment>
            <EndContentSM />
            <EndContent />
        </React.Fragment>
    );
    return (
        <Toolbar
            start={startContent}
            end={endContent}
            center={centerContent}
            className="fixed flex justify-content-between h-3rem max-w-screen w-screen"
            style={{
                backgroundColor: "var(--foreground-color)",
                color: "#fff",
                padding: "4px",
                border: "none"
            }} />
    );
}