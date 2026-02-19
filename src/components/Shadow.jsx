import { useShadow } from '../hooks/useShadow';

export const Shadow = () => {
  
  const { handleClick, handleClickSideBar } = useShadow();

  return (
    <div
    className="shadow"
    onClick={handleClick}
    style={{
      display: handleClickSideBar ? 'block' : 'none',
    }}
  />
  )
}