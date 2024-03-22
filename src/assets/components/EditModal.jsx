import React from 'react'
import styled from 'styled-components'
import Input from './ui/Input'
import Modal from './ui/Modal'
import Button from './ui/Button'

const ModalButtonCtn = styled.div`
width: 100%;
gap: 20px;
display: flex;
align-items: center;
justify-content: center;

`
export default function EditModal({ selectedItem, elementEdited, editModal, setElementEdited, cancelEdit, confirmEdit }) {
    return (
        <>
            {selectedItem && elementEdited && (<>
                <Modal $modalIsOpen={editModal}>
                    <Input onChange={(e) => setElementEdited(prev => ({ ...prev, nombre: e.target.value }))} value={elementEdited.nombre || ''} />
                    <Input onChange={(e) => setElementEdited(prev => ({ ...prev, desc: e.target.value }))} rows={'6'} value={elementEdited.desc || ''} />
                    <Input onChange={(e) => setElementEdited(prev => ({ ...prev, precio: e.target.value }))} value={elementEdited.precio || ''} type={'number'} />
                    <ModalButtonCtn>
                        <Button $modal $altButton $red onClick={confirmEdit}>MODIFICAR</Button>
                        <Button $modal $altButton $blue onClick={cancelEdit}>CANCELAR</Button>
                    </ModalButtonCtn>
                </Modal >
            </>)}
        </>
    )
}
