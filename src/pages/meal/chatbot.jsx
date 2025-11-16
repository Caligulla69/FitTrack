import React, { useState, useRef, useEffect } from 'react';
import { 
  Send,
  Menu,
  X,
  User,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Sparkles,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RotateCcw,
  Home,
  MessageSquare,
  BarChart3,
  Utensils,
  Dumbbell,
  Target,
  Flame,
  Apple,
  TrendingUp
} from 'lucide-react';

export default function FitnessChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi there! I'm your AI fitness coach. I can help you with meal planning, nutrition advice, workout suggestions, and tracking your fitness goals. What would you like to know?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: MessageSquare, label: 'Chat', active: true },
    { icon: Utensils, label: 'Meals' },
    { icon: Dumbbell, label: 'Workouts' },
    { icon: BarChart3, label: 'Progress' },
    { icon: Target, label: 'Goals' },
    { icon: Settings, label: 'Settings' }
  ];

  const quickPrompts = [
    { icon: Utensils, text: "Create a meal plan for weight loss", category: "Nutrition" },
    { icon: Dumbbell, text: "Suggest a beginner workout routine", category: "Workout" },
    { icon: Apple, text: "High protein breakfast ideas", category: "Meal Ideas" },
    { icon: Target, text: "How to track my macros effectively?", category: "Goals" }
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: generateResponse(inputValue),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('meal plan') || lowerInput.includes('diet')) {
      return "I'd be happy to help you create a meal plan! For a balanced approach, I recommend:\n\n🥗 Breakfast: Greek yogurt with berries and granola (450 cal)\n🍗 Lunch: Grilled chicken salad with quinoa (520 cal)\n🍎 Snack: Apple with almond butter (200 cal)\n🥘 Dinner: Salmon with roasted vegetables (580 cal)\n\nThis totals approximately 1,750 calories with a good macro balance. Would you like me to adjust this based on your specific goals?";
    } else if (lowerInput.includes('workout') || lowerInput.includes('exercise')) {
      return "Here's a beginner-friendly workout routine:\n\n💪 Monday: Upper Body (Push-ups, Dumbbell rows, Shoulder press)\n🦵 Wednesday: Lower Body (Squats, Lunges, Calf raises)\n🏃 Friday: Cardio & Core (20 min jog, Planks, Bicycle crunches)\n\nStart with 3 sets of 10-12 reps for each exercise. Rest 60 seconds between sets. Would you like more detailed instructions for any of these exercises?";
    } else if (lowerInput.includes('protein') || lowerInput.includes('macro')) {
      return "Great question! For optimal fitness results:\n\n🥩 Protein: 0.8-1g per pound of body weight\n🍚 Carbs: 40-50% of total calories\n🥑 Fats: 20-30% of total calories\n\nIf you're 150 lbs aiming for 2000 calories:\n- Protein: 120-150g (480-600 cal)\n- Carbs: 200-250g (800-1000 cal)\n- Fats: 45-67g (400-600 cal)\n\nWould you like help tracking these macros?";
    } else if (lowerInput.includes('weight loss') || lowerInput.includes('lose weight')) {
      return "Weight loss fundamentals:\n\n📉 Create a caloric deficit of 300-500 calories daily\n🏋️ Combine cardio (3x/week) with strength training (2x/week)\n💧 Drink 8-10 glasses of water daily\n😴 Get 7-9 hours of sleep\n📊 Track your progress weekly\n\nConsistent small changes lead to sustainable results. What's your current fitness level and target weight?";
    } else {
      return "I'm here to help with your fitness journey! I can assist with:\n\n• Personalized meal planning\n• Workout routines and exercise tips\n• Nutrition and macro tracking\n• Weight loss/gain strategies\n• Supplement recommendations\n\nWhat specific area would you like to focus on today?";
    }
  };

  const handleQuickPrompt = (promptText) => {
    setInputValue(promptText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-neutral-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-light text-neutral-900">FitTrack</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>
        
        <nav className="p-6 space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                item.active 
                  ? 'bg-neutral-900 text-white' 
                  : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar Stats */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-200">
          <div className="bg-neutral-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-900">AI Coach Active</span>
            </div>
            <p className="text-xs text-neutral-600">
              Ask me anything about fitness, nutrition, or your goals!
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col h-screen">
        {/* Header */}
        <header className="bg-white border-b border-neutral-200 px-4 lg:px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-neutral-600" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-light text-neutral-900">AI Fitness Coach</h1>
                <p className="text-sm text-neutral-600 font-light hidden sm:block">Get personalized advice and guidance</p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <button className="relative p-2 rounded-lg hover:bg-neutral-100 transition-colors">
                <Bell className="w-5 h-5 text-neutral-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-1 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-neutral-600" />
                  </div>
                  <ChevronDown className="w-4 h-4 text-neutral-400 hidden sm:block" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-sm border border-neutral-100 py-2 z-50">
                    <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 transition-colors">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 transition-colors">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <hr className="my-2 border-neutral-100" />
                    <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 transition-colors">
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Welcome Section - Only show when no messages */}
            {messages.length === 1 && (
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-neutral-900 mb-2">
                  How can I help you today?
                </h2>
                <p className="text-neutral-600 font-light">
                  Choose a quick prompt or ask me anything about fitness
                </p>
              </div>
            )}

            {/* Quick Prompts - Only show at start */}
            {messages.length === 1 && (
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(prompt.text)}
                    className="group p-5 bg-white border-2 border-neutral-200 rounded-2xl hover:border-neutral-900 hover:shadow-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-neutral-50 rounded-xl group-hover:bg-neutral-100 transition-colors">
                        <prompt.icon className="w-5 h-5 text-neutral-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-neutral-500 font-medium mb-1">{prompt.category}</div>
                        <div className="text-sm font-medium text-neutral-900">{prompt.text}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className={`flex flex-col max-w-2xl ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-2xl px-5 py-4 ${
                      message.type === 'user'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white border border-neutral-200'
                    }`}
                  >
                    <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 px-2">
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {message.timestamp}
                    </span>
                    
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-neutral-100 rounded transition-colors">
                          <ThumbsUp className="w-3 h-3 text-neutral-400" />
                        </button>
                        <button className="p-1 hover:bg-neutral-100 rounded transition-colors">
                          <ThumbsDown className="w-3 h-3 text-neutral-400" />
                        </button>
                        <button className="p-1 hover:bg-neutral-100 rounded transition-colors">
                          <Copy className="w-3 h-3 text-neutral-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {message.type === 'user' && (
                  <div className="flex-shrink-0 w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-neutral-600" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4 justify-start">
                <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white border border-neutral-200 rounded-2xl px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 border-t border-neutral-200 bg-white px-4 lg:px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about nutrition, workouts, or your fitness goals..."
                  rows="1"
                  className="w-full px-5 py-4 pr-12 border-2 border-neutral-200 rounded-2xl focus:outline-none focus:border-neutral-900 transition-all duration-200 resize-none text-neutral-900 placeholder-neutral-400"
                  style={{ minHeight: '56px', maxHeight: '200px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="absolute right-3 bottom-3 p-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3 text-center">
              AI can make mistakes. Verify important information with healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}