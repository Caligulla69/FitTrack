import { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Flame, Dumbbell, Target, Apple, Sparkles, Zap } from 'lucide-react';

export default function FitnessAuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const features = [
    { icon: Flame, text: 'Track calories & macros', gradient: 'from-orange-400 to-red-500' },
    { icon: Dumbbell, text: 'Log workouts', gradient: 'from-blue-400 to-indigo-500' },
    { icon: Target, text: 'Set & achieve goals', gradient: 'from-green-400 to-emerald-500' },
    { icon: Apple, text: 'Meal planning', gradient: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <div className={`w-full max-w-md transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo & Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-light text-neutral-900 group-hover:text-neutral-700 transition-colors">FitTrack</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-3 flex items-center gap-3">
              {isLogin ? 'Welcome back' : 'Create account'}
              <Sparkles className="w-6 h-6 text-neutral-400 animate-pulse" />
            </h1>
            <p className="text-neutral-600 font-light">
              {isLogin 
                ? 'Sign in to continue your fitness journey' 
                : 'Start tracking your nutrition and fitness goals'}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="relative flex bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-2xl p-1 mb-8 border border-neutral-200 shadow-inner">
            <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-lg transition-all duration-500 ease-out ${
              isLogin ? 'left-1' : 'left-[calc(50%+2px)]'
            }`}></div>
            <button
              onClick={() => setIsLogin(true)}
              className={`relative z-10 flex-1 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                isLogin 
                  ? 'text-neutral-900' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`relative z-10 flex-1 py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 ${
                !isLogin 
                  ? 'text-neutral-900' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Name Field - Only for Sign Up */}
            {!isLogin && (
              <div>
                <label className="block text-sm text-neutral-700 font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-all duration-200 peer-focus:text-neutral-900 peer-focus:scale-110" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-neutral-900/10 transition-all duration-300 hover:border-neutral-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm text-neutral-700 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-all duration-200 peer-focus:text-neutral-900 peer-focus:scale-110" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="peer w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-neutral-900/10 transition-all duration-300 hover:border-neutral-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm text-neutral-700 font-medium">
                  Password
                </label>
                {isLogin && (
                  <button className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-all duration-200 peer-focus:text-neutral-900 peer-focus:scale-110" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="peer w-full pl-12 pr-12 py-3 bg-white/50 backdrop-blur-sm border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-4 focus:ring-neutral-900/10 transition-all duration-300 hover:border-neutral-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="group relative w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed mt-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-neutral-300 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 -top-full group-hover:top-0 bg-gradient-to-b from-white/20 to-transparent transition-all duration-500"></div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-neutral-200"></div>
            <span className="px-4 text-neutral-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-neutral-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="group w-full flex items-center justify-center py-3 px-4 bg-white/50 backdrop-blur-sm border-2 border-neutral-200 rounded-xl text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 hover:bg-white hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-[1.01]">
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            
            <button className="group w-full flex items-center justify-center py-3 px-4 bg-white/50 backdrop-blur-sm border-2 border-neutral-200 rounded-xl text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 hover:bg-white hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-[1.01]">
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-600 font-light">
              By continuing, you agree to our{' '}
              <button className="text-neutral-900 hover:underline font-medium">
                Terms of Service
              </button>{' '}
              and{' '}
              <button className="text-neutral-900 hover:underline font-medium">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Features & Stats */}
      <div className="hidden lg:flex lg:w-1/2 bg-neutral-900 p-12 items-center justify-center relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating Gradient Orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>

        <div className="relative z-10 max-w-lg">
          {/* Hero Text */}
          <div className="mb-16">
            <h2 className="text-4xl font-light text-white mb-6 leading-tight">
              Transform Your
              <br />
              <span className="font-normal">Fitness Journey</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              Join thousands of users tracking their nutrition, workouts, and progress with our comprehensive fitness platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                    <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-neutral-900" />
                    </div>
                  </div>
                  <p className="text-white font-medium group-hover:translate-x-1 transition-transform duration-300">{feature.text}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-light text-white mb-2">50K+</div>
              <div className="text-neutral-400 text-sm font-light">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">1M+</div>
              <div className="text-neutral-400 text-sm font-light">Meals Logged</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">4.9★</div>
              <div className="text-neutral-400 text-sm font-light">App Rating</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="group mt-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center text-white font-medium group-hover:scale-110 transition-transform duration-300">
                  MK
                </div>
              </div>
              <div>
                <p className="text-white font-light mb-2 leading-relaxed">
                  &ldquo;This app completely changed how I approach fitness. The meal tracking is intuitive and the progress visualization keeps me motivated!&rdquo;
                </p>
                <div className="text-neutral-400 text-sm flex items-center gap-2">
                  <span className="font-medium text-white">Michael Kim</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-400" />
                    Lost 30 lbs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(-10px);
          }
          75% {
            transform: translateY(20px) translateX(5px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
}