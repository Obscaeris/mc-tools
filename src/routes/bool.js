import Footer from "../Components/Footer";
import TextBlock from "../Components/TextBlock";
import FormField from "../Classes/FormField";
import Form from "../Components/Form";
import { useSearchParams } from "react-router-dom";
import { generateBooleanCommand } from "../Globals/Utilities";
import React from "react";
export default function Bool() {
    const intro_txt = "A boolean cmd, uses a score as a flag to toggle a command on/off.\nYou can specify the score's name and the condition to toggle the command.";
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
        new FormField("Condition", "multiline")
    ];
    let output_text = "";
    if (searchParams.has("score_name") && searchParams.has("condition")) {
        const score = searchParams.get("score_name");
        const condition = searchParams.get("condition");
        output_text = generateBooleanCommand(score, condition).join("\n");
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
