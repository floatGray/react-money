import classname from 'classnames'

interface Props {
  name: string
  className?: string
}

export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={classname(className, 'j-icon')}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
