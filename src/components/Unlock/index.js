import {useState} from 'react'

import {
  MainContainer,
  LockedHeading,
  LockedImage,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLocked] = useState(true)

  const LockDevice = () => {
    setLocked(prevState => !prevState)
  }

  const ButtonText = isLocked ? 'Unlock' : 'Lock'
  const ImageAltText = isLocked ? 'lock' : 'unlock'
  const HeadingTExt = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const ImageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <MainContainer>
      <LockedImage src={ImageUrl} alt={ImageAltText} />
      <LockedHeading>{HeadingTExt}</LockedHeading>
      <Button onClick={LockDevice}>{ButtonText}</Button>
    </MainContainer>
  )
}

export default Unlock
