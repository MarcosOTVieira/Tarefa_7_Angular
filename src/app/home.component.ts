import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="page">
      <div class="hero">
        <span class="eyebrow">Página inicial</span>
        <h1>Tarefa 7 - Site em Angular</h1>
        <p>
          Esta versão mantém o modelo do projeto em react, com navegação, páginas e rodapé,
          mas troca a aparência por um visual um pouco diferente, mais moderno e limpo.
        </p>
      </div>
    </section>
  `,
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}