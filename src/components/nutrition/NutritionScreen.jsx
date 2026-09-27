import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { WEEKLY_NUTRITION_PLAN, NUTRITION_MEALS } from '../../data/initialData';
import { 
  Utensils, 
  Droplets, 
  Sparkles, 
  ShieldAlert, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Share2, 
  Download, 
  Sunrise, 
  Sun, 
  SunMedium, 
  Moon,
  ChevronRight,
  Info
} from 'lucide-react';

export const NutritionScreen = () => {
  const { currentKid, showToast } = useApp();
  const [selectedDay, setSelectedDay] = useState('monday');
  const [selectedCategory, setSelectedCategory] = useState('Toddler (1-3 Years)');
  const [waterGlasses, setWaterGlasses] = useState(4);

  const daysOfWeek = [
    { key: 'monday', label: 'Monday', short: 'Mon' },
    { key: 'tuesday', label: 'Tuesday', short: 'Tue' },
    { key: 'wednesday', label: 'Wednesday', short: 'Wed' },
    { key: 'thursday', label: 'Thursday', short: 'Thu' },
    { key: 'friday', label: 'Friday', short: 'Fri' },
    { key: 'saturday', label: 'Saturday', short: 'Sat' },
    { key: 'sunday', label: 'Sunday', short: 'Sun' }
  ];

  const ageCategories = [
    'Infant (0-6 Mos)',
    'Weaning (6-12 Mos)',
    'Toddler (1-3 Years)',
    'Pre-School (3-6 Years)',
    'School (6-12 Years)'
  ];

  const currentPlan = WEEKLY_NUTRITION_PLAN[selectedDay] || WEEKLY_NUTRITION_PLAN.monday;

  const getSlotIcon = (slotKey) => {
    switch (slotKey) {
      case 'early_morning':
        return <Sunrise size={16} color="#F59E0B" />;
      case 'breakfast':
        return <SunMedium size={16} color="#F7931E" />;
      case 'lunch':
        return <Sun size={16} color="#056DB4" />;
      case 'dinner':
        return <Moon size={16} color="#6366F1" />;
      default:
        return <Utensils size={16} color="#53BF9D" />;
    }
  };

  const getSlotBadgeColor = (slotKey) => {
    switch (slotKey) {
      case 'early_morning':
        return { bg: '#FEF3C7', text: '#B45309', border: '#FDE68A' };
      case 'breakfast':
        return { bg: '#FFEDD5', text: '#C2410C', border: '#FED7AA' };
      case 'lunch':
        return { bg: '#E0F2FE', text: '#0369A1', border: '#BAE6FD' };
      case 'dinner':
        return { bg: '#EEF2FF', text: '#4338CA', border: '#C7D2FE' };
      default:
        return { bg: '#E8F8F3', text: '#047857', border: '#A7F3D0' };
    }
  };

  return (
    <div className="screen-scroll-container">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #F7931E 0%, #056DB4 100%)',
        padding: '20px 18px 20px',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{
                background: 'rgba(255,255,255,0.25)',
                padding: '3px 8px',
                borderRadius: '8px',
                fontSize: '10.5px',
                fontWeight: '800',
                letterSpacing: '0.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <CheckCircle2 size={12} color="#FFFFFF" /> PUBLISHED DIET PLAN
              </span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Child Nutrition & Weekly Diet</h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', marginTop: '2px' }}>
              Certified complete week plan for {currentKid.name}
            </p>
          </div>

          <span style={{
            background: 'rgba(255,255,255,0.22)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: '700',
            backdropFilter: 'blur(4px)',
            flexShrink: 0
          }}>
            {currentKid.age}
          </span>
        </div>

        {/* Age Group Horizontal Filter */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', paddingTop: '4px' }}>
          {ageCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '5px 11px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: selectedCategory === cat ? '800' : '600',
                border: 'none',
                background: selectedCategory === cat ? '#FFFFFF' : 'rgba(255,255,255,0.18)',
                color: selectedCategory === cat ? '#012741' : '#FFFFFF',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(4px)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Complete Week Day Selector (Monday to Sunday) */}
      <div style={{
        background: '#012741',
        padding: '12px 14px 14px',
        borderBottom: '1px solid #1E3A5F'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} color="#53BF9D" />
            <span style={{ fontSize: '11.5px', fontWeight: '800', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
              Complete Week Diet Plan
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#53BF9D', fontWeight: '700' }}>
            4 Meals / Day Published
          </span>
        </div>

        {/* 7 Days Button Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '5px'
        }}>
          {daysOfWeek.map((d) => {
            const isSelected = selectedDay === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setSelectedDay(d.key)}
                style={{
                  padding: '8px 2px',
                  borderRadius: '12px',
                  border: isSelected ? '1.5px solid #F7931E' : '1px solid rgba(255,255,255,0.12)',
                  background: isSelected ? '#F7931E' : 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: isSelected ? '900' : '700' }}>
                  {d.short}
                </span>
                <span style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: isSelected ? '#FFFFFF' : '#53BF9D',
                  opacity: isSelected ? 1 : 0.7
                }} />
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '16px 18px' }}>
        {/* Published Day Overview Card */}
        <div style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          borderRadius: '20px',
          padding: '16px',
          border: '1.5px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  background: '#E8F8F3',
                  color: '#047857',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <CheckCircle2 size={12} color="#047857" /> {currentPlan.status}
                </span>
                <span style={{ fontSize: '11px', color: '#64748B' }}>
                  {currentPlan.publishedDate}
                </span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#012741', marginTop: '4px' }}>
                {currentPlan.dayName} Diet Plan
              </h3>
              <p style={{ fontSize: '12px', color: '#056DB4', fontWeight: '700', marginTop: '1px' }}>
                Theme: {currentPlan.dayTheme}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' }}>Verified By</span>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#012741' }}>Dr. Ila B</p>
            </div>
          </div>

          {/* Daily Nutrition Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            background: '#F1F5F9',
            padding: '10px 12px',
            borderRadius: '14px',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px'
          }}>
            <div>
              <span style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Daily Calories</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#F7931E' }}>{currentPlan.totalCalories}</p>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <span style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Target Protein</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#056DB4' }}>{currentPlan.proteinTotal}</p>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <span style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', fontWeight: '700' }}>Hydration</span>
              <p style={{ fontSize: '13px', fontWeight: '800', color: '#53BF9D' }}>{currentPlan.waterTarget}</p>
            </div>
          </div>

          {/* Pediatrician Tip */}
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            padding: '10px 12px',
            borderRadius: '12px',
            fontSize: '11.5px',
            color: '#166534',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '6px'
          }}>
            <Sparkles size={14} style={{ marginTop: '1px', flexShrink: 0 }} />
            <span><strong>Day's Focus:</strong> {currentPlan.dailyTip}</span>
          </div>
        </div>

        {/* Child Allergy Alert */}
        {currentKid.allergies && currentKid.allergies.length > 0 && (
          <div style={{
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '16px',
            padding: '12px 14px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <ShieldAlert size={20} color="#DC2626" />
            <div>
              <h5 style={{ fontSize: '12px', fontWeight: '800', color: '#991B1B' }}>
                Known Dietary Allergies
              </h5>
              <p style={{ fontSize: '11.5px', color: '#B91C1C' }}>
                {currentKid.allergies.join(', ')} • 4 published meals automatically configured for safety.
              </p>
            </div>
          </div>
        )}

        {/* Hydration Goal Tracker */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '18px',
          padding: '14px 16px',
          border: '1px solid #EEF2F6',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#012741' }}>Daily Hydration Tracker</h4>
              <p style={{ fontSize: '11px', color: '#64748B' }}>Target: {currentPlan.waterTarget}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
              style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F1F5F9', border: 'none', fontWeight: '800', cursor: 'pointer' }}
            >
              -
            </button>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#0284C7', minWidth: '18px', textAlign: 'center' }}>{waterGlasses}</span>
            <button
              onClick={() => setWaterGlasses(waterGlasses + 1)}
              style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284C7', color: '#FFFFFF', border: 'none', fontWeight: '800', cursor: 'pointer' }}
            >
              +
            </button>
          </div>
        </div>

        {/* 4 Published Meal Times Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#012741' }}>
              {currentPlan.dayName}'s 4-Meal Schedule
            </h3>
            <p style={{ fontSize: '11.5px', color: '#64748B' }}>
              Early Morning, Breakfast, Lunch & Dinner
            </p>
          </div>
          <span style={{
            fontSize: '11px',
            fontWeight: '800',
            color: '#F7931E',
            background: '#FFF7ED',
            padding: '4px 10px',
            borderRadius: '10px',
            border: '1px solid #FFEDD5'
          }}>
            4 Meals Published
          </span>
        </div>

        {/* 4 Meal Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {currentPlan.meals.map((meal, index) => {
            const badgeStyle = getSlotBadgeColor(meal.slotKey);
            return (
              <div
                key={meal.id || index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid #EEF2F6',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                {/* Meal Banner with image & slot badge */}
                <div style={{ position: 'relative', height: '130px', background: '#F8FAFC' }}>
                  <img 
                    src={meal.image || "/assets/lunch.png"} 
                    alt={meal.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {/* Slot pill */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(1, 39, 65, 0.92)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {getSlotIcon(meal.slotKey)}
                    <span>{meal.timeSlot}</span>
                  </div>

                  {/* Calories badge */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#F7931E',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '4px 9px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}>
                    {meal.calories}
                  </span>
                </div>

                {/* Meal Body */}
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      background: badgeStyle.bg,
                      color: badgeStyle.text,
                      border: `1px solid ${badgeStyle.border}`
                    }}>
                      Meal {index + 1} • {meal.slotKey?.replace('_', ' ')}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#012741', lineHeight: 1.35 }}>
                    {meal.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#64748B', marginTop: '3px', marginBottom: '12px' }}>
                    {meal.subtitle}
                  </p>

                  {/* Macro Nutrient Badges */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    background: '#F8FAFC',
                    padding: '10px',
                    borderRadius: '14px',
                    textAlign: 'center',
                    marginBottom: '12px',
                    border: '1px solid #F1F5F9'
                  }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' }}>Protein</span>
                      <p style={{ fontSize: '13px', fontWeight: '800', color: '#056DB4' }}>{meal.protein}</p>
                    </div>
                    <div style={{ borderLeft: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' }}>Carbs</span>
                      <p style={{ fontSize: '13px', fontWeight: '800', color: '#53BF9D' }}>{meal.carbs}</p>
                    </div>
                    <div style={{ borderLeft: '1px solid #E2E8F0' }}>
                      <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: '700' }}>Healthy Fats</span>
                      <p style={{ fontSize: '13px', fontWeight: '800', color: '#F7931E' }}>{meal.fats}</p>
                    </div>
                  </div>

                  {/* Key Ingredients */}
                  {meal.ingredients && meal.ingredients.length > 0 && (
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', color: '#334155', display: 'block', marginBottom: '6px' }}>
                        Key Ingredients:
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {meal.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '11px',
                              background: '#F1F5F9',
                              color: '#334155',
                              padding: '3px 8px',
                              borderRadius: '8px',
                              border: '1px solid #E2E8F0'
                            }}
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pediatric Tip */}
                  <div style={{
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    fontSize: '11.5px',
                    color: '#166534',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px'
                  }}>
                    <Sparkles size={14} style={{ marginTop: '1px', flexShrink: 0 }} />
                    <span><strong>Pediatrician Note:</strong> {meal.tips}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar: Download & Share Diet Plan */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', marginBottom: '10px' }}>
          <button
            onClick={() => showToast(`Downloaded ${currentPlan.dayName} Diet Chart PDF!`)}
            className="btn-secondary"
            style={{ flex: 1, padding: '12px', borderRadius: '14px', fontSize: '12.5px', fontWeight: '700' }}
          >
            <Download size={15} /> Download PDF
          </button>

          <button
            onClick={() => showToast("Diet plan shared with family / caregiver!")}
            className="btn-primary"
            style={{ flex: 1, padding: '12px', borderRadius: '14px', fontSize: '12.5px', fontWeight: '700' }}
          >
            <Share2 size={15} /> Share Diet Plan
          </button>
        </div>
      </div>
    </div>
  );
};

