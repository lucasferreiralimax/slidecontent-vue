const text = {
  one: `SlideContent(name="Exemplo 1" type="infinite" :nav="true" :animation="{ 'disabled': true }")
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`,
  two: `SlideContent(name="Exemplo 2" type="simple" :nav="false")
  SlideItem.actived(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
  )
  SlideItem.favela(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
  )`,
  three: `SlideContent(name="Exemplo 3" type="simple" :nav="true" :animation="{ direction: 'prev', time: 10000 }")
  SlideItem.actived(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`,
  four: `SlideContent(name="Exemplo 4" type="infinite" :nav="true" border)
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`,
  five: `SlideContent(name="Exemplo 4" type="infinite" :nav="true" border squared)
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
    url="https://github.com/lucasferreiralimax/slidecontent-vue"
    target="_blank"
  )`
}

const textExample = (faith, city) => {
  Object.keys(text).forEach((key) => {
    text[key] = text[key].replace('#city', city).replace('#faith', faith)
  })

  return text;
}

export default textExample;
