import styled from '@emotion/styled'
import { Layout } from 'antd'

const StyledSider = styled(Layout.Sider)`
  &&& {
    height: calc(100% - 64px);  // viewport height minus header height
    position: sticky;
    top: 64px;
  }
`

const StyledHeader = styled(Layout.Header)`
  position: sticky;  // from https://ant.design/components/layout#components-layout-demo-fixed
  top: 0;
  z-index: 1;
  background-color: white;
`

const StyledContent = styled(Layout.Content)`
  overflow: auto;
  background-color: white;
`

const StyledFooter = styled(Layout.Footer)`
  background-color: #f4f4f4;
`

const StyledImg = styled.img`
  width: 100%;
`

export { StyledSider, StyledHeader, StyledContent, StyledFooter, StyledImg }
