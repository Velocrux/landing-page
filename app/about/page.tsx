import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Velocrux Software Lab',
  description: 'Learn about our mission to innovate through AI development, custom products, and digital services.',
}

const team = [
  { name: 'Alex Rodriguez', title: 'Founder & CEO', avatar: '👨‍💼' },
  { name: 'Dr. Sarah Kim', title: 'Head of AI Research', avatar: '👩‍🔬' },
  { name: 'Michael Chen', title: 'Lead Software Architect', avatar: '👨‍💻' },
  { name: 'Emma Thompson', title: 'Product Innovation Director', avatar: '👩‍💻' },
  { name: 'David Martinez', title: 'Engineering Manager', avatar: '👨‍🔧' },
  { name: 'Lisa Park', title: 'UX/UI Design Lead', avatar: '👩‍🎨' },
]

const values = [
  {
    icon: Target,
    title: 'Innovation Excellence',
    description: 'We push technological boundaries to create breakthrough AI solutions and cutting-edge software products.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We collaborate closely with clients, understanding their vision and delivering solutions that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Research & Development',
    description: 'We invest heavily in R&D, exploring emerging technologies and developing proprietary solutions.',
  },
  {
    icon: Heart,
    title: 'Quality Craftsmanship',
    description: 'We take pride in writing clean code, building robust systems, and delivering products that stand the test of time.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering the future of
              <br />
              <span className="text-gradient">Software Innovation</span>
            </h1>
            <p className="text-xl text-theme-secondary leading-relaxed">
              Velocrux is a cutting-edge software lab dedicated to transforming ideas into powerful digital solutions through AI, custom development, and innovative services.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-theme-secondary leading-relaxed">
                  <p>
                    Founded by a team of passionate technologists, Velocrux emerged from the vision to create a software lab that bridges the gap between cutting-edge technology and real-world business needs.
                  </p>
                  <p>
                    We specialize in three core areas: AI development for intelligent solutions, custom product development for unique business requirements, and comprehensive digital services that support growth and innovation.
                  </p>
                  <p>
                    Today, we partner with startups, enterprises, and organizations worldwide, delivering solutions that drive digital transformation and create lasting competitive advantages.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden glass-morphism p-1 glow-cyan">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary-cyan/20 to-accent-orange/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-2xl font-bold">150K+ Users</p>
                    <p className="text-neutral-medium-gray">Worldwide</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary-navy-light">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission & <span className="text-gradient">Vision</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-primary-cyan/20 flex items-center justify-center mb-6">
                    <Target className="text-primary-cyan" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-neutral-light-gray leading-relaxed">
                    To empower every business with intelligent automation tools that are simple to use, powerful in capability, and accessible to all—regardless of technical expertise.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="h-full">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-accent-orange/20 flex items-center justify-center mb-6">
                    <Lightbulb className="text-accent-orange" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-neutral-light-gray leading-relaxed">
                    A world where AI agents handle the mundane, freeing humans to focus on creativity, strategy, and meaningful work that drives real innovation.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary-navy">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={value.title} className="h-full text-center hover:scale-105 transition-transform duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-cyan/20 to-accent-orange/20 flex items-center justify-center mb-4">
                      <IconComponent className="text-primary-cyan" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-neutral-light-gray text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-primary-navy-light">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-neutral-light-gray text-lg max-w-2xl mx-auto">
              We&apos;re a diverse group of engineers, designers, and innovators passionate about AI automation.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-3">{member.avatar}</div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-neutral-medium-gray">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}
