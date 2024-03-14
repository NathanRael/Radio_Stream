import { useMemo } from "react";

export const getDateDiff = (postedPost, today) => {
    const dateDiff =
      (today.getTime() - postedPost.getTime()) / (1000 * 365 * 24 * 3600);

    let year = dateDiff,
      month = 0,
      days = 0,
      hours = 0,
      min = 0;
    if (Math.floor(year) > 0) return Math.floor(year) + " ans";
    month = useMemo(() => year * 12, [year]);
    if (Math.floor(month) > 0) return Math.floor(month) + " mois";
    days = useMemo(() => month * 30.5, [month]);
    if (Math.floor(days) > 0) return Math.floor(days) + " jours";
    hours = useMemo(() => days * 24, [days]);
    if (Math.floor(hours) > 0) return Math.floor(hours) + " heures";
    min = useMemo(() => hours * 60, [hours]);
    if (Math.floor(min) > 0) return Math.floor(min) + " minutes";
    return Math.floor(min * 60) + " sec";
  }
