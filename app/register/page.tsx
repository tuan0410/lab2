"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const exist = users.find((u: any) => u.email === email)
    if (exist) {
      alert("Account already exists")
      return
    }

    users.push({ email, password })
    localStorage.setItem("users", JSON.stringify(users))

    alert("Register success")
    router.push("/login")
  }

  return (
    <div>
      <h1>Register</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}
