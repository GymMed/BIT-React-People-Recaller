import { PersonInterface } from "../interfaces/personInterface";

type CallbackFunction = (results: Array<PersonInterface>) => void;

function callPeopleApi(callback: CallbackFunction): void {
    fetch("https://randomuser.me/api/?results=50")
        .then((rawData) => rawData.json())
        .then((data) => {
            callback(data.results);
        })
        .catch((error) => console.error(error));
}

export { callPeopleApi };
