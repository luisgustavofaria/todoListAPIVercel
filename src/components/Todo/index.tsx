import CardsTodo from "./CardsTodo";
import {  ContainerTodo } from "./styles";




export default function Todo({}) {
  return (
    <ContainerTodo>
      <CardsTodo favorited={false} type={"newCard"} button={true}/>
      <CardsTodo favorited={true} type={"existingtodoCard"}/>
      <CardsTodo favorited={false} type={"existingtodoCard"}/>
      <CardsTodo favorited={false} type={"existingtodoCard"}/>
    </ContainerTodo>    
  )
}
  