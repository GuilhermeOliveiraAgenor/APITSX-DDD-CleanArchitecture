export class User {
  public id: number
  public name: string
  public email: string

  constructor(props: { id: number; name: string; email: string }) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
  }
}
