import { Link } from 'react-router-dom'
import p from '../assets/images/welcome2.svg'
export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img w-240px h-240px src={p} />
      <h2 text-24px mt-24px >
        每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
      <div mt-36px>
        <Link text-32px color="#ff6e6c" font-bold to="/welcome/3">下一页</Link>
      </div>
    </div>
  )
}
