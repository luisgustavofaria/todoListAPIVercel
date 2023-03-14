
interface TodoProps{
    title: string;
    description?: string;
    color?: string;
    favorited: boolean;
    type: "newtodo"|"existingtodo"
}

export default function Todo( {type}:TodoProps ) {
    return (
      <div>
        
      </div>
    )
  }