import styled from 'styled-components';

export const TableHeader = styled.thead`
width: 100%;

`

export const GridItemTitle = styled.th`
color: #FFF;
width: 100%;
min-width: 100px;
height: 60px;
padding: 0 22px;
background-color: #393634;
&:first-child {
    border-top-left-radius: 8px;
}
&:last-child {
    border-top-right-radius: 8px;
}
`