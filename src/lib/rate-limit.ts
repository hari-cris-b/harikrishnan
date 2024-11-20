export interface RateLimitConfig {
  interval: number;
  uniqueTokenPerInterval: number;
}

interface RateLimitInfo {
  timestamp: number;
  count: number;
}

export function rateLimit(config: RateLimitConfig) {
  const timestamps = new Map<string, RateLimitInfo>();

  return {
    check: async (limit: number, token: string) => {
      const now = Date.now();
      const info = timestamps.get(token) || { timestamp: now, count: 0 };
      
      if (now - info.timestamp > config.interval) {
        info.timestamp = now;
        info.count = 0;
      }

      if (info.count >= limit) {
        throw new Error('Rate limit exceeded');
      }

      info.count++;
      timestamps.set(token, info);

      // Cleanup old entries
      const cleanup = () => {
        const expired = now - config.interval;
        Array.from(timestamps.entries()).forEach(([key, value]) => {
          if (value.timestamp < expired) {
            timestamps.delete(key);
          }
        });
      };

      if (timestamps.size > config.uniqueTokenPerInterval) {
        cleanup();
      }
    }
  };
} 