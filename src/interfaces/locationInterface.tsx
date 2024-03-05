export interface LocationInterface {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: string;
    state: string;
    street: { number: number; name: string };
    timezone: { offset: string; description: string };
}
