"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    )

    if (!user) {
      alert("Wrong email or password")
    } else {
      alert("Login success")
      router.push("/") // về Home
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
