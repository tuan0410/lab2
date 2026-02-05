"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin")
    } else if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp")
    } else {
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      setError("")
      alert("Đăng ký thành công!")
      window.location.href = "/login"
    }
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

        <CardContent className="space-y-4">
          <div>
            <Label className="block mb-1">Email</Label>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label className="block mb-1">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <Label className="block mb-1">Confirm Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button className="w-full" onClick={handleRegister}>
            Register
          </Button>

          <p className="text-center text-sm text-gray-300">
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-white underline hover:text-red-400">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
