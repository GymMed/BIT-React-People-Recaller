interface SpliterInterface {
    fieldName: string;
    fieldValue: string | number;
}

export default function Spliter({ fieldName, fieldValue }: SpliterInterface) {
    return (
        <div className="w-full flex justify-between items-center flex-wrap">
            <div className="">{fieldName}</div>
            <div className="font-semibold break-all">{fieldValue}</div>
        </div>
    );
}
