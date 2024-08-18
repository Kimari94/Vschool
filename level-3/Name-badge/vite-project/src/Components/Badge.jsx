

export default function Badges(props){

    const {badges} = props


    const badgeElements = badges.map((badge, i) => {
        return (
            <div className="badgeContainer">
            <div key = {i} className="badges">
                <h1>{badge.name}</h1>
                <h3>Description: {badge.description}</h3>
                <p>Phone Number: {badge.phoneNumber}</p>
                <p>User Type: {badge.userType}</p>

            </div>
            </div>
        )
    })

    return (
        <div>
            <h2>BADGES:</h2>
            {badgeElements}
        </div>
    )
}