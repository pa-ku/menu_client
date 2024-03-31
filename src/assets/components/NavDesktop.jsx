import styled from 'styled-components'
import RadioButton from './ui/RadioButton'

import SintaccLogo from '../../assets/images/icons/nogluten-icon.svg'
import BurgerLogo from '../../assets/images/icons/burger-icon.svg'
import DrinksLogo from '../../assets/images/icons/drinks-icon.svg'
import MenuLogo from '../../assets/images/icons/menu-icon.svg'
import PizzaLogo from '../../assets/images/icons/pizza-icon.svg'
import TapasLogo from '../../assets/images/icons/tapas-icon.svg'
import PromoLogo from '../../assets/images/icons/promo-icon.svg'
import ServeLogo from '../../assets/images/icons/serve-icon.svg'
import PostreLogo from '../../assets/images/icons/postre-icon.svg'
import AguaLogo from '../../assets/images/icons/agua-icon.svg'
import VinoLogo from '../../assets/images/icons/vino-icon.svg'
import CervezaLogo from '../../assets/images/icons/cerveza-icon.svg'

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;

  width: 100%;
  justify-content: start;
  z-index: 1;
  .Todos {
    grid-column: 2 / span 2;
  }
  & * {
    font-size: 14px;
    border-radius: 4px;

    font-weight: 600;
    display: flex;
    align-items: center;
    height: 70px;
  }
  gap: 5px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    .Todos {
      grid-column: 1 / span 1;
    }
  }
`

export default function NavDesktop({ setSelectCategory }) {
  const catArr = [
    { nombre: 'Principales', logo: ServeLogo },
    { nombre: 'Promociones', logo: PromoLogo },
    { nombre: 'Tapas', logo: TapasLogo },
    { nombre: 'Cervezas', logo: CervezaLogo },
    { nombre: 'Bebidas', logo: DrinksLogo },
    { nombre: 'Pizzas', logo: PizzaLogo },
    { nombre: 'Hamburguesas', logo: BurgerLogo },
    { nombre: 'Aguas y Gaseosas', logo: AguaLogo },
    { nombre: 'Postres y Cafetería', logo: PostreLogo },
    { nombre: 'Tragos', logo: DrinksLogo },
    { nombre: 'Vinos y Champagne', logo: VinoLogo },
    { nombre: 'SinTacc', logo: SintaccLogo },
    { nombre: 'Todos', logo: MenuLogo },
  ]

  return (
    <>
      <NavWrapper>
        <ButtonContainer>
          {catArr.map((item) => (
            <>
              <RadioButton
                className={item.nombre}
                logo={item.logo}
                name={'nav'}
                onClick={() => setSelectCategory(item.nombre)}
                text={item.nombre}
              />
            </>
          ))}
        </ButtonContainer>
      </NavWrapper>
    </>
  )
}
