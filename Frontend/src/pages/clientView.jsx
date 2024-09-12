function ClientView(){

    return(
        <>
        <div>
            <div style={{width:300, height:400, backgroundColor:"brown", opacity:0.5}}>
            <h1>Pietermaritzburg</h1>
            <div style={{width:150, height:150, backgroundColor:"blue"}}></div>
            <div style={{display:"flex",width:280, height:100, backgroundColor:"yellow"}}>
                <div style={{width:100, height:100, backgroundColor:"black"}}></div>
                <p>Humadity</p>
                <div style={{width:100, height:100, backgroundColor:"green"}}></div>
                <p>Temparature</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default ClientView