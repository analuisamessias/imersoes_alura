# imersao_front_alura

## Aula 01 - Revisão: HTML, CSS e JavaScript

- HTML: dá a estrutura da página
- CSS: dá o estilo, beleza da página, como: cor, fonte, alinhamento, tamanho e etç
- JavaScript: dá o dinamismo da página

O conjunto do programa é todo definido em três arquivos: um html, um css e um javascript.

Explore a página com o inspecionar para entender como funciona, quais são as divisões.

> Acesse clicando no botão direito do mouse e selecione "Inspecionar"

Tente sempre ir aos poucos. Não se faz uma página de uma vez. Mas vá aos poucos, parte por parte.

Uma `<div>`é uma divisão para uma classe.
A tag `<nav>` é usada para fazer Menus em HTML.
A tag `<a>` serve para criação de links
A tag `<span>`serve para facilitar a inserção de ícones

Tente ir sempre separando os componentes em classes para facilitar na hora de criar os estilos.
Estude também sobre os componentes de CSS, como bordas, cores, backgrounds, borda e etç.

Quando for ajustar uma imagem, coloque sempre o nome do link "img" para especificar qual é a imagem que você está tentando alterar.

## Aula 02 - Estilo avançado e posicionamento

Você pode inserir duas classes em umm para facilitar, mas não é recomendado que coloque muitas só mesmo tempo.

Estudei as divisões da div, alinhamento, formatação, espaços.

A estrutura de margin e padding é composta de X Y Z W, sendo X em cima, Y lateral direita, Z em baixo e W lateral esquerda. Caso seja os mesmos valores em cima e em baixo e os mesmos de esquerda e direita você pode fazer: margin X Y, sendo X em cima e em baixo e Y direita e esquerda.

Você pode ir testando no Inspecionar, adicionando, testando aquilo que quer para ver como está ficando e depois copiar para o código.

- `margin` : propriedade que adiciona margem ao elemento, ela adiciona um espaço transparente que não pode ser preenchido com nenhuma cor ou borda. Possui 4 separações: top (em cima), right (direita), botton (em baixo), left (esquerda). Também é possível fazer a relação de maneira curta (Shorthand)

> Shorthand: redução dos valores do padding no formato TOPO, DIREITA, BASE, ESQUERDA. Ou ainda: TOPO E BASE, DIREITA E ESQUERDA, com somente 2 valores.

- `padding` : propriedade que funciona como o margin, porém só invés de dar espaço externo, ele vai dar um espaço interno (por exemplos das palavras com o topo do espaço). Possui 4 separações: top (em cima), right (direita), botton (em baixo), left (esquerda). Também pode utilizar o Shorthand. **Cuidado! Padding pode aumentar a largura do elemento.** Sempre tente compensar o `padding` reduzindo o `width` ou `height`.

**FLEXBOX**
FLEXBOX é a abreviação de módulo Flexível Box Layout.
É um método de layout para organizar itens em linhas ou colunas.

> Flex Container: tag que envolve os itens flex, ao indicar display:flex.

- `display: flex;` : Define o elemento como um flex container, tornando seus filhos flex-itens. Torna o elemento um flex container automaticamente transformando todos os seus filhos diretos em flex itens. Ou seja, um container flexível com itens flexíveis.

- `flex-direction` : Define a direção flex dos itens. Por padrão é sempre `row` (linha), ou seja, dispõe os elementos um do lado do outro. Mas pode ter também `row-reverse` que indica linha ao contrário, `column` que ficam em uma úncia coluna, um embaixo do outro, e ainda `column-reverse` que os itens ficam em coluna, um embaixo do outro, porém na ordem reversa.

- `flex-wrap` : Define se os itens devem quebrar ou não a linha. Quando um dos flex itens atinge o limite do conteúdo, o último item passa para a linha de baixo. Possui: `nowrap` que não permite quebra de linha, `wrap` que quebra a linha quando um dos flex itens não pode mais ser compactado e `wrap-reverse` que quebra a linha na direção contraria.

- `justify-content` : Alinhamento os itens flex no container de acordo com a direção. `flex-start` alinha no início do container, `flex-end` alinha no final do container, `center` alinha no centro do container, `space-between` cria um espaçamento igual entre os elementos mantendo o início e o fim, `space-around` cria espaçamento entre os elementos sendo o espaçamento do meio maior que outros.

- `align-items` : Alinha os flex itens de acordo com o eixo do container, sendo diferente quando os itens estão em coluna e quando estão em linha. `stretch` faz os itens crescerem igualmente, `flex-start` alinha no início, `flex-end` alinha no final, `center` alinha no centro, `baseline` alinha de acordo com a linha base.

- `align-content` : Alinha as linhas do container em relação ao eixo vertical. Só funciona se tiver mais de uma linha de flex-items. Possui as mesmas propriedades dos outros

> Flex Item: São filhos diretos do flex container, lembrando que uma fah de torna um flex container a partir do momento que display: flex é definido.

- `align-self` : Serve para definir alinhamento específico de um único flex Item dentro do nosso container. Caso um valor seja atribuído, ele passa por cima do que for atribuído no align-items do container. O alinhamento acontece tanto em linha como coluna. Possui: `auto` que respeita o definido pelo align-items, `flex-start` que alinha no início, `flex-end` que alinha no final, `center` que alinha ao centro, `baseline` que alinha na linha de base, `stretch` que estica o item.

## Aula 03 - Layout Flexbox - Pseudo-classes e Conceitos de responsividade

Organizar o código é essencial para ter um projeto bem feito, bem construído e bem dividido.
Em CSS, a nova atualização permite a criação de variáveis para que não seja necessário a repetição de mesmas declaraçõs no código. Ou seja, uma única chamada permite replica para todo o código.

**VARIÁVEIS EM CSS**
Propriedades personalizadas (às vezes chamadas de variáveis CSS ou variáveis em cascata) são entidades definidas por autores CSS que contêm valores específicos a serem reutilizados em um documento. Eles são definidos usando a notação de propriedade personalizada (por exemplo, `--main-color: black;`) e são acessados usando a função `var()` (por exemplo, ` cor: var(--main-color);`).

Observe que o seletor fornecido ao conjunto de regras define o escopo no qual a propriedade personalizada pode ser usada. Uma prática recomendada comum é definir propriedades personalizadas na pseudoclasse `:root`, para que ela possa ser aplicado globalmente em seu documento HTML:

> Para criar uma variável, você deve definir um arquivo CSS de variáveis com uma raiz `root{}` e fazer as declarações dentro dela das variáveis que você vai utilizar muitas vezes, para que já fique declarada uma vez só

- Entender as subdivisões dos layouts é extremamente importante.

> Sempre que possível, utilize o **"Inspecionar"** paraa conseguir entender e identificar as seções corretamente
