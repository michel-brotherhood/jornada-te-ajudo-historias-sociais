import { BookOpen, Star, Cloud, Sparkles, Heart, Moon } from "lucide-react";

const StoryDecorations = () => {
  return (
    <>
      {/* Floating book icons */}
      <div className="absolute top-10 left-[5%] opacity-20 animate-float-gentle">
        <BookOpen className="w-12 h-12 text-primary" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-[30%] right-[8%] opacity-20 animate-float-gentle">
        <BookOpen className="w-10 h-10 text-secondary" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Twinkling stars */}
      <div className="absolute top-[15%] right-[15%] animate-twinkle">
        <Star className="w-6 h-6 text-accent fill-accent" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-[45%] left-[10%] animate-twinkle">
        <Star className="w-5 h-5 text-accent fill-accent" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute top-[70%] right-[20%] animate-twinkle">
        <Star className="w-4 h-4 text-accent fill-accent" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-[20%] left-[25%] animate-twinkle">
        <Star className="w-5 h-5 text-accent fill-accent" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Floating clouds */}
      <div className="absolute top-[20%] left-[15%] opacity-15 animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}>
        <Cloud className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute top-[60%] right-[12%] opacity-15 animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}>
        <Cloud className="w-14 h-14 text-primary" />
      </div>
      
      {/* Sparkles */}
      <div className="absolute top-[25%] right-[25%] opacity-30 animate-bounce-gentle">
        <Sparkles className="w-6 h-6 text-coral" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute bottom-[30%] left-[18%] opacity-30 animate-bounce-gentle">
        <Sparkles className="w-5 h-5 text-primary" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Hearts */}
      <div className="absolute top-[50%] left-[5%] opacity-20 animate-wiggle">
        <Heart className="w-7 h-7 text-coral fill-coral" style={{ animationDelay: '0s', animationDuration: '2s' }} />
      </div>
      <div className="absolute bottom-[15%] right-[10%] opacity-20 animate-wiggle">
        <Heart className="w-6 h-6 text-coral fill-coral" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
      </div>
      
      {/* Moon */}
      <div className="absolute top-[40%] right-[5%] opacity-15 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
        <Moon className="w-10 h-10 text-accent fill-accent" />
      </div>
    </>
  );
};

export default StoryDecorations;
