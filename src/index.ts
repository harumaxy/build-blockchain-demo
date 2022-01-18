import * as crypto from "crypto"; // Node built-in lib

class Transaction {
  constructor(
    public amount: number,
    public payer: string,
    public payee: string
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}

class Block {}

class Chain {}

class Wallet {}
