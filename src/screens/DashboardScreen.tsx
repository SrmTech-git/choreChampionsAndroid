import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import { ChoresList } from '../components/ChoresList';
import { useUser } from '../context/UserContext';

interface Props {
  onSwitchUser: () => void;
}

export function DashboardScreen({ onSwitchUser }: Props) {
  const { currentUser } = useUser();

  if (!currentUser) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.userName}>{currentUser.name}</Text>
      </View>

      <View style={styles.pointsContainer}>
        <View style={styles.pointCard}>
          <Text style={styles.pointValue}>{currentUser.effortPoints}</Text>
          <Text style={styles.pointLabel}>Effort Points</Text>
        </View>
        <View style={styles.pointCard}>
          <Text style={styles.pointValue}>{currentUser.timePoints}</Text>
          <Text style={styles.pointLabel}>Time Points</Text>
        </View>
      </View>

      <ChoresList />

      <TouchableOpacity
        style={styles.switchButton}
        onPress={onSwitchUser}
        activeOpacity={0.8}
      >
        <Text style={styles.switchButtonText}>Switch User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  header: {
    marginTop: 48,
    marginBottom: 32,
  },
  welcome: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  userName: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
  },
  pointsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  pointCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  pointValue: {
    fontSize: 42,
    fontWeight: '800',
    color: colors.text,
  },
  pointLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  switchButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.surfaceLight,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  switchButtonText: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
});
