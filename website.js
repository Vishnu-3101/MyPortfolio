/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7M3MegTU2Ur
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white">
      <div className="flex">
        <aside className="w-60 bg-[#161b22] p-5">
          <nav>
            <ul>
              <li className="mb-4">
                <HomeIcon className="text-white" />
                <span>Home</span>
              </li>
              <li className="mb-4">
                <TrendingUpIcon className="text-white" />
                <span>Trending</span>
              </li>
              <li className="mb-4">
                <CodeIcon className="text-white" />
                <span>Snippets</span>
              </li>
              <li className="mb-4">
                <VideoIcon className="text-white" />
                <span>Videos</span>
              </li>
            </ul>
          </nav>
          <div className="mt-10">
            <p className="mb-4">Socials</p>
            <ul>
              <li className="mb-4">
                <InstagramIcon className="text-white" />
                <span>Instagram</span>
              </li>
              <li className="mb-4">
                <GithubIcon className="text-white" />
                <span>Github</span>
              </li>
              <li className="mb-4">
                <YoutubeIcon className="text-white" />
                <span>Youtube</span>
              </li>
              <li className="mb-4">
                <SquareStackIcon className="text-white" />
                <span>Stack overflow</span>
              </li>
              <li className="mb-4">
                <LinkedinIcon className="text-white" />
                <span>Linkedin</span>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 p-8">
          <header className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Neeraj Walia" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>NW</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Neeraj Walia</h1>
                <p className="text-sm text-gray-400">@ezSnippet</p>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">Contact Me</Button>
          </header>
          <section>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-4 gap-6">
              <Card className="bg-[#1c1e24]">
                <CardContent>
                  <img
                    alt="Discord Clone"
                    className="rounded-t-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mt-4">Discord Clone</h3>
                  <p className="text-sm text-gray-400">Next.js 13, React Hook Form, Zustand, Shadcn, Typescript</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1e24]">
                <CardContent>
                  <img
                    alt="Spotify Clone"
                    className="rounded-t-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mt-4">Spotify Clone</h3>
                  <p className="text-sm text-gray-400">
                    Next.js 13, React Hook Form, Zustand, Radix UI, Typescript, Tailwind CSS
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1e24]">
                <CardContent>
                  <img
                    alt="Amazon Clone"
                    className="rounded-t-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mt-4">Amazon Clone</h3>
                  <p className="text-sm text-gray-400">
                    NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1e24]">
                <CardContent>
                  <img
                    alt="DALL-E Clone"
                    className="rounded-t-md"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mt-4">DALL-E Clone</h3>
                  <p className="text-sm text-gray-400">OpenAI, Nodejs, Express, Mongoose, ReactJS, Tailwind CSS</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function SquareStackIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
