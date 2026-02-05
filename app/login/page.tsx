"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    )

    if (!user) {
      setError("Wrong email or password")
    } else {
      alert("Login success")
      router.push("/") // về Home MU Store
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <Card className="relative z-10 w-full max-w-md bg-black/60 text-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
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

          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>

          <p className="text-center text-sm mt-2">
            Don’t have an account?{" "}
            <Link href="/register" className="text-white underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
