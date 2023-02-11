export default class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
    this.id = crypto.randomUUID();
  }
}