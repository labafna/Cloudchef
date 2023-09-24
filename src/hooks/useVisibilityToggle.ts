import { useState, useCallback } from 'react';

const useVisibilityToggle = (initialValue: boolean):{ isVisible: boolean; show: () => void; hide: () => void} => {
  const [isVisible, setIsVisible] = useState(initialValue ?? false)

  const show = useCallback(() => {
    setIsVisible(true)
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, show, hide }
}

export { useVisibilityToggle };