import { Link } from 'react-router-dom'
import p from '../assets/images/welcome1.svg'
export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img w-240px h-240px src={p} />
      <h2 text-24px mt-24px >
        会挣钱 <br />
        也要会省钱
      </h2>
      <div mt-36px >
        <Link text-32px color="#ff6e6c" font-bold to="/welcome/2">下一页</Link>
      </div>
    </div>
  )
}
