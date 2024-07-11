# Estratégias de Testes

Estratégias de testes referem-se aos diferentes métodos e abordagens utilizados para testar um programa e garantir sua qualidade. Essas estratégias são projetadas para identificar e corrigir bugs, garantir que o programa atenda aos requisitos funcionais e não funcionais, e garantir que ele se comporte conforme esperado em uma variedade de condições e cenários.

## Princípios e Fundamentos

Os princípios e fundamentos de testes são os conceitos básicos que formam a base para o processo de teste de software. Compreender esses princípios é essencial para criar testes eficazes e garantir a qualidade do software. Aqui estão alguns dos principais princípios e fundamentos de testes:

1. **Qualidade de Software:** O objetivo dos testes de software é garantir que o software atenda aos requisitos de qualidade estabelecidos, como funcionalidade, confiabilidade, desempenho, usabilidade e segurança.
2. **Bugs e Defeitos:** Um bug ou defeito é uma discrepância entre o comportamento observado do software e o comportamento esperado. Os testes são projetados para identificar e corrigir esses bugs antes que eles afetem os usuários finais.
3. **Cobertura de Teste:** A cobertura de teste refere-se à extensão em que o código-fonte é exercido pelos testes. Uma cobertura de teste abrangente é essencial para garantir a eficácia dos testes.
4. **Requisitos de Teste:** Os requisitos de teste são derivados dos requisitos do sistema e especificam os critérios que o software deve atender para ser considerado adequado. Os testes são projetados para validar se o software atende a esses requisitos.
5. **Ciclo de Vida do Teste:** O ciclo de vida do teste inclui atividades como planejamento de teste, design de teste, execução de teste e relatório de resultados. Cada fase do ciclo de vida do teste é crucial para garantir a qualidade do software.
6. **Automatização de Testes:** A automatização de testes envolve o uso de ferramentas e scripts para executar testes de forma automatizada. Isso ajuda a acelerar o processo de teste e aumentar a eficiência.
7. **Feedback Rápido:** O feedback rápido é essencial para um processo de desenvolvimento ágil. Testes automatizados e integração contínua ajudam a fornecer feedback rápido sobre a qualidade do software.
8. **Depuração e Rastreamento de Defeitos:** A depuração é o processo de identificar e corrigir bugs no software. O rastreamento de defeitos envolve o registro e o acompanhamento de bugs ao longo do ciclo de vida do desenvolvimento.
9. **Cumprir Requisitos Contratuais e Normativos:** Garantir que o software atenda aos requisitos contratuais, legais e regulamentares, garantindo sua conformidade com padrões estabelecidos.

Compreender esses princípios e fundamentos de testes é fundamental para criar um plano de teste eficaz e garantir a qualidade do software em todas as fases do desenvolvimento.

## Processo de Teste

O processo de teste é uma sequência de atividades organizadas e planejadas para verificar e validar a qualidade de um software. Essas atividades são realizadas em várias etapas do ciclo de vida do desenvolvimento de software e visam garantir que o produto final atenda aos requisitos de negócios, funcione corretamente e seja confiável. Aqui está uma visão geral das etapas típicas de um processo de teste:

1. **Planejamento de Teste:** Nesta fase, os objetivos e escopo do teste são definidos. Isso inclui a identificação dos requisitos de teste, a determinação dos recursos necessários e a elaboração de um plano de teste detalhado.
2. **Design de Teste:** Durante esta etapa, os casos de teste são elaborados com base nos requisitos de teste e nos critérios de aceitação. Isso envolve a identificação de cenários de teste, a criação de conjuntos de dados de teste e a definição de procedimentos de teste.
3. **Preparação de Ambiente:** O ambiente de teste é configurado para replicar o ambiente de produção o mais próximo possível. Isso pode incluir a instalação de software, a configuração de hardware, a preparação de conjuntos de dados de teste e a criação de infraestrutura de teste.
4. **Execução de Teste:** Durante esta fase, os casos de teste são executados conforme planejado. Os testes são conduzidos para verificar se o software atende aos requisitos e para identificar defeitos ou problemas de qualidade.
5. **Registro de Resultados:** Os resultados dos testes são registrados e documentados para análise posterior. Isso inclui informações sobre os testes executados, os resultados obtidos e quaisquer problemas identificados durante o processo de teste.
6. **Avaliação e Relatório:** Os resultados dos testes são analisados e avaliados para determinar se o software atende aos critérios de aceitação. Um relatório de teste é preparado para comunicar os resultados aos stakeholders e fornecer insights sobre a qualidade do software.
7. **Reteste e Correção:** Se problemas ou defeitos forem identificados durante os testes, o software é corrigido e os testes relevantes são executados novamente para garantir que as correções tenham sido eficazes.
8. **Encerramento do Teste:** Uma vez que os objetivos de teste tenham sido alcançados e o software tenha sido validado, o processo de teste é encerrado. Os resultados finais são documentados e quaisquer lições aprendidas são registradas para futuros projetos.

