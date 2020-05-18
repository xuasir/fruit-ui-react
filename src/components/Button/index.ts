import { FC } from 'react'
import Button, { IButtonProps } from './button'
import ButtonGroup, { BaseButtonGroupProps } from './button-group'
export { ButtonSize, ButtonType, ButtonShape } from './button'

type IButton = FC<IButtonProps> & {
  group: FC<BaseButtonGroupProps>
}
const CompButton = Button as IButton
CompButton.group = ButtonGroup

export default CompButton
