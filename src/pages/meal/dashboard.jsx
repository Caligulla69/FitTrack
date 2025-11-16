import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Flame,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Bell,
  Search,
  Plus,
  Filter,
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
  Heart
} from 'lucide-react';

export default function FitnessDashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const kpiCards = [
    {
      title: 'Calories Today',
      value: '1,847',
      change: '+12.5%',
      trend: 'up',
      icon: Flame,
      progress: 74,
      target: '2,500 kcal'
    },
    {
      title: 'Protein Intake',
      value: '142g',
      change: '+8.2%',
      trend: 'up',
      icon: Apple,
      progress: 85,
      target: '150g goal'
    },
    {
      title: 'Meals Logged',
      value: '3/5',
      change: '60%',
      trend: 'up',
      icon: Utensils,
      progress: 60,
      target: '5 meals'
    },
    {
      title: 'Active Days',
      value: '23',
      change: '+15.8%',
      trend: 'up',
      icon: TrendingUp,
      progress: 92,
      target: '25 streak'
    }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Utensils, label: 'Meals' },
    { icon: Dumbbell, label: 'Workouts' },
    { icon: BarChart3, label: 'Progress' },
    { icon: Target, label: 'Goals' },
    { icon: Settings, label: 'Settings' }
  ];

  const recentMeals = [
    {
      name: 'Greek Yogurt Bowl',
      type: 'Breakfast',
      calories: 450,
      time: '8:30 AM',
      macros: { protein: 35, carbs: 52, fats: 12 },
      status: 'completed'
    },
    {
      name: 'Grilled Chicken Salad',
      type: 'Lunch',
      calories: 620,
      time: '1:15 PM',
      macros: { protein: 58, carbs: 45, fats: 22 },
      status: 'completed'
    },
    {
      name: 'Protein Shake',
      type: 'Snack',
      calories: 280,
      time: '4:00 PM',
      macros: { protein: 30, carbs: 18, fats: 8 },
      status: 'completed'
    },
    {
      name: 'Salmon & Sweet Potato',
      type: 'Dinner',
      calories: 0,
      time: '7:00 PM',
      macros: { protein: 0, carbs: 0, fats: 0 },
      status: 'pending'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', calories: 2100, target: 2500 },
    { day: 'Tue', calories: 2400, target: 2500 },
    { day: 'Wed', calories: 2350, target: 2500 },
    { day: 'Thu', calories: 2150, target: 2500 },
    { day: 'Fri', calories: 2600, target: 2500 },
    { day: 'Sat', calories: 2200, target: 2500 },
    { day: 'Sun', calories: 1847, target: 2500 }
  ];

  const nutritionBreakdown = [
    { label: 'Protein', value: 142, max: 150, color: 'bg-blue-500', percentage: 95 },
    { label: 'Carbs', value: 185, max: 250, color: 'bg-amber-500', percentage: 74 },
    { label: 'Fats', value: 48, max: 70, color: 'bg-purple-500', percentage: 69 }
  ];

  const quickActions = [
    { icon: Plus, label: 'Log Meal', color: 'bg-neutral-900' },
    { icon: Dumbbell, label: 'Log Workout', color: 'bg-neutral-700' },
    { icon: Calendar, label: 'View Calendar', color: 'bg-neutral-600' }
  ];

  const recentActivities = [
    {
      user: 'You',
      action: 'logged meal',
      target: 'Protein Shake',
      time: '2 hours ago',
      avatar: 'YO',
      type: 'meal'
    },
    {
      user: 'System',
      action: 'reminder',
      target: 'Evening workout scheduled',
      time: '3 hours ago',
      avatar: 'SY',
      type: 'reminder'
    },
    {
      user: 'You',
      action: 'completed',
      target: 'Lunch - Grilled Chicken',
      time: '5 hours ago',
      avatar: 'YO',
      type: 'success'
    },
    {
      user: 'Achievement',
      action: 'unlocked',
      target: '7-day meal streak',
      time: '1 day ago',
      avatar: 'AC',
      type: 'achievement'
    }
  ];

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-neutral-100 text-neutral-600';
  };

  return (
    <div className="min-h-screen bg-neutral-50">
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
              <Award className="w-5 h-5 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-900">Weekly Goal</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">5/7 days</span>
                <span className="font-semibold text-neutral-900">71%</span>
              </div>
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-900 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>
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
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-neutral-200 px-4 lg:px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-neutral-600" />
              </button>
              <div className="hidden md:block">
                <h1 className="text-2xl font-light text-neutral-900 mb-1">Welcome back, Alex</h1>
                <p className="text-neutral-600 font-light">Let's track your nutrition today</p>
              </div>
              <div className="md:hidden">
                <h1 className="text-xl font-light text-neutral-900">Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search meals..."
                  className="pl-10 pr-4 py-2 w-48 lg:w-64 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 focus:bg-neutral-50 transition-all duration-200"
                />
              </div>

              {/* Mobile search button */}
              <button className="sm:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors">
                <Search className="w-5 h-5 text-neutral-600" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-neutral-100 transition-colors">
                <Bell className="w-5 h-5 text-neutral-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>

              {/* User Menu */}
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

        {/* Main Content */}
        <main className="p-4 lg:p-6 space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {kpiCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-3xl shadow-sm border border-neutral-100 p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    animateCards ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-neutral-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-neutral-50 rounded-2xl group-hover:bg-neutral-100 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-neutral-700" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                        card.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {card.trend === 'up' ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {card.change}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h3 className="text-3xl font-light text-neutral-900 group-hover:text-neutral-800 transition-colors">
                        {card.value}
                      </h3>
                      <p className="text-neutral-600 font-light text-lg">{card.title}</p>
                      <p className="text-neutral-500 text-sm">{card.target}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500 font-medium">Progress</span>
                        <span className="text-xs text-neutral-700 font-semibold">{card.progress}%</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-neutral-900 rounded-full transition-all duration-1500 ease-out"
                          style={{ width: animateCards ? `${card.progress}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Main Section */}
            <div className="xl:col-span-8 space-y-6">
              {/* Today's Meals */}
              <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-light text-neutral-900 mb-2">Today's Meals</h3>
                    <p className="text-neutral-600 font-light">Track your daily nutrition</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors">
                    <Plus className="w-4 h-4" />
                    Log Meal
                  </button>
                </div>

                <div className="space-y-4">
                  {recentMeals.map((meal, index) => (
                    <div key={index} className={`group p-6 border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all duration-300 ${
                      meal.status === 'pending' ? 'opacity-60' : ''
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                            <Utensils className="w-5 h-5 text-neutral-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-light text-neutral-900 mb-1">{meal.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-neutral-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {meal.time}
                              </span>
                              <span>{meal.type}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meal.status)}`}>
                            {meal.status}
                          </span>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-neutral-900">{meal.calories}</div>
                            <div className="text-xs text-neutral-500">kcal</div>
                          </div>
                        </div>
                      </div>

                      {meal.status === 'completed' && (
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-neutral-600">Protein: <span className="font-medium text-neutral-900">{meal.macros.protein}g</span></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-neutral-600">Carbs: <span className="font-medium text-neutral-900">{meal.macros.carbs}g</span></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-neutral-600">Fats: <span className="font-medium text-neutral-900">{meal.macros.fats}g</span></span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Progress Chart */}
              <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-light text-neutral-900 mb-2">Weekly Progress</h3>
                    <p className="text-neutral-600 font-light">Daily calorie intake vs target</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-3 text-neutral-400 hover:text-neutral-600 transition-colors rounded-xl hover:bg-neutral-50">
                      <Calendar className="w-5 h-5" />
                    </button>
                    <button className="p-3 text-neutral-400 hover:text-neutral-600 transition-colors rounded-xl hover:bg-neutral-50">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <span className="text-sm font-medium text-neutral-700 w-10">{day.day}</span>
                      <div className="flex-1 relative">
                        <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-neutral-900 rounded-full transition-all duration-1500 ease-out"
                            style={{ width: animateCards ? `${(day.calories / day.target) * 100}%` : '0%' }}
                          ></div>
                        </div>
                        <div 
                          className="absolute top-0 h-3 w-1 bg-neutral-400 opacity-60 rounded-full"
                          style={{ left: '100%' }}
                        ></div>
                      </div>
                      <div className="flex flex-col items-end min-w-0">
                        <span className="text-sm font-semibold text-neutral-900">{day.calories}</span>
                        <span className="text-xs text-neutral-500">of {day.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-4 space-y-6">
              {/* Nutrition Breakdown */}
              <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-light text-neutral-900 mb-1">Nutrition Today</h3>
                    <p className="text-neutral-600 text-sm font-light">Macro breakdown</p>
                  </div>
                  <Target className="w-5 h-5 text-neutral-400" />
                </div>

                <div className="space-y-6">
                  {nutritionBreakdown.map((macro, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-700">{macro.label}</span>
                        <span className="text-sm text-neutral-600">{macro.value}g / {macro.max}g</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${macro.color} rounded-full transition-all duration-1500 ease-out`}
                          style={{ width: animateCards ? `${macro.percentage}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-light text-neutral-900 mb-1">Recent Activity</h3>
                    <p className="text-neutral-600 text-sm font-light">Your latest updates</p>
                  </div>
                  <Activity className="w-5 h-5 text-neutral-400" />
                </div>

                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                      <div className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center text-xs font-medium text-neutral-700">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-900 mb-1">
                          <span className="font-medium">{activity.user}</span>
                          {' '}
                          <span className="text-neutral-600">{activity.action}</span>
                          {' '}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-neutral-900 rounded-3xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-light">Quick Actions</h3>
                  <Heart className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">Log New Meal</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                    <Dumbbell className="w-4 h-4" />
                    <span className="font-medium">Log Workout</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group">
                    <Target className="w-4 h-4" />
                    <span className="font-medium">Update Goals</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}