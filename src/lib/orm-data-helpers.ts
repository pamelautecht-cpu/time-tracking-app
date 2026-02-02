/**
 * Helper functions to work around null-handling bugs in the auto-generated ORM layer.
 *
 * The ORM's CreateValue function converts null values to the string "null",
 * which breaks nullable field detection. These helpers normalize the data
 * before and after ORM operations.
 */

import type { TimeCardEntryModel } from "@/sdk/database/orm/orm_time_card_entry";

/**
 * Normalize time card entry data for insertion/update.
 * Removes optional fields entirely instead of passing null values,
 * which prevents the ORM from corrupting them to string "null".
 */
export function normalizeTimeCardEntryForSave(
  entry: Partial<TimeCardEntryModel>
): Partial<TimeCardEntryModel> {
  const normalized: Partial<TimeCardEntryModel> = {
    ...entry,
  };

  // Remove optional fields that are null or undefined
  // Instead of passing null to the ORM, we omit them entirely
  const optionalFields = [
    'clock_out_timestamp',
    'location',
    'work_description',
    'notes',
    'lunch_start_timestamp',
    'lunch_end_timestamp',
    'lunch_duration_minutes',
    'total_hours',
  ] as const;

  for (const field of optionalFields) {
    const value = normalized[field as keyof TimeCardEntryModel];
    if (value === null || value === undefined) {
      delete normalized[field as keyof TimeCardEntryModel];
    }
  }

  return normalized;
}

/**
 * Normalize time card entry data retrieved from the ORM.
 * Converts corrupted string "null" values back to actual null values.
 */
export function normalizeTimeCardEntryFromORM(
  entry: TimeCardEntryModel
): TimeCardEntryModel {
  const normalized = { ...entry };

  // Map string field names to their type for proper conversion
  const stringFields = [
    'clock_out_timestamp',
    'location',
    'work_description',
    'notes',
    'lunch_start_timestamp',
    'lunch_end_timestamp',
  ] as const;

  for (const field of stringFields) {
    const value = normalized[field as keyof TimeCardEntryModel];
    // If the field is the string "null", convert to actual null
    if (value === 'null' || value === '') {
      (normalized[field as keyof TimeCardEntryModel] as any) = null;
    }
  }

  // Handle number fields
  const numberFields = [
    'lunch_duration_minutes',
    'total_hours',
  ] as const;

  for (const field of numberFields) {
    const value = normalized[field as keyof TimeCardEntryModel];
    // If field is missing, undefined, NaN, or 0, ensure it's null for optional fields
    if (value === null || value === undefined || Number.isNaN(value)) {
      (normalized[field as keyof TimeCardEntryModel] as any) = null;
    }
  }

  return normalized;
}

/**
 * Check if a time card entry represents an active shift
 * (has been clocked in but not yet clocked out).
 *
 * This is the proper way to detect active shifts given the ORM's null-handling issues.
 */
export function isActiveShift(entry: TimeCardEntryModel): boolean {
  // An active shift must have:
  // 1. A clock_in_timestamp (required, always present)
  // 2. NO clock_out_timestamp (should be null, undefined, or truly missing)

  const clockOut = entry.clock_out_timestamp;

  // Check if clock_out is falsy or the corrupted "null" string
  if (!clockOut || clockOut === 'null' || clockOut === '') {
    return true;
  }

  return false;
}

/**
 * Check if an employee is currently on lunch break
 * (lunch was started but not yet ended).
 */
export function isOnLunchBreak(entry: TimeCardEntryModel): boolean {
  const lunchStart = entry.lunch_start_timestamp;
  const lunchEnd = entry.lunch_end_timestamp;

  // Check for the string "null" that might come from the ORM bug
  const lunchStartValid =
    typeof lunchStart === 'string' &&
    lunchStart !== 'null' &&
    lunchStart !== '' &&
    lunchStart !== null &&
    lunchStart !== undefined;
  const lunchEndValid =
    typeof lunchEnd === 'string' &&
    lunchEnd !== 'null' &&
    lunchEnd !== '' &&
    lunchEnd !== null &&
    lunchEnd !== undefined;

  return lunchStartValid && !lunchEndValid;
}

/**
 * Batch normalize multiple time card entries retrieved from ORM.
 */
export function normalizeTimeCardEntriesFromORM(
  entries: TimeCardEntryModel[]
): TimeCardEntryModel[] {
  return entries.map(entry => normalizeTimeCardEntryFromORM(entry));
}
