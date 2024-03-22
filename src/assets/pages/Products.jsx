import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import Items from '../components/Items'
import { data } from '../../data'

import Title from '../components/ui/Title'
import Input from '../components/ui/Input'
import Modal from '../components/ui/Modal'
import Text from '../components/ui/Text'

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
flex-direction: column;
gap: 5em;
`

const SectionCtn = styled.section`
width: 400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 15px;
@media(max-width:700px){
width: 100%;
}
`

const Select = styled.select`
width: 100%;
background-color: #555;
border: 0px;
border-bottom: 4px solid #019abd;
padding: 8px 12px;
color: #fff;
font-size: 17px;
cursor: pointer;
`

const Option = styled.option`
`
export default function Products() {
    const catArr = ['Tapas', 'Principales', 'Tragos', 'Postres y Cafetería', 'Bebidas', 'Cervezas', 'Vinos y Champagne', 'Promociones', 'Pizzas', 'SinTacc', 'Aguas y Gaseosas', 'Hamburguesas']
    return (
        <>
            <Wrapper>
                <dir>
                    <Button>EDITAR PRODUCTOS</Button>
                    <Button>MODIFICAR PRECIOS</Button>
                    <Button>AGREGAR PRODUCTO</Button>
                </dir>
                <AddProduct categoryList={catArr} />
                <ModifyPrices categoryList={catArr} />
                <EditProduct categoryList={catArr} />
            </Wrapper>
        </>
    )
}


export function EditProduct({ categoryList }) {
    const [category, setCategory] = useState()
    const [filter, setFilter] = useState('minPrice')
    const [query, setQuery] = useState('')

    return (<>
        <SectionCtn>
            <Title $altTitle>Editar Productos</Title>
            <Select onChange={(e) => setCategory(e.target.value)}>
                <Option value={'Todos'}>Todos</Option>
                {categoryList.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                ))}
            </Select>
            <Select onChange={(e) => setFilter(e.target.value)}>
                <Option value={'minPrice'}>Menor Precio</Option>
                <Option value={'maxPrice'}>Mayor Precio</Option>
            </Select>
            <Input placeholder={'Buscar'} onChange={(e) => setQuery(e.target.value)} />
            <Items editMode searchItem={query} filter={filter} data={data} category={category || 'Todos'} />
        </SectionCtn>
    </>)
}



export function AddProduct({ categoryList }) {
    const [lastCreated, setLastCreated] = useState({})
    const [createdModal, setCreatedModal] = useState(false)
    const [productAdded, setProductAdded] = useState({
        nombre: '',
        descripcion: '',
        precio: 0,
        categoria: 'Tapas',
    })


    function handleAddProduct(e) {
        data.push(productAdded)
        setLastCreated(prev => ({ ...prev, productAdded }))
        setCreatedModal(false)
        setProductAdded({
            nombre: '',
            descripcion: '',
            precio: 0,
            categoria: 'Tapas',
        })
    }

    return (
        <>
            <SectionCtn>
                <Title $altTitle>Agregar al Menu</Title>
                <Input value={productAdded.nombre} onChange={(e) => setProductAdded(prev => ({ ...prev, nombre: e.target.value }))} placeholder='Nombre' type="Input" />
                <Input value={productAdded.descripcion} onChange={(e) => setProductAdded(prev => ({ ...prev, descripcion: e.target.value }))} placeholder='Descripcion...' name="Descripcion" id="" cols="0" rows="5"></Input>
                <Input value={productAdded.precio} onChange={(e) => setProductAdded(prev => ({ ...prev, precio: e.target.value }))} placeholder='Precio' type="number" />
                <Select value={productAdded.categoria} onChange={(e) => setProductAdded(prev => ({ ...prev, categoria: e.target.value }))} id='category'>
                    {categoryList.map((item, index) => (
                        <Option key={index} value={item}>{item}</Option>
                    ))}
                </Select>
                <Button onClick={() => console.log(lastCreated)}>Ver ultimos Productos</Button>

                <Button onClick={() => setCreatedModal(true)}>Agregar Producto</Button>
                <Modal $modalIsOpen={createdModal}>

                    <AddModalCtn>
                        <Text>Nombre: {productAdded.nombre}</Text>
                        <Text $description>descripcion: {productAdded.descripcion}</Text>
                        <Text $price>Precio: {productAdded.precio}</Text>
                        <ModalButtonCtn>
                            <Button $modal onClick={handleAddProduct} $altButton $red> Agregar </Button>
                            <Button $modal onClick={() => setCreatedModal(false)} $altButton $blue> Cancelar </Button>
                        </ModalButtonCtn>

                    </AddModalCtn>
                </Modal>
            </SectionCtn >
        </>
    )
}

const AddModalCtn = styled.div`
width: 100%;
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
gap: 10px;
& p{
    margin: 0px;
    padding: 0px;
}
`

const ModalButtonCtn = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`

export function ModifyPrices({ categoryList }) {
    const [percentage, setPercentage] = useState(0)


    function applyPriceMod() {
        data.map(product => {
            const initialValue = product.precio
            const equivalenteDecimal = (percentage / 100) + 1;
            product.precio = initialValue * equivalenteDecimal
        })
    }


    return (
        <>
            <SectionCtn>
                <Title $altTitle>Modificar precios</Title>
                <Select id='category'>
                    <Option value={'Todos'}>Todos</Option>
                    {categoryList.map((item, index) => (
                        <Option key={index} value={item}>{item}</Option>
                    ))}
                </Select>
                <Input title={'Numeros negativos daran porcentajes negativos'} onChange={(e) => setPercentage(e.target.value)} placeholder='Porcentaje de aumento' type="number" />
                <Button title={'ver historial'} >Ver historial de aumentos</Button>
                <Button title={'Aplicar'} onClick={applyPriceMod}>Aplicar Modificacion</Button>

            </SectionCtn>
        </>
    )
}