import React from "react";
import FormField from "../Classes/FormField";
interface FormProps {
    title?: string;
    fields: FormField[];
    submit: string;
    output_text: string;
    default_values: Record<string, string>;
}
export default function Form({ title, default_values, output_text, fields, submit }: FormProps): React.JSX.Element;
export {};
