import React from "react";
import Footer from "../Components/Footer";
import TextBlock from "../Components/TextBlock";
import FormField from "../Classes/FormField";
import Form from "../Components/Form";
import { useSearchParams } from "react-router-dom";
import { generateToggleableCommand } from "../Globals/Utilities";
export default function Toggle() {
    const intro_txt = "A toggleable cmd, uses a score as a flag to enable a command, which can then be turned on/off base on another condition.\nYou can specify the score's name and the condition to toggle the command.";
    const [searchParams] = useSearchParams();
    function createDefaultValues(fields) {
        let default_values = {};
        fields.forEach((field) => {
            default_values[field.query_name] = searchParams.get(field.query_name) ?? "";
        });
        return default_values;
    }
    const fields = [
        new FormField("Score Name", "text"),
        new FormField("Activation Condition", "multiline"),
        new FormField("Condition", "multiline")
    ];
    let output_text = "";
    if (searchParams.has("score_name") && searchParams.has("condition")) {
        const score = searchParams.get("score_name");
        const activationCondition = searchParams.get("activation_condition");
        const condition = searchParams.get("condition");
        output_text = generateToggleableCommand(score, activationCondition, condition).join("\n");
    }
    else {
        console.log("No search params");
    }
    return (React.createElement("div", { className: "flex flex-col w-full bg-background" },
        React.createElement("div", { id: "content", className: "grow items-center flex flex-col bg-background" },
            React.createElement("div", { className: "flex my-4 items-center flex-col text-center" },
                React.createElement(TextBlock, { content: intro_txt }),
                React.createElement(Form, { fields: fields, output_text: output_text, default_values: createDefaultValues(fields), submit: "Generate Command" }))),
        React.createElement(Footer, null)));
}
