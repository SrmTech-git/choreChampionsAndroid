import { User, FamilyGroup, Weapon, Chore, Battle } from '../types';
import {
  mockUsers,
  mockFamily,
  mockWeapons,
  mockChores,
  mockBattles,
} from '../mocks';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const FAKE_LATENCY = 300;

// When we switch to real backend, change this to true and update BASE_URL
const USE_REAL_API = false;
const BASE_URL = 'http://10.0.2.2:8080/api';

// Health check
export async function healthCheck(): Promise<boolean> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return true;
  }
  const response = await fetch(`${BASE_URL}/health`);
  return response.ok;
}

// Users
export async function getUsers(): Promise<User[]> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockUsers;
  }
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
}

export async function getUser(id: string): Promise<User | null> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockUsers.find(u => u.id === id) || null;
  }
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) return null;
  return response.json();
}

// Family
export async function getFamily(): Promise<FamilyGroup> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockFamily;
  }
  const response = await fetch(`${BASE_URL}/family`);
  return response.json();
}

// Weapons
export async function getWeapons(): Promise<Weapon[]> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockWeapons;
  }
  const response = await fetch(`${BASE_URL}/weapons`);
  return response.json();
}

export async function getWeapon(id: string): Promise<Weapon | null> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockWeapons.find(w => w.id === id) || null;
  }
  const response = await fetch(`${BASE_URL}/weapons/${id}`);
  if (!response.ok) return null;
  return response.json();
}

// Chores
export async function getChores(): Promise<Chore[]> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockChores;
  }
  const response = await fetch(`${BASE_URL}/chores`);
  return response.json();
}

export async function getChore(id: string): Promise<Chore | null> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockChores.find(c => c.id === id) || null;
  }
  const response = await fetch(`${BASE_URL}/chores/${id}`);
  if (!response.ok) return null;
  return response.json();
}

// Battles
export async function getBattles(): Promise<Battle[]> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockBattles;
  }
  const response = await fetch(`${BASE_URL}/battles`);
  return response.json();
}

export async function getBattle(id: string): Promise<Battle | null> {
  if (!USE_REAL_API) {
    await delay(FAKE_LATENCY);
    return mockBattles.find(b => b.id === id) || null;
  }
  const response = await fetch(`${BASE_URL}/battles/${id}`);
  if (!response.ok) return null;
  return response.json();
}
