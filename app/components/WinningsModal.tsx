import React from 'react'
import styles from './WinningsModal.module.css'

interface WinningsModalProps {
  winnings: number | null
}

const WinningsModal = (props: WinningsModalProps) => {
  return (
    <div>
<dialog id="winningsModal" className={`modal`}>
  <div className={`${styles.container} modal-box`}>
    <h3 className="text-5xl font-bold">Congratulations!</h3>
    <p id="winningsAmount">You Won {props.winnings}€</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default WinningsModal
