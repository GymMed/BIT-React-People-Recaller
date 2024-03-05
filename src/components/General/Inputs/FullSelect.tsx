import { SelectOptionInterface } from "../../../interfaces/selectOptionInterface";
import Label from "../Label";
import Select from "../Select";

interface FullSelectInterface {
    id: string;
    name: string;
    text: string;
    options: SelectOptionInterface[];
    onChange: (value: string) => void;
}

function FullSelect({
    id,
    name,
    text,
    options,
    onChange,
}: FullSelectInterface) {
    return (
        <div className="flex gap-3 items-center justify-center">
            <Label name={name} text={text} />
            <Select name={name} id={id} options={options} onChange={onChange} />
        </div>
    );
}

export default FullSelect;
