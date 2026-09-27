import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CalendarPlus, Video, MapPin, Clock, Calendar, ChevronRight, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export const AppointmentsScreen = () => {
  const { appointments, currentKid, openModal } = useApp();
  const [selectedFilter, setSelectedFilter] = useState('UPCOMING'); // 'UPCOMING' | 'COMPLETED' | 'CANCELLED'

  const filteredAppointments = appointments.filter(apt => {
    return apt.type === selectedFilter && (apt.kidId === currentKid.id || selectedFilter !== 'UPCOMING');
  });

  return (
    <div className="screen-scroll-container">
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #056DB4 0%, #012741 100%)',
        padding: '20px 18px 24px',
        color: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Doctor Appointments</h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
              Consultations with Dr. Ila B for {currentKid.name}
            </p>
          </div>

          <button
            onClick={() => openModal('new-appointment')}
            className="btn-green"
            style={{ padding: '8px 14px', borderRadius: '14px', fontSize: '12px', fontWeight: '700' }}
          >
            <CalendarPlus size={15} /> Book Visit
          </button>
        </div>

        {/* Filter Segmented Control */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          background: 'rgba(0,0,0,0.25)',
          padding: '4px',
          borderRadius: '16px',
          backdropFilter: 'blur(8px)'
        }}>
          {['UPCOMING', 'COMPLETED', 'CANCELLED'].map((tab) => {
            const isActive = selectedFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                style={{
                  padding: '8px',
                  border: 'none',
                  borderRadius: '12px',
                  background: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? '#056DB4' : 'rgba(255,255,255,0.85)',
                  fontWeight: isActive ? '800' : '600',
                  fontSize: '11.5px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize'
                }}
              >
                {tab.toLowerCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Appointment Cards Stream */}
      <div style={{ padding: '16px 18px' }}>
        {filteredAppointments.length === 0 ? (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '22px',
            padding: '32px 20px',
            textAlign: 'center',
            border: '1px dashed #CBD5E1',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}>
            <Calendar size={36} color="#94A3B8" style={{ margin: '0 auto 10px' }} />
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#012741' }}>
              No {selectedFilter.toLowerCase()} appointments
            </h4>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px', marginBottom: '16px' }}>
              Schedule a pediatric visit or routine checkup with Dr. Ila B.
            </p>
            <button
              onClick={() => openModal('new-appointment')}
              className="btn-primary"
              style={{ padding: '10px 18px', borderRadius: '14px', fontSize: '13px' }}
            >
              <CalendarPlus size={15} /> Book Appointment
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredAppointments.map((apt) => {
              const isUpcoming = apt.type === 'UPCOMING';
              const isCompleted = apt.type === 'COMPLETED';

              return (
                <div
                  key={apt.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '16px',
                    border: '1px solid #EEF2F6',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  {/* Doctor Info & Status */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '2px solid #E2E8F0',
                        flexShrink: 0
                      }}>
                        <img 
                          src={apt.doctorAvatar || "/assets/dr_ila_b.png"} 
                          alt={apt.doctor}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#012741' }}>{apt.doctor}</h4>
                        <p style={{ fontSize: '11px', color: '#056DB4', fontWeight: '600' }}>{apt.specialty}</p>
                      </div>
                    </div>

                    <span style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '3px 8px',
                      borderRadius: '10px',
                      background: isUpcoming ? '#E8F8F3' : isCompleted ? '#EBF4FA' : '#FDE8EC',
                      color: isUpcoming ? '#3AA17E' : isCompleted ? '#056DB4' : '#F94C66'
                    }}>
                      {apt.status}
                    </span>
                  </div>

                  {/* Date, Time & Mode info box */}
                  <div style={{
                    background: '#F8FAFC',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#334155'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} color="#056DB4" />
                      <strong style={{ color: '#012741' }}>{apt.timestamp}</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B' }}>
                      {apt.mode.includes('Video') ? <Video size={14} color="#53BF9D" /> : <MapPin size={14} color="#F7931E" />}
                      <span>{apt.mode.includes('Video') ? 'Online Video' : 'In-Clinic'}</span>
                    </div>
                  </div>

                  {/* Symptoms list */}
                  {apt.symptoms && apt.symptoms.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {apt.symptoms.map((sym, i) => (
                        <span key={i} style={{
                          fontSize: '11px',
                          background: '#F1F5F9',
                          color: '#475569',
                          padding: '3px 8px',
                          borderRadius: '8px',
                          fontWeight: '600'
                        }}>
                          {sym}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                    {isUpcoming && (
                      <button
                        onClick={() => openModal('live-consultation', apt)}
                        className="btn-green"
                        style={{ flex: 1, padding: '10px 14px', borderRadius: '14px', fontSize: '13px', fontWeight: '700' }}
                      >
                        <Video size={16} /> Join Video Call
                      </button>
                    )}

                    <button
                      onClick={() => openModal('appointment-detail', apt)}
                      style={{
                        flex: isUpcoming ? 0.6 : 1,
                        background: '#F1F5F9',
                        border: 'none',
                        borderRadius: '14px',
                        padding: '10px',
                        color: '#334155',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      View Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
