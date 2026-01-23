import type { Metadata } from 'next'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer } from '@/components/animations/stagger-container'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Velocrux',
  description: 'Learn about our mission to revolutionize AI automation and empower businesses worldwide.',
}

const team = [
  { name: 'Sarah Johnson', title: 'CEO & Founder', avatar: '👩‍💼' },
  { name: 'Michael Chen', title: 'CTO', avatar: '👨‍💻' },
  { name: 'Emma Williams', title: 'Head of Product', avatar: '👩‍💻' },
  { name: 'David Martinez', title: 'Head of Engineering', avatar: '👨‍🔧' },
  { name: 'Lisa Anderson', title: 'Head of Design', avatar: '👩‍🎨' },
  { name: 'James Wilson', title: 'Head of Marketing', avatar: '👨‍💼' },
]

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to deliver the best AI automation solutions.',
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Our customers\' success is our success. We\'re committed to providing exceptional support and value.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'We foster a culture of growth, encouraging our team to learn, experiment, and innovate daily.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'We believe in open communication, honest feedback, and building trust with our users and team.',
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
              Building the future of
              <br />
              <span className="text-gradient">AI automation</span>
            </h1>
            <p className="text-xl text-neutral-light-gray leading-relaxed">
              Velocrux was founded with a simple mission: to make powerful AI automation accessible to everyone, from startups to enterprises.
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
                <div className="space-y-4 text-neutral-light-gray leading-relaxed">
                  <p>
                    Founded in 2024, Velocrux emerged from a simple observation: businesses were drowning in repetitive tasks while AI technology sat on the sidelines.
                  </p>
                  <p>
                    Our founders, a team of engineers and product experts, saw an opportunity to bridge this gap. They envisioned a platform that could harness the power of AI without requiring technical expertise.
                  </p>
                  <p>
                    Today, we serve over 150,000 users worldwide, helping them automate workflows, boost productivity, and focus on what truly matters—growing their businesses.
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
