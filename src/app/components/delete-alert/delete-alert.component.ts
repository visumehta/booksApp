import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { CommonService } from "src/app/services/common.service";
import { BookFacade } from "src/app/store/book.facade";

@Component({
  selector: "app-delete-alert",
  templateUrl: "./delete-alert.component.html",
  styleUrls: ["./delete-alert.component.scss"],
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule, MatDialogModule],
})
export class DeleteAlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookFacade: BookFacade,
    private _commonService: CommonService
  ) {}
  deleteBookAlert() {
    if (this.data) {
      this.bookFacade.deleteBook(this.data);
      this._commonService.closeModal();
      this.bookFacade.getAllBooks();
    }
  }
}
