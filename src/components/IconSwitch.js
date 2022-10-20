import './IconSwitch.css'

function IconSwitch({icon, onSwitch}){
    return(
        <div className='headerIcon'>
            <button className='material-icons' onClick={onSwitch}>{icon}</button>
        </div>
    )
}

export default IconSwitch;