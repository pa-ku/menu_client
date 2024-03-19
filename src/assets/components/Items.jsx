import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Title from "./ui/Title";
import Text from "./ui/Text";
import Button from "./ui/Button";

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
opacity: 0;
animation: 1s opacity forwards;

@keyframes opacity {
  to{
    opacity: 1;
  }
}
`;

const ItemCtn = styled.div`
  width: 100%;
  max-width: 40em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
`;

const ModalButtonCtn = styled.div`
width: 100%;
gap: 20px;
display: flex;
align-items: center;
justify-content: center;

`
/** 
@param data objeto principal que se pasa para iterar
@param searchItem filtrar data con un input
@param category filtrar por las categorias
@param filter filtrar de menor a mayor precio
**/

export default function Items({ data, category, filter, editMode, searchItem }) {
  const [actualData, setActualData] = useState(data)
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState('')
  const [elementEdited, setElementEdited] = useState({
    nombre: '',
    desc: '',
    precio: ''
  })

  useEffect(() => {
    setElementEdited({
      nombre: selectedItem.nombre,
      desc: selectedItem.descripcion,
      precio: selectedItem.precio
    })
  }, [selectedItem])


  useEffect(() => {
    setActualData(data.filter(product => product.nombre.toLowerCase().includes(searchItem.toLowerCase())))
  }, [searchItem])




  useEffect(() => {
    if (category === 'Todos') {
      setActualData(data)
    }
    else {
      setActualData(data.filter(item => item.categoria === category))
    }
  }, [category])


  useEffect(() => {
    setActualData(prevActualData => {
      if (filter === 'maxPrice') {
        return [...prevActualData].sort((a, b) => b.precio - a.precio);
      } else {
        return [...prevActualData].sort((a, b) => a.precio - b.precio);
      }
    });
  }, [filter, category])



  function handleDelete(index) {
    setEditModal(false)
    setDeleteModal(true)
    setSelectedItem(actualData[index])
  }

  function confirmDelete() {
    setDeleteModal(false)
    setActualData((prevItems) =>
      prevItems.filter((item) => item.nombre !== selectedItem.nombre)
    );
    setSelectedItem('')
  }

  function cancelDelete() {
    setDeleteModal(false)
    setSelectedItem('')
  }

  function handleEdit(index) {
    setSelectedItem(actualData[index])
    setEditModal(true)
    setDeleteModal(false)
  }

  function confirmEdit() {
    setEditModal(false);
    setSelectedItem('');
    // Create a copy of the actualData array
    const updatedItems = [...actualData];
    // Find the index of the selected item in the updatedItems array
    const index = updatedItems.findIndex((item) => item.nombre === selectedItem.nombre);
    // Update the item at the found index with the modified values
    updatedItems[index] = {
      nombre: elementEdited.nombre,
      descripcion: elementEdited.desc,
      precio: elementEdited.precio
    };
    setActualData(updatedItems);
  }

  function cancelEdit() {
    setEditModal(false)
    setSelectedItem('')
  }

  return (
    <>
      <ItemsWrapper >
        <Title>{category}</Title>

        <RenderItems actualData={actualData} handleDelete={handleDelete} handleEdit={handleEdit} editMode={editMode} />

        <DeleteModal elementEdited={elementEdited} deleteModal={deleteModal} selectedItem={selectedItem} confirmDelete={confirmDelete} cancelDelete={cancelDelete} />

        <EditModal confirmEdit={confirmEdit} cancelEdit={cancelEdit} selectedItem={selectedItem} elementEdited={elementEdited} editModal={editModal} setElementEdited={setElementEdited} />

      </ItemsWrapper >
    </>
  );
}


export function DeleteModal({ elementEdited, deleteModal, selectedItem, confirmDelete, cancelDelete }) {
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

export function EditModal({ selectedItem, elementEdited, editModal, setElementEdited, cancelEdit, confirmEdit }) {
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


export function RenderItems({ actualData, handleEdit, handleDelete, editMode }) {
  return (
    <>
      <ItemsContainer>

        {actualData && actualData.map((item, index) => (
          <React.Fragment key={item.nombre}>
            <ItemCtn>
              <div>
                {editMode &&
                  <div>
                    <Button $altButton $blue onClick={() => handleEdit(index)}>EDITAR</Button>
                    <Button $altButton $red onClick={() => handleDelete(index)}>ELIMINAR</Button>
                  </div>}

                <Text>{item.nombre} </Text>
                <Text $description>{item.descripcion && item.descripcion} </Text>
              </div>

              <Text $price>${item.precio}</Text>
            </ItemCtn >
          </React.Fragment>

        ))}
      </ItemsContainer>
    </>
  )
}