function renderWaterfall(rootNode, columnCount, elementGap) {
  // const container = document.querySelector('.root');
  const element = rootNode.querySelectorAll('p');

  // считаем кол-во эл в колонке
  let num = rootNode.children.length;

  //  указываем размеры элементов
  element.forEach(el => el.style.height = 'inherit');
  element.forEach(el => el.style.width = '150px');
  element.forEach(el => el.style.margin = '0px');
  
  // создаем столбцы
  let arrOfElements = [];

  for(let i = 0; i < container.children.length; i ++){
    let el = rootNode.children[i].cloneNode(true);
    arrOfElements.push(el);
  }

  rootNode.innerHTML = '';

  // создать колонки
  for(let i = 0; i < columnCount; i ++){
    let div = document.createElement('div');
    div.classList.add('column')
    rootNode.appendChild(div);
  }

  // 1 разположим первые 3 элемента в ряд
  for(let i = 0; i < columnCount; i ++){
   rootNode.children[i].appendChild(arrOfElements[i]);
  }
  // считаем размеры этих элементов
  // возвращаем индекс колонки с наименьшей высотой
  const col = document.querySelectorAll('.column');
  function calcHeights(parent){
    let arr = [];
    for(let i = 0; i < columnCount; i ++){
      arr.push(parent[i].offsetHeight)
    }
    let min = Math.min(...arr);
    return arr.indexOf(min)
  }
  // следующие элементы кладем в наименьшую колонку
  for(let i = columnCount; i < num; i++){
    let index = calcHeights(col);
    rootNode.children[index].appendChild(arrOfElements[i]);
  }
  // добавляем стилей
 
  rootNode.style.display = 'flex';
  rootNode.style.gap = `${elementGap}px`;
  rootNode.style.justifyContent = 'center';
  col.forEach(el => {
    el.style.gap = `${elementGap}px`;
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.height = 'fit-content';
    });
  }

let container = document.querySelector('.root')
// renderWaterfall(container, 3, 20)

let a = +prompt('Введите количество колонок: ');
let b = +prompt('Введите расстояние между колонками в пикселях: ');
setTimeout(renderWaterfall, 1000, container, a, b)
