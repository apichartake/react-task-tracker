import PropTypes from 'prop-types'

const Button = ({text,color,onClick}) => {
    // const on2Click = (e)=> console.log(e)
    return <button 
    className="btn"
    style={{backgroundColor:color}}
    onClick={onClick}>
        {text}</button>
    
}
Button.defaulProbs={
    color:'steelblue',
    text:'Hello'
}
Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
