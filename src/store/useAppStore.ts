import { create } from 'zustand';
import type { User, FamilyMember } from '../types';
import { mockUsers } from '../data/mockData';

interface AppState {
  users: User[];
  
  // Actions
  addUser: (user: User) => void;
  updateUserStatus: (userId: number, status: 'Active' | 'Inactive') => void;
  upgradeToPrime: (userId: number) => void;
  addFamilyMember: (userId: number, member: FamilyMember) => void;
  removeFamilyMember: (userId: number, memberId: number) => void;
  updateFamilyMember: (userId: number, memberId: number, member: Partial<FamilyMember>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  users: [...mockUsers],
  
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  
  updateUserStatus: (userId, status) => set((state) => ({
    users: state.users.map((u) => u.id === userId ? { ...u, status } : u)
  })),
  
  upgradeToPrime: (userId) => set((state) => ({
    users: state.users.map((u) => u.id === userId ? { ...u, type: 'Prime' } : u)
  })),
  
  addFamilyMember: (userId, member) => set((state) => ({
    users: state.users.map((u) => {
      if (u.id === userId) {
        return {
          ...u,
          familyMembers: [...u.familyMembers, member]
        };
      }
      return u;
    })
  })),
  
  removeFamilyMember: (userId, memberId) => set((state) => ({
    users: state.users.map((u) => {
      if (u.id === userId) {
        return {
          ...u,
          familyMembers: u.familyMembers.filter(m => m.id !== memberId)
        };
      }
      return u;
    })
  })),

  updateFamilyMember: (userId, memberId, memberUpdates) => set((state) => ({
    users: state.users.map((u) => {
      if (u.id === userId) {
        return {
          ...u,
          familyMembers: u.familyMembers.map(m => m.id === memberId ? { ...m, ...memberUpdates } : m)
        };
      }
      return u;
    })
  }))
}));
