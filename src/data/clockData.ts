export type RegionId = 'most-bc' | 'northeastern-bc' | 'east-kootenay-golden';

export type Region = {
  id: RegionId;
  name: string;
  shortName: string;
  timeLabel: string;
  answer: string;
  headline: string;
  utcOffset: number;
  zoneLabel: string;
  places: string;
  summary: string;
  status: string;
  statusTone: 'good' | 'caution';
  note?: string;
};

export const regions: Region[] = [
  {
    id: 'most-bc',
    name: 'Most of B.C.',
    shortName: 'Most of B.C.',
    timeLabel: 'Pacific Time',
    answer: 'No.',
    headline: 'Most of B.C. does not change clocks.',
    utcOffset: -7,
    zoneLabel: 'UTC-7',
    places: 'Vancouver, Victoria, Kelowna, Prince George and most other communities.',
    summary:
      'Clocks moved ahead in March 2026 for the last time and now stay on Pacific Time all year.',
    status: 'Nov. 1: no clock change',
    statusTone: 'good',
  },
  {
    id: 'northeastern-bc',
    name: 'Northeastern B.C.',
    shortName: 'Northeastern B.C.',
    timeLabel: 'Mountain Standard Time',
    answer: 'No.',
    headline: 'Northeastern B.C. keeps its existing time.',
    utcOffset: -7,
    zoneLabel: 'UTC-7',
    places: 'Dawson Creek, Fort St. John, Fort Nelson and nearby areas.',
    summary:
      'This region already stayed on Mountain Standard Time all year, so nothing is new here. You now share the same clock time as most of B.C. year-round.',
    status: 'Nov. 1: no clock change',
    statusTone: 'good',
  },
  {
    id: 'east-kootenay-golden',
    name: 'East Kootenay / Golden area',
    shortName: 'East Kootenay / Golden area',
    timeLabel: 'Mountain Daylight Time',
    answer: 'No.',
    headline: 'East Kootenay and Golden stay on UTC-6.',
    utcOffset: -6,
    zoneLabel: 'UTC-6',
    places: 'Cranbrook, Fernie, Invermere, Golden and CSRD Area A.',
    summary:
      'East Kootenay and Golden have chosen permanent Mountain Daylight Time (UTC-6). There is no clock change on Nov. 1, 2026; this region stays one hour ahead of most of B.C.',
    status: 'Nov. 1: no clock change',
    statusTone: 'good',
  },
];

// Official 2026 rules, independent of older device time-zone databases:
// https://news.gov.bc.ca/releases/2026AG0013-000209
// https://engage.rdek.bc.ca/timechange
// https://www.golden.ca/town-hall/news-notices/council-reconsiders-supports-permanent-mountain-daylight-time-utc-6-golden
export const comparisonDate = new Date('2026-11-01T20:00:00Z');

function offsetHours(timeZone: string, date: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, timeZoneName: 'longOffset',
  }).formatToParts(date);
  const offset = parts.find((part) => part.type === 'timeZoneName')?.value ?? '';
  if (offset === 'GMT') return 0;
  const match = /^GMT([+-])(\d{2}):(\d{2})$/.exec(offset);
  if (!match) throw new Error(`Unsupported time-zone offset: ${offset}`);
  return (match[1] === '-' ? -1 : 1) * (Number(match[2]) + Number(match[3]) / 60);
}

export function getComparisons(region: Region, date = comparisonDate) {
  return [
    { city: 'Seattle', offset: offsetHours('America/Los_Angeles', date) },
    // Alberta adopted permanent UTC-6 in 2026 (RDEK source above).
    { city: 'Calgary', offset: -6 },
    { city: 'Toronto', offset: offsetHours('America/Toronto', date) },
    { city: 'London', offset: offsetHours('Europe/London', date) },
  ].map(({ city, offset }) => {
    const difference = offset - region.utcOffset;
    const hours = Math.abs(difference);
    return {
      city,
      text: difference === 0 ? `${city} is the same time` : `${city} is ${hours} ${hours === 1 ? 'hour' : 'hours'} ${difference > 0 ? 'ahead' : 'behind'}`,
      value: difference === 0 ? 'Same' : `${difference > 0 ? '+' : '-'}${hours} hr`,
    };
  });
}
