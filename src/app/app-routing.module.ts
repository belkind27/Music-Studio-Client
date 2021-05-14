import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './core/components/app-container/app-container.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AdminMainComponent } from './modules/admin/components/admin-main/admin-main.component';

const routes: Routes = [
  {
    path: `Admin`,
    component: AdminMainComponent,
    canActivate: [AdminGuard],
  },
  { path: `**`, component: AppContainerComponent },
  { path: ``, component: AppContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
