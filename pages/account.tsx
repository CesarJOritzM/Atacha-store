import { useAuth } from "../hooks/useAuth"

const Account: React.FC = () => {
  const auth = useAuth()
  if (!auth.user) return null
  return (
    <div>
      <h2>{`Welcome ${auth.user.name}!`}</h2>
      <p>{`You are logged in with ${auth.user.email}`}</p>
    </div>
  )
}
export default Account
