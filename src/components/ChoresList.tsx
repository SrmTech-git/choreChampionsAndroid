import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../utils/colors';
import { Chore } from '../types';
import { getChores } from '../services/api';
import { useUser } from '../context/UserContext';
import { ConfirmChoreModal } from './ConfirmChoreModal';

export function ChoresList() {
  const [chores, setChores] = useState<Chore[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChore, setSelectedChore] = useState<Chore | null>(null);
  const { addPoints } = useUser();

  useEffect(() => {
    loadChores();
  }, []);

  async function loadChores() {
    try {
      setLoading(true);
      const data = await getChores();
      setChores(data);
    } finally {
      setLoading(false);
    }
  }

  function handleChorePress(chore: Chore) {
    setSelectedChore(chore);
  }

  function handleConfirm() {
    if (selectedChore) {
      addPoints(selectedChore.effortPoints, selectedChore.timePoints);
      setSelectedChore(null);
    }
  }

  function handleCancel() {
    setSelectedChore(null);
  }

  function renderChore({ item }: { item: Chore }) {
    return (
      <TouchableOpacity
        style={styles.choreCard}
        activeOpacity={0.8}
        onPress={() => handleChorePress(item)}
      >
        <View style={styles.choreInfo}>
          <Text style={styles.choreName}>{item.name}</Text>
          {item.drop && (
            <View style={styles.dropBadge}>
              <Text style={styles.dropBadgeText}>Drop!</Text>
            </View>
          )}
        </View>
        <View style={styles.pointsRow}>
          <View style={styles.pointBadge}>
            <Text style={styles.pointIcon}>💪</Text>
            <Text style={styles.pointText}>{item.effortPoints}</Text>
          </View>
          <View style={styles.pointBadge}>
            <Text style={styles.pointIcon}>⏱️</Text>
            <Text style={styles.pointText}>{item.timePoints}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Available Chores</Text>
      <FlatList
        data={chores}
        renderItem={renderChore}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <ConfirmChoreModal
        visible={selectedChore !== null}
        chore={selectedChore}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  listContent: {
    gap: 12,
    paddingBottom: 16,
  },
  choreCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  choreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  choreName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  dropBadge: {
    backgroundColor: colors.rarityLegendary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  dropBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textDark,
  },
  pointsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  pointBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  pointIcon: {
    fontSize: 14,
  },
  pointText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});
