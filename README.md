# Chore Champions

A gamified chore tracking app where completing household tasks earns points to buy weapons and battle family members.

## Tech Stack

- **Frontend:** React Native 0.83.1 (Android)
- **Backend:** Spring Boot (planned)
- **Database:** H2 (local dev) / PostgreSQL (production, planned)

## Project Status

✅ React Native skeleton running on Android emulator

## Environment Requirements

| Component | Version |
|-----------|---------|
| React Native | 0.83.1 |
| Gradle | 8.13 |
| JDK | 21 (Android Studio embedded JBR) |
| Android SDK | API 35 |
| NDK | 27.1.12297006 |

## Setup

### Prerequisites

1. **Android Studio** installed with:
   - Android SDK (API 35)
   - NDK (Side by side) via SDK Manager → SDK Tools
   - Emulator configured

2. **Environment variables** (set permanently):
   ```
   JAVA_HOME = C:\Program Files\Android\Android Studio\jbr
   ANDROID_HOME = C:\Users\<username>\AppData\Local\Android\Sdk
   ```

3. **Java 21** (use Android Studio's embedded JDK, NOT Oracle Java)

### Running the App

```bash
# Install dependencies
cd ChoreChampions
npm install

# Start Metro bundler (in one terminal)
npx react-native start

# Run on Android (in another terminal)
npx react-native run-android
```

## Roadmap

- [ ] Phase 1: Fake Users - User picker, dashboard with points
- [ ] Phase 2: Chores & Points - Add/complete chores, 8hr window, points
- [ ] Phase 3: Shop & Inventory - Weapons, durability system
- [ ] Phase 4: Battle - Challenge flow, combat resolution
- [ ] Phase 5: Polish & Drops - Special items, buffs
- [ ] Phase 6: Real Auth - Registration, login, invite codes

## Game Concept

1. **Complete chores** → Earn Effort Points and Time Points
2. **Visit the shop** → Buy weapons with points
3. **Challenge family members** → Battle using your weapons
4. **Win battles** → Bragging rights (and maybe chore exemptions?)

Weapons have durability and break over time. Rare drops keep things interesting.
