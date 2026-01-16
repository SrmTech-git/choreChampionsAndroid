export interface User {
  id: string;
  name: string;
  effortPoints: number;
  timePoints: number;
}

export interface FamilyGroup {
  id: string;
  name: string;
  members: User[];
}

export type WeaponRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type WeaponType = 'sword' | 'axe' | 'staff' | 'hammer' | 'novelty';

export interface Weapon {
  id: string;
  name: string;
  damage: number;
  maxDurability: number;
  currentDurability: number;
  rarity: WeaponRarity;
  type: WeaponType;
}

export interface Chore {
  id: string;
  name: string;
  effortPoints: number;
  timePoints: number;
  drop: string | null; // weapon id or null
}

export interface Battle {
  id: string;
  challengerId: string;
  defenderId: string;
  weaponUsedId: string | null; // null if bare-handed
  winnerId: string;
  loserId: string;
  timestamp: Date;
}
