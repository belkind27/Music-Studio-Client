import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminLoginService } from '../../services/admin-login.service';
import { AdminTokenService } from '../../services/admin-token.service';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css'],
  providers: [AdminLoginService],
})
export class AdminDialogComponent implements OnInit {
  constructor(
    private service: AdminLoginService,
    private dialogRef: MatDialogRef<AdminDialogComponent>,
    private token: AdminTokenService
  ) {}
  login(name: string, password: string, e: MouseEvent): void {
    e.preventDefault();
    this.service.login(name, password).subscribe((res) => {
      if (res.token) {
        this.token.setToken(res.token);
        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    });
  }
  ngOnInit(): void {}
}
