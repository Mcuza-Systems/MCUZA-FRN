'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code2, Cpu, Brain, Settings, CheckCircle, Star, Users, TrendingUp, Clock, FileText, Github, BookOpen, Terminal, Play, Folder, File, Monitor, AlertCircle, Command, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "AI-Powered Code Generation",
      description: "Generate optimized firmware, HAL drivers, and protocol implementations with intelligent AI assistance."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "MCU Compatibility",
      description: "Support for 100+ microcontrollers with automatic porting and optimization for your target platform."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Edge AI Integration",
      description: "Deploy and optimize machine learning models for edge devices with automatic compression and validation."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "FPGA Workflows",
      description: "Complete HDL generation, bitstream creation, and automated testbench development for FPGA projects."
    }
  ];

  const techFeatures = [
    {
      title: "Open Source Collaboration",
      description: "Contribute to our growing library of drivers, HAL implementations, and firmware modules. Join a community of engineers building the future together."
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Our tools work seamlessly across major operating systems and development environments. Use your preferred IDE or workflow."
    },
    {
      title: "Extensive MCU Support",
      description: "From popular ARM Cortex-M series to specialized RISC-V processors, we support a wide range of microcontrollers across different architectures."
    },
    {
      title: "Community Driven",
      description: "Regular hackathons, challenges, and community events to solve real-world electronics problems together."
    }
  ];

  const useCases = [
    {
      title: "Research & Education",
      description: "Perfect for academic research, teaching embedded systems, and student projects. Accelerate learning with AI-assisted development.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "IoT Development",
      description: "Build connected devices and IoT solutions quickly with ready-to-use protocol implementations and sensor integrations.",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: "Robotics & Automation",
      description: "Develop control systems, motor drivers, and sensor fusion algorithms for robotics applications.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Medical Devices",
      description: "Prototype medical and healthcare electronics with precision and reliability. Focus on innovation while we handle the implementation.",
      icon: <Brain className="h-6 w-6" />
    }
  ];

  const contributions = [
    {
      title: "Driver Repository",
      description: "Contribute to our open-source driver repository for various sensors, actuators, and peripherals."
    },
    {
      title: "Educational Resources",
      description: "Share your knowledge through tutorials, workshops, and documentation to help others learn."
    },
    {
      title: "Testing & Validation",
      description: "Help improve our tools by testing implementations on different hardware and providing feedback."
    },
    {
      title: "Code Optimization",
      description: "Contribute optimizations for specific MCUs or applications to improve performance and efficiency."
    }
  ];

  return (
    <div className="flex flex-col bg-[#0a0a0a] text-white min-h-screen">
      {/* Aggressive Landing Page Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,65,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(64,224,208,0.08),transparent_50%)]" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ff41]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#40e0d0]/5 rounded-full blur-3xl animate-pulse" />
        </div>
        
        {/* Matrix Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00ff41]/20 to-[#40e0d0]/20 border border-[#00ff41]/30 rounded-full">
              <Zap className="w-4 h-4 text-[#00ff41]" />
              <span className="text-[#00ff41] font-semibold text-sm">AI-Powered Electronics Innovation</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-[#00ff41] to-[#40e0d0] bg-clip-text text-transparent">
              Unleash Your
            </span>
            <span className="block bg-gradient-to-r from-[#00ff41] via-[#40e0d0] to-white bg-clip-text text-transparent mt-4">
              Electronics Innovation
            </span>
            <span className="block text-white mt-4 text-4xl md:text-6xl lg:text-7xl">
              with <span className="neon-glow text-[#00ff41]">MCUZA</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The ultimate AI-powered platform for embedded systems, edge AI, and FPGA workflows.
            Transform your ideas into reality with intelligent code generation and rapid prototyping.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/rapid-prototyping" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff41] to-[#40e0d0] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-[#0a0a0a] border border-[#00ff41] rounded-xl leading-none flex items-center gap-3">
                <Play className="w-5 h-5 text-[#00ff41]" />
                <span className="text-white font-semibold text-lg">Start Building Now</span>
                <ArrowRight className="w-5 h-5 text-[#00ff41] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="/docs" className="group px-8 py-4 border border-gray-600 rounded-xl hover:border-[#40e0d0] transition-all duration-300 flex items-center gap-3">
              <Monitor className="w-5 h-5 text-[#40e0d0]" />
              <span className="text-white font-semibold text-lg">View Documentation</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-2 group-hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-gray-400 text-lg">
                MCU Types Supported
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#40e0d0] mb-2 group-hover:scale-110 transition-transform">
                99.8%
              </div>
              <div className="text-gray-400 text-lg">
                Code Accuracy Rate
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#ff6b35] mb-2 group-hover:scale-110 transition-transform">
                50x
              </div>
              <div className="text-gray-400 text-lg">
                Faster Development
              </div>
            </div>
          </div>
          
          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group p-6 bg-gradient-to-b from-[#1a1a1a]/50 to-[#0a0a0a]/50 border border-[#333] rounded-xl hover:border-[#00ff41]/50 transition-all duration-300">
              <Code2 className="w-8 h-8 text-[#00ff41] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">AI Code Generation</h3>
              <p className="text-gray-400">Generate optimized firmware and drivers with intelligent AI assistance</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-b from-[#1a1a1a]/50 to-[#0a0a0a]/50 border border-[#333] rounded-xl hover:border-[#40e0d0]/50 transition-all duration-300">
              <Brain className="w-8 h-8 text-[#40e0d0] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Edge AI Integration</h3>
              <p className="text-gray-400">Deploy and optimize ML models for edge devices automatically</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-b from-[#1a1a1a]/50 to-[#0a0a0a]/50 border border-[#333] rounded-xl hover:border-[#ff6b35]/50 transition-all duration-300">
              <Zap className="w-8 h-8 text-[#ff6b35] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Rapid Prototyping</h3>
              <p className="text-gray-400">From idea to working prototype in minutes, not months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for Modern Electronics Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered tools designed for engineers, researchers, and innovators who demand precision and efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 group">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Powerful Tools for Modern Electronics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build, test, and deploy electronics projects with AI assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Complete Product Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From embedded systems to FPGA workflows, we've got you covered
            </p>
          </div>
          
          <Tabs defaultValue="embedded" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger value="embedded">Embedded Systems</TabsTrigger>
              <TabsTrigger value="edge-ai">Edge AI</TabsTrigger>
              <TabsTrigger value="fpga">FPGA Workflows</TabsTrigger>
            </TabsList>
            
            <TabsContent value="embedded" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Intelligent Drivers Generator</CardTitle>
                    <CardDescription>
                      AI-powered peripheral drivers for any MCU
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Auto-generated from datasheets</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Optimized for performance</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Production-ready code</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Smart HAL Synthesizer</CardTitle>
                    <CardDescription>
                      Hardware abstraction layers made simple
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Cross-platform compatibility</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Modular architecture</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Easy integration</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Protocol Generator</CardTitle>
                    <CardDescription>
                      Communication protocols for IoT devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> MQTT, HTTP, CoAP support</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Security built-in</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Low power optimized</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="edge-ai" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Smart Model Compression</CardTitle>
                    <CardDescription>
                      Optimize ML models for edge deployment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> 90% size reduction</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Minimal accuracy loss</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Hardware acceleration</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>EdgeAI Model Validator</CardTitle>
                    <CardDescription>
                      Validate models before deployment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Real-time performance metrics</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Memory usage analysis</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Power consumption estimates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="fpga" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>HDL Code Generation</CardTitle>
                    <CardDescription>
                      Automated Verilog and VHDL generation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> High-level synthesis</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Optimized for timing</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Industry standards</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>BitStream Generation</CardTitle>
                    <CardDescription>
                      Ready-to-deploy FPGA configurations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Multiple FPGA families</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Automated place & route</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Timing closure</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Test Bench Automation</CardTitle>
                    <CardDescription>
                      Comprehensive verification suites
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Automated test generation</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Coverage analysis</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Regression testing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Rapid Prototyping Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              🎯 Our Flagship Feature
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              One Prompt. Rapid Prototyping. Redefined.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Describe your project in simple words – we'll handle the rest. Get complete solutions in minutes, not months.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Auto-Generated Firmware</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete, production-ready firmware tailored to your specific requirements and hardware configuration.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle>Complete Bill of Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time pricing and availability for all components, with direct supplier links and alternative suggestions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <CardTitle>Ready-to-Use Schematic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional-grade schematics with proper component placement, routing suggestions, and design rule checks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/rapid-prototyping">
                Try Rapid Prototyping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Powering Innovation Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic research to cutting-edge product development, MCUZA accelerates innovation in every field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Contribution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Join Our Community of Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MCUZA is more than a platform—it's a collaborative ecosystem where engineers share knowledge, contribute code, and shape the future of electronics development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contributions.map((contribution, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{contribution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {contribution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl">
              <Github className="h-8 w-8 text-gray-700" />
              <div className="text-left">
                <div className="font-semibold text-gray-900">Open Source Collaboration</div>
                <div className="text-gray-600">Contribute to our repositories and help build the future</div>
              </div>
              <Button asChild className="ml-4">
                <Link href="https://github.com/mcuza" target="_blank">
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Electronics Development?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of engineers, hobbyists, and students who are building the future with MCUZA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/signup">
                Start Building Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/docs">
                Explore Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
