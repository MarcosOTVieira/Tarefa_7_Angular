import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  template: `
    <section class="page page-alt">
      <div class="hero">
        <span class="eyebrow">Sobre</span>
        <h1>Mesma proposta, outra presença visual.</h1>
        <p>
          A ideia aqui é reutilizar a lógica do projeto em react mudar só a composição visual:
          cores, cartões, espaçamento e identidade do topo ao rodapé.
        </p>
      </div>
    </section>
  `,
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent {}