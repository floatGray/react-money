import { Link } from 'react-router-dom'
import p from '../assets/images/welcome3.svg'

export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <img src={p} w-240px h-240px />
      <h2 text-24px mt-24px >
        数据可视化 <br />
        收支一目了然
      </h2>
      <div mt-36px>
        <Link text-32px color="#ff6e6c" font-bold to="/welcome/4">下一页</Link>
      </div>
    </div>
  )
}
