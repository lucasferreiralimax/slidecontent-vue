export const text_1 = (faith, city) => `SlideContent(name="Exemplo 1" type="infinite" :nav="true" :animation="{ 'disabled': true }")
  SlideItem(
    title="${city}"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela.actived(
    title="${faith}"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`;

export const text_2 = (faith, city) => `SlideContent(name="Exemplo 2" type="simple" :nav="false")
  SlideItem.actived(
    title="${city}"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
  )
  SlideItem.favela(
    title="${faith}"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
  )`;

export const text_3 = (faith, city) => `SlideContent(name="Exemplo 3" type="simple" :nav="true" :animation="{ direction: 'prev', time: 10000 }")
  SlideItem.actived(
    title="${city}"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela(
    title="${faith}"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`

export const text_4 = (faith, city) => `SlideContent(name="Exemplo 4" type="infinite" :nav="true" border)
  SlideItem(
    title="${city}"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela.actived(
    title="${faith}"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`;
