import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuthProvider"
import { useRouter } from "next/router"

const SignUpForm: React.FC = () => {
  const auth = useAuth()
  const router = useRouter()

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data: [string]) => {
    return auth.signUp(data).then((user: any) => {
      console.log(user)
      router.push("/login")
    })
  }
  const reCorto: RegExp = /\S+@\S+\.\S+/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          ref={register({
            required: "Please enter an name",
          })}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({
              required: "Please enter an email",
              pattern: {
                value: reCorto,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <span>
          <button type="submit">Sign up</button>
        </span>
      </div>
    </form>
  )
}
export default SignUpForm