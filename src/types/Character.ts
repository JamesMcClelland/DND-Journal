import EntityLocation from "./EntityLocation";

export default interface Character {
    id?: number;
    name: string;
    race: string;
    age: number;
    appearance: string;
    party_member: boolean;
    friendly: boolean;
    location?: EntityLocation;
}