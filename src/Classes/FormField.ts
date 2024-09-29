export default class FormField{
    name: string;
    query_name: string;
    type: string;
    constructor(name: string, type: string){
        this.name = name;
        this.query_name = name.toLowerCase().replace(" ","_");
        this.type = type;
    }
}