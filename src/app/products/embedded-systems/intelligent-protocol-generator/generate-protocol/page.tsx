'use client';

import Link from 'next/link';
import { ArrowLeft, Play, Code, Shield, Layers, Clock, Network, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GenerateProtocol() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <section className="py-6 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
            <Link href="/products/embedded-systems/intelligent-protocol-generator">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Overview
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-white">Intelligent Protocol Generator</h1>
        </div>
        <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">Protocol Generator</Badge>
      </section>
      <section className="py-20 px-4 bg-gray-900/30 flex-1">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Generate Communication Protocol</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">Select protocol type, configure options, and let our AI generate production-ready protocol code for your embedded system.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Step 1: Select Protocol</CardTitle>
                <CardDescription className="text-gray-400">Choose the communication protocol to generate.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400">UART</Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400">SPI</Button>
                  <Button variant="outline" className="text-green-400 border-green-400">I2C</Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400">CAN</Button>
                  <Button variant="outline" className="text-pink-400 border-pink-400">Modbus</Button>
                  <Button variant="outline" className="text-yellow-400 border-yellow-400">TCP/IP</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Step 2: Configure Options</CardTitle>
                <CardDescription className="text-gray-400">Set protocol parameters and security options.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400">Baud Rate</Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400">Parity</Button>
                  <Button variant="outline" className="text-green-400 border-green-400">Encryption</Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400">Authentication</Button>
                  <Button variant="outline" className="text-pink-400 border-pink-400">Error Handling</Button>
                  <Button variant="outline" className="text-yellow-400 border-yellow-400">Custom Option</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border-0 shadow-lg text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Generate Protocol Code
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Generation Status</CardTitle>
                <CardDescription className="text-gray-400">See progress and results of your protocol code generation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Code className="text-cyan-400" />
                    <span className="text-white">AI is preparing your protocol code...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-blue-400" />
                    <span className="text-white">Security checks in progress...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="text-purple-400" />
                    <span className="text-white">Layer abstraction...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-green-400" />
                    <span className="text-white">Real-time performance tuning...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Network className="text-yellow-400" />
                    <span className="text-white">Multi-protocol support...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Generated Protocol Preview</CardTitle>
                <CardDescription className="text-gray-400">Preview the auto-generated protocol code for your configuration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-gray-700">
                  <pre className="text-sm text-gray-300">
{`// Example Protocol Code\nUART_Init(baud=115200, parity=none);\nSPI_Init(mode=0, speed=1MHz);\nI2C_Init(address=0x48);\n// ...more code...`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
