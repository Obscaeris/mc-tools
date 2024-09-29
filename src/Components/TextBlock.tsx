import React from "react";

interface Props {
    content: string;
}

export default function TextBlock({content}: Props) {
    const textStyle = "text-lg";
    const paragraphs = content.split("\n");

    return (
        <div>
            {paragraphs.map((paragraph, index) => (
                <p key={"p-"+index} className={textStyle}>{paragraph}</p>
            ))}
        </div>
    );
}
