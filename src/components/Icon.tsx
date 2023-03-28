import classname from 'classnames'
import style from './Icon.module.scss'
interface Props {
  name: string
  className?: string
}

export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={classname(className, style.icon)}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
