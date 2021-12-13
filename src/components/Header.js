import Button from "./Button"




const Header = ({title,onToggle,toggle}) => {
    
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button 
            color={toggle?'red':'green'} 
            text={toggle?'Close':'Add'}
            onClick={onToggle}
            />
        </div>
    )
}


export default Header
