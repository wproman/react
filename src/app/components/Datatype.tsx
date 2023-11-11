export default interface Dot {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  Params: {
    id: String;
  };
  Posts: {
    id: String;
    title: String;
    body: String;
  };
}
