import { PersonInterface } from "../interfaces/personInterface";
import Person from "./Person";

interface RememberedPeopleInterface {
    people: PersonInterface[];
    onForgetPerson: (person: PersonInterface) => void;
}

function RememberedPeople({
    people,
    onForgetPerson,
}: RememberedPeopleInterface) {
    return (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-xl::grid-cols-5 max-sm:grid-cols-1 gap-5">
            {people.map((person, index) => {
                return (
                    <Person
                        key={index}
                        person={person}
                        onForgetPerson={onForgetPerson}
                    />
                );
            })}
        </div>
    );
}

export default RememberedPeople;
