type Address = AddressDetail | AddressCoordinates;

type AddressDetail = [address: string, city: string, state: string, zip: string];
type AddressCoordinates = { latitude: number; longitude: number };

type User = {
  name: string;
  homeAddress: Address;
  deliveryAddress: Address;
};

// We want to ensure with TypeScript that `john` is a valid `User` object.
const john: User = {
  name: "John Doe",
  homeAddress: ["123 Main St", "Springfield", "IL", "62701"],
  deliveryAddress: { latitude: 39.781721, longitude: -89.650148 },
};

/**
 * We want to be able to infer with TypeScript that homeAddress is a string array without
 * needing to explicitly check if it is a string array or an object.
 */
john.homeAddress.join(", ");