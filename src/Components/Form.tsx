import React from "react";
import FormField from "../Classes/FormField";

interface FormProps {
    title?: string;
    fields: FormField[];
    submit: string;
    output_text:string;
    default_values: Record<string, string>;
}

export default function Form({title, default_values, output_text, fields, submit}: FormProps){

    const field_style = "p-2 text-txt_secondary text-lg rounded text-center h-fit";
    const button_style = "p-2 text-txt_primary hover:text-primary text-lg rounded w-fit m-2";

    return (
        <div className={"flex flex-col items-center bg-background w-full"}>
            {title ? <h1 className={"text-4xl text-txt_primary"}>{title}</h1> : null}
            <form className={"flex flex-col mb-2 w-full items-center"} >
                {fields.map((field, index) => {
                    return (
                        <div className={"flex flex-col mb-2 items-center w-full"} key={title + "-field-" + index}>
                            <label className={"text-txt_primary p-1"}>{field.name}</label>
                                {field.type == "multiline" ? <textarea className={field_style + " w-full"} placeholder={field.name} name={field.query_name}
                                                                       defaultValue={default_values[field.query_name]}/> :
                                    (<input className={field_style + " w-fit"} type={field.type} placeholder={field.name}
                                            name={field.query_name}
                                            defaultValue={default_values[field.query_name]}/>)
                                }
                        </div>
                    );
                })}
                <input type={"submit"} value={submit} className={button_style + " hover:shadow hover:shadow-primary"}/>
            </form>
            {output_text != "" ? (
                <div className={"flex flex-col w-full"}>
                    <h1 className={"text-4xl text-txt_primary p-2"}>Output:</h1>
                    <textarea className={field_style + " flex grow"} placeholder={"Command Output"}
                              readOnly={true} aria-multiline={true} value={output_text}/>
                </div>
            ): null}

        </div>
    );
}