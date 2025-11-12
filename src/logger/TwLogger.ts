import { Message } from './types';

export class TwLogger {
  private words: Message[] = [];

  text(text: string, classes: string = ''): this {
    this.words.push({ text, classes });
    return this;
  }

  line(text: string, classes: string = ''): this {
    this.text(`\n${text}\n`, classes);
    return this;
  }

  log(): void {
    const message = this.words.map(() => '%c%s').join(' ');
    const args: string[] = [message];

    for (const w of this.words) {
      const css = this.twToCssString(w.classes || '');
      args.push(css, w.text);
    }

    console.log(...args);
    this.words = [];
  }

  private twToCssString(classes: string): string {
    const el = document.createElement('div');
    el.className = classes;
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.pointerEvents = 'none';
    document.body.appendChild(el);

    const styles = getComputedStyle(el) as CSSStyleDeclaration;
    // prettier-ignore
    const props: string[] = [
      'color', 'backgroundColor', 'font', 'fontFamily', 'fontSize',
      'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'textDecoration',
      'textTransform', 'textShadow', 'whiteSpace', 'wordSpacing', 'padding',
      'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'margin',
      'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'border', 'borderWidth',
      'borderStyle', 'borderColor', 'borderRadius', 'outline', 'outlineColor', 'outlineWidth',
      'outlineStyle', 'boxShadow', 'opacity', 'background', 'direction', 'verticalAlign',
    ];

    const cssString = props
      .map((prop) => {
        const value = styles[prop as keyof CSSStyleDeclaration] ?? '';
        const cssProp = prop.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
        return `${cssProp}: ${value};`;
      })
      .join(' ');

    el.remove();

    return cssString;
  }
}
