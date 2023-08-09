import { DateTime } from 'luxon';

export default function formatISOdateToLocalDatetime(isoDate: string) {
  const luxonDateTime = DateTime.fromISO(isoDate);

  if (!luxonDateTime.isValid) throw new Error('Invalid ISO date');

  return luxonDateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
