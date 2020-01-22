import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FuncCalculateService {
  constructor() {}

  public soustraction(a: number, b: number): number {
    return +a - +b;
  }
  public adition(a: number, b: number): number {
    return +a + +b;
  }
  public division(a: number, b: number): number {
    return +a / +b;
  }
  public multiplication(a: number, b: number): number {
    return +a * +b;
  }
}
