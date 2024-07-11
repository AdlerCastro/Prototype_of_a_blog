import {Slot} from '@radix-ui/react-slot'
import { Ref, forwardRef } from 'react'
import { ButtonProps } from './type'

const Button  = forwardRef((props:ButtonProps, ref:Ref<HTMLButtonElement>) =>{
    const {asChild, children, ...rest} = props
    const Component = asChild?Slot : 'button'

    return(
        <Component ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Button.displayName = 'Button'

export default Button