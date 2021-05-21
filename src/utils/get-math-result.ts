import { mathTypes } from '../constants/mental-math'

interface XY {
    x: number
    y: number
}

interface GetMathResult extends XY {
    operation: string
}

const operations = {
  [mathTypes.multiplication]: ({ x, y }: XY) => x * y,
  [mathTypes.addition]: ({ x, y }: XY) => x + y
}

export const getMathResult = ({ x, y, operation }: GetMathResult) => operations[operation]({ x, y })
