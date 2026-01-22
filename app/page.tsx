import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <Card className="relative z-10 w-full max-w-md
        bg-black/60
        backdrop-blur-md
        border border-white/20
        text-white
        shadow-2xlelative z-10 w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="form-field">
            <Label>Email</Label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="form-field">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  )
}
