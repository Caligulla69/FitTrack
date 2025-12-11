import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, Menu, Search, Library, FolderOpen, Apple, Clock, TrendingUp, Heart, Utensils, X, Mic, Volume2 } from 'lucide-react';

export default function NutriGenieChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello, How can I help you?' },
    { role: 'user', content: 'What should I eat for a healthy breakfast?' },
    { role: 'assistant', content: 'For a healthy breakfast, consider oatmeal with berries, Greek yogurt with nuts, or whole grain toast with avocado and eggs.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setChatOpen(true);

    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: getAIResponse(input)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('breakfast') || lowerInput.includes('morning')) {
      return 'Great choice! For breakfast, try overnight oats with chia seeds, banana smoothie bowls, or protein-packed egg muffins. What\'s your preference?';
    } else if (lowerInput.includes('lunch') || lowerInput.includes('meal')) {
      return 'For a balanced lunch, consider grilled chicken salad, quinoa buddha bowl, or salmon with roasted vegetables. Need specific recipes?';
    } else if (lowerInput.includes('calories') || lowerInput.includes('macro')) {
      return 'I can help calculate your daily nutritional needs! Share your height, weight, age, and activity level for personalized recommendations.';
    } else if (lowerInput.includes('snack')) {
      return 'Healthy snack ideas: mixed nuts, apple with almond butter, hummus with veggies, or Greek yogurt with berries. All nutritious and satisfying!';
    } else {
      return 'I\'m here to help with meal planning, nutrition advice, calorie tracking, and healthy recipes. What would you like to know?';
    }
  };

  const categories = [
    { icon: '💚', text: 'Meal Plans', color: 'bg-emerald-100 text-emerald-700' },
    { icon: '🍎', text: 'Nutrition', color: 'bg-rose-100 text-rose-700' },
    { icon: '📊', text: 'Track Calories', color: 'bg-purple-100 text-purple-700' },
    { icon: '💪', text: 'Fitness Goals', color: 'bg-blue-100 text-blue-700' },
  ];

  const chatHistory = [
    'Weekly meal prep ideas',
    'Protein shake recipes',
    'Low carb dinner options',
    'Vitamin supplement guide'
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        w-72 h-full bg-white/40 backdrop-blur-2xl border-r border-white/30 flex flex-col z-30 shadow-2xl
      `}>
        {/* Close button for mobile */}
        <button 
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-white/50 rounded-xl"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Apple className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">NUTRI-G</h1>
        </div>

        {/* Search */}
        <div className="px-6 mb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-11 pr-4 py-3 bg-white/50 backdrop-blur-sm border-none rounded-2xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 space-y-1">
          <button 
            onClick={() => {
              setChatOpen(false);
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-white/50 hover:bg-white/70 rounded-2xl transition-all text-gray-700 font-medium text-sm"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/50 rounded-2xl transition-all text-gray-700 font-medium text-sm">
            <Library className="w-5 h-5" />
            Library
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/50 rounded-2xl transition-all text-gray-700 font-medium text-sm">
            <Apple className="w-5 h-5" />
            My Nutrition
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/50 rounded-2xl transition-all text-gray-700 font-medium text-sm">
            <FolderOpen className="w-5 h-5" />
            Meal Plans
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 px-4 mt-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className="text-sm font-bold text-gray-700">Chat History</h3>
            <TrendingUp className="w-4 h-4 text-gray-500" />
          </div>
          <div className="space-y-1">
            {chatHistory.map((chat, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-2 px-4 py-2.5 hover:bg-white/50 rounded-xl transition-all text-left text-sm text-gray-700"
              >
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="truncate">{chat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white/40 backdrop-blur-xl border-b border-white/30 z-10">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-white/50 rounded-xl"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">FitTrack</h1>
          <div className="w-10"></div>
        </div>

        {/* Chat or Welcome Screen */}
        {chatOpen ? (
          /* Chat Interface */
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
              <div className="max-w-3xl mx-auto space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/60 backdrop-blur-xl text-gray-800 border border-white/40'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/60 backdrop-blur-xl text-gray-800 border border-white/40 px-4 py-3 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 mb-2  backdrop-blur-xl border-t border-white/30">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-2">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-purple-100/50 rounded-xl transition-colors">
                      <Plus className="w-5 h-5 text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder="Type your message..."
                      className="flex-1 py-3 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm md:text-base"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Welcome Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
            <div className="flex flex-col items-center justify-center max-w-4xl w-full">
              {/* Mascot Character */}
              <div className="relative mb-6 md:mb-8">
                <div className="w-40 h-40 md:w-64 md:h-64 bg-transparent rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl md:text-8xl"><img src="/assets/fruit-salad.png" alt="" /></div>
                  </div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-full shadow-lg animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-3 md:-bottom-2 md:-left-6 w-10 h-10 md:w-16 md:h-16 bg-purple-400 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Welcome Text */}
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4">
                How can I help you today?
              </h2>

              {/* Input Area */}
              <div className="w-full max-w-2xl px-4">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-2">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-purple-100/50 rounded-xl transition-colors">
                      <Plus className="w-5 h-5 text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      placeholder="Chat here..."
                      className="flex-1 py-3 md:py-4 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm md:text-base"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 md:gap-3 mt-4 md:mt-6 justify-center flex-wrap">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInput(cat.text);
                        handleSend();
                      }}
                      className={`flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 ${cat.color} rounded-full font-medium text-xs md:text-sm hover:scale-105 transition-transform shadow-md`}
                    >
                      <span>{cat.icon}</span>
                      <span className="hidden sm:inline">{cat.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}