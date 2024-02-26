import styled from "styled-components";


const TabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px;
    max-width: 352px;
    width: 100%; //резиновый элемент к родителю
  }
`

const ListItem = styled.li `
    
`

export const S ={
    TabMenu,
    ListItem,
}
