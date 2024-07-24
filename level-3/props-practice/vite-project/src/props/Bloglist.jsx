

export default function Bloglist(props){
    return(
        <div className='blogList'>
            <a href="" className="blogTitleLink"><p className = 'blogTitle'>{props.item.title}</p>
            <p className='subtitle'>{props.item.subTitle}</p></a>
            <p className='authorDate'> posted by <a href='' className="authorLink">{props.item.author}</a> on {props.item.date}</p>
        </div>
        )
    }
            
        