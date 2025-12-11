import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Flame,
  Target,
  ArrowUpRight,
  Bell,
  Search,
  Plus,
  Calendar,
  Award,
  Activity,
  Clock,
  ChevronRight,
  Download,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Home,
  BarChart3,
  Apple,
  Utensils,
  Dumbbell,
  Sun,
  Droplet,
  MessageCircle,
  Edit3,
  Save,
  Trash2,
  TrendingDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Cell 
} from 'recharts';
import { Link } from 'react-router-dom';

export default function ModernDashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [waterIntake, setWaterIntake] = useState(100);
  const [dailyGoal, setDailyGoal] = useState(842);
  const [currentCalories, setCurrentCalories] = useState(438);
  const [editingGoal, setEditingGoal] = useState(false);
  const [tempGoal, setTempGoal] = useState(842);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const overviewData = [
    { day: 'Mon', kcal: 350 },
    { day: 'Tue', kcal: 420 },
    { day: 'Wed', kcal: 380 },
    { day: 'Thu', kcal: 450 },
    { day: 'Fri', kcal: 320 },
    { day: 'Sat', kcal: 680 },
    { day: 'Sun', kcal: 510 }
  ];

  const macros = [
    { name: 'Protein', value: 60, color: '#F97316' },
    { name: 'Fat', value: 30, color: '#EF4444' },
    { name: 'Carbs', value: 45, color: '#8B5CF6' },
    { name: 'Salt', value: 60, color: '#06B6D4' },
    { name: 'Sugar', value: 75, color: '#EC4899' },
    { name: 'Other', value: 45, color: '#6B7280' }
  ];

  const [nextMeals, setNextMeals] = useState([
    { id: 1, name: 'Small Tomato', kcal: 14, amount: '1 pcs', weight: '40gr', image: '🍅' },
    { id: 2, name: 'Beef Rendang', kcal: 88, amount: '100ml', weight: '80gr', image: '🍖' },
    { id: 3, name: 'Fruit Salad', kcal: 88, amount: '1 plate', weight: '122gr', image: '🥗' }
  ]);

  const historyMeals = [
    { name: 'Breakfast', current: 132, target: 385, icon: '🍳', percentage: 45 },
    { name: 'Lunch', current: 314, target: 164, icon: '🍜', percentage: 60 },
    { name: 'Dinner', current: 54, target: 157, icon: '🍽️', percentage: 38 }
  ];

  const sidebarItems = [
    { icon: Home, label: 'dashboard', active: true },
    { icon: Utensils, label: 'form' },
    { icon: MessageCircle, label: 'chat' },
    { icon: Activity, label: 'Help & Information' },
    { icon: Settings, label: 'Setting' }
  ];

  const addWater = (amount) => {
    setWaterIntake(prev => Math.min(prev + amount, 1000));
  };

  const resetWater = () => {
    setWaterIntake(0);
  };

  const saveGoal = () => {
    setDailyGoal(tempGoal);
    setEditingGoal(false);
  };

  const addCalories = (amount) => {
    setCurrentCalories(prev => Math.min(prev + amount, dailyGoal));
  };

  const removeMeal = (id) => {
    setNextMeals(prev => prev.filter(meal => meal.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform transition-all duration-300 ease-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">FitTrack</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <Link
            to={`/${item.label}`}
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Upgrade Card */}
        <div className="absolute bottom-8 left-4 right-4">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 border border-purple-200 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-gray-900">Upgrade to Pro</h3>
            </div>
            <p className="text-xs text-gray-600 mb-4">Get 1 month free and unlock all premium features</p>
            <button className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-lg border-b border-gray-100">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex items-center gap-4 ml-auto">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search meals, exercises..."
                    className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>

                <button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors">
                        <User className="w-4 h-4 text-gray-600" /> 
                        <span className="font-medium">Profile</span>
                      </button>
                      <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors">
                        <Settings className="w-4 h-4 text-gray-600" /> 
                        <span className="font-medium">Settings</span>
                      </button>
                      <hr className="my-2 border-gray-100" />
                      <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 flex items-center gap-3 text-red-600 transition-colors">
                        <LogOut className="w-4 h-4" /> 
                        <span className="font-medium">Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 space-y-6">
          {/* Top Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Weather Widget */}
            <div className="bg-white rounded-2xl p-4 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-50 rounded-xl">
                  <Sun className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">29°C</div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">Hot weather, stay hydrated!</p>
                </div>
              </div>
            </div>

            {/* Date Card */}
            <div className="bg-white rounded-2xl p-4 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Tue, 19 July 2024</div>
                  <p className="text-xs text-gray-600 mt-0.5">Track your progress</p>
                </div>
              </div>
            </div>

            {/* Water Intake */}
            <div className="bg-white rounded-2xl p-4 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{waterIntake} / 1000 ml</div>
                  <p className="text-xs text-gray-600 mt-1">Water Intake</p>
                </div>
                <div className="p-2 bg-blue-50 rounded-xl">
                  <Droplet className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => addWater(100)}
                  className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  +100ml
                </button>
                <button 
                  onClick={() => addWater(250)}
                  className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors"
                >
                  +250ml
                </button>
                <button 
                  onClick={resetWater}
                  className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-white rounded-2xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-relaxed">Tips for maintaining a healthy diet</p>
                  <button className="mt-2 text-xs text-green-600 font-semibold hover:text-green-700 transition-colors">
                    Learn More →
                  </button>
                </div>
                <div className="p-2 bg-green-50 rounded-xl">
                  <Apple className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Today Mission - Large Circular Progress */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Today Mission</h3>
                {editingGoal ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={tempGoal}
                      onChange={(e) => setTempGoal(parseInt(e.target.value) || 0)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
                    />
                    <button onClick={saveGoal} className="p-1.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                      <Save className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => {
                    setEditingGoal(true);
                    setTempGoal(dailyGoal);
                  }} className="p-1.5 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="relative flex items-center justify-center mb-8">
                {/* Concentric Circles */}
                <svg className="w-80 h-80" viewBox="0 0 320 320">
                  {/* Outer rings */}
                  <circle cx="160" cy="160" r="140" fill="none" stroke="#F3E8FF" strokeWidth="4" />
                  <circle cx="160" cy="160" r="120" fill="none" stroke="#E9D5FF" strokeWidth="4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#DDD6FE" strokeWidth="4" />
                  <circle cx="160" cy="160" r="80" fill="none" stroke="#C4B5FD" strokeWidth="4" />
                  
                  {/* Progress circle */}
                  <circle 
                    cx="160" 
                    cy="160" 
                    r="140" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="10" 
                    strokeDasharray={`${(currentCalories/dailyGoal) * 880} 880`}
                    strokeLinecap="round"
                    transform="rotate(-90 160 160)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Flame className="w-10 h-10 text-orange-500 mb-2" />
                  <div className="text-4xl font-bold text-gray-900">{currentCalories}/{dailyGoal}</div>
                  <div className="text-sm text-gray-600 mb-3">kcal</div>
                  <div className="text-xs text-gray-500 font-medium">{Math.round((currentCalories/dailyGoal) * 100)}% of goal</div>
                </div>
              </div>

              {/* Quick Add Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={() => addCalories(50)}
                  className="flex-1 px-4 py-2.5 bg-purple-50 text-purple-600 rounded-xl text-sm font-semibold hover:bg-purple-100 transition-colors"
                >
                  +50 kcal
                </button>
                <button 
                  onClick={() => addCalories(100)}
                  className="flex-1 px-4 py-2.5 bg-purple-50 text-purple-600 rounded-xl text-sm font-semibold hover:bg-purple-100 transition-colors"
                >
                  +100 kcal
                </button>
                <button 
                  onClick={() => addCalories(200)}
                  className="flex-1 px-4 py-2.5 bg-purple-50 text-purple-600 rounded-xl text-sm font-semibold hover:bg-purple-100 transition-colors"
                >
                  +200 kcal
                </button>
              </div>
            </div>

            {/* Macros List */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Macros</h3>
                <div className="space-y-4">
                  {macros.map((macro, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: macro.color }}></div>
                        <span className="text-sm font-medium text-gray-600">{macro.name}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{macro.value}%</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2.5 text-purple-600 text-sm font-semibold hover:bg-purple-50 rounded-xl transition-colors">
                  View Detailed Report
                </button>
              </div>
            </div>

            {/* History Meals */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">History Meals</h3>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Week
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-5">
                {historyMeals.map((meal, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-3xl">{meal.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">{meal.name}</span>
                        <span className="text-sm font-bold text-gray-900">{meal.percentage}%</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">{meal.current} of {meal.target} kcal</div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${meal.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Next Meals */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Next Meals</h3>
                <button 
                  onClick={() => setShowQuickAdd(!showQuickAdd)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Meal
                </button>
              </div>
              
              {showQuickAdd && (
                <div className="mb-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="w-4 h-4 text-purple-600" />
                    <p className="text-sm text-purple-900 font-semibold">Quick Add (Coming Soon)</p>
                  </div>
                  <p className="text-xs text-purple-700">Use the Meal Input page from the sidebar to add custom meals with detailed nutritional information</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nextMeals.map((meal) => (
                  <div key={meal.id} className="relative flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 group hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="text-4xl">{meal.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{meal.name}</h4>
                      <p className="text-xs text-gray-600">{meal.kcal} kcal • {meal.amount} • {meal.weight}</p>
                    </div>
                    <button 
                      onClick={() => removeMeal(meal.id)}
                      className="absolute top-2 right-2 p-1.5 bg-red-100 text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Chart */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">Weekly Overview</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">2568 <span className="text-sm font-normal text-gray-600">Total kcal</span></p>
              </div>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={overviewData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Bar dataKey="kcal" radius={[8, 8, 0, 0]}>
                      {overviewData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.kcal === 680 ? '#8B5CF6' : '#E9D5FF'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}