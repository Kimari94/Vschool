import react from 'react'

export default function Footer(props){
    return(
        <footer>
            <ul className='socialMedia'>
                <li><img src="https://i.pinimg.com/736x/1f/94/2d/1f942dac3e693f6e885e68b210ab662f.jpg" alt="twitter" className='twitter' /></li>
                <li><img src="https://img.freepik.com/premium-vector/facebook-vector-social-media-icon_459124-520.jpg?size=626&ext=jpg&ga=GA1.1.1630614506.1721801481&semt=sph" alt="facebook" className='facebook' /></li>
                <li><img src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296968.jpg?ga=GA1.1.1630614506.1721801481&semt=ais_user" alt="reddit" className='reddit' /></li>
            </ul>
            <p className='copyright'>CopyRight ©  David Bowen 2023</p>
        </footer>
    )
}