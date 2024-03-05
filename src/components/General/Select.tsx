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
            className="bg-gradient-to-br from-white to-rose-50 border p-2 rounded focus:ring focus:ring-offset-0 focus:ring-rose-500 text-rose-500 font-semibold"
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
