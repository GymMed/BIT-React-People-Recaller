// import Proptypes from "prop-types";
import { PersonInterface } from "../interfaces/personInterface";
import { IdInterface } from "../interfaces/idInterface";
import Person from "./Person";

export default function PeopleList({
    people,
    onRememberPerson,
}: {
    people: Array<PersonInterface>;
    onRememberPerson: (person: PersonInterface) => void;
}) {
    function generateId(
        { id }: { id: IdInterface },
        index: number
    ): string | number {
        if (!id || !id.name || !id.value) {
            return index;
        }

        const fullId = id.name + id.value;

        return fullId;
    }

    return (
        <div className="w-full grid grid-cols-3 gap-5">
            {people.map((person: PersonInterface, key: number) => {
                return (
                    <Person
                        key={generateId(person, key)}
                        person={person}
                        onRememberPerson={onRememberPerson}
                    />
                );
            })}
        </div>
    );
}

// PeopleList.propTypes = {
//     people: Proptypes.array,
// };
