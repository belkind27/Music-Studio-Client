export enum Models {
  'Comments' = 1,
  'Songs',
  'Notes',
  'Recommendations',
  'SpotLights',
}
export enum Actions {
  'Create' = 1,
  'Delete',
  'Update',
}
export interface TableOperation {
  action: Actions;
  model: Models;
}
export interface FormOperation {
  data: any;
  model: Models;
  action: Actions;
}
