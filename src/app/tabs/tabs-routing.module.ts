import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
      path: 'games',
      loadChildren: () => import('../games-list/games-list.module').then(m =>
      m.GamesListPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m =>
          m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m =>
          m.AboutPageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m =>
          m.PhotosPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
