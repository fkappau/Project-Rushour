
function Button (props,onChange,className,onClick){
    return(
        <button style={{
            backgroundColor:props.color,
            color:'peach',
            width:props.width,
            height:'40px',
            borderRadius:props.border,
            boxShadow:props.BS,
            borderStyle:'dotted',
            border:props.border,
            marginLeft:props.marginL,
            alignSelf:props.alignSelf,
            outline:"none",
            marginTop:props.marginT

}}
onChange={onChange} className = {className} onClick={onClick} >
            {props.text}
            {/* boxShadow:'2px 2px 2px', */}
        </button>
    )
}
export default Button