'use client';  
import React from 'react';  
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';  

const NetworkPerformanceGraphs = () => {  
  // Data from the statistics table  
  const data = [     
    { p: 0.05, msgTransmissions: 1.234, acksSent: 1.218, totalTransmissions: 2.452 },     
    { p: 0.10, msgTransmissions: 1.430, acksSent: 1.326, totalTransmissions: 2.756 },     
    { p: 0.15, msgTransmissions: 1.628, acksSent: 1.416, totalTransmissions: 3.044 },     
    { p: 0.20, msgTransmissions: 1.802, acksSent: 1.464, totalTransmissions: 3.266 },     
    { p: 0.25, msgTransmissions: 2.076, acksSent: 1.532, totalTransmissions: 3.608 },     
    { p: 0.30, msgTransmissions: 2.326, acksSent: 1.656, totalTransmissions: 3.982 },     
    { p: 0.35, msgTransmissions: 2.952, acksSent: 1.842, totalTransmissions: 4.794 },     
    { p: 0.40, msgTransmissions: 3.020, acksSent: 1.702, totalTransmissions: 4.722 },     
    { p: 0.45, msgTransmissions: 3.422, acksSent: 1.890, totalTransmissions: 5.312 },     
    { p: 0.50, msgTransmissions: 3.998, acksSent: 1.936, totalTransmissions: 5.934 }   
  ];    

  return (     
    <div className="min-h-screen bg-gray-50">       
      {/* Header */}       
      <header className="bg-gray-900 text-white py-8 px-4 shadow-md">         
        <div className="max-w-7xl mx-auto">           
          {/* ASCII Art Logo */}           
          <div className="font-mono text-center mb-4 text-xs sm:text-sm md:text-base leading-tight">             
            <pre className="inline-block text-left overflow-x-auto">{`
 _  _______ ____    ____             _        _   
| |/ /_   _|  _ \  / ___|  ___   ___| | _____| |_ 
| ' /  | | | |_) | \___ \ / _ \ / __| |/ / _ \ __|
| . \  | | |  __/   ___) | (_) | (__|   <  __/ |_ 
|_|\_\ |_| |_|     |____/ \___/ \___|_|\_\___|\__|

`}</pre>           
          </div>           
          <h2 className="text-xl text-center opacity-90 mb-6">Documentation for CS39006: Networks Laboratory Assignment 4</h2>                      

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">             
            <div className="text-gray-300">               
              <p>Name: Sumit Kumar</p>               
              <p>Roll No: 22CS30056</p>             
            </div>             
            <div className="mt-4 md:mt-0 text-gray-300">               
              <p>Link of the pcap file: <a href="https://drive.google.com/file/d/1FW5PEmipQMQc6ik-mDaiQGYdnPoZ9dcI/view?usp=sharing" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View PCAP File</a></p>               
              <p>The graphs for this data is plotted on <a href="https://k-socket-graphs.vercel.app" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://k-socket-graphs.vercel.app</a></p>             
            </div>           
          </div>         
        </div>       
      </header>        

      {/* Main Content */}       
      <main className="max-w-7xl mx-auto px-4 py-8">         
        {/* Introduction Section */}         
        <section className="mb-12">           
          <div className="bg-white rounded-lg shadow-md p-6">             
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>             
            <p className="text-gray-700 mb-4">               
              This dashboard visualizes network performance metrics for the KTPSocket implementation.                
              The graphs show how different probability values (P) affect message transmissions,                
              acknowledgments, and total network traffic.             
            </p>             
            <div className="flex flex-col sm:flex-row gap-4 mt-6">               
              <a                  
                href="https://drive.google.com/file/d/1FW5PEmipQMQc6ik-mDaiQGYdnPoZ9dcI/view?usp=sharing"                  
                target="_blank"                  
                rel="noopener noreferrer"                 
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"               
              >                 
                View PCAP File               
              </a>             
            </div>           
          </div>         
        </section>          

        {/* Graphs Section */}         
        <section className="grid grid-cols-1 gap-8">           
          <div className="bg-white rounded-lg shadow-md p-6">             
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Average Transmissions vs P Value</h2>             
            <p className="text-gray-600 mb-6">               
              This graph shows how the probability of packet loss (P value) affects the average number of                
              message transmissions, acknowledgments sent, and total transmissions required per message.             
            </p>             
            <div className="h-96">               
              <ResponsiveContainer width="100%" height="100%">                 
                <LineChart data={data}>                   
                  <CartesianGrid strokeDasharray="3 3" />                   
                  <XAxis                      
                    dataKey="p"                      
                    label={{ value: 'Probability (P) Value', position: 'insideBottom', offset: -5 }}                    
                  />                   
                  <YAxis                      
                    label={{ value: 'Average Transmissions per Message', angle: -90, position: 'insideLeft' }}                   
                  />                   
                  <Tooltip formatter={(value) => (typeof value === "number" ? value.toFixed(3) : value)} />                   
                  <Legend />                   
                  <Line                      
                    type="monotone"                      
                    dataKey="msgTransmissions"                      
                    name="Message Transmissions"                      
                    stroke="#8884d8"                      
                    activeDot={{ r: 8 }}                    
                  />                   
                  <Line                      
                    type="monotone"                      
                    dataKey="acksSent"                      
                    name="ACKs Sent"                      
                    stroke="#82ca9d"                    
                  />                   
                  <Line                      
                    type="monotone"                      
                    dataKey="totalTransmissions"                      
                    name="Total Transmissions"                      
                    stroke="#ff7300"                      
                    strokeWidth={2}                    
                  />                 
                </LineChart>               
              </ResponsiveContainer>             
            </div>           
          </div>            

          <div className="bg-white rounded-lg shadow-md p-6">             
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Transmission Components by P Value</h2>             
            <p className="text-gray-600 mb-6">               
              This stacked bar chart shows the breakdown of total transmissions into message transmissions and                
              acknowledgments sent for each probability value.             
            </p>             
            <div className="h-96">               
              <ResponsiveContainer width="100%" height="100%">                 
                <BarChart data={data}>                   
                  <CartesianGrid strokeDasharray="3 3" />                   
                  <XAxis                      
                    dataKey="p"                      
                    label={{ value: 'Probability (P) Value', position: 'insideBottom', offset: -5 }}                    
                  />                   
                  <YAxis                      
                    label={{ value: 'Average Transmissions per Message', angle: -90, position: 'insideLeft' }}                   
                  />                   
                  <Tooltip formatter={(value) => (typeof value === "number" ? value.toFixed(3) : value)} />                   
                  <Legend />                   
                  <Bar                      
                    dataKey="msgTransmissions"                      
                    name="Message Transmissions"                      
                    stackId="a"                      
                    fill="#8884d8"                    
                  />                   
                  <Bar                      
                    dataKey="acksSent"                      
                    name="ACKs Sent"                      
                    stackId="a"                      
                    fill="#82ca9d"                    
                  />                 
                </BarChart>               
              </ResponsiveContainer>             
            </div>           
          </div>            

          <div className="bg-white rounded-lg shadow-md p-6">             
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Transmissions vs P Value</h2>             
            <p className="text-gray-600 mb-6">               
              This graph isolates the total transmission metric to better visualize how the probability of packet                
              loss impacts overall network traffic.             
            </p>             
            <div className="h-96">               
              <ResponsiveContainer width="100%" height="100%">                 
                <LineChart data={data}>                   
                  <CartesianGrid strokeDasharray="3 3" />                   
                  <XAxis                      
                    dataKey="p"                      
                    label={{ value: 'Probability (P) Value', position: 'insideBottom', offset: -5 }}                    
                  />                   
                  <YAxis                      
                    label={{ value: 'Average Total Transmissions', angle: -90, position: 'insideLeft' }}                   
                  />                   
                  <Tooltip formatter={(value) => (typeof value === "number" ? value.toFixed(3) : value)} />                   
                  <Legend />                   
                  <Line                      
                    type="monotone"                      
                    dataKey="totalTransmissions"                      
                    name="Total Transmissions"                      
                    stroke="#ff7300"                      
                    strokeWidth={2}                      
                    activeDot={{ r: 8 }}                    
                  />                 
                </LineChart>               
              </ResponsiveContainer>             
            </div>           
          </div>         
        </section>          

        {/* Analysis Section */}         
        <section className="mt-12">           
          <div className="bg-white rounded-lg shadow-md p-6">             
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Performance Analysis</h2>             
            <div className="prose max-w-none text-gray-700">               
              <p>                 
                The data reveals several important trends in the KTCPSocket performance:               
              </p>               
              <ul className="list-disc pl-5 space-y-2 mt-4">                 
                <li>                   
                  <strong>Impact of P Value:</strong> As the probability of packet loss increases, the number of                    
                  message transmissions increases exponentially, especially after P = 0.35.                 
                </li>                 
                <li>                   
                  <strong>ACK Efficiency:</strong> The number of acknowledgments sent increases more gradually than                    
                  message transmissions, suggesting that the ACK mechanism remains relatively efficient even under                    
                  higher loss rates.                 
                </li>                 
                <li>                   
                  <strong>Total Network Load:</strong> At P = 0.50, the total transmissions are nearly 6 per message,                    
                  indicating significant overhead for reliable delivery in high-loss environments.                 
                </li>               
              </ul>             
            </div>           
          </div>         
        </section>       
      </main>        

      {/* Footer */}       
      <footer className="bg-gray-800 text-white py-6 px-4">         
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">           
          <div className="mb-4 md:mb-0">             
            <p>CS39006: Networks Laboratory Assignment 4</p>             
            <p className="text-sm text-gray-400">Submitted on: March 10, 2025</p>             
            <p className="text-sm text-gray-400">Made by: Sumit Kumar (22CS30056)</p>           
          </div>         
        </div>       
      </footer>     
    </div>   
  );   
};  

export default NetworkPerformanceGraphs;
