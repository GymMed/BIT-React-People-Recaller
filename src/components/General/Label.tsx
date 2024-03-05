interface LabelInterface {
    text: string;
    name: string;
}

function Label({ text, name }: LabelInterface) {
    return (
        <label className="font-semibold text-rose-400" htmlFor={name}>
            {text}
        </label>
    );
}

export default Label;
