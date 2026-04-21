import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div>
        <strong>Tarefa 7 React / Angular</strong>
      </div>

      <ul>
        <li>Marcos Vieira</li>
        <li>Victor Rosseto</li>
        <li>Guilherme Gonçalves</li>
      </ul>

      <span>UniFacens © {{ currentYear }}</span>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}