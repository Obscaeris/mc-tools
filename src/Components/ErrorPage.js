import { useNavigate, useRouteError } from "react-router-dom";
import { classNames } from "../Globals/GlobalVariables";
import React from "react";
export function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const nav = useNavigate();
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "stylesheet", href: "/styles/tailwind.css" }),
        React.createElement("main", { className: "min-h-full bg-background" },
            React.createElement("div", { className: "flex flex-row select-none text-center h-full" },
                React.createElement("div", { id: "error-left", className: "px-12 content-center" },
                    React.createElement("p", { className: "select-text text-xl font-semibold text-accent" }, error.status),
                    React.createElement("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl" }, error.statusText),
                    React.createElement("p", { className: "mt-6 text-base leading-7 text-txt_primary" }, error.error.message),
                    React.createElement("div", { className: "mt-10 flex items-center justify-center gap-x-6" },
                        React.createElement("button", { onClick: () => {
                                nav(-1);
                            }, className: classNames("bg-primary hover:cursor-pointer hover:bg-accent select-none rounded-md px-3.5 py-2.5", "text-text_color shadow-sm text-sm font-semibold", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus") }, "Back to Previous Page"))),
                React.createElement("div", { id: "error-right", className: "flex-grow" },
                    React.createElement("img", { src: "https://http.cat/" + error.status, id: "error-image", className: "h-full w-full", alt: "Error" }))))));
}
