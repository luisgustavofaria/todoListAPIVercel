import CardsTodo from "./CardsTodo";
import {  ContainerTodo } from "./styles";




export default function Todo({}) {
  return (
    <ContainerTodo>
      <CardsTodo favorited={false} type={"newCard"}/>
      <CardsTodo favorited={true} type={"existingtodoCard"}/>
      <CardsTodo favorited={false} type={"existingtodoCard"}/>
      <CardsTodo favorited={false} type={"existingtodoCard"}/>
    </ContainerTodo>    
  )
}
  