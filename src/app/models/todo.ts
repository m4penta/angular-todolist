export class Todo {
  date?: Date;
  title? : string;
  id? :string;
  description?: string;
  is_complete? : boolean;
  constructor(data: Partial<Todo>) {
    Object.assign(this, data);
  }
}

