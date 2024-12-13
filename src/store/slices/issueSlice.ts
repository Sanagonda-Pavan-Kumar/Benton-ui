import { StateCreator } from 'zustand';
import type { Issue, StoreState } from '../types';

export interface IssueSlice {
  issues: Issue[];
  addIssue: (issue: Issue) => void;
  updateIssue: (id: string, issue: Partial<Issue>) => void;
}

export const createIssueSlice: StateCreator<StoreState, [], [], IssueSlice> = (set) => ({
  issues: [],
  
  addIssue: (issue) =>
    set((state) => ({ issues: [...state.issues, issue] })),
    
  updateIssue: (id, issue) =>
    set((state) => ({
      issues: state.issues.map((i) => (i.id === id ? { ...i, ...issue } : i)),
    })),
});