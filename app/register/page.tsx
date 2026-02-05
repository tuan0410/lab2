"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = () => {
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const exist = users.find((u: any) => u.email === email)
    if (exist) {
      setError("Account already exists")
      return
    }

    users.push({ email, password })
    localStorage.setItem("users", JSON.stringify(users))

    alert("Register success")
    router.push("/login")
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <Card className="relative z-10 w-full max-w-md bg-black/60 text-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <Label className="mb-1 block">Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <Label className="mb-1 block">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-400">{error}</p>}

          <Button className="w-full" onClick={handleRegister}>
            Register
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
