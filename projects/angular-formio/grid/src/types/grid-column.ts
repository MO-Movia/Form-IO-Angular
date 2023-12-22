import { ComponentInstance } from '@modusoperandi/formio-angular';

export interface GridColumn {
  label?: string;
  path: string;
  renderCell?(cellValue: any, component?: ComponentInstance): string;
}
