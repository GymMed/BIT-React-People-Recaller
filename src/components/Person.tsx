import { STATUSES_ENUM } from "../enums/statusManager";
import { NameInterface } from "../interfaces/nameInterface";
import { PersonInterface } from "../interfaces/personInterface";
import Button from "./General/Button";
import GenderSpliter from "./General/GenderSpliter";
import Spliter from "./General/Spliter";

function Person({
    person,
    onRememberPerson,
    onForgetPerson,
}: {
    person: PersonInterface;
    onRememberPerson?: (person: PersonInterface) => void;
    onForgetPerson?: (person: PersonInterface) => void;
}) {
    function getFullName(name: NameInterface): string {
        return `${name.title} ${name.first} ${name.last}`;
    }

    return (
        <div className="from-rose-100 to-rose-200 bg-gradient-to-br hover:from-rose-200 hover:to-rose-400 flex flex-col gap-3 justify-center items-center p-2 rounded-lg shadow-lg hover:shadow-2xl">
            <div>
                <img
                    className="rounded-full"
                    src={person.picture.large}
                    alt={getFullName(person.name)}
                />
            </div>
            <div className="text-lg font-semibold">
                {getFullName(person.name)}
            </div>
            <GenderSpliter fieldName="Gender:" fieldValue={person.gender} />
            <Spliter fieldName="E-Mail:" fieldValue={person.email} />
            <Spliter fieldName="Phone number:" fieldValue={person.phone} />
            <Spliter
                fieldName="Country:"
                fieldValue={person.location.country}
            />
            {onRememberPerson && (
                <Button
                    text="Remember Me"
                    onClick={() => {
                        onRememberPerson(person);
                    }}
                    status={STATUSES_ENUM.Success}
                />
            )}
            {onForgetPerson && (
                <Button
                    text="Forget"
                    onClick={() => {
                        onForgetPerson(person);
                    }}
                    status={STATUSES_ENUM.Error}
                />
            )}
        </div>
    );
}

export default Person;
