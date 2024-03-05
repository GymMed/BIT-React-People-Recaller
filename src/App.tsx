import { useEffect, useRef, useState } from "react";
import PeopleList from "./components/PeopleList";
import { callPeopleApi } from "./utils/API";
import { PersonInterface } from "./interfaces/personInterface";
import Filter from "./components/Filters/Filter";
import RememberedPeople from "./components/RememberedPeople";
import Heading from "./components/General/Heading";
import { IdInterface } from "./interfaces/idInterface";

function App() {
    const [peopleList, setPeopleList] = useState<Array<PersonInterface>>([]);
    const [filteredPeople, setFilteredPeople] = useState<
        Array<PersonInterface>
    >([]);
    const [rememberedPeople, setRememberedPeople] = useState<
        Array<PersonInterface>
    >([]);

    const isMountedRef = useRef(false);

    useEffect(() => {
        if (isMountedRef.current) {
            localStorage.setItem(
                "rememberedPeople",
                JSON.stringify(rememberedPeople)
            );
        }
    }, [rememberedPeople]);

    useEffect(() => {
        isMountedRef.current = true;
        callPeopleApi(called);
        setRememberedPeople(
            JSON.parse(localStorage.getItem("rememberedPeople") || "[]")
        );
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    useEffect(() => {
        setFilteredPeople(peopleList);
    }, [peopleList]);

    function called(people: Array<PersonInterface>): void {
        setPeopleList(people);
    }

    function getFullID(id: IdInterface): string {
        return id.name + id.value;
    }

    function onRememberPerson(person: PersonInterface): void {
        setRememberedPeople((previousPeople) => [person, ...previousPeople]);
    }

    function onForgetPerson(person: PersonInterface): void {
        setRememberedPeople((previousPeople) => {
            const newPeople = previousPeople.filter((currentPerson) => {
                if (getFullID(person.id) !== getFullID(currentPerson.id)) {
                    return true;
                }
                return false;
            });

            if (newPeople.length < previousPeople.length - 1) {
                console.error(
                    `Found duplicate person's id! id: ${getFullID(
                        person.id
                    )} \nTotal duplicates found and removed: ${
                        previousPeople.length - newPeople.length
                    }`
                );
            }

            return newPeople;
        });
    }

    return (
        <div className="p-5 bg-rose-50 flex items-center justify-center ">
            <div className="container flex items-center justify-center gap-5 flex-col">
                {rememberedPeople && rememberedPeople.length > 0 && (
                    <div className="w-full flex flex-col gap-5">
                        <Heading>
                            <div className="text-rose-500 font-bold text-xl">
                                Remembered People
                            </div>
                        </Heading>
                        <RememberedPeople
                            people={rememberedPeople}
                            onForgetPerson={onForgetPerson}
                        />
                    </div>
                )}
                <Heading>
                    <Filter people={peopleList} setPeople={setFilteredPeople} />
                </Heading>
                <PeopleList
                    people={filteredPeople}
                    onRememberPerson={onRememberPerson}
                />
            </div>
        </div>
    );
}

export default App;
