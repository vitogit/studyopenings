import { Color } from '../../../protocol/color';

export interface Board {
  redraw(): void;

  setStateFromChess(chess: any): void;

  setInitialPositionImmediately(): void;

  setOrientationForColor(color: Color): void;

  flashRightMove(): void;

  flashWrongMove(): void;

  flashFinishLine(): void;

  hintSquare(square: string): void;

  hintMove(from: string, to: string | null): void;

  removeHints(): void;
}