import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="brand">
        <div>
          <strong>Projeto Angular</strong>
        </div>
      </div>

      <button
        type="button"
        class="menu-button"
        (click)="toggleMenu()"
        [attr.aria-expanded]="menuOpen()"
        aria-label="Abrir ou fechar menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" [class.is-open]="menuOpen()" aria-label="Navegação principal">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Início</a>
        <a routerLink="/sobre" routerLinkActive="active">Sobre</a>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((state) => !state);
  }
}