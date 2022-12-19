export function removeColumn(columns,id){
    let itemIndex = [...columns].findIndex(col=>col.id===id)
    columns.splice(itemIndex,1)
    return (columns)

}