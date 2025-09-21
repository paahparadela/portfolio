import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-foreground">Paloma</div>
            <div className="flex gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 py-20 md:py-32 pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src="/Profile.jpeg"
                  alt="Paloma Paradela - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold text-balance">Paloma Paradela</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">Software Engineer | QA | Java | DevOps</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Crafting clean, well-tested code to build scalable applications and explore the latest technologies.
            </p>

            <div className="max-w-3xl mx-auto pt-4">

              <p className="text-muted-foreground leading-relaxed">
                Experienced software engineer with 10+ years in Java development, DevOps, and software testing. 
                Skilled in building scalable REST APIs, Microservices, and CI/CD pipelines, with expertise in automated, performance, end-to-end, functional, and integration testing. 
                Passionate about leading teams, mentoring future tech talent, and driving high-quality software delivery.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/paahparadela" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/paloma-paradela/?locale=en_IE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:paradela154@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            <Badge variant="secondary">Java</Badge>
            <Badge variant="secondary">SpringBoot</Badge>
            <Badge variant="secondary">Microservices</Badge>
            <Badge variant="secondary">REST API</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">NoSQL</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">DevOps</Badge>
            <Badge variant="secondary">Unix</Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">TaskFlow</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View TaskFlow on GitHub"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>A modern project management tool built with Next.js and PostgreSQL</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <img
                      src="/modern-project-dashboard.png"
                      alt="TaskFlow project screenshot"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">WeatherWise</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View WeatherWise on GitHub"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>
                  Beautiful weather app with real-time forecasts and location-based insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <img
                      src="/clean-weather-app-interface-with-forecast-cards.png"
                      alt="WeatherWise app screenshot"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Weather API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">CodeSnippet</CardTitle>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View CodeSnippet on GitHub"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>
                  Developer tool for organizing and sharing code snippets with syntax highlighting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <img
                      src="/code-editor-interface-with-syntax-highlighting.png"
                      alt="CodeSnippet tool screenshot"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>

          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" asChild className="group bg-transparent">
              <a
                href="https://github.com/paahparadela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group bg-transparent">
              <a
                href="https://www.linkedin.com/in/paloma-paradela/?locale=en_IE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group bg-transparent">
              <a href="mailto:paradela154@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5 group-hover:text-accent transition-colors" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Paloma Paradela.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
