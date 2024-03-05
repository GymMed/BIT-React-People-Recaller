import { DateOfBirthInterface } from "./dateOfBirthInterface";
import { IdInterface } from "./idInterface";
import { LocationInterface } from "./locationInterface";
import { LoginInterface } from "./loginInterface";
import { NameInterface } from "./nameInterface";
import { PictureInterface } from "./pictureInterface";

export interface PersonInterface {
    cell: string;
    dob: DateOfBirthInterface;
    email: string;
    gender: string;
    id: IdInterface;
    location: LocationInterface;
    login: LoginInterface;
    name: NameInterface;
    nat: string;
    phone: string;
    picture: PictureInterface;
    registered: { age: number; date: string };
}
