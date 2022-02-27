let fontCount = 0;
export default class Font {
  _id: number;
  _fontSize: number;
  _fontName: string;
  _fillStyle: string;

  constructor(fontSizePixels: number, fontName: string, fillStyle?: string) {
    this._id = fontCount++;
    this._fontSize = fontSizePixels;
    this._fontName = fontName;
    this._fillStyle = fillStyle;
  }

  id() {
    return this._id;
  }

  toString() {
    return `[Font ${this.id()}: ${this.fullName()}]`;
  }

  fontString() {
    return `${this._fontSize}px ${this._fontName}`;
  }

  fontBaseline() {
    return this.fontSize();
  }

  fontSize() {
    return this._fontSize;
  }

  fullName() {
    return `${this._fontName} ${this._fillStyle}`;
  }

  fillStyle() {
    return this._fillStyle;
  }

  fontName() {
    return this._fontName;
  }

  isNewline(c: string) {
    return c === "\n";
  }
}
