import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'rgba(255, 255, 255, 0.1)',
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          background: 'var(--gradient-text)',
          backgroundSize: '200% auto',
          transformOrigin: '0%',
          transform: `scaleX(${progress})`,
          transition: 'transform 0.1s ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
