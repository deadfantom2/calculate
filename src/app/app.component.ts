import { Component } from "@angular/core";
import { FuncCalculateService } from "./func-calculate.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  sum: number;
  result = "30+2-10";

  constructor(private calService: FuncCalculateService) {}

  private calculate(first: number, second: number, operation: string): void {
    if (operation === "-") {
      this.sum = this.calService.soustraction(first, second);
    }
    if (operation === "+") {
      this.sum = this.calService.adition(first, second);
    }
    if (operation === "/") {
      this.sum = this.calService.division(first, second);
    }
    if (operation === "*") {
      this.sum = this.calService.multiplication(first, second);
    }
  }
}
