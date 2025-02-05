
// import faceModel from '../assets/face.gltf'

import React, { useState, useEffect, useRef } from 'react';
// import image1 from '../assets/1.png';
// import image2 from '../assets/2.png';
// import thumbnail1 from '../assets/thumbnail1.jpg';
// import thumbnail2 from '../assets/thumbnail2.jpg';
// import thumbnail3 from '../assets/thumbnail3.jpg';
// import thumbnail4 from '../assets/thumbnail4.jpg';
// import thumbnail5 from '../assets/thumbnail5.jpg';
// import thumbnail6 from '../assets/thumbnail6.jpg';
import NewsTimeline from './NewsTimeline';

import { 
  MessageSquare,
  Pencil,
  Info,
  // CircleAlert,
  // TriangleAlert,
  Image,
  Box,  
  Fingerprint,
  Newspaper,
  // TvMinimalPlay,
  BrainCircuit,
  Podcast,
  AudioLines
} from 'lucide-react';

const TargetIntroduction = () => {
  // Remove the direct CSV import and use the path directly
  const csvFilePath = '/src/assets/landmarks_with_embeddings.csv';
  const csvFilePath2 = '/src/assets/speaker_embedding.csv';

  const [isLocked, setIsLocked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPlaceholder1, setShowPlaceholder1] = useState(false);
  const [showPlaceholder2, setShowPlaceholder2] = useState(false);
  const [canScrollPast, setCanScrollPast] = useState(false);
  const sectionRef = useRef(null);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAnimationPlayed) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isAtTop = rect.top <= 0;
      
      if (isAtTop && !isLocked) {
        setIsLocked(true);
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => setShowDetails(true), 500);
        setTimeout(() => setShowPlaceholder1(true), 1000);
        setTimeout(() => setShowPlaceholder2(true), 1500);
        setTimeout(() => {
          setCanScrollPast(true);
          document.body.style.overflow = 'auto';
          setIsLocked(false);
          setHasAnimationPlayed(true);
        }, 2000);
        
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked, hasAnimationPlayed]);


      
  const chatWidgetRef = useRef(null);

  useEffect(() => {
    if(showPlaceholder2 && chatWidgetRef.current){
        const script = document.createElement('script');
        script.src = "https://elevenlabs.io/convai-widget/index.js";
        script.async = true;
        script.type = "text/javascript";

        chatWidgetRef.current.appendChild(script);


        return () => {
            chatWidgetRef.current.removeChild(script);
        }

    }

}, [showPlaceholder2]);

  const handleDownload = async () => {
    try {
      const response = await fetch(csvFilePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'landmarks_with_embeddings.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleDownload2 = async () => {
    try {
      const response = await fetch(csvFilePath2);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'speaker_voice_embeddings.csv';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };





  return (
<>
    <style>
        {`
        // .chat-widget-wrapper:hover::before {
        //     content: "";
        //     position: absolute;
        //     bottom: 100%;
        //     right: 0;
        //     width: 300px;
        //     background: rgba(0, 0, 0, 0.8);
        //     color: white;
        //     padding: 10px;
        //     border-radius: 6px;
        //     font-size: 14px;
        //     margin-bottom: 150px;  /* Increased from 10px to 50px to move it higher */
        //     z-index: 10000;
        // }

        // .chat-widget-wrapper:hover::after {
        //     content: "";
        //     position: absolute;
        //     bottom: 100%;
        //     right: 20px;
        //     border: 8px solid transparent;
        //     border-top: 8px solid rgba(0, 0, 0, 0.8);
        //     margin-bottom: 42px;  /* Increased to match tooltip (50px - 8px for arrow) */
        //     z-index: 10000;
        // }
        `}
    </style>

    <section 
      ref={sectionRef}
      // No gradient
      // className="min-h-screen bg-gray-900 relative overflow-hidden"
      // Gradient
      // className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
      className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 p-8"
    >
      {/* No scaling width */}
      {/* <div className="container mx-auto px-8 py-16"> */}
      {/* Scaling width */}
      <div className="w-full max-w-full px-8 py-16">

      {/* No scaling width */}
      {/* <div className="grid grid-cols-2 gap-8"> */}
      {/* Scaling width */}
        <div className="grid grid-cols-2 gap-8 w-full">

          {/* Left Column */}

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              SOI: Diego Isaac BENÍTEZ CAÑETE
            </h2>
            
            {/* SCROLLING 1: Key Details Box */}
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showDetails ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
            <div className="flex items-center mb-4">
                <MessageSquare className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">Key Details</h3>
            </div>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                  <span>Major drug trafficking suspect</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                  <span>16t cocaine smuggling attempt</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                  <span>Previously detained in UAE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                  <span>Filed appeal against extradition</span>
                </li>
              </ul>
            </div>

          {/* SCROLLING 2: Additional Information Box */}
          <div 
            className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
              ${showPlaceholder1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <div className="flex items-center mb-4">
                <Info className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">Additional Information</h3>
            </div>

            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Association: Target of international narcotics smuggling investigation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Paraguayan national Residing in Dubai</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Potential aliases: Ricardo Azeñha; Ricardo Abu Dhabi</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Alleged involvement in attempted smuggling of 16t of cocaine from Paraguay to Germany in 2021</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Paraguayan diplomatic channels attempted to extradite BENÍTEZ from the UAE regarding drugs smuggling charges</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>BENÍTEZ was detained in the UAE in 2022, but relieved of extradition to Paraguay</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>In 2023, BENÍTEZ filed an appeal against his extradition</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>BENÍTEZ is believed to have fled to the Netherlands, but still remains in Dubai and the Netherlands</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                <span>Possible attempts to delay extradition by committing minor financial crimes</span>
              </li>
            </ul>
          </div> 

            {/* SCROLLING 3: Analyst Comment */}
            <div
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex items-center mb-4">
                <Pencil className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">Analyst Comment</h3>
              </div>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>BENÍTEZ is highly unlikely to maintain an active online presence due to deliberate operational security measures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Failed cell phone "pings" and AdTech searches suggest he is taking steps to avoid detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Likely security measures include:</span>
                </li>
                {/* Sub-points */}
                <ul className="pl-6 space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Use of encrypted communication apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Frequent changes to personal devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Employment of counter-surveillance tactics</span>
                  </li>
                </ul>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>These actions demonstrate a high level of awareness and intent to obfuscate his movements and communications</span>
                </li>
              </ul>
            </div>

            {/* Platform Information Table */}

            <div
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
            <div className="flex items-center mb-4">
                <MessageSquare className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">
                  Platform Information
                </h3>
            </div>

                <div className="overflow-x-auto">
                  <table className="w-full">

                    <thead>
                      <tr>
                        <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">Platform</th>
                        <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">ID</th>
                        <th className="text-left py-3 px-4 bg-gray-700/50 text-gray-300 font-semibold">Notes</th>
                      </tr>
                    </thead>

                    <tbody className="text-xs text-gray-400">
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-mono">MSISDN</td>
                        <td className="py-3 px-4 font-mono">+971 55884156</td>
                        <td className="py-3 px-4 font-mono">Appears to be listed under the names of Nick Spree and Nathalie Spree</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-mono">MSISDN</td>
                        <td className="py-3 px-4 font-mono">+971 52881301</td>
                        <td className="py-3 px-4 font-mono">Appears to be associated with individuals called Ricardo Azenha and Ricardo Abu Dubai</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-4 font-mono">X</td>
                        <td className="py-3 px-4 font-mono">@diegobenitez_py</td>
                        <td className="py-3 px-4 font-mono">It appears this account has been deleted and then recreated. The joining date is given as Aug 2023; however, if you search X you will find the account handle being referenced in earlier posts.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

            {/* Animated NewsTimeline */}
              <NewsTimeline showPlaceholder2={showPlaceholder2} />


{/* Audio Player Container */}
<div 
  className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
    ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
>
  <div className="flex items-center mb-4">
    <Podcast className="mr-3" size={24} />
    <h3 className="text-xl font-semibold">Case Audio Podcast</h3>
  </div>

  <div className="space-y-8">
    <div className="bg-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        Extradition of Paraguayan Drug Trafficker Diego Benítez
      </h3>
      <audio
        className="w-full mb-4"
        controls
        // src="/src/assets/Extradition of Paraguayan Drug Trafficker Diego Benítez_long.wav"
        src="/assets/Extradition of Paraguayan Drug Trafficker Diego Benítez_long.wav"
      >
        Your browser does not support the audio element.
      </audio>
      <a
                  //href="/src/assets/Extradition of Paraguayan Drug Trafficker Diego Benítez_long.wav"
                  href="/assets/Extradition of Paraguayan Drug Trafficker Diego Benítez_long.wav"

                  download
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download Audio
                </a>
    </div>

    <div className="bg-gray-700 rounded-lg p-6">
      <p className="text-gray-300">
        Audio documentation detailing the extradition case of Diego Benítez and associated shipping network operations. Use the player controls above to listen or download the file for offline review.
      </p>
    </div>
  </div>
</div>
              
          </div>
          {/* Right Column */}

          {/* SCROLLING 4: Images and 3D Model Section */}
          <div className="space-y-8">
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showDetails ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex flex-col">

                <div className="flex items-center mb-4">
                  <Image className="mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Subject Images</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 items-start">
                  {/* Left Side Container for Image and Downloads */}
                  <div className="space-y-4">
                    {/* Left Image */}
                    <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={image1}
                        alt="Subject photograph 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gray-800 text-gray-300 text-sm rounded-lg p-3">
                        <p>Imagery from open-source media reporting on BENITEZ and his extradition Apr 23.</p>

                    </div>

                    {/* Downloads Section */}
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      {/* Title with Tooltip */}
                      <div className="relative group">

                      <div className="flex items-center mb-4">
                        <Fingerprint className="mr-3" size={30} />
                        <h3 className="text-xl font-semibold">Facial Recognition Biometric Markers</h3>
                      </div>

                        {/* Tooltip */}
                        <div className="absolute left-0 w-72 p-2 bg-gray-700 text-sm text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 -bottom-32">
                          These files contain deep learning-based facial embeddings, represented by a 64-dimensional numeric vector, serving as unique biometric markers to identify and differentiate faces. These can be used to calculate similarity for facial recognition tasks.
                        </div>
                      </div>

                      {/* Download Button */}
                      <button 
                        onClick={handleDownload}
                        className="w-full flex items-center justify-between px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors duration-200"
                      >
                        <span>Facial Embeddings (CSV)</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>


                    {/* Downloads Section */}
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      {/* Title with Tooltip */}
                      <div className="relative group">

                      <div className="flex items-center mb-4">
                        <AudioLines className="mr-3" size={30} />
                        <h3 className="text-xl font-semibold">Voice Recognition Biometric Markers</h3>
                      </div>

                        {/* Tooltip */}
                        <div className="absolute left-0 w-72 p-2 bg-gray-700 text-sm text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 -bottom-32">
                        These files contain deep learning-based voice embeddings, represented by a 192-dimensional numeric vector, serving as unique biometric markers to identify and differentiate speakers. They can be used to calculate similarity for speaker verification and recognition tasks.                        </div>
                      </div>

                      {/* Download Button */}
                      <button 
                        onClick={handleDownload2}
                        className="w-full flex items-center justify-between px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors duration-200"
                      >
                        <span>Voice Embeddings (CSV)</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>

                  </div>
                  




                  {/* Right Side Container for Image and 3D Model */}
                  <div className="space-y-4">
                    {/* Right Image */}
                    <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={image2}
                        alt="Subject photograph 2"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gray-800 text-gray-300 text-sm rounded-lg p-3">
                    <p>Imagery from open-source media reporting Jun 22.</p>
                    </div>

                    {/* SCROLLING 5: 3D Model Section */}
                    {/* 3D Model */}

                  </div>
                </div>
              </div>
            </div>

            {/* SCROLLING 7: Open Source Reporting */}
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex items-center mb-4">
                <Newspaper className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">Open Source Reporting</h3>
              </div>

              <ul className="space-y-4 text-gray-400">

                {/* First Article */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail1} 
                        alt="First article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                        {/* Title */}
                      <span className="text-gray-300 font-semibold block">
                        Record 23 tons of cocaine from Paraguay seized in Germany
                      </span>
                    {/* Publication Name */}
                    <p className="text-gray-400 text-sm mt-1">
                     St Kitts & Nevis Observer
                    </p>
                    {/* Date */}
                    <p className="text-gray-400 text-sm">
                      25 February 2021
                    </p>
                    {/* View Article Link */}
                      <a 
                        href="https://www.thestkittsnevisobserver.com/record-23-tons-of-cocaine-from-paraguay-seized-in-germany/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                  {/* Hidden summary text: shown on hover */}
                  <div 
                    className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-[500px] group-hover:opacity-100 mt-2 text-sm text-gray-300"
                  >
                    <p>
                    SUMMARY: In February 2021, European authorities conducted a record-breaking cocaine seizure, uncovering over 23 tonnes of the drug in Germany and Belgium. German customs officials discovered more than 16 tonnes of cocaine concealed in containers from Paraguay at the Port of Hamburg. The cocaine was hidden within over 1,700 tins of wall filler. Subsequent investigations led to the seizure of an additional 7.2 tonnes of cocaine at the Port of Antwerp in Belgium, where the drug was hidden in a container of wooden blocks. The combined street value of the confiscated cocaine was estimated to be several billion euros. A 28-year-old Dutch national, owner of an import company in Rotterdam, was arrested in connection with the shipments. This operation marked the largest cocaine haul ever recorded in Europe at that time.
                    </p>
                  </div>
                </li>

                {/* Second Article */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail2} 
                        alt="Second article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                        23 tons of cocaine worth billions seized in Europe’s biggest haul
                      </span>
                    {/* Publication Name */}
                    <p className="text-gray-400 text-sm mt-1">
                     Daily Sabah
                    </p>
                    {/* Date */}
                    <p className="text-gray-400 text-sm">
                      24 February 2021
                    </p>
                    {/* View Article Link */}
                      <a 
                        href="https://www.dailysabah.com/world/europe/23-tons-of-cocaine-worth-billions-seized-in-europes-biggest-haul" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                  {/* Hidden summary text: shown on hover */}
                  <div 
                    className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-[500px] group-hover:opacity-100 mt-2 text-sm text-gray-300"
                  >
                    <p>
                    SUMMARY: In February 2021, European authorities conducted a record-breaking cocaine seizure, uncovering over 23 tonnes of the drug in Germany and Belgium. German customs officials discovered more than 16 tonnes of cocaine concealed in containers from Paraguay at the Port of Hamburg. The cocaine was hidden within over 1,700 tins of wall filler. Subsequent investigations led to the seizure of an additional 7.2 tonnes of cocaine at the Port of Antwerp in Belgium, where the drug was hidden in a container of wooden blocks. The combined street value of the confiscated cocaine was estimated to be several billion euros. A 28-year-old Dutch national, owner of an import company in Rotterdam, was arrested in connection with the shipments. This operation marked the largest cocaine haul ever recorded in Europe at that time.
                    </p>
                  </div>
                </li>


                {/* Third Article */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail6} 
                        alt="Second article thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                      United Arab Emirates announces that Diego Benitez can be extradited to Paraguay
                      </span>
                    {/* Publication Name */}
                    <p className="text-gray-400 text-sm mt-1">
                     UltimaHora
                    </p>
                    {/* Date */}
                    <p className="text-gray-400 text-sm">
                      19 August 2024
                    </p>
                    {/* View Article Link */}
                      <a 
                        href="https://www-ultimahora-com.translate.goog/emiratos-arabes-comunica-que-diego-benitez-puede-ser-extraditado-a-paraguay?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp://www.dailysabah.com/world/europe/23-tons-of-cocaine-worth-billions-seized-in-europes-biggest-haul" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                  {/* Hidden summary text: shown on hover */}
                  <div 
                    className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-[500px] group-hover:opacity-100 mt-2 text-sm text-gray-300"
                  >
                    <p>
                    SUMMARY: Diego BENÍTEZ, a former sports executive from Paraguay, is implicated in a significant narcotics case involving the shipment of over 16 tonnes of cocaine to Europe. In November 2023, authorities in the United Arab Emirates (UAE) approved his extradition to Paraguay. However, as of September 2024, reports indicate that BENÍTEZ's whereabouts are unknown, and UAE officials have been unable to locate him to execute the extradition. This development has raised concerns about the effectiveness of international cooperation in such high-profile criminal cases.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SCROLLING 8: Open Source Video Reporting */}
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              {/* <h3 className="text-xl font-semibold text-gray-300 mb-4">Open Source Video News</h3> */}

              <div className="flex items-center mb-4">
                {/* <TvMinimalPlay className="mr-3" size={24} /> */}
                <h3 className="text-xl font-semibold">Open Source Video News</h3>
              </div>

              {/* Related Articles Section */}
              <ul className="space-y-4 text-gray-400">

                  {/* YouTube Video */}
                  <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        src="https://img.youtube.com/vi/Om3GkahlJE0/0.jpg" 
                        alt="YouTube video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                        23 tonnes of cocaine seized in Europe
                      </span>
                        {/* Publication Name */}
                        <p className="text-gray-400 text-sm mt-1">
                        Youtube: WION News
                        </p>
                        {/* Date */}
                        <p className="text-gray-400 text-sm">
                          25 February 2021
                        </p>
                        {/* View Article Link */}
                      <a 
                        href="https://www.youtube.com/watch?v=Om3GkahlJE0&embeds_referring_euri=https%3A%2F%2Fchatgpt.com%2F&source_ve_path=Mjg2NjY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </li>

                {/* ABC News Embedded Video */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail3} 
                        alt="ABC News thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                        European Officials Seize 23 Tonnes of Cocaine
                      </span>
                      {/* Publication Name */}
                        <p className="text-gray-400 text-sm mt-1">
                        ABC News Australia
                        </p>
                        {/* Date */}
                        <p className="text-gray-400 text-sm">
                          25 February 2021
                        </p>
                        {/* View Article Link */}
                      <a 
                        href="https://www.abc.net.au/news/2021-02-25/european-officials-seize-23-tonnes-of-cocaine-at/13190492?utm_source=chatgpt.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </li>

                {/* Facebook News Embedded Video */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail4} 
                        alt="ABC News thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                      Diego BENÍTEZ is already in prison in the United Arab Emirates
                      </span>
                      {/* Publication Name */}
                        <p className="text-gray-400 text-sm mt-1">
                        ABC TV Paraguay
                        </p>
                        {/* Date */}
                        <p className="text-gray-400 text-sm">
                          2 December 2023
                        </p>
                        {/* View Article Link */}
                      <a 
                        href="https://www.facebook.com/ABCTVpy/videos/diego-ben%C3%ADtez-ya-est%C3%A1-preso-en-emiratos-%C3%A1rabesla-extradici%C3%B3n-se-retrasar%C3%ADa-porqu/3549325538664224/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </li>

                {/* Youtube News Embedded Video */}
                <li className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200 cursor-pointer overflow-hidden relative">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                      <img 
                        //src={thumbnail5} 
                        alt="ABC News thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 font-semibold block">
                      Diego BENÍTEZ... a fugitive in the Arab Emirates? Extradition would be at risk
                      </span>
                      {/* Publication Name */}
                        <p className="text-gray-400 text-sm mt-1">
                        ABC TV Paraguay
                        </p>
                        {/* Date */}
                        <p className="text-gray-400 text-sm">
                          4 October 2024
                        </p>
                        {/* View Article Link */}
                      <a 
                        href="https://www.youtube.com/watch?v=HJSEpBwYINQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline mt-1 inline-block"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>

            {/* SCROLLING 9: Eleven Labs */}
            {/* NEW: Additional Placeholder Box */}
            <div 
              className={`bg-gray-700/50 p-6 rounded-lg transform transition-all duration-700 ease-out
                ${showPlaceholder2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
              <div className="flex items-center mb-4">
                <BrainCircuit className="mr-3" size={24} />
                <h3 className="text-xl font-semibold">AI Interactive Chat</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Chat with an AI assistant about this case.<br/> The assistant has open source reporting knowledge  <br/> about the BENITEZ case timeline from 2022-2024.
              </p>

              {/* ElevenLabs Chat Widget Inserted Here */}
               {/* <div className="chat-widget-wrapper"> */}
               <div className="chat-widget-wrapper" ref={chatWidgetRef}>
                   <elevenlabs-convai agent-id="DfAIaWjGBfgPJXGGkAg0"></elevenlabs-convai>
                   <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
               </div>

            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TargetIntroduction;


