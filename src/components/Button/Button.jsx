import './button.css'

function Button({children, callback=null}) {
    return (
        <button onClick={callback} className='btn'>
            <span className='span'> {children} </span>
        </button>
    )
}

export default Button