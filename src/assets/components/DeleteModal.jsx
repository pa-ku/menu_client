import React from 'react'
import styled from 'styled-components'
import Button from './ui/Button'
import Text from './ui/Text'
import Modal from './ui/Modal'

const ModalButtonCtn = styled.div`
width: 100%;
gap: 20px;
display: flex;
align-items: center;
justify-content: center;

`
export default function DeleteModal({ elementEdited, deleteModal, selectedItem, confirmDelete, cancelDelete }) {
    return (
        <>
            {selectedItem && elementEdited && <Modal $modalIsOpen={deleteModal}>
                <Text>{selectedItem.nombre}</Text>
                <Text $description>Estas seguro de eliminar este producto?</Text>
                <ModalButtonCtn>
                    <Button $modal $altButton $red onClick={confirmDelete}>ELIMINAR</Button>
                    <Button $modal $altButton $blue onClick={cancelDelete}>CANCELAR</Button>
                </ModalButtonCtn>
            </Modal>}
        </>
    )
}
