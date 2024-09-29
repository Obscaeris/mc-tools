import Footer from "../Components/Footer";
import TextBlock from "../Components/TextBlock";
import Button from "../Components/Button";
import React from "react";

export default function Root(){
    const intro_txt = "This site helps in creating commands for MC 1.21.1\n These commands allow custom interactions to be toggleable or turned on/off\n It uses scores to avoid lag.";

    return (
        <div className={"flex flex-col w-full bg-background"}>
            <div id={"content"} className={"grow items-center flex flex-col bg-background"}>
                { /* Margin */}
                <div className={"flex my-4 items-center flex-col text-center"}>
                    <TextBlock content={intro_txt}/>
                    <div className={"flex flex-row p-2 justify-evenly"}>
                        <Button text={"Bool"} href={"bool-cmd"} />
                        <Button text={"Toggle"} href={"toggle-cmd"} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}