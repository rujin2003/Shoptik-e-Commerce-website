import { useAuth0 } from "@auth0/auth0-react"
import { BsPersonPlus, BsPersonDash } from "react-icons/bs"

const ProfileButton = () => {
  const { user, loginWithRedirect, logout } = useAuth0()
  return (
    <div className="flex items-center space-x-8">
      {user ? (
        <button
          title="Logout"
          className="flex hover:text-primary"
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } })
          }}
        >
          <BsPersonDash className="h-6 w-6" />
        </button>
      ) : (
        <button
          title="Login"
          className="flex"
          onClick={() => loginWithRedirect()}
        >
          <BsPersonPlus className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default ProfileButton
