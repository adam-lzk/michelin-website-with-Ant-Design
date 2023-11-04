import styled from '@emotion/styled'
import { Card, Layout } from 'antd'

export const StyledSider = styled(Layout.Sider)`
  &&& {
    height: calc(100% - 64px);  // viewport height minus header height
    position: sticky;
    top: 64px;
  }
`

export const StyledHeader = styled(Layout.Header)`
  position: sticky;  // from https://ant.design/components/layout#components-layout-demo-fixed
  top: 0;
  z-index: 1;
  background-color: white;
`

export const StyledContent = styled(Layout.Content)`
  overflow: auto;
  background-color: white;
`

export const StyledFooter = styled(Layout.Footer)`
  background-color: #f4f4f4;
`

export const StyledImg = styled.img`
  width: 100%;
`

export const StyledCard = styled(Card)`
// margin: 10px;
`
