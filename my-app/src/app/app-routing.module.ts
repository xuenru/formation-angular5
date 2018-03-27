import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
       {
         enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
       }
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
