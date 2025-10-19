import { Heart } from 'lucide-react';
import { Twitter } from 'lucide-react';

function GregUniverse() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#87CEEB' }}>
      {/* Sky */}
      <div className="absolute inset-0" style={{ backgroundColor: '#87CEEB' }}>
        {/* Clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Sun */}
      <div className="absolute top-12 right-12 w-24 h-24 bg-yellow-300 rounded-full border-4 border-black sun-glow">
        <div className="absolute inset-2 rounded-full border-2 border-yellow-400"></div>
      </div>

      {/* Grass */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ backgroundColor: '#90EE90' }}>
        <div className="grass-line"></div>
        {/* Grass blades */}
        <div className="grass-blade" style={{ left: '10%', height: '40px' }}></div>
        <div className="grass-blade" style={{ left: '15%', height: '35px' }}></div>
        <div className="grass-blade" style={{ left: '25%', height: '45px' }}></div>
        <div className="grass-blade" style={{ left: '35%', height: '38px' }}></div>
        <div className="grass-blade" style={{ left: '45%', height: '42px' }}></div>
        <div className="grass-blade" style={{ left: '55%', height: '36px' }}></div>
        <div className="grass-blade" style={{ left: '65%', height: '44px' }}></div>
        <div className="grass-blade" style={{ left: '75%', height: '39px' }}></div>
        <div className="grass-blade" style={{ left: '85%', height: '41px' }}></div>
        <div className="grass-blade" style={{ left: '95%', height: '37px' }}></div>
      </div>

      {/* X (Twitter) Button - Top Left */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 left-8 z-20 bg-black hover:bg-gray-800 text-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
        title="Follow on X"
      >
        <Twitter size={32} />
      </a>

      {/* CA Soon - Top Right */}
      <div
        className="absolute top-8 right-8 z-20 bg-white px-6 py-3 border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ca-wiggle"
        style={{ fontFamily: 'Comic Sans MS, cursive' }}
      >
        <p className="text-2xl font-bold">CA : soon</p>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pb-32">
        {/* Greg Character */}
        <div className="greg-container mb-8">
          <img
            src="/Untitled design (76).png"
            alt="Greg"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Text with hearts */}
        <div className="text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 wiggle-text"
            style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
            }}
          >
            Greg
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="heart-beat text-red-500 fill-red-500" size={32} />
            <Heart className="heart-beat-delayed text-pink-500 fill-pink-500" size={28} />
            <Heart className="heart-beat text-red-500 fill-red-500" size={32} />
          </div>

          <p
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px rgba(0,0,0,0.15)'
            }}
          >
            is loved by the community! 💕
          </p>
        </div>

        {/* Floating hearts */}
        <div className="floating-heart" style={{ left: '15%', animationDelay: '0s' }}>❤️</div>
        <div className="floating-heart" style={{ left: '25%', animationDelay: '2s' }}>💖</div>
        <div className="floating-heart" style={{ left: '75%', animationDelay: '1s' }}>💕</div>
        <div className="floating-heart" style={{ left: '85%', animationDelay: '3s' }}>💗</div>
      </div>
    </div>
  );
}

export default GregUniverse;
