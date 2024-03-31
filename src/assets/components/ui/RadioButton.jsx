import styled from 'styled-components'

export default function RadioButton({
  className,
  logo,
  name,
  text,
  onClick,
  value,
}) {
  return (
    <>
      <LabelCtn htmlFor={value} className={className}>
        <IconCtn>
          <Icon src={logo} alt="" />
        </IconCtn>
        <RadioCtn>
          <Radio
            id={value}
            name={name}
            value={value}
            onClick={onClick}
            text={text}
            type="radio"
          />
        </RadioCtn>
      </LabelCtn>
    </>
  )
}

const RadioCtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  width: 100%;
  transition: 200ms;
  border-color: #717171;
  padding: 3px;
  color: #222;
  text-align: start;
  cursor: pointer;
  &::before {
    content: '${(props) => props.text}';
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    font-weight: 600;
    padding-left: 60px;
    font-size: 13px;
  }
  &:checked {
    background-color: var(--brown-100);
  }
`
const Icon = styled.img`
  object-fit: contain;
  object-position: left;
  padding: 15px;
`
const IconCtn = styled.div`
  left: 0px;

  position: absolute;
`

const LabelCtn = styled.label`
  cursor: pointer;
  position: relative;

  background-color: var(--lightbrown-200);
`
