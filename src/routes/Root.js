import Footer from "../Components/Footer";
import TextBlock from "../Components/TextBlock";
import Button from "../Components/Button";
import React from "react";
export default function Root() {
    const intro_txt = "This site helps in creating commands for MC 1.21.1\n These commands allow custom interactions to be toggleable or turned on/off\n It uses scores to avoid lag.";
    return (React.createElement("div", { className: "flex flex-col w-full bg-background" },
        React.createElement("div", { id: "content", className: "grow items-center flex flex-col bg-background" },
            React.createElement("div", { className: "flex my-4 items-center flex-col text-center" },
                React.createElement(TextBlock, { content: intro_txt }),
                React.createElement("div", { className: "flex flex-row p-2 justify-evenly" },
                    React.createElement(Button, { text: "Bool", href: "bool-cmd" }),
                    React.createElement(Button, { text: "Toggle", href: "toggle-cmd" })))),
        React.createElement(Footer, null)));
}
