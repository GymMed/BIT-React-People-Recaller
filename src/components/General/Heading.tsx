import { ReactNode } from "react";

interface HeadingInterface {
    children: ReactNode;
}

function Heading({ children }: HeadingInterface) {
    return (
        <div className="w-full flex items-center justify-center gap-5 p-5 rounded bg-gradient-to-br from-rose-100 to-rose-200">
            {children}
        </div>
    );
}

export default Heading;
