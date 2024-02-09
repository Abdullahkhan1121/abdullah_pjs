fetch("https://fakestoreapi.com/products").then((data)=>{
    // console.log(data);
    return data.json();
}).then((ObjectData)=>{
    console.log(ObjectData[0].title);
    let tableData=""
    ObjectData.map((values)=>{
        tableData+= `   <tr>
        <td>${values.title}</td>
          <td>${values.description}</td>
          <td>${values.price}</td>
          <td><img src="${values.img}"/></td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})



