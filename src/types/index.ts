export interface Address {
  id: number;
  type: 'Home' | 'Work';
  line1: string;
  line2: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: string;
  amount: number;
  status: 'Delivered' | 'Pending' | 'Cancelled';
}

export interface Payment {
  id: string;
  date: string;
  type: string;
  description: string;
  amount: number;
  method: 'Card' | 'UPI' | 'Cash';
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  phone: string;
  dob: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'Patient' | 'Nurse';
  status: 'Active' | 'Inactive';
  type: 'Normal User' | 'Prime' | 'Support Staff';
  joinedDate: string;
  lastActive: string;
  appointmentsCount: number;
  dob: string;
  gender: string;
  bloodGroup: string;
  addresses: Address[];
  orders: Order[];
  payments: Payment[];
  familyMembers: FamilyMember[];
}
