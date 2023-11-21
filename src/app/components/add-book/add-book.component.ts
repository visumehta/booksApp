import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { BookFacade } from "src/app/store/book.facade";
import { MatInputModule } from "@angular/material/input";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"],
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  preserveWhitespaces: true,
})
export class AddBookComponent {
  titleTag: string = "Add";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private bookFacade: BookFacade, private _commonService: CommonService) {
    this.titleTag = this.data ? "Update" : "Add";
  }

  myForm = new FormGroup({
    title: new FormControl(this.data?.title, Validators.required),
    author: new FormControl(this.data?.author, Validators.required),
  });

  addUpdateBook(val: any) {
    if (!this.data) {
      this.bookFacade.addBook(val);
      this._commonService.closeModal();
    } else {
      this.bookFacade.updateBook(this.data.id, val);
      this._commonService.closeModal();
    }
  }

  resetForm() {
    this.myForm.reset();
  }
}
