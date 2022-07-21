import { useState } from "react";

export default function WelcomeWindow() {
    const [welcomeWindowClass, setWelcomeWindowClass] = useState("welcomeWindow");

    return (
        <div className={welcomeWindowClass}>
            <img src="/assets/images/logo.png" alt="" className="welcomeWindowImage" />
            <h1>ZapRecall</h1>
            <div className="startButton"
                onClick={() => {
                    setWelcomeWindowClass("welcomeWindow hidden");
                }}
                ><p>Iniciar Recall!</p></div>
        </div>
    );
}