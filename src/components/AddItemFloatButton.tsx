import { Icon } from './Icon'

export const AddItemFloatButtun: React.FC = () => {
  return (
    <button p-4px w-56px h-56px bg="#5C33BE" rounded="50%" b-none text-white
      fixed bottom-16px right-16px flex justify-center items-center>
      <Icon name="add"/>
    </button>
  )
}
