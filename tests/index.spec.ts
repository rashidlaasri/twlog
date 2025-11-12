import { twlog, TwLogger } from '../src/index';

let mockElement: HTMLElement;
let mockComputedStyle: Partial<CSSStyleDeclaration>;
let consoleLogSpy: jest.SpyInstance;

describe('twlog', () => {
  describe('factory function', () => {
    it('should return a TwLogger instance', () => {
      const logger = twlog();
      expect(logger).toBeInstanceOf(TwLogger);
    });
  });

  describe('TwLogger', () => {
    describe('text()', () => {
      it('should add text without classes', () => {
        const logger = twlog();
        logger.text('Hello world!').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[0]).toBe('%c%s');
        expect(callArgs[2]).toBe('Hello world!');
      });

      it('should add text with classes', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[0]).toBe('%c%s');
        expect(callArgs[2]).toBe('Hello');
        expect(typeof callArgs[1]).toBe('string'); // CSS string
      });

      it('should be chainable', () => {
        const logger = twlog();
        const result = logger.text('Hello');
        expect(result).toBe(logger);
      });

      it('should handle empty string', () => {
        const logger = twlog();
        logger.text('').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[2]).toBe('');
      });

      it('should handle empty classes string', () => {
        const logger = twlog();
        logger.text('Hello', '').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[2]).toBe('Hello');
      });

      it('should handle multiple text calls', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500')
            .text('World', 'text-blue-500')
            .log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[0]).toBe('%c%s %c%s');
        expect(callArgs[2]).toBe('Hello');
        expect(callArgs[4]).toBe('World');
      });
    });

    describe('line()', () => {
      it('should add text with newlines', () => {
        const logger = twlog();
        logger.line('Hello world!').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[2]).toBe('\nHello world!\n');
      });

      it('should add text with newlines and classes', () => {
        const logger = twlog();
        logger.line('Hello', 'text-red-500').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[2]).toBe('\nHello\n');
      });

      it('should handle empty string', () => {
        const logger = twlog();
        logger.line('').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[2]).toBe('\n\n');
      });
    });

    describe('log()', () => {
      it('should call console.log with formatted message', () => {
        const logger = twlog();
        logger.text('Hello').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('%c%s', expect.any(String), 'Hello');
      });

      it('should call console.log with multiple formatted messages', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500').text('World', 'text-blue-500').log();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        const callArgs = consoleLogSpy.mock.calls[0];
        expect(callArgs[0]).toBe('%c%s %c%s');
      });

      it('should create DOM element for CSS conversion', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500').log();

        expect(global.document.createElement).toHaveBeenCalledWith('div');
      });

      it('should append element to body', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500').log();

        expect(global.document.body.appendChild).toHaveBeenCalledWith(mockElement);
      });

      it('should remove element after CSS extraction', () => {
        const logger = twlog();
        logger.text('Hello', 'text-red-500').log();

        expect(mockElement.remove).toHaveBeenCalled();
      });
    });
  });
});

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  const removeMock = jest.fn();
  mockElement = {
    className: '',
    style: {
      position: '',
      visibility: '',
      pointerEvents: '',
    } as CSSStyleDeclaration,
    remove: removeMock,
  } as any;

  mockComputedStyle = {
    color: 'rgb(0, 0, 0)',
  };

  global.document = {
    createElement: jest.fn(() => mockElement),
    body: {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    } as any,
  } as any;

  global.getComputedStyle = jest.fn(() => mockComputedStyle as CSSStyleDeclaration);
});

afterEach(() => {
  if (consoleLogSpy) {
    consoleLogSpy.mockRestore();
  }
});
