import { useEffect, useState } from 'react';

export function useMousePosition(active = true) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [active]);

  return position;
}

export function useElementPointer(ref: React.RefObject<HTMLElement | null>, active = true) {
  const [pointer, setPointer] = useState({ x: 0, y: 0, px: 0.5, py: 0.5 });

  useEffect(() => {
    const node = ref.current;
    if (!node || !active) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPointer({
        x,
        y,
        px: x / rect.width,
        py: y / rect.height,
      });
    };

    const onLeave = () => setPointer({ x: 0, y: 0, px: 0.5, py: 0.5 });

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
    };
  }, [ref, active]);

  return pointer;
}
