interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

/**
 * Renders a stat value directly. This used to count up from 0 on mount,
 * which left "0+" on screen at first paint and in screenshots, so the
 * animation was removed (2026-11-14). Kept as a component so callers
 * don't change.
 */
export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
