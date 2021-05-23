import { Icon } from '@ui-kitten/components'
import { forwardRef } from 'react'
import { CustomIconProps } from '../types'
import React from 'react'

const CustomIcon = (props: CustomIconProps, ref?: any) => (
    <Icon {...props} ref={ref} />
)

export default forwardRef(CustomIcon)
