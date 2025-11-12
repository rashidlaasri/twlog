import { TwLogger } from './TwLogger';

export { TwLogger };

export function twlog(): TwLogger {
  return new TwLogger();
}
