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
        <div className="grid grid-cols-3 gap-5">
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
