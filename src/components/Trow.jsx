export function Trow({cols}) {

  return (
    <tr>{cols.map(e => <td>{ e}</td>)}</tr>    
  )
}