import React, { useState } from 'react';
import { Play, X, Printer, Activity, Grid, Trash2, HeartPulse, Boxes, AlertCircle } from 'lucide-react';
import smartHospitalImg from '../assets/Smart-Hospital.png';
import wareVisionImg from '../assets/WareVision.png';

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState(null); // 'hospital' or 'warevision'

  // --- Hospital Triage State ---
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [isTriageLoading, setIsTriageLoading] = useState(false);
  const [triageResult, setTriageResult] = useState(null);
  const [printedTicket, setPrintedTicket] = useState(null);

  const symptomsList = [
    { id: 'chest_pain', label: 'Severe Chest Pain', severity: 'Emergent', priority: 1, wait: 'Immediate' },
    { id: 'deep_cut', label: 'Deep Bleeding Cut', severity: 'Urgent', priority: 2, wait: '10 - 15 mins' },
    { id: 'mild_fever', label: 'Mild Fever & Headache', severity: 'Non-Urgent', priority: 4, wait: '45 - 60 mins' },
    { id: 'cough_cold', label: 'Cough, Cold & Flu Symptoms', severity: 'Non-Urgent', priority: 5, wait: '60+ mins' },
    { id: 'breathing', label: 'Shortness of Breath', severity: 'Emergent', priority: 1, wait: 'Immediate' },
    { id: 'sprained_ankle', label: 'Sprained Ankle', severity: 'Less Urgent', priority: 3, wait: '25 - 30 mins' }
  ];

  const handleTriageStart = () => {
    if (!selectedSymptom) return;
    setIsTriageLoading(true);
    setTriageResult(null);
    setPrintedTicket(null);

    setTimeout(() => {
      setIsTriageLoading(false);
      const symptomDetails = symptomsList.find(s => s.id === selectedSymptom);
      
      // Generate simulated Gemini assessment text
      let assessmentText = '';
      if (symptomDetails.severity === 'Emergent') {
        assessmentText = `WARNING: Selected symptoms indicate a high-risk cardiovascular or respiratory anomaly. Gemini Pre-triage engine recommends immediate routing to Emergency Bay 1. Vital signs should be acquired instantly by nursing staff.`;
      } else if (symptomDetails.severity === 'Urgent') {
        assessmentText = `URGENT ASSESSMENT: Active trauma/bleeding requires immediate localized intervention. Pre-triage assigns Category 2 (Urgent). Route to Wound Management Area.`;
      } else if (symptomDetails.severity === 'Less Urgent') {
        assessmentText = `ROUTINE ASSESSMENT: Musculoskeletal discomfort detected. Patient exhibits stable vitals. Pre-triage assigns Category 3 (Less Urgent). Route to Orthopedic Outpatient Room.`;
      } else {
        assessmentText = `STANDARD ASSESSMENT: Common viral/respiratory symptoms. Stable condition. Pre-triage assigns Category 4/5 (Non-Urgent). General Outpatient consultations recommended.`;
      }

      setTriageResult({
        ...symptomDetails,
        assessment: assessmentText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1500);
  };

  const handlePrintTicket = () => {
    if (!triageResult) return;
    const ticketId = `MED-${Math.floor(1000 + Math.random() * 9000)}`;
    setPrintedTicket({
      id: ticketId,
      ...triageResult
    });
  };

  // --- WareVision State ---
  const [wareGrid, setWareGrid] = useState(
    Array(32).fill(null).map((_, i) => ({
      id: i,
      occupied: false,
      type: null,
      size: null
    }))
  );
  const [allocType, setAllocType] = useState('General');
  const [allocSize, setAllocSize] = useState(1);
  const [allocStatusMsg, setAllocStatusMsg] = useState('');

  const allocateInventory = () => {
    const size = parseInt(allocSize);
    let consecutiveIndices = [];
    
    // Search for 'size' consecutive empty cells in the 32-cell grid
    for (let i = 0; i <= wareGrid.length - size; i++) {
      let isAvailable = true;
      for (let j = 0; j < size; j++) {
        if (wareGrid[i + j].occupied) {
          isAvailable = false;
          break;
        }
      }
      if (isAvailable) {
        consecutiveIndices = Array.from({ length: size }, (_, idx) => i + idx);
        break;
      }
    }

    if (consecutiveIndices.length > 0) {
      setWareGrid(prev => prev.map((cell, idx) => {
        if (consecutiveIndices.includes(idx)) {
          return {
            ...cell,
            occupied: true,
            type: allocType,
            size: size
          };
        }
        return cell;
      }));
      setAllocStatusMsg(`Successfully allocated ${size} cell(s) for ${allocType} stock.`);
    } else {
      setAllocStatusMsg(`Error: Insufficient contiguous warehouse storage space found!`);
    }

    setTimeout(() => setAllocStatusMsg(''), 4000);
  };

  const toggleCellOccupancy = (id) => {
    setWareGrid(prev => prev.map(cell => {
      if (cell.id === id) {
        return {
          ...cell,
          occupied: !cell.occupied,
          type: cell.occupied ? null : 'General',
          size: cell.occupied ? null : 1
        };
      }
      return cell;
    }));
  };

  const clearWarehouse = () => {
    setWareGrid(Array(32).fill(null).map((_, i) => ({
      id: i,
      occupied: false,
      type: null,
      size: null
    })));
    setAllocStatusMsg('Warehouse layout successfully reset.');
    setTimeout(() => setAllocStatusMsg(''), 3000);
  };

  const occupiedCount = wareGrid.filter(cell => cell.occupied).length;
  const capacityPct = Math.round((occupiedCount / wareGrid.length) * 100);

  const getCellBgColor = (type) => {
    if (type === 'Electronics') return '#8b5cf6'; // purple
    if (type === 'Medical') return '#06b6d4'; // cyan
    return '#f59e0b'; // General - Amber
  };

  // --- Render Modal ---
  const renderDemoModal = () => {
    if (!activeDemo) return null;

    return (
      <div className="demo-overlay" onClick={() => setActiveDemo(null)}>
        <div className="glass-panel demo-modal" onClick={e => e.stopPropagation()} style={{ background: '#0e121e' }}>
          
          <div className="demo-header">
            <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {activeDemo === 'hospital' ? (
                <>
                  <HeartPulse style={{ color: 'var(--primary)' }} />
                  Smart-Hospital Pre-Triage Simulator
                </>
              ) : (
                <>
                  <Boxes style={{ color: 'var(--secondary)' }} />
                  WareVision Layout & Space Allocator
                </>
              )}
            </h3>
            <button className="demo-close-btn" onClick={() => setActiveDemo(null)}>
              <X size={20} />
            </button>
          </div>

          <div className="demo-body">
            {activeDemo === 'hospital' ? (
              <div className="hospital-triage-container">
                <div className="symptom-selection">
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Select Patient Symptoms:
                  </h4>
                  <div className="symptom-grid">
                    {symptomsList.map(sym => (
                      <button
                        key={sym.id}
                        onClick={() => setSelectedSymptom(sym.id)}
                        className={`symptom-chip ${selectedSymptom === sym.id ? 'selected' : ''}`}
                      >
                        {sym.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleTriageStart}
                    disabled={!selectedSymptom || isTriageLoading}
                    className="btn btn-primary btn-sm"
                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                  >
                    Run Triage Assessment
                  </button>
                </div>

                <div className="triage-output">
                  <div className="triage-assessment">
                    <span className="gemini-heading">
                      <Activity size={16} />
                      Gemini Pre-Triage Output
                    </span>
                    <div className="assessment-content">
                      {isTriageLoading ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px', gap: '1rem' }}>
                          <div className="pulse-dot" style={{ width: '16px', height: '16px' }}></div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI assessment in progress...</span>
                        </div>
                      ) : triageResult ? (
                        <div>
                          <p style={{ marginBottom: '1rem', color: '#fff' }}>{triageResult.assessment}</p>
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <span className="tag" style={{ color: triageResult.severity === 'Emergent' ? '#ef4444' : triageResult.severity === 'Urgent' ? '#f59e0b' : '#10b981' }}>
                              Priority: {triageResult.severity}
                            </span>
                            <span className="tag">Wait Time: {triageResult.wait}</span>
                          </div>
                          <button
                            onClick={handlePrintTicket}
                            className="btn btn-secondary btn-sm"
                            style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                          >
                            <Printer size={14} /> Print Consultation Ticket
                          </button>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', color: 'var(--text-muted)' }}>
                          Select symptom and execute triage to see AI report.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="ticket-printer-wrapper">
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Printer Simulator</h4>
                    {printedTicket ? (
                      <div className="ticket-print">
                        <div className="ticket-header">HEALTH CARE TRIAGE</div>
                        <div className="ticket-divider"></div>
                        <div style={{ textAlign: 'center', fontSize: '0.75rem' }}>PRIORITY PASS</div>
                        <div className="ticket-code">{printedTicket.id}</div>
                        <div className="ticket-row">
                          <span>Symptom:</span>
                          <strong>{printedTicket.label}</strong>
                        </div>
                        <div className="ticket-row">
                          <span>Urgency:</span>
                          <strong style={{ color: printedTicket.severity === 'Emergent' ? '#ef4444' : '#1e293b' }}>
                            {printedTicket.severity} (CAT-{printedTicket.priority})
                          </strong>
                        </div>
                        <div className="ticket-row">
                          <span>Wait Time:</span>
                          <strong>{printedTicket.wait}</strong>
                        </div>
                        <div className="ticket-row">
                          <span>Time Issued:</span>
                          <span>{printedTicket.time}</span>
                        </div>
                        <div className="ticket-divider"></div>
                        <div style={{ textAlign: 'center', fontSize: '0.6rem', marginTop: '0.5rem', color: '#666' }}>
                          Present to Desk when code flashes
                        </div>
                      </div>
                    ) : (
                      <div style={{ border: '2px dashed rgba(255,255,255,0.06)', width: '200px', height: '220px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', padding: '1rem' }}>
                        Waiting for print request...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="warevision-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Visual representation of a warehouse sector. Click any block to allocate manually, or use the form below.
                  </p>
                  <button className="btn btn-secondary btn-sm" onClick={clearWarehouse} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Trash2 size={14} /> Reset Grid
                  </button>
                </div>

                <div className="warehouse-layout-grid">
                  {wareGrid.map(cell => (
                    <button
                      key={cell.id}
                      onClick={() => toggleCellOccupancy(cell.id)}
                      className={`grid-cell ${cell.occupied ? 'occupied' : ''}`}
                      style={cell.occupied ? {
                        background: `linear-gradient(135deg, ${getCellBgColor(cell.type)}33, ${getCellBgColor(cell.type)}55)`,
                        borderColor: getCellBgColor(cell.type)
                      } : {}}
                      title={cell.occupied ? `${cell.type} stock allocated` : 'Empty Space'}
                    >
                      {cell.occupied ? cell.type[0] : cell.id + 1}
                    </button>
                  ))}
                </div>

                <div className="allocation-controls">
                  <div className="glass-panel allocation-form" style={{ padding: '1.25rem', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Stock Allocation Panel</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Category</label>
                      <select
                        value={allocType}
                        onChange={e => setAllocType(e.target.value)}
                        style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.06)', padding: '0.5rem', borderRadius: '0.25rem' }}
                      >
                        <option value="General" style={{ background: '#0e121e' }}>General Goods</option>
                        <option value="Electronics" style={{ background: '#0e121e' }}>Electronics</option>
                        <option value="Medical" style={{ background: '#0e121e' }}>Medical Supplies</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Allocation Size</label>
                      <select
                        value={allocSize}
                        onChange={e => setAllocSize(e.target.value)}
                        style={{ background: 'rgba(255,255,255,0.03)', color: '#fff', border: '1px solid rgba(255,255,255,0.06)', padding: '0.5rem', borderRadius: '0.25rem' }}
                      >
                        <option value={1} style={{ background: '#0e121e' }}>1 block (Standard)</option>
                        <option value={2} style={{ background: '#0e121e' }}>2 blocks (Medium)</option>
                        <option value={3} style={{ background: '#0e121e' }}>3 blocks (Large)</option>
                      </select>
                    </div>

                    <button className="btn btn-primary btn-sm" onClick={allocateInventory} style={{ marginTop: '0.5rem' }}>
                      Allocate Space
                    </button>
                    {allocStatusMsg && (
                      <p style={{ fontSize: '0.75rem', color: allocStatusMsg.includes('Error') ? '#ef4444' : 'var(--accent)', marginTop: '0.5rem' }}>
                        {allocStatusMsg}
                      </p>
                    )}
                  </div>

                  <div className="allocation-stats">
                    <div>
                      <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Storage Layout Metrics</h4>
                      
                      <div className="stat-row">
                        <span>Total capacity:</span>
                        <span className="stat-value">{wareGrid.length} Shelves</span>
                      </div>
                      <div className="stat-row">
                        <span>Occupied:</span>
                        <span className="stat-value">{occupiedCount} Shelves</span>
                      </div>
                      <div className="stat-row">
                        <span>Available:</span>
                        <span className="stat-value">{wareGrid.length - occupiedCount} Shelves</span>
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                        <span>Warehouse Capacity Load</span>
                        <span>{capacityPct}%</span>
                      </div>
                      <div className="capacity-bar-container">
                        <div
                          className="capacity-bar-fill"
                          style={{
                            width: `${capacityPct}%`,
                            backgroundColor: capacityPct > 80 ? '#ef4444' : capacityPct > 50 ? '#f59e0b' : 'var(--accent)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Projects</span>
          <h2 className="section-title">My Recent Builds</h2>
        </div>

        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="glass-panel project-card">
            <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src={smartHospitalImg} 
                alt="Smart Hospital Queue Management System" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="project-info-body">
              <h3 className="project-title">Smart-Hospital-Queue-Management-System</h3>
              <p className="project-desc">
                A full-stack, real-time medical walk-in queue monitor with symptoms pre-triage recommendations. Leverages React, Node.js (Express), and Gemini-assisted algorithms to manage patient volumes, identify bottlenecks, and issue digital consultation codes.
              </p>
              
              <div className="project-tags">
                <span className="tag">React 18</span>
                <span className="tag">TailwindCSS</span>
                <span className="tag">NodeJS</span>
                <span className="tag">Express</span>
                <span className="tag">Gemini API</span>
              </div>
              
              <div className="project-actions" style={{ justifyContent: 'flex-end' }}>
                <a 
                  href="https://github.com/PA1-TECH/Smart-Hospital-Queue-Management-System" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-panel project-card">
            <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src={wareVisionImg} 
                alt="WareVision Layout Space Allocation & Visualization System" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="project-info-body">
              <h3 className="project-title">WareVision</h3>
              <p className="project-desc">
                Intelligent warehouse storage management, space allocation, and visualization layout system. Features a sleek glassmorphic dark theme, enabling operators to analyze capacities, visually arrange inventory cells, and generate metrics in real-time.
              </p>
              
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Vanilla CSS</span>
                <span className="tag">Space Allocation</span>
                <span className="tag">Data Analytics</span>
              </div>
              
              <div className="project-actions" style={{ justifyContent: 'flex-end' }}>
                <a 
                  href="https://github.com/PA1-TECH/WareVision" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {renderDemoModal()}
    </section>
  );
}
