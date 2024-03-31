import styled from 'styled-components'
import SearchBar from './ui/SearchBar'
import BannerImage from '../../assets/images/banner.png'
const HeaderContainer = styled.header`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  object-fit: cover;
  background-color: rgba(26, 9, 0, 0.754);
`
const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`

const TitleCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3em;
  & * {
    font-family: 'Lobster Two', sans-serif;
    font-weight: 200;
    font-style: italic;
  }
  opacity: 0;
  animation: showHeader 1s forwards;
  @keyframes showHeader {
    to {
      opacity: 1;
    }
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  margin: 0px;
  padding: 0px;
`
const Subtitle = styled.h2`
  color: #fff;
  font-size: 40px;
`

const TitleLine = styled.div`
  border-radius: 20px;
  width: 260px;
  height: 2px;
  background-color: #fff;
`

const SearchBarContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 10px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
    padding-inline: 10px;
  }
`

export default function Header({ setQuery }) {
  return (
    <HeaderContainer>
      <BannerImg src={BannerImage} alt="" />
      <TitleCtn>
        <Title>Paul´s</Title>
        <TitleLine></TitleLine>
        <Subtitle>Rooftop Bar</Subtitle>
      </TitleCtn>

      <SearchBarContainer>
        <SearchBar setQuery={setQuery} />
      </SearchBarContainer>
    </HeaderContainer>
  )
}
