import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Auto-close navbar whenever a route finishes loading
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  toggleMenu(): void {
    const collapseEl = document.getElementById('mainNavbar');
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;

    if (collapseEl?.classList.contains('show')) {
      this.closeMenu();
    } else {
      collapseEl?.classList.add('show');
      toggler?.classList.remove('collapsed');
      toggler?.setAttribute('aria-expanded', 'true');
    }
  }

  closeMenu(): void {
    const collapseEl = document.getElementById('mainNavbar');
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null;

    if (collapseEl?.classList.contains('show')) {
      collapseEl.classList.remove('show');
    }
    toggler?.classList.add('collapsed');
    toggler?.setAttribute('aria-expanded', 'false');
  }
}
