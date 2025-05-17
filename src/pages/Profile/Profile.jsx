import { Link } from "react-router-dom"

export const Profile = () => {
  return (
    <>
    <div className="profile">
    <p>Rower Diaz</p>
    <p>correo: r.diaz@invalid.com</p>
    <Link to="/" className="btn btn-light"><span className="bProfile">🔒Logout</span></Link>
    </div>
    </>
  )
}

