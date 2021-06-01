import { ReactChild } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Tooltip } from './Tooltip'
import { colors } from '../../theme'

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${colors.black};
  cursor: pointer;
  border-radius: 20%;
  svg {
    color: #9aa2c2;
  }
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  margin: 0.25rem auto;
  cursor: pointer;
  border-radius: 20%;
  &:hover {
    background: ${colors.gray4};
    ${Icon} {
      svg {
        color: ${colors.white};
      }
    }
  }
`

const StyledLink = styled(NavLink)`
  width: 100%;
  &.active {
    ${Wrapper} {
      background: ${colors.gray5};
    }
  }
`

interface Props {
  to: string
  children: ReactChild
  tooltip: string
  tooltipId: string
}

export function NavIcon({ to, children, tooltip, tooltipId }: Props) {
  return (
    <StyledLink to={to} activeClassName="active">
      <Wrapper data-tip data-for={tooltipId}>
        <Tooltip text={tooltip} tooltipId={tooltipId} />
        <Icon>{children}</Icon>
      </Wrapper>
    </StyledLink>
  )
}
