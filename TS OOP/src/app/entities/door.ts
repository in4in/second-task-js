export type DoorStyle = 'neo' | 'classic' | 'modern';

interface Props {
  size: number;
  style: DoorStyle;
}

export class Door {
  private size: number = 0;
  private style: DoorStyle = 'neo';
  private isOpen: boolean = false;

  constructor({ size, style }: Props) {
    this.size = size;
    this.style = style;
  }

  public openDoor(): void {
    // код, который открывает дверь
  }

  public closeDoor(): void {
    // код, который закрывает дверь
  }
}
