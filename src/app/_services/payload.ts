export class Payload {
  entities: Array<{
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
  }>;
  count: number;
  limit: number;
  offset: number;
}
