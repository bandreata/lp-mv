import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="prose lg:prose-xl max-w-none">
      <h2>Bem-vindo ao Planejamento Estratégico Digital</h2>
      <p>
        Este site apresenta o planejamento estratégico de comunicação digital elaborado para a deputada estadual Maria Victoria, baseado em análises de dados eleitorais e demográficos do Paraná.
      </p>
      <p>
        Utilize o menu de navegação acima para explorar as diferentes seções do planejamento:
      </p>
      <ul>
        <li><Link href="/analise-demografica">Análise Demográfica</Link>: Compreensão dos perfis de eleitorado nos municípios-chave.</li>
        <li><Link href="/temas-prioritarios">Temas Prioritários</Link>: Definição dos eixos de comunicação segmentados por região.</li>
        <li><Link href="/plano-conteudo">Plano de Conteúdo</Link>: Estratégia de conteúdo para redes sociais.</li>
        <li><Link href="/estrategias-crescimento">Estratégias de Crescimento</Link>: Táticas para ampliar o alcance e engajamento digital.</li>
        <li><Link href="/campanhas-tematicas">Campanhas Temáticas</Link>: Proposta de calendário editorial mensal.</li>
        <li><Link href="/kpis-monitoramento">KPIs e Monitoramento</Link>: Indicadores e mecanismos para avaliação de resultados.</li>
      </ul>
      <p>
        O objetivo é fornecer uma visão completa e integrada das diretrizes propostas para fortalecer a presença digital e a comunicação do mandato com os cidadãos paranaenses.
      </p>
    </div>
  );
}

