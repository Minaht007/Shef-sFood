"use client"
import { useState } from "react"


const ModalWind = ({onClose, children})=> {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <div>
                <div className=" relative" >
                    <button onClick={onClose}>
                        <svg className="w-6 h-6 absolute top-1 right-1 ">
                            <use xlinkHref="/icons/symbol-defs.svg#icon-close" />
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default ModalWind