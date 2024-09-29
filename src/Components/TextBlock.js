import React from "react";
export default function TextBlock({ content }) {
    const textStyle = "text-lg";
    const paragraphs = content.split("\n");
    return (React.createElement("div", null, paragraphs.map((paragraph, index) => (React.createElement("p", { key: "p-" + index, className: textStyle }, paragraph)))));
}
