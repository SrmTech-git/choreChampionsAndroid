import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../utils/colors';
import { User } from '../types';
import { getUsers } from '../services/api';
import { useUser } from '../context/UserContext';

interface Props {
  onUserSelected: () => void;
}

export function UserPickerScreen({ onUserSelected }: Props) {
  const { setCurrentUser } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch (e) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadUsers}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CHORE</Text>
        <Text style={styles.titleAccent}>CHAMPIONS</Text>
      </View>

      <Text style={styles.subtitle}>Who's ready to battle?</Text>

      <View style={styles.buttonContainer}>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            style={styles.userButton}
            onPress={() => {
              setCurrentUser(user);
              onUserSelected();
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.userButtonText}>{user.name}</Text>
            <Text style={styles.userButtonSubtext}>Enter the arena</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 8,
  },
  titleAccent: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  userButton: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  userButtonText: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  userButtonSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: colors.textDark,
    fontWeight: '600',
  },
});
