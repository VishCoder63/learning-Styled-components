import styled from 'styled-components'

export const Table = styled.table`
width:60%;
height:200px;
margin:50px;
padding-bottom:1px;
background-color:#01987A;
border-top-left-radius:20px;
  border-top-right-radius:20px;
font-size:20px;
&>thead td{
  color:white;
}
& td{
  padding:20px;
}
&>tbody>tr:nth-child(2n){
  background-color:#F3F3F3;  
}
&>tbody>tr:nth-child(2n+1){
  background-color:#ffff;  
}
&>tbody tr:hover{
  color:#01987A;
  font-weight:700;
}
&>tbody td{
  border-bottom:2px solid #F3F3F3;
  
}

`