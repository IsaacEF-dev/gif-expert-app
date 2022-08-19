
export const GifComponent=({title,imagen})=>{
    return(
        <div className="card">
            <img src={imagen} title={title}></img>
            <p>{title}</p>
        </div>
    )
}