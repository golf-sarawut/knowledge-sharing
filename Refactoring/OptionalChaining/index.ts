interface User {
  id: number;
  name: string;
  address?: {
    city: string;
    country: string;
  };
}

const user: User = {
  id: 1,
  name: "John Doe",
};

const city = user.address ? user.address.city : "Unknown";
console.log(city);
