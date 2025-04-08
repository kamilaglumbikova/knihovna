import { signOut } from "@/auth"
import { Button } from "../ui/button"
 
export default function Logout() {
  return (
    <div>
      <form
        className="mb-10"
        action={async (formData) => {
          "use server"
          await signOut()
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  )
}