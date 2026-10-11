export type RegionId = 'most-bc' | 'northeastern-bc' | 'east-kootenay-golden';

export type Region = {
  id: RegionId;
  name: string;
  shortName: string;
  timeLabel: string;
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
    timeLabel: 'Mountain Time',
    zoneLabel: 'UTC-6',
    places: 'Cranbrook, Fernie, Invermere and nearby areas.',
    summary:
      'Some southeastern B.C. communities may follow Mountain Time rules. Check your municipality if you live near the boundary.',
    status: 'Check local rules',
    statusTone: 'caution',
    note: 'Golden is outside the regional district. Check local notices to confirm.',
  },
];

export const comparisons = [
  { city: 'Seattle', text: 'Seattle is 1 hour behind', value: '-1 hr' },
  { city: 'Calgary', text: 'Calgary is the same time', value: 'Same' },
  { city: 'Toronto', text: 'Toronto is 2 hours ahead', value: '+2 hr' },
  { city: 'London', text: 'London is 7 hours ahead', value: '+7 hr' },
];
