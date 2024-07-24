

export default function Header(){
    return (
        <>
        <header>
        <nav>
            <div className='start'><a href='' className='link'>Start Bootstrap</a></div>
            <ul className='navBar'>
                <li><a href="" className='link'>Home</a></li>
                <li><a href="" className='link'>About</a></li>
                <li><a href="" className='link'>Sample Post</a></li>
                <li><a href="" className='link'>Contact</a></li>
            </ul>
        </nav>
        <div>
        <h1 className='cleanBlog'>Clean Blog</h1>
        <p className='blogSubtext'>A Blog Theme by Start Bootstrap</p>
        </div>
        </header>
        </>
    )
}