import styled from '@emotion/styled'
import { Layout } from 'antd'

export const StyledSider = styled(Layout.Sider)`
  &&& {
    height: calc(100% - 64px);  /* viewport height minus header height */
    position: sticky;
    top: 64px;
  }
`
