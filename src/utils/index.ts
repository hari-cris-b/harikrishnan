import { colors } from '@/constants/theme';

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getThemeColor = (mode: 'light' | 'dark', path: string) => {
  return path.split('.').reduce((obj: Record<string, any>, key) => obj[key], colors[mode]);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}; 