interface Person {
  name: string;
  address?: {
    city: string;
    country?: {
      name: string;
      code?: string;
    };
  };
}

declare const person: Person;

const code =
  person.address && person.address.country && person.address.country.code;
