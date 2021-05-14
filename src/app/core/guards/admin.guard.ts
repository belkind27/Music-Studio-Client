import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminDialogComponent } from '../components/admin-dialog/admin-dialog.component';
import { AdminTokenService } from '../services/admin-token.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private dialog: MatDialog, private token: AdminTokenService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const adminToken = this.token.getToken();
    if (adminToken) {
      return true;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const ref = this.dialog.open(AdminDialogComponent, dialogConfig);
    return ref.afterClosed().pipe(
      map((res) => {
        return res as boolean;
      })
    );
  }
}
