import { SelectOptionInterface } from "../../interfaces/selectOptionInterface";

interface SelectInterface {
    name: string;
    id: string;
    options: Array<SelectOptionInterface>;
    onChange: (value: string) => void;
}

function Select({ name, id, options, onChange }: SelectInterface) {
    return (
        <select
            onChange={(event) => onChange(event.target.value)}
            name={name}
            id={id}
            className="border p-2 rounded"
        >
            {options.map((option: SelectOptionInterface, index: number) => {
                return (
                    <option key={index} value={option.value}>
                        {option.text}
                    </option>
                );
            })}
        </select>
    );
}

export default Select;
