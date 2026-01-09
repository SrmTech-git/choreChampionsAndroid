# Claude Code Instructions

## Project Overview

Chore Champions is a gamified chore tracking app. Users complete chores to earn points, buy weapons, and battle family members.

**Developer:** Shan (full stack developer)
**Claude's Role:** Junior developer - implement features, write code, follow instructions

## Critical Rules

### DO NOT TOUCH:
- `android/gradle/wrapper/gradle-wrapper.properties` - Gradle version is pinned to 8.13 for compatibility
- `android/build.gradle` - Android Gradle Plugin settings are correct
- `android/app/build.gradle` - SDK versions are correct
- Any gradle or build configuration unless explicitly asked

### Why?
We spent hours debugging environment issues. The current configuration WORKS. Do not "fix" or "upgrade" anything in the build system.

## Tech Stack (LOCKED VERSIONS)

| Component | Version | DO NOT CHANGE |
|-----------|---------|---------------|
| React Native | 0.83.1 | ✅ |
| Gradle | 8.13 | ✅ |
| JDK | 21 | ✅ |
| Android SDK | API 35 | ✅ |
| NDK | 27.1.12297006 | ✅ |

## Project Structure

```
ChoreChampions/
├── android/                 # Android native code (DON'T TOUCH)
├── ios/                     # iOS native code (not using)
├── src/                     # Our app code goes here
│   ├── components/          # Reusable UI components
│   ├── screens/             # Screen components
│   ├── services/            # API calls, business logic
│   ├── navigation/          # React Navigation setup
│   └── utils/               # Helper functions
├── App.tsx                  # App entry point
├── package.json             # Dependencies
└── claude.md                # You are here
```

## Development Workflow

1. **Before coding:** Read this file
2. **Add dependencies:** Use `npm install <package>` only
3. **Test changes:** Run `npx react-native run-android`
4. **Commit often:** Small, focused commits

## Current Phase: 1 - Fake Users, Real Fun

### What to build:

**Backend (Spring Boot):**
- User model: id, name, effortPoints, timePoints
- FamilyGroup model: id, name, members
- Hardcoded data: "The Champions" family with Shan and Kolt (both 0 points)
- Endpoints: GET /api/users, GET /api/users/{id}, GET /api/family
- Health check: GET /api/health

**Frontend (React Native):**
- UserPickerScreen: App title, two buttons (Shan, Kolt), fetches users from backend
- DashboardScreen: Welcome message, points display, "Switch User" button
- React Navigation: native-stack navigator
- API service: functions for health check, getUsers, getUser

### Backend location:
Create backend in `/backend` folder as a Spring Boot project with Maven.

### API Configuration:
For Android emulator, use `10.0.2.2` to access localhost:
```javascript
const API_BASE_URL = 'http://10.0.2.2:8080/api';
```

## Future Phases

- **Phase 2:** Chores & Points - Add/complete chores, 8hr completion window, points accumulation
- **Phase 3:** Shop & Inventory - Weapons, durability system
- **Phase 4:** Battle - Challenge flow, combat resolution
- **Phase 5:** Polish & Drops - Special items, buffs
- **Phase 6:** Real Auth - Registration, login, invite codes

## Code Style

- **Simplicity first** - No over-engineering
- **No band-aids** - Fix root causes, not symptoms
- **Comments** - Explain WHY, not WHAT
- **Small files** - Split large components
- **Descriptive names** - `UserPickerScreen` not `Screen1`

## When Stuck

1. Re-read this file
2. Check if it's a build/environment issue (ASK before touching gradle)
3. Keep changes small and testable
4. Commit working code before experimenting

## Remember

The skeleton app WORKS. Your job is to add features to a working app, not fix build issues. If something breaks the build, revert immediately.
