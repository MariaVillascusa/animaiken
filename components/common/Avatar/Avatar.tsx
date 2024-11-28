import { FC, ReactElement } from 'react'

interface Props {
  className?: string
  children?: ReactElement
}

const Avatar: FC<Props> = ({}) => {
  const colors = ['#37B679', '#DA3C3C', '#3291FF', '#7928CA', '#79FFE1']

  const userAvatar = `linear-gradient(140deg, ${colors[2]}, ${colors[3]} 100%)`

  return (
    <div
      style={{ backgroundImage: userAvatar }}
      className='inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear'
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  )
}

export default Avatar
