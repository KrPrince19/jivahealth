import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Eva Lopez',
    email: 'eva.lopez@email.com',
    phone: '+1 (555) 555-5555',
    role: 'Patient',
    status: 'Active',
    type: 'Normal User',
    joinedDate: '2025-07-18',
    lastActive: '2026-03-21',
    appointmentsCount: 8,
    dob: '05/15/1990',
    gender: 'Female',
    bloodGroup: 'O+',
    addresses: [
      {
        id: 1,
        type: 'Home',
        line1: 'Flat 301, Sunshine Apartments, MG Road',
        line2: 'Mumbai, Maharashtra 400001',
        country: 'India',
        isDefault: true,
      }
    ],
    orders: [
      {
        id: '1001',
        date: 'March 28, 2026',
        items: 'Paracetamol 500mg - 30 tablets',
        amount: 250.00,
        status: 'Delivered'
      },
      {
        id: '1002',
        date: 'March 25, 2026',
        items: 'Amoxicillin 250mg - 15 capsules',
        amount: 450.00,
        status: 'Pending'
      }
    ],
    payments: [
      {
        id: 'TXN-001',
        date: 'March 28, 2026',
        type: 'Consultation Fee',
        description: 'Dr. Sarah Johnson',
        amount: 150.00,
        method: 'Card',
        status: 'Completed'
      },
      {
        id: 'TXN-002',
        date: 'March 26, 2026',
        type: 'Lab Test',
        description: 'Complete Blood Count',
        amount: 80.00,
        method: 'UPI',
        status: 'Pending'
      }
    ],
    familyMembers: [
      {
        id: 1,
        name: 'John Lopez',
        relation: 'Son',
        phone: '+1 (555) 111-1112',
        dob: '03/20/2015'
      }
    ]
  },
  {
    id: 2,
    name: 'Cecilia Smith',
    email: 'cecilia.smith@email.com',
    phone: '+1 (555) 333-3333',
    role: 'Patient',
    status: 'Inactive',
    type: 'Normal User',
    joinedDate: '2024-05-22',
    lastActive: '2025-12-30',
    appointmentsCount: 5,
    dob: '08/22/1985',
    gender: 'Female',
    bloodGroup: 'A+',
    addresses: [],
    orders: [],
    payments: [],
    familyMembers: []
  },
  {
    id: 3,
    name: 'David Kim',
    email: 'david.kim@hospital.org',
    phone: '+1 (555) 444-4444',
    role: 'Nurse',
    status: 'Active',
    type: 'Support Staff',
    joinedDate: '2022-11-03',
    lastActive: '2026-03-22',
    appointmentsCount: 30,
    dob: '12/10/1980',
    gender: 'Male',
    bloodGroup: 'B+',
    addresses: [],
    orders: [],
    payments: [],
    familyMembers: []
  },
  {
    id: 4,
    name: 'Alice Williams',
    email: 'alice.williams@email.com',
    phone: '+91 98765 43210',
    role: 'Patient',
    status: 'Active',
    type: 'Prime',
    joinedDate: '2025-01-15',
    lastActive: '2026-04-02',
    appointmentsCount: 5,
    dob: '05/15/1990',
    gender: 'Female',
    bloodGroup: 'O+',
    addresses: [
      {
        id: 2,
        type: 'Home',
        line1: 'Flat 301, Sunshine Apartments, MG Road',
        line2: 'Mumbai, Maharashtra 400001',
        country: 'India',
        isDefault: true,
      }
    ],
    orders: [
      {
        id: '1',
        date: 'March 28, 2026',
        items: 'Paracetamol 500mg - 30 tablets',
        amount: 250.00,
        status: 'Delivered'
      }
    ],
    payments: [],
    familyMembers: [
      {
        id: 2,
        name: 'John Williams',
        relation: 'Son',
        phone: '+1 (555) 111-1112',
        dob: '03/20/1988'
      }
    ]
  }
];
