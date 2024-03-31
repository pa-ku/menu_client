import React from 'react'
import styled from 'styled-components'
import ItemImg from '../../assets/images/item-img.webp'

type ItemDesignProps = {
  imgSrc?: any
  altImg: string
  description: string
  title: string
  price: number
}

export default function ItemDesign({
  imgSrc,
  altImg,
  description,
  title,
  price,
}: ItemDesignProps) {
  return (
    <>
      <ItemCtn>
        <ItemImgCtn>{imgSrc && <Img src={ItemImg} alt={altImg} />}</ItemImgCtn>
        <DescrWrapper>
          <DescriptionCtn>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </DescriptionCtn>

          <Price>${price}</Price>
        </DescrWrapper>
      </ItemCtn>
    </>
  )
}

const DescriptionCtn = styled.div`
  max-width: 400px;
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`

const DescrWrapper = styled.div`
  padding-block: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Price = styled.p`
  font-weight: 700;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
`

const Description = styled.p`
  font-size: 14px;
  display: flex;

  height: 100%;
`

const ItemCtn = styled.div`
  background-color: var(--lightbrown-200);
  height: 120px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  object-fit: contain;
  @media (max-width: 700px) {
    height: max-content;
    padding-block: 5px;
  }
`

const ItemImgCtn = styled.div`

  width: 80px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Img = styled.img`
  width: 70px;
  height: 77px;
  border-radius: 20px;
  object-fit: contan;
`
