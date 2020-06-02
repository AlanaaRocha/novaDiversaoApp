import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'blindspot',
    loadChildren: () => import('./series/blindspot/blindspot.module').then( m => m.BlindspotPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./series/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'coringa',
    loadChildren: () => import('./filmes/coringa/coringa.module').then( m => m.CoringaPageModule)
  },
  {
    path: 'backyardigans',
    loadChildren: () => import('./desenhos/backyardigans/backyardigans.module').then( m => m.BackyardigansPageModule)
  },
  {
    path: 'scooby-doo',
    loadChildren: () => import('./desenhos/scooby-doo/scooby-doo.module').then( m => m.ScoobyDooPageModule)
  },
  {
    path: 'expectant',
    loadChildren: () => import('./filmes/expectant/expectant.module').then( m => m.ExpectantPageModule)
  },
  {
    path: 'trolls2',
    loadChildren: () => import('./filmes/trolls2/trolls2.module').then( m => m.Trolls2PageModule)
  },
  {
    path: 'survive-the-night',
    loadChildren: () => import('./filmes/survive-the-night/survive-the-night.module').then( m => m.SurviveTheNightPageModule)
  },
  {
    path: 'parasita',
    loadChildren: () => import('./filmes/parasita/parasita.module').then( m => m.ParasitaPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
