import React, { useState } from 'react';
import { Plus, X, Clock, ChevronRight, Check } from 'lucide-react';

export default function MealTrackingForm() {
  const [mealType, setMealType] = useState('breakfast');
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [time, setTime] = useState('');
  const [foods, setFoods] = useState([]);
  const [currentFood, setCurrentFood] = useState({ name: '', qty: '', cals: '' });

  const mealTypes = [
    { id: 'breakfast', label: 'Breakfast', time: '7:00 - 10:00' },
    { id: 'lunch', label: 'Lunch', time: '12:00 - 14:00' },
    { id: 'dinner', label: 'Dinner', time: '18:00 - 21:00' },
    { id: 'snack', label: 'Snack', time: 'Anytime' }
  ];

  const addFood = () => {
    if (currentFood.name && currentFood.qty && currentFood.cals) {
      setFoods([...foods, { ...currentFood, id: Date.now() }]);
      setCurrentFood({ name: '', qty: '', cals: '' });
    }
  };

  const removeFood = (id) => {
    setFoods(foods.filter(f => f.id !== id));
  };

  const handleSubmit = () => {
    const mealData = {
      mealType,
      mealName,
      calories,
      protein,
      carbs,
      fats,
      time,
      foods
    };
    console.log('Meal logged:', mealData);
    alert('Meal logged successfully! ✓');
  };

  const totalCalories = foods.reduce((sum, food) => sum + parseInt(food.cals || 0), 0) + parseInt(calories || 0);

  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Log Meal
              </h1>
              <p className="text-sm text-gray-600 mt-1">Sunday, November 16, 2025</p>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30">
              <span>{totalCalories}</span>
              <span className="text-purple-200">kcal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Meal Type Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-8 shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Meal Type</h3>
              </div>
              <div className="p-3">
                {mealTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setMealType(type.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl mb-2 transition-all duration-200 ${
                      mealType === type.id
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'hover:bg-purple-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-semibold ${mealType === type.id ? 'text-white' : 'text-gray-900'}`}>
                          {type.label}
                        </div>
                        <div className={`text-sm mt-1 ${mealType === type.id ? 'text-purple-100' : 'text-gray-500'}`}>
                          {type.time}
                        </div>
                      </div>
                      {mealType === type.id && (
                        <Check className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Meal Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Meal Information</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meal Name</label>
                  <input
                    type="text"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                    placeholder="e.g., Grilled Chicken with Quinoa"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Nutrition</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wide">Calories</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calories}
                      onChange={(e) => setCalories(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 text-center font-semibold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wide">Protein</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={protein}
                      onChange={(e) => setProtein(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 text-center font-semibold"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 font-medium">g</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wide">Carbs</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={carbs}
                      onChange={(e) => setCarbs(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 text-center font-semibold"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 font-medium">g</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wide">Fats</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={fats}
                      onChange={(e) => setFats(e.target.value)}
                      placeholder="0"
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 text-center font-semibold"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 font-medium">g</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Items Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Food Items</h3>
                <span className="text-sm text-gray-600 font-medium">{foods.length} items</span>
              </div>

              {/* Food List */}
              {foods.length > 0 && (
                <div className="space-y-3 mb-6">
                  {foods.map((food) => (
                    <div key={food.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200 group hover:border-purple-300 transition-colors">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{food.name}</div>
                        <div className="text-sm text-gray-600 mt-1">{food.qty}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{food.cals}</div>
                          <div className="text-xs text-gray-600">kcal</div>
                        </div>
                        <button
                          onClick={() => removeFood(food.id)}
                          className="p-2 hover:bg-purple-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Food Form */}
              <div className="space-y-3">
                <div className="grid sm:grid-cols-5 gap-3">
                  <input
                    type="text"
                    value={currentFood.name}
                    onChange={(e) => setCurrentFood({...currentFood, name: e.target.value})}
                    placeholder="Food name"
                    className="sm:col-span-2 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-400"
                  />
                  <input
                    type="text"
                    value={currentFood.qty}
                    onChange={(e) => setCurrentFood({...currentFood, qty: e.target.value})}
                    placeholder="Quantity"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-400"
                  />
                  <input
                    type="number"
                    value={currentFood.cals}
                    onChange={(e) => setCurrentFood({...currentFood, cals: e.target.value})}
                    placeholder="Calories"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-gray-900 placeholder-gray-400"
                  />
                  <button
                    onClick={addFood}
                    className="px-4 py-3 bg-purple-100 hover:bg-purple-200 border-2 border-purple-200 hover:border-purple-300 rounded-xl transition-colors flex items-center justify-center gap-2 text-purple-700 font-semibold"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <span>Log Meal</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}