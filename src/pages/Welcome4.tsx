import { useNavigate } from 'react-router-dom'
import p from '../assets/images/welcome4.svg'
import { useLocalStore } from '../stores/useLocalStore'

export const Welcome4: React.FC = () => {
  const { setHasReadWelcomes } = useLocalStore()
  const nav = useNavigate()
  const onSkip = () => {
    setHasReadWelcomes(true)
    nav('/home')
  }
  return (
    <div text-center>
      <img src={p} w-240px h-240px />
      <h2 text-24px mt-24px >
        云备份 <br />
        再也不怕数据丢失
      </h2>
      <div mt-36px>
        <span text-32px color="#ff6e6c" font-bold onClick={onSkip}>开启应用</span>
      </div>
    </div>
  )
}
