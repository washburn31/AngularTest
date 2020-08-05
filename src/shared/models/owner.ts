import { Account } from './account';
export interface Owner {
  id: string;
  name: string;
  dateOfBirth: string;
  address: string;
  accounts?: Account[];
}
