import { useEffect, useMemo, useState } from "react";
import { GendersEnum, gendersEnumAsString } from "../../enums/gendersEnum";
import { SortingEnum, sortingEnumAsString } from "../../enums/sortingEnum";
import { PersonInterface } from "../../interfaces/personInterface";
import { SelectOptionInterface } from "../../interfaces/selectOptionInterface";
import Select from "../General/Select";
import FullSelect from "../General/Inputs/FullSelect";

interface FilterInterface {
    people: Array<PersonInterface>;
    setPeople: React.Dispatch<React.SetStateAction<Array<PersonInterface>>>;
}

export default function Filter({ people, setPeople }: FilterInterface) {
    const [selectedGender, setSelectedGender] = useState<number>(0);
    const [selectedNameSorter, setSelectedNameSorter] = useState<number>(0);
    const [selectedCountry, setSelectedCountry] = useState<number>(0);

    useEffect(() => {
        setPeople(filteredResult);
    }, [selectedCountry, selectedGender, selectedNameSorter]);

    const allCountry = "All";

    const foundCountries = useMemo(() => getFoundCountries(people), [people]);

    const genders: SelectOptionInterface[] = getGendersObjects();
    const sorters: SelectOptionInterface[] = getSortersObjects();
    const availableCountries: SelectOptionInterface[] =
        getCountriesObjects(foundCountries);

    const filteredResult = useMemo(() => {
        return sortByName(
            filterByCountry(
                filterByGender(people, selectedGender),
                getCountryByValueFromCountries(
                    availableCountries,
                    selectedCountry
                )
            ),
            selectedNameSorter
        );
    }, [
        people,
        selectedGender,
        selectedNameSorter,
        selectedCountry,
        availableCountries,
    ]);

    function getCountryByValueFromCountries(
        countries: SelectOptionInterface[],
        index: number
    ): string {
        const foundCountry = countries.find(
            (country) => country.value === index.toString()
        );
        return foundCountry ? foundCountry.text : allCountry;
    }

    function getCountriesObjects(countries: string[]): SelectOptionInterface[] {
        const objects: SelectOptionInterface[] = [];

        for (const countryIndex in countries) {
            objects.push({
                value: countryIndex,
                text: countries[countryIndex],
            } as SelectOptionInterface);
        }
        return objects;
    }

    function getFoundCountries(people: PersonInterface[]): string[] {
        const countriesSet: Set<string> = new Set();
        countriesSet.add(allCountry);

        for (const person of people) {
            countriesSet.add(person.location.country);
        }

        return Array.from(countriesSet).sort();
    }

    function getGendersObjects(): SelectOptionInterface[] {
        const objects: SelectOptionInterface[] = [];

        for (const key of Object.keys(GendersEnum).filter((value) => {
            return !isNaN(Number(value));
        })) {
            objects.push({
                value: Number(key).toString(),
                text: gendersEnumAsString[parseInt(key)],
            } as SelectOptionInterface);
        }

        return objects;
    }

    function getSortersObjects(): SelectOptionInterface[] {
        const objects: SelectOptionInterface[] = [];

        for (const key of Object.keys(SortingEnum).filter((value) => {
            return !isNaN(Number(value));
        })) {
            objects.push({
                value: Number(key).toString(),
                text: sortingEnumAsString[parseInt(key)],
            } as SelectOptionInterface);
        }

        return objects;
    }

    function filterByGender(
        people: Array<PersonInterface>,
        gender: GendersEnum
    ): PersonInterface[] {
        return people.filter((person) => {
            if (gender === GendersEnum.Any) {
                return true;
            }
            return person.gender === gendersEnumAsString[gender].toLowerCase();
        });
    }

    function filterByCountry(
        people: PersonInterface[],
        country: string
    ): PersonInterface[] {
        if (country === allCountry) {
            return people;
        }
        return people.filter((person) => {
            if (person.location.country === country) {
                return true;
            }
        });
    }

    function sortByName(
        people: PersonInterface[],
        sortByNameValue: number
    ): PersonInterface[] {
        return people.sort(
            (
                personObject1: PersonInterface,
                personObject2: PersonInterface
            ) => {
                const comparisonValue = personObject1.name.first.localeCompare(
                    personObject2.name.first
                );

                switch (sortByNameValue) {
                    case SortingEnum.ASC:
                        return comparisonValue;
                    case SortingEnum.DESC:
                        return comparisonValue * -1;
                    default:
                        return 0;
                }
            }
        );
    }

    function handlerSelectOnChangeGender(value: string): void {
        const intValue = parseInt(value);
        setSelectedGender(intValue);
    }

    function handlerSelectOnChangeSortByName(value: string): void {
        const intValue = parseInt(value);
        setSelectedNameSorter(intValue);
    }

    function handlerSelectOnChangeCountry(value: string): void {
        const intValue = parseInt(value);
        setSelectedCountry(intValue);
    }

    return (
        <div className="w-full flex items-center justify-center gap-5 max-md:flex-row max-sm:flex-col">
            <FullSelect
                text="Filter by gender :"
                id="genderFilter"
                name="genderFilter"
                options={genders}
                onChange={handlerSelectOnChangeGender}
            />

            <FullSelect
                text="Order names by:"
                id="nameSorter"
                name="nameSorter"
                options={sorters}
                onChange={handlerSelectOnChangeSortByName}
            />
            <FullSelect
                text="Filter by country:"
                id="countryFilter"
                name="countryFilter"
                options={availableCountries}
                onChange={handlerSelectOnChangeCountry}
            />
        </div>
    );
}
