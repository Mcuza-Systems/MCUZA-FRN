'use client';

import Link from 'next/link';
import { ArrowLeft, Cpu, Settings, Zap, Shield, Target, Play, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GenerateHAL() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* Header / Navigation */}
      <section className="py-6 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
            <Link href="/products/embedded-systems/smart-hal-synthesizer">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Overview
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-white">Smart HAL Synthesizer</h1>
        </div>
        <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">HAL Generator</Badge>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gray-900/30 flex-1">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Generate Your HAL Code</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">Select your MCU family, configure peripherals, and let our AI generate optimized HAL code for your project.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Step 1: Select MCU Family</CardTitle>
                <CardDescription className="text-gray-400">Choose your microcontroller family to begin HAL generation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="text-green-400 border-green-400">STM32</Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400">ESP32</Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400">Nordic nRF</Button>
                  <Button variant="outline" className="text-yellow-400 border-yellow-400">Microchip PIC</Button>
                  <Button variant="outline" className="text-red-400 border-red-400">Atmel AVR</Button>
                  <Button variant="outline" className="text-cyan-400 border-cyan-400">ARM Cortex</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Step 2: Configure Peripherals</CardTitle>
                <CardDescription className="text-gray-400">Select and configure peripherals for your application.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="text-green-400 border-green-400">GPIO</Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400">UART</Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400">SPI</Button>
                  <Button variant="outline" className="text-yellow-400 border-yellow-400">I2C</Button>
                  <Button variant="outline" className="text-red-400 border-red-400">ADC</Button>
                  <Button variant="outline" className="text-cyan-400 border-cyan-400">PWM</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border-0 shadow-lg text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Generate HAL Code
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">HAL Generation Status</CardTitle>
                <CardDescription className="text-gray-400">See the progress and results of your HAL code generation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Zap className="text-green-400" />
                    <span className="text-white">AI is preparing your HAL code...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-blue-400" />
                    <span className="text-white">Safety checks in progress...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="text-purple-400" />
                    <span className="text-white">Target platform adaptation...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Generated HAL Preview</CardTitle>
                <CardDescription className="text-gray-400">Preview the auto-generated HAL code for your configuration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-gray-700">
                  <pre className="text-sm text-gray-300">
{`// Example HAL Code\n#include "hal_gpio.h"\n\nHAL_Status HAL_GPIO_Init(const GPIO_Config* config) {\n    // ...\n}\n\nHAL_Status HAL_GPIO_WritePin(GPIO_Pin pin, GPIO_State state) {\n    // ...\n}`}
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
