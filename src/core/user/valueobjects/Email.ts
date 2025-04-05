export class Email {
    private readonly value: string;
  
    constructor(email: string) {
      if (!email.includes('@')) {
        throw new Error('Invalid email address');
      }
  
      this.value = email;
    }
  
    getValue(): string {
      return this.value;
    }
  }
      