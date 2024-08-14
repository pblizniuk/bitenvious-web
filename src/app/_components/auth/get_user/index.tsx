import { auth } from "@/auth"
import User from "@/app/_components/auth/user"

const GetUser = async () => {
  const session = await auth()

  return (
    <User session={session} />
  )
}

export default GetUser