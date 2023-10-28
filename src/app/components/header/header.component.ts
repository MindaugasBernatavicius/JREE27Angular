import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" [routerLink]="['/home']">
        <!-- <img src="assets/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> -->
        <!-- <img src={{bannerToShow}} alt="" width="30" height="24" class="d-inline-block align-text-top"> -->
        <img [src]="bannerToShow" alt="" width="30" height="24" class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['/home']">Home</a>
          </li>
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['/databinding-examples']">Data Binding Examples</a>
          </li>
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['/directives-examples']">Directives Examples</a>
          </li>
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['/lifecycle-methods-examples']">Lifecycle Methods Examples</a>
          </li>
          <li [routerLinkActive]="['active']" class="nav-item">
            <a class="nav-link" [routerLink]="['/about']">About</a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
  `,
  styles: [
    'p {color: red}',
    'p {background-color: green}',
    'li.nav-item.active > a { color: orange }'
  ]
})
export class HeaderComponent {
  bootstrapBanner = `assets/bootstrap-logo.svg`;
  defaultBanner = `favicon.ico`;

  bannerToShow: string = Math.random() > 0.5 ? this.bootstrapBanner : this.defaultBanner;
}
