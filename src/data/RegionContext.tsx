import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { RegionId, regions } from './clockData';

const RegionContext = createContext<{
  selectedRegionId: RegionId;
  setSelectedRegionId: (id: RegionId) => void;
} | null>(null);

export function RegionProvider({ children }: PropsWithChildren) {
  const [selectedRegionId, setSelectedRegionId] = useState<RegionId>('most-bc');
  return <RegionContext.Provider value={{ selectedRegionId, setSelectedRegionId }}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (!context) throw new Error('useRegion requires RegionProvider');
  return { ...context, selectedRegion: regions.find((region) => region.id === context.selectedRegionId) ?? regions[0] };
}
