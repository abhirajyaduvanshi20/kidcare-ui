import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NUTRITION_MEALS } from '../../data/initialData';
import { Utensils, Apple, Flame, Droplets, Info, Sparkles, Check, Heart, ShieldAlert } from 'lucide-react';

export const NutritionScreen = () => {
  const { currentKid } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('Toddler (1-3 Years)');
  const [waterGlasses, setWaterGlasses] = useState(4);
  const [dietaryPreference, setDietaryPreference] = useState('All');

  const ageCategories = [
    'Infant (0-6 Mos)',
    'Weaning (6-12 Mos)',
    'Toddler (1-3 Years)',
    'Pre-School (3-6 Years)',
    'School (6-12 Years)'
  ];

  return (
    <div className="screen-scroll-container">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #F7931E 0%, #056DB4 100%)',
        padding: '20px 18px 24px',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Child Nutrition & Diet</h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.88)' }}>
              Tailored pediatric meal plan for {currentKid.name}
            </p>
          </div>

          <span style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: '700',
            backdropFilter: 'blur(4px)'
          }}>
            {currentKid.age}
          </span>
        </div>

        {/* Age Group Horizontal Filter */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {ageCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 12px',
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

      <div style={{ padding: '16px 18px' }}>
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
                {currentKid.allergies.join(', ')} • Meals automatically customized to avoid allergens.
              </p>
            </div>
          </div>
        )}

        {/* Hydration Tracker */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '16px',
          border: '1px solid #EEF2F6',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#012741' }}>Daily Hydration Goal</h4>
              <p style={{ fontSize: '11px', color: '#64748B' }}>Target: 5-6 glasses water/fluids</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
              style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F1F5F9', border: 'none', fontWeight: '800', cursor: 'pointer' }}
            >
              -
            </button>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#0284C7' }}>{waterGlasses}</span>
            <button
              onClick={() => setWaterGlasses(waterGlasses + 1)}
              style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284C7', color: '#FFFFFF', border: 'none', fontWeight: '800', cursor: 'pointer' }}
            >
              +
            </button>
          </div>
        </div>

        {/* Meal Times List */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#012741' }}>Daily Meal Schedule</h3>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#F7931E' }}>4 Balanced Meals</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {NUTRITION_MEALS.map((meal) => (
            <div
              key={meal.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid #EEF2F6',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              {/* Meal Banner with image */}
              <div style={{ position: 'relative', height: '125px', background: '#F8FAFC' }}>
                <img 
                  src={meal.image || "/assets/lunch.png"} 
                  alt={meal.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(1, 39, 65, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 10px',
                  borderRadius: '10px'
                }}>
                  {meal.timeSlot}
                </span>

                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#F7931E',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '3px 8px',
                  borderRadius: '10px'
                }}>
                  {meal.calories}
                </span>
              </div>

              {/* Meal Body */}
              <div style={{ padding: '16px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#012741', lineHeight: 1.3 }}>
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
                  marginBottom: '12px'
                }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase' }}>Protein</span>
                    <p style={{ fontSize: '13px', fontWeight: '800', color: '#056DB4' }}>{meal.protein}</p>
                  </div>
                  <div style={{ borderLeft: '1px solid #E2E8F0' }}>
                    <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase' }}>Carbs</span>
                    <p style={{ fontSize: '13px', fontWeight: '800', color: '#53BF9D' }}>{meal.carbs}</p>
                  </div>
                  <div style={{ borderLeft: '1px solid #E2E8F0' }}>
                    <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase' }}>Healthy Fats</span>
                    <p style={{ fontSize: '13px', fontWeight: '800', color: '#F7931E' }}>{meal.fats}</p>
                  </div>
                </div>

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
          ))}
        </div>
      </div>
    </div>
  );
};