A execução eficaz do processo de teste é crucial para garantir a qualidade e confiabilidade do software entregue aos usuários finais.

## Sete princípios de teste de software

Os sete princípios do teste de software, também conhecidos como "Os Princípios da Testabilidade", foram definidos por Boris Beizer em seu livro "Software Testing Techniques" e são fundamentais para orientar a prática de testes de software.

1. **Teste demonstra a presença de defeitos**

"O teste fala sobre a presença de defeitos e não fala sobre a ausência de defeitos". O objetivo do teste de software é fazer com que o software falhe. O teste de software reduz a presença de defeitos, mas não pode garantir que o software esteja 100% livre de bugs.

2. **Teste exaustivo é impossível**

O processo de testar a funcionalidade do software em todas as entradas e pré-condições possíveis - válidas ou inválidas - é conhecido como teste exaustivo. O teste exaustivo é impossível porque o software nunca pode testar em todos os casos de teste, isso demandaria mais custo, tempo, esforço, etc., o que é impraticável. O que fazemos é testar apenas alguns casos de teste e assumir que o software está correto e produzirá a saída correta em todos os casos de teste.

3. **Teste antecipado**

Incorporar o teste o mais cedo possível no processo de desenvolvimento. Ele desempenha um papel crítico no ciclo de vida de desenvolvimento de software, quanto mais cedo bugs forem identificados mais barato e fácil será a correção.

4. **Agrupamento de defeitos**

Em um projeto, um pequeno número de módulos pode conter a maioria dos bugs. O Princípio de Pareto (Regra 80-20) para teste de software afirma que 80% do defeito de software vem de 20% dos módulo

5. **Paradoxo do Pesticida**

Repetir os mesmos casos de teste, repetidamente, não encontrará novos bug. É necessário revisar os casos de teste, e adicionar ou atualizar os casos de teste para encontrar novos bugs.

6. **Teste depende do contexto**

A abordagem de teste depende do contexto do software desenvolvido. Diferentes tipos de software precisam realizar diferentes tipos de teste.

7. **A ilusão da ausência de erros**

Se um software construído é 99% livre de bugs, mas não segue o atende às expectativas e necessidades do usuário, então ele é inutilizável.

## Tipos de Testes

1. **Testes Unitários:** Testes focados em unidades individuais de código, como funções, métodos ou classes. Eles verificam se cada unidade de código funciona corretamente isoladamente.
2. **Testes de Integração:** Testes que verificam se os diferentes módulos ou componentes de um sistema funcionam corretamente juntos. Eles garantem que as interações entre os componentes sejam corretas e que o sistema como um todo atenda aos requisitos.
3. **Testes de Aceitação:** Testes que verificam se o software atende aos critérios de aceitação do cliente e se cumpre os requisitos de negócios. Eles são frequentemente conduzidos pelo cliente ou por usuários finais para validar se o sistema está pronto para ser lançado.
4. **Testes de Regressão:** Testes que garantem que as alterações recentes no código não tenham introduzido novos bugs ou quebrado funcionalidades existentes. Eles são executados após cada alteração no código para garantir a estabilidade do sistema.
5. **Testes de Performance:** Testes que avaliam o desempenho do sistema em termos de tempo de resposta, escalabilidade e uso de recursos. Eles garantem que o software possa lidar com cargas de trabalho esperadas e atender aos requisitos de desempenho.
6. **Testes de Segurança:** Testes que avaliam a segurança do sistema em relação a possíveis vulnerabilidades e ataques cibernéticos. Eles identificam e corrigem falhas de segurança para proteger o software contra ameaças.
7. **Testes de Usabilidade:** Testes que avaliam a facilidade de uso e a experiência do usuário do software. Eles garantem que o sistema seja intuitivo e eficiente para os usuários finais.
8. **Testes Exploratórios:** Testes onde os testadores exploram o sistema de forma não estruturada para descobrir bugs e problemas inesperados. Eles são úteis para encontrar falhas que podem não ser detectadas por testes automatizados.

Essas são apenas algumas das estratégias de teste comuns, e muitas vezes uma combinação de diferentes tipos de teste é usada para garantir a qualidade abrangente do software. Cada estratégia tem seu próprio propósito e abordagem, e a escolha da estratégia adequada depende das necessidades e requisitos específicos do projeto.
