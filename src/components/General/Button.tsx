import { STATUSES_ENUM } from "../../enums/statusManager";

interface ButtonInterface {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    status: STATUSES_ENUM;
}

function Button({ onClick, text, status }: ButtonInterface) {
    function getColors(status: STATUSES_ENUM) {
        switch (status) {
            case STATUSES_ENUM.Success:
                return "from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 focus:ring-green-500";
            case STATUSES_ENUM.Error:
                return "from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 focus:ring-red-500";
            case STATUSES_ENUM.Warning:
                return "from-yellow-500 to-yellow-700 hover:from-yellow-700 hover:to-yellow-900 focus:ring-yellow-500";
            case STATUSES_ENUM.Information:
            default:
                return "from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 focus:ring-blue-500";
        }
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={
                getColors(status) +
                " w-full text-white rounded py-1.5 px-5 bg-gradient-to-br focus:ring focus:ring-offset-2"
            }
        >
            <div className="hover:scale-105">{text}</div>
        </button>
    );
}

export default Button;
