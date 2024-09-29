import React from "react";
export default function Form({ title, default_values, output_text, fields, submit }) {
    const field_style = "p-2 text-txt_secondary text-lg rounded text-center h-fit";
    const button_style = "p-2 text-txt_primary hover:text-primary text-lg rounded w-fit m-2";
    return (React.createElement("div", { className: "flex flex-col items-center bg-background w-full" },
        title ? React.createElement("h1", { className: "text-4xl text-txt_primary" }, title) : null,
        React.createElement("form", { className: "flex flex-col mb-2 w-full items-center" },
            fields.map((field, index) => {
                return (React.createElement("div", { className: "flex flex-col mb-2 items-center w-full", key: title + "-field-" + index },
                    React.createElement("label", { className: "text-txt_primary p-1" }, field.name),
                    field.type == "multiline" ? React.createElement("textarea", { className: field_style + " w-full", placeholder: field.name, name: field.query_name, defaultValue: default_values[field.query_name] }) :
                        (React.createElement("input", { className: field_style + " w-fit", type: field.type, placeholder: field.name, name: field.query_name, defaultValue: default_values[field.query_name] }))));
            }),
            React.createElement("input", { type: "submit", value: submit, className: button_style + " hover:shadow hover:shadow-primary" })),
        output_text != "" ? (React.createElement("div", { className: "flex flex-col w-full" },
            React.createElement("h1", { className: "text-4xl text-txt_primary p-2" }, "Output:"),
            React.createElement("textarea", { className: field_style + " flex grow", placeholder: "Command Output", readOnly: true, "aria-multiline": true, value: output_text }))) : null));
}
