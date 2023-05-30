import Logo from '../../Images/React.png'

const Header = () =>
{
    return(
        <div className='py-2 p1-2' style={{borderBottom:'1px solid #777'}}>
            <img src={Logo} alt="" style={{height:"35px",verticalAlight:"top"}} />
            <span className='h2 pt-4 m-2 text-white-50'> React Course - ContactOPedia</span>
        </div>
    )
}

export default Header