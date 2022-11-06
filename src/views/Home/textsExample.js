const text = {
  one: `SlideContent(name="Exemplo 1" type="infinite" :nav="true" :animation="{ 'disabled': true }")
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
  )`,
  two: `SlideContent(name="Exemplo 2" type="simple" :nav="false")
  SlideItem.actived(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
  )
  SlideItem.favela(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
  )`,
  three: `SlideContent(name="Exemplo 3" type="simple" :nav="true" :animation="{ direction: 'prev', time: 10000 }")
  SlideItem.actived(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
  )
  SlideItem.favela(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
  )`,
  four: `SlideContent(name="Exemplo 4" type="infinite" :nav="true" border)
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
  )`,
  five: `SlideContent(name="Exemplo 4" type="infinite" :nav="true" border squared)
  SlideItem(
    title="#city"
    :img="require(\`./assets/ermelino.jpg\"
  )
  SlideItem.favela.actived(
    title="#faith"
    :img="require(\`./assets/faveladascriancas.jpg\"
  )`
}

const textExample = (faith, city) => {
  Object.keys(text).forEach((key) => {
    text[key] = text[key].replace('#city', city).replace('#faith', faith)
  })

  return text;
}

export default textExample;
