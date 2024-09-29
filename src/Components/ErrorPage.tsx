import {useNavigate, useRouteError} from "react-router-dom";
import {classNames} from "../Globals/GlobalVariables";
import React from "react";

export function ErrorPage() {

    interface ErrorType{
        status: number,
        statusText: string,
        error: ErrorEvent
    }

    const error = useRouteError() as ErrorType;
    console.error(error);

    const nav = useNavigate();
    return (
        <>
            <link rel="stylesheet" href="/styles/tailwind.css"/>
            <main className="min-h-full bg-background">
                <div className="flex flex-row select-none text-center h-full">
                    <div id={"error-left"} className={"px-12 content-center"}>
                        <p className="select-text text-xl font-semibold text-accent">{error.status}</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">{error.statusText}</h1>
                        <p className="mt-6 text-base leading-7 text-txt_primary">{error.error.message }</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={() => {
                                    nav(-1);
                                }}
                                className={classNames(
                                    "bg-primary hover:cursor-pointer hover:bg-accent select-none rounded-md px-3.5 py-2.5",
                                    "text-text_color shadow-sm text-sm font-semibold",
                                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus")}
                            >
                                Back to Previous Page
                            </button>
                        </div>
                    </div>
                    <div id={"error-right"} className={"flex-grow"}>
                        <img src={"https://http.cat/"+error.status} id={"error-image"} className={"h-full w-full"} alt={"Error"}/>
                    </div>
                </div>
            </main>
        </>
    );
}
