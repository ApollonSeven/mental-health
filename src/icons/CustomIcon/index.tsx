import { Icon } from '@ui-kitten/components'
import React, { forwardRef } from 'react'
import { CustomIconProps } from '../types'

const CustomIcon = (props: CustomIconProps, ref?: any) => (
    <Icon {...props} ref={ref} />
)

export default forwardRef(CustomIcon)
