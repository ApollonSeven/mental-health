export const mathTypes = {
  multiplication: 'multiplication',
  addition: 'addition'
}

export const mathOperationTitles = {
  [mathTypes.multiplication]: 'x',
  [mathTypes.addition]: '+'
}

export const mathSections = [
  {
    title: '11',
    text: 'Умножение на 11',
    type: mathTypes.multiplication,
    value: 11,
    body: 
`__Правило:__ Добавь цифру к её соседу справа, не забывая про перенос через разряд.

__Пример:__ 3425 × 11 = 37675

3425 × 11 = (0+3)(3+4)(4+2)(2+5)(5+0) = 37675`
  },
  {
    title: '12',
    text: 'Умножение на 12',
    type: mathTypes.multiplication,
    value: 12,
    body: 
`__Правило:__ Добавь удвоенную цифру к её соседу справа, не забывая про перенос через разряд. 

__Пример:__ 2413 × 12 = 28956 

2413 × 12 = (0×2+2)(2×2+4)(4×2+1)(1×2+3)(3×2+0) = 28956 `
  },
  {
    title: '6',
    text: 'Умножение на 6',
    type: mathTypes.multiplication,
    value: 6
  },
  {
    title: '7',
    text: 'Умножение на 7',
    type: mathTypes.multiplication,
    value: 7
  },
  {
    title: '5',
    text: 'Умножение на 5',
    type: mathTypes.multiplication,
    value: 5
  },
  {
    title: '9',
    text: 'Умножение на 9',
    type: mathTypes.multiplication,
    value: 9
  },
  {
    title: '8',
    text: 'Умножение на 8',
    type: mathTypes.multiplication,
    value: 8
  },
  {
    title: '4',
    text: 'Умножение на 4',
    type: mathTypes.multiplication,
    value: 4
  },
  {
    title: '3',
    text: 'Умножение на 3',
    type: mathTypes.multiplication,
    value: 3
  },
  {
    title: '2',
    text: 'Умножение на 2',
    type: mathTypes.multiplication,
    value: 2
  },
]
