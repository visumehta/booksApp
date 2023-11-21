import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BOOKS } from "../interface/books";
import { AddBookComponent } from "../components/add-book/add-book.component";
import { DeleteAlertComponent } from "../components/delete-alert/delete-alert.component";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  modalRef!: MatDialogRef<AddBookComponent>;
  deleteAlert!: MatDialogRef<DeleteAlertComponent>;
  constructor(private dialog: MatDialog) {}

  openAddEditModal(component: any, data?: BOOKS): void {
    this.modalRef = this.dialog.open(component, { width: "500px", data: data });
    console.log(this.modalRef);
  }

  closeModal(data?: BOOKS) {
    if (this.modalRef) {
      this.modalRef.close(data);
    }
  }

  deleteDialog(id: number) {
    this.deleteAlert = this.dialog.open(DeleteAlertComponent, {
      width: "250px",
      data: id,
    });
  }

  closeDeleteAlert(id: number) {
    this.deleteAlert.close(id);
  }
}
