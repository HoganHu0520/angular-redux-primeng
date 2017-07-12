export class Column {
  label?: string;
  value?: string;
  filterMode: string = 'contains';
  frozen: boolean = false;
  show: boolean = true;
  width: string = 'auto';

  constructor(obj: any) {
    this.label = obj.label || null;
    this.value = obj.value || null;
    this.filterMode = obj.filterMode || 'contains';
    this.frozen = obj.frozen || false;
    this.show = obj.show || true;
    this.width = obj.width || 'auto';
  }
}
