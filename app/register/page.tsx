"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = () => {
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.")
      return
    }

    const user = { email, password }
    localStorage.setItem("user", JSON.stringify(user))

    alert("Đăng ký thành công!")
    router.push("/")
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <Card className="relative z-10 w-full max-w-md bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button className="w-full" onClick={handleRegister}>
            Register
          </Button>

          <p className="text-center text-sm text-gray-300">
            Đã có tài khoản?{" "}
            <Link href="/" className="text-white underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
