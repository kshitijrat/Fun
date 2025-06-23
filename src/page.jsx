import React, { useState } from "react"
import { Heart, Sparkles, Gift, Laugh } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"


export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [currentJoke, setCurrentJoke] = useState(0)

  const jokes = [
    "I Fuck You",
    "Batao ek Ichha jo puri kru",
    "Dudu 🍼🍼🍼🍼🍼🍼",
    "Send me Kiss Clip💋💋",
    "Truth Dare Khele Romantic Wala",
  ]
  


  const handleLogin = (e) => {
    e.preventDefault()
    if (username === "kshitij_x_neetu@kshitij.com" && password === "@neetu09") {
      setIsLoggedIn(true)
    } else {
      alert("BC Shi Se Daal ! Gand Maar Dunga")
    }
  }

  const nextJoke = () => {
    setCurrentJoke((prev) => (prev + 1) % jokes.length)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        <Card className="w-full max-w-md bg-black/20 backdrop-blur-lg border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/20 animate-bounce-slow">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              🎭 Comedy Central 🎭
            </CardTitle>
            <p className="text-cyan-300 animate-fade-in">Enter the secret code to unlock the fun!</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-cyan-300 font-semibold">
                  Username " kshitij_x_neetu@kshitij.com "
                </Label>
                <Input
                  id="username"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-black/30 border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                  placeholder="kshitij_x_neetu@kshitij.com"

                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-cyan-300 font-semibold">
                  Secret Code " @neetu09 "
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/30 border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                  placeholder="@neetu09"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/30"
              >
                <Gift className="mr-2 h-5 w-5" />
                Chal! 🎉
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse mb-4">
            🎪 Welcome to Kshitij's Zone! 🎪
          </h1>
          <p className="text-cyan-300 text-xl animate-fade-in">
            Neetu... Nunnu Dekhna hai ky... Vertical lip Batao baby
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/20 backdrop-blur-lg border-2 border-cyan-400/30 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Laugh className="h-12 w-12 text-cyan-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">{jokes.length}</h3>
              <p className="text-cyan-300">Funny Jokes</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-lg border-2 border-purple-400/30 shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">∞</h3>
              <p className="text-purple-300">Friendship Level</p>
            </CardContent>
          </Card>

          <Card className="bg-black/20 backdrop-blur-lg border-2 border-pink-400/30 shadow-lg shadow-pink-400/20 hover:shadow-pink-400/40 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-pink-300">Fun Guaranteed</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black/20 backdrop-blur-lg border-2 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-500">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white mb-4">🎭 Today's Special Joke 🎭</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg p-8 mb-6 border border-cyan-400/30">
                <p className="text-2xl text-white font-medium leading-relaxed animate-fade-in">{jokes[currentJoke]}</p>
              </div>

              <Button
                onClick={nextJoke}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-400/30 text-lg"
              >
                <Sparkles className="mr-2 h-6 w-6" />
                Chal Agla Dekh
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/20 backdrop-blur-lg border-2 border-pink-400/30 shadow-lg shadow-pink-400/20">
          <CardContent className="p-6 text-center">
            <p className="text-pink-300 text-lg font-medium animate-pulse">
              Made with 💖 for the most awesome friend ever!
            </p>
            <p className="text-cyan-300 mt-2">Hope these jokes brighten your day! 🌟</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
