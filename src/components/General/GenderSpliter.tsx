interface GenderSpliterInterface {
    fieldName: string;
    fieldValue: string | number;
}

export default function GenderSpliter({
    fieldName,
    fieldValue,
}: GenderSpliterInterface) {
    return (
        <div className="w-full flex justify-between items-center flex-wrap">
            <div className="">{fieldName}</div>
            <div
                className={
                    (fieldValue === "male" ? "text-blue-500" : "text-red-500") +
                    " font-bold break-all"
                }
            >
                {fieldValue}
            </div>
        </div>
    );
}
