import React, { useState } from 'react'
import Modal from './modal'
import Customize from './customize'
import Review from './review'
import Complete from './complete'

type Props = {
  picture: Picture
  onClose: () => void
}

type Step = 'customize' | 'review' | 'complete'

const Details = ({ onClose, picture }: Props) => {
  const [step, setStep] = useState<Step>('customize')

  return (
    <Modal onClose={onClose}>
      {step === 'customize' && (
        <Customize
          picture={picture}
          onComplete={() => setStep('review')}
        />
      )}
      {step === 'review' && (
        <Review onComplete={() => setStep('complete')} />
      )}
      {step === 'complete' && <Complete onComplete={onClose} />}
    </Modal>
  )
}

export default Details
