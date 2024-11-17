import { Modal } from "@/components"
import { useState } from "react"

export default function Frontend() {
  const [isShowModal, setIsShowModal] = useState(false)
  return (
    <>
      <div onClick={() => setIsShowModal(true)}>前端</div>
      <Modal
        isOpen={isShowModal}
        onClose={() => setIsShowModal(false)}
      >
        <div>前端</div>
      </Modal>
    </>
  )
}
