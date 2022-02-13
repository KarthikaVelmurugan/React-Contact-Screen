import React from 'react'

export default function obSearch() {
    let data=[
        {
            "name":"karthika",
            "p_name":"velmurugan",
            "age":"13"
        },
        {
            "name":"Sobha",
            "p_name":"Sobha",
            "age":"13"
        },
        {
            "name":"JK",
            "p_name":"JK",
            "age":"13"
        }
    ];
class Search extends React.Component{
    render(){
        return(

<div>
    <input placeholder='Search'/>
    <div>
      {data.map((value)=>(
<h4>{value.name + value.p_name}</h4>
      ))}
    </div>
</div>
        );
    }
}

}
