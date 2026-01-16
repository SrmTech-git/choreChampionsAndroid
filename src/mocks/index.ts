import { User, FamilyGroup, Weapon, Chore, Battle } from '../types';

// Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Shan',
    effortPoints: 0,
    timePoints: 0,
  },
  {
    id: 'user-2',
    name: 'Kolt',
    effortPoints: 0,
    timePoints: 0,
  },
];

// Family Group
export const mockFamily: FamilyGroup = {
  id: 'family-1',
  name: 'The Champions',
  members: mockUsers,
};

// Weapons
export const mockWeapons: Weapon[] = [
  {
    id: 'weapon-1',
    name: 'Giant Foam Finger',
    damage: 5,
    maxDurability: 2,
    currentDurability: 2,
    rarity: 'common',
    type: 'novelty',
  },
  {
    id: 'weapon-2',
    name: 'Rusty Spatula',
    damage: 8,
    maxDurability: 5,
    currentDurability: 5,
    rarity: 'common',
    type: 'sword',
  },
  {
    id: 'weapon-3',
    name: 'Broom of Destiny',
    damage: 15,
    maxDurability: 4,
    currentDurability: 4,
    rarity: 'uncommon',
    type: 'staff',
  },
  {
    id: 'weapon-4',
    name: 'Vacuum of Vengeance',
    damage: 25,
    maxDurability: 3,
    currentDurability: 3,
    rarity: 'rare',
    type: 'hammer',
  },
  {
    id: 'weapon-5',
    name: 'Legendary Dish Sponge',
    damage: 50,
    maxDurability: 1,
    currentDurability: 1,
    rarity: 'legendary',
    type: 'novelty',
  },
];

// Chores
// effortPoints = how hard/strenuous the task is
// timePoints = how long the task takes
export const mockChores: Chore[] = [
  {
    id: 'chore-1',
    name: 'Take out the trash',
    effortPoints: 5,
    timePoints: 5,
    drop: null,
  },
  {
    id: 'chore-2',
    name: 'Do the laundry',
    effortPoints: 10,
    timePoints: 45,
    drop: null,
  },
  {
    id: 'chore-3',
    name: 'Weed the garden',
    effortPoints: 40,
    timePoints: 20,
    drop: 'weapon-3', // might drop the Broom of Destiny
  },
  {
    id: 'chore-4',
    name: 'Do the dishes',
    effortPoints: 15,
    timePoints: 15,
    drop: 'weapon-2', // might drop the Rusty Spatula
  },
  {
    id: 'chore-5',
    name: 'Clean the bathroom',
    effortPoints: 35,
    timePoints: 25,
    drop: null,
  },
];

// Battles (one sample)
export const mockBattles: Battle[] = [
  {
    id: 'battle-1',
    challengerId: 'user-1',
    defenderId: 'user-2',
    weaponUsedId: 'weapon-1',
    winnerId: 'user-1',
    loserId: 'user-2',
    timestamp: new Date('2025-01-15T10:30:00'),
  },
];
