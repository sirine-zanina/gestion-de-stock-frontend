import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu";
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

    public menuProperties: Array<Menu> = [
      {
        id: '1',
        titre: 'Tableau de bord',
        icon: 'fas fa-chart-line',
        url: '',
        sousMenus: [
          {
            id: '1-1',
            titre: 'Vue d\'ensemble',
            icon: 'fas fa-chart-pie',
            url: '',
          },
          {
            id: '1-2',
            titre: 'Statistiques',
            icon: 'fas fa-chart-bar',
            url: 'statistiques',
          },
        ]
      },
      {
        id: '2',
        titre: 'Articles',
        icon: 'fas fa-boxes',
        url: '',
        sousMenus: [
          {
            id: '2-1',
            titre: 'Articles',
            icon: 'fas fa-boxes',
            url: '',
          },
          {
            id: '2-2',
            titre: 'Mouvements du stock',
            icon: 'fab fa-stack-overflow',
            url: '',
          },
        ]

        },
      {
        id: '3',
        titre: 'Clients',
        icon: 'fas fa-users',
        url: '',
        sousMenus: [
          {
            id: '3-1',
            titre: 'Clients',
            icon: 'fas fa-users',
            url: '',
          },
          {
            id: '3-2',
            titre: 'Commandes clients',
            icon: 'fas fa-shopping-basket',
            url: '',
          },
        ]

      },
      {
        id: '4',
        titre: 'Fournisseurs',
        icon: 'fas fa-users',
        url: '',
        sousMenus: [
          {
            id: '4-1',
            titre: 'Fournisseurs',
            icon: 'fas fa-users',
            url: '',
          },
          {
            id: '4-2',
            titre: 'Commandes fournisseurs',
            icon: 'fas fa-truck',
            url: '',
          },
        ]

      },
      {
        id: '5',
        titre: 'Parametrages',
        icon: 'fas fa-cogs',
        url: '',
        sousMenus: [
          {
            id: '5-1',
            titre: 'Categories',
            icon: 'fas fa-tools',
            url: '',
          },
          {
            id: '5-2',
            titre: 'Utilisateurs',
            icon: 'fas fa-users-cog',
            url: '',
          },
        ]

      }];
    constructor(private router: Router) {
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    navigate(url?: string) {
      this.router.navigate([url]);
    }

}
