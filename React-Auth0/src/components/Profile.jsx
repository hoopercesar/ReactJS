import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {

    // esta función entrega los datos del usuario
   const {user} = useAuth0();

  return (
    <div>
        {JSON.stringify(user)}
    </div>
  )
}

export default Profile