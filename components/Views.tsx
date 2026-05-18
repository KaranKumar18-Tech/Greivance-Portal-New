
import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Select, TextArea, Card, Badge, Accordion } from './UI';
import { User, Grievance, GrievanceStatus, TimelineEvent, UserRole, ChatbotData } from '../types';
import { MOCK_GRIEVANCES, DISTRICTS, CATEGORIES } from '../constants';
import { useLanguage } from '../LanguageContext';

// --- FAQ Section ---
export const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      title: t('howToFileGrievance'),
      content: t('howToFileAnswer')
    },
    {
      title: t('whatDocuments'),
      content: t('whatDocumentsAnswer')
    },
    {
      title: t('howLongResolve'),
      content: t('howLongResolveAnswer')
    },
    {
      title: t('howTrackGrievance'),
      content: t('howTrackAnswer')
    },
    {
      title: t('canEditGrievance'),
      content: t('canEditAnswer')
    },
    {
      title: t('isInfoSecure'),
      content: t('isInfoSecureAnswer')
    }
  ];

  return (
    <div className="bg-gray-50 py-16" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gov-dark mb-8">{t('frequentlyAskedQuestions')}</h2>
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

// --- Home View ---
export const HomeView: React.FC<{ onFileGrievance: () => void; onTrack: () => void }> = ({ onFileGrievance, onTrack }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gov-blue text-white overflow-hidden">
        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Text Content - Aligned Left */}
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                {t('janSamvadJanSamadhan')}
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-lg drop-shadow-md leading-relaxed">
                {t('officialPublicGrievanceRedressal')}
                Transparent, Efficient, and Accountable Governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" onClick={onFileGrievance}>
                  {t('fileAGrievance')}
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gov-blue" onClick={onTrack}>
                  {t('trackStatus')}
                </Button>
              </div>
            </div>

            {/* Image Content - Aligned Right */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-8 md:mt-0">
              <div className="w-48 h-56 md:w-64 md:h-72 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://www.brutimes.com/cache/Nayab_Singh_Saini_CM_1200_x_630.webp"
                  alt="Hon. Nayab Singh Saini, Chief Minister of Haryana"
                  className="w-full h-full object-cover scale-[1.3]"
                  style={{ objectPosition: 'center 40px' }}
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center md:text-right">
                <p className="text-white font-bold text-lg leading-none text-shadow">{t('cmName')}</p>
                <p className="text-xs text-blue-100 font-semibold uppercase tracking-wider mt-1">{t('chiefMinisterHaryana')}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-30 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white -mt-8 rounded-t-xl shadow-lg md:bg-transparent md:shadow-none md:mt-0">
        <Card className="text-center py-8 border-t-4 border-gov-accent">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold mb-2">{t('registerGrievance')}</h3>
          <p className="text-gray-600 mb-4">{t('lodgeYourComplaint')}</p>
        </Card>
        <Card className="text-center py-8 border-t-4 border-gov-success">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold mb-2">{t('trackStatusTitle')}</h3>
          <p className="text-gray-600 mb-4">{t('getRealTimeUpdates')}</p>
        </Card>
        <Card className="text-center py-8 border-t-4 border-gov-blue">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold mb-2">{t('redressal')}</h3>
          <p className="text-gray-600 mb-4">{t('timelyResolution')}</p>
        </Card>
      </div>

      {/* FAQ Section Integration */}
      <FAQSection />
    </div>
  );
};

// --- Citizen Dashboard ---
export const CitizenDashboard: React.FC<{
  user: User;
  onNavigate: (view: 'file-grievance' | 'track' | 'grievance-details', data?: any) => void
}> = ({ user, onNavigate }) => {
  const { t } = useLanguage();
  const [grievances, setGrievances] = useState<Grievance[]>([]);
  const [stats, setStats] = useState({ total: 0, open: 0, resolved: 0, reopened: 0 });

  useEffect(() => {
    const key = `hr_grievances_${user.mobile}`;
    const localGrievances = JSON.parse(localStorage.getItem(key) || "[]");
    const allGrievances = [...localGrievances, ...MOCK_GRIEVANCES];

    // Sort by date descending
    allGrievances.sort((a: Grievance, b: Grievance) =>
      new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime()
    );

    setGrievances(allGrievances);

    // Calculate stats
    const statsCalc = allGrievances.reduce((acc: any, g: Grievance) => {
      acc.total++;
      if ([GrievanceStatus.RESOLVED, GrievanceStatus.CLOSED].includes(g.status as GrievanceStatus)) {
        acc.resolved++;
      } else if (g.status === GrievanceStatus.REOPENED) {
        acc.reopened++;
      } else {
        acc.open++;
      }
      return acc;
    }, { total: 0, open: 0, resolved: 0, reopened: 0 });

    setStats(statsCalc);
  }, [user.mobile]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case GrievanceStatus.SUBMITTED: return <Badge type="info">{t('submitted')}</Badge>;
      case GrievanceStatus.UNDER_REVIEW: return <Badge type="warning">{t('underReview')}</Badge>;
      case GrievanceStatus.CLOSED: return <Badge type="success">{t('closed')}</Badge>;
      default: return <Badge type="info">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg shadow-sm border-l-4 border-gov-blue p-6 mb-8">
        <h1 className="text-2xl font-bold text-gov-dark mb-1">{t('welcomeBack')}, {user.name}</h1>
        <p className="text-gray-600">{t('hereIsSnapshot')}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-t-4 border-blue-500 text-center py-6">
          <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{t('totalGrievances')}</h3>
          <p className="text-3xl font-bold text-gov-dark">{stats.total}</p>
        </Card>
        <Card className="border-t-4 border-yellow-500 text-center py-6">
          <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{t('openInProgress')}</h3>
          <p className="text-3xl font-bold text-gov-dark">{stats.open}</p>
        </Card>
        <Card className="border-t-4 border-green-500 text-center py-6">
          <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{t('resolved')}</h3>
          <p className="text-3xl font-bold text-gov-dark">{stats.resolved}</p>
        </Card>
        <Card className="border-t-4 border-red-500 text-center py-6">
          <h3 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{t('reopened')}</h3>
          <p className="text-3xl font-bold text-gov-dark">{stats.reopened}</p>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gov-dark mb-4">{t('quickActions')}</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => onNavigate('file-grievance')}>{t('fileNewGrievance')}</Button>
          <Button variant="outline" onClick={() => onNavigate('track')}>{t('viewAllGrievances')}</Button>
        </div>
      </div>

      {/* Recent Grievances */}
      <div>
        <h2 className="text-lg font-bold text-gov-dark mb-4">{t('recentActivity')}</h2>
        {grievances.length === 0 ? (
          <Card className="text-center py-10 bg-gray-50 border-dashed border-2 border-gray-300">
            <p className="text-gray-500 mb-4">{t('youHaveNotFiled')}</p>
            <Button variant="primary" onClick={() => onNavigate('file-grievance')}>{t('fileYourFirstGrievance')}</Button>
          </Card>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('grievanceID')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('subject')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('dateFiled')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('status')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('action')}</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {grievances.slice(0, 5).map(g => (
                    <tr key={g.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gov-blue">{g.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate" title={g.subject}>{g.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(g.dateFiled).toLocaleDateString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusBadge(g.status)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          className="text-gov-blue hover:text-blue-800 font-medium"
                          onClick={() => onNavigate('grievance-details', g)}
                        >
                          {t('view')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {grievances.length > 5 && (
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-right">
                <button className="text-sm text-gov-blue hover:underline" onClick={() => onNavigate('track')}>{t('viewAllRecords')}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Chatbot Assistant ---
interface ChatMessage {
  sender: 'bot' | 'user';
  text?: string;
  isOptions?: boolean;
  options?: { label: string; action: () => void }[];
}

export const ChatbotAssistant: React.FC<{
  user: User | null;
  onNavigate: (view: 'file-grievance' | 'track', data?: any) => void;
  onLogin: () => void;
}> = ({ user, onNavigate, onLogin }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [mode, setMode] = useState<'MENU' | 'UPDATES' | 'FILE' | 'QNA'>('MENU');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat when opened
  useEffect(() => {
    if (isOpen) {
      resetToMainMenu();
    }
  }, [isOpen]);

  const resetToMainMenu = () => {
    setMode('MENU');
    setMessages([
      { sender: 'bot', text: `${t('namaskar')} ${t('haryanaSahayak')} ${t('howCanAssist')}` },
      {
        sender: 'bot',
        isOptions: true,
        options: [
          { label: t('getUpdatesOnGrievances'), action: () => handleOptionSelected('UPDATES') },
          { label: t('fileNewGrievanceChat'), action: () => handleOptionSelected('FILE') },
          { label: t('otherQuestions'), action: () => handleOptionSelected('QNA') }
        ]
      }
    ]);
  };

  const handleOptionSelected = (selectedMode: 'UPDATES' | 'FILE' | 'QNA') => {
    setMode(selectedMode);

    // Add user selection to chat history
    let label = '';
    if (selectedMode === 'UPDATES') label = t('getUpdatesOnGrievances');
    if (selectedMode === 'FILE') label = t('fileNewGrievanceChat');
    if (selectedMode === 'QNA') label = t('otherQuestions');

    setMessages(prev => [...prev, { sender: 'user', text: label }]);

    if (selectedMode === 'UPDATES') {
      handleUpdatesFlow();
    } else if (selectedMode === 'FILE') {
      handleFileFlow();
    } else if (selectedMode === 'QNA') {
      handleQnAFlow();
    }
  };

  const handleUpdatesFlow = () => {
    if (!user) {
      // Logged Out
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `${t('notLoggedIn')} ${t('onlyShowLimited')}` },
          { sender: 'bot', text: t('demoGrievance1') },
          { sender: 'bot', text: t('demoGrievance2') },
          { sender: 'bot', text: t('toViewAll') },
          {
            sender: 'bot',
            isOptions: true,
            options: [
              { label: t('loginToViewAll'), action: () => { setIsOpen(false); onLogin(); } },
              { label: t('backToOptions'), action: resetToMainMenu }
            ]
          }
        ]);
      }, 500);
    } else {
      // Logged In
      const key = `hr_grievances_${user.mobile}`;
      const localGrievances = JSON.parse(localStorage.getItem(key) || "[]");
      const allGrievances = [...localGrievances, ...MOCK_GRIEVANCES];
      const total = allGrievances.length;
      const inProgress = allGrievances.filter((g: any) => g.status === GrievanceStatus.IN_PROGRESS || g.status === GrievanceStatus.UNDER_REVIEW).length;
      const resolved = allGrievances.filter((g: any) => g.status === GrievanceStatus.RESOLVED || g.status === GrievanceStatus.CLOSED).length;

      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: `${t('youHave')} ${total} ${t('totalGrievancesChat')}` },
          { sender: 'bot', text: `${inProgress} ${t('areInProgress')} ${resolved} ${t('areResolved')}` },
        ]);

        if (allGrievances.length > 0) {
           const recent = allGrievances.slice(0, 3).map((g: any) => `ID: ${g.id}, ${g.subject.substring(0, 20)}... (${g.status})`).join('\n');
           setMessages(prev => [...prev, { sender: 'bot', text: `${t('recent')}:\n` + recent }]);
        }

        setMessages(prev => [
          ...prev,
          {
            sender: 'bot',
            isOptions: true,
            options: [
              { label: t('openMyGrievances'), action: () => { setIsOpen(false); onNavigate('track'); } },
              { label: t('backToOptions'), action: resetToMainMenu }
            ]
          }
        ]);
      }, 500);
    }
  };

  const handleFileFlow = () => {
    if (!user) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: t('toFileNew') },
          {
             sender: 'bot',
             isOptions: true,
             options: [
               { label: t('loginButton'), action: () => { setIsOpen(false); onLogin(); } },
               { label: t('backToOptions'), action: resetToMainMenu }
             ]
          }
        ]);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: 'Great, let us file a new grievance with Haryana Government.' },
          {
             sender: 'bot',
             isOptions: true,
             options: [
               { label: 'Open Grievance Form', action: () => { setIsOpen(false); onNavigate('file-grievance'); } },
               { label: t('backToOptions'), action: resetToMainMenu }
             ]
          }
        ]);
      }, 500);
    }
  };

  const handleQnAFlow = () => {
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'You can ask me questions about how to use this Haryana Grievance Portal (e.g., how to file, documents needed, tracking).' },
        { sender: 'bot', text: 'Go ahead, type your question below.' }
      ]);
    }, 500);
  };

  const handleSendInput = () => {
    if (!input.trim() || mode !== 'QNA') return;

    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const txt = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let reply = "I didn't quite understand that. Please ask about filing, tracking, or documents related to Haryana grievance process.";

      if (txt.includes('file') || txt.includes('filing')) {
        reply = "To file a grievance with Haryana Government: 1. Login to the portal. 2. Click on 'File Grievance' in the dashboard. 3. Select your district (Gurugram, Faridabad, Karnal, etc.), category, and fill in the details. 4. Submit your grievance.";
      } else if (txt.includes('track') || txt.includes('status')) {
        reply = "To track a grievance: Go to your Dashboard and click 'View All Grievances'. You can see the realtime status there. Your grievance ID starts with HRG-.";
      } else if (txt.includes('document') || txt.includes('photo') || txt.includes('upload')) {
        reply = "You can upload JPG, PNG images or PDF documents. Please ensure files are clear and relevant to your complaint.";
      } else if (txt.includes('secure') || txt.includes('data') || txt.includes('privacy')) {
        reply = "Your data is completely secure with Haryana Government. We only share details with the assigned Nodal Officer for resolving the issue.";
      } else if (txt.includes('district') || txt.includes('area')) {
        reply = "This portal covers all Haryana districts including Gurugram, Faridabad, Panipat, Karnal, Hisar, Rohtak, Ambala, Yamunanagar, Sonipat, and Bhiwani.";
      }

      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: reply },
        {
          sender: 'bot',
          isOptions: true,
          options: [
            { label: 'Back to main options', action: resetToMainMenu }
          ]
        }
      ]);
    }, 500);
  };

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gov-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 group"
            aria-label="Open Chatbot Assistant"
          >
            <span className="hidden group-hover:inline-block font-medium pr-1 whitespace-nowrap">Need help? Ask Haryana Sahayak</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </button>
        )}
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all max-h-[600px] h-[80vh]">
          {/* Header */}
          <div className="bg-gov-blue text-white p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
               <h3 className="font-bold">Haryana Sahayak</h3>
            </div>
            <div className="flex gap-2">
              {mode !== 'MENU' && (
                <button onClick={resetToMainMenu} className="text-xs bg-blue-800 hover:bg-blue-900 px-2 py-1 rounded">
                  Main Menu
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 text-lg">&times;</button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.text && (
                  <div className={`max-w-[85%] p-3 rounded-lg text-sm mb-1 ${
                    msg.sender === 'user'
                      ? 'bg-gov-blue text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm whitespace-pre-line'
                  }`}>
                    {msg.text}
                  </div>
                )}

                {msg.isOptions && msg.options && (
                  <div className="flex flex-col gap-2 mt-1 w-full max-w-[85%]">
                    {msg.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={opt.action}
                        className="bg-white border border-gov-blue text-gov-blue hover:bg-blue-50 text-sm font-medium py-2 px-3 rounded-lg text-left shadow-sm transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t shrink-0">
             <div className="flex gap-2 relative">
                <input
                  className="flex-grow border rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-gov-blue outline-none disabled:bg-gray-100 disabled:text-gray-400"
                  placeholder={mode === 'QNA' ? "Type your question..." : "Select an option above"}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSendInput()}
                  disabled={mode !== 'QNA'}
                />
                <button
                  onClick={handleSendInput}
                  disabled={mode !== 'QNA' || !input.trim()}
                  className="bg-gov-blue text-white p-2 rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- Auth Wizard ---
export const AuthWizard: React.FC<{ onAuthenticated: (user: User) => void }> = ({ onAuthenticated }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = () => {
    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleVerifyOTP = () => {
    if (otp === '1234') {
      // Mock authentication
      const user: User = {
        id: `USER-${mobile}`,
        name: "Citizen User", // In a real app, fetch name from profile
        role: UserRole.CITIZEN,
        mobile: mobile
      };
      onAuthenticated(user);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleDemoLogin = () => {
    const groUser: User = {
      id: 'GRO-001',
      name: 'Rajesh Kumar',
      role: UserRole.GRO,
      mobile: '9999999999'
    };
    onAuthenticated(groUser);
  };

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-6 text-center text-gov-blue">Login to Haryana Grievance Portal</h2>

      {step === 1 ? (
        <>
          <Input
            label="Mobile Number"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
            maxLength={10}
            error={error}
          />
          <Button fullWidth onClick={handleSendOTP} className="mt-2">Get OTP</Button>

          <div className="mt-6 text-center pt-4 border-t">
            <p className="text-sm text-gray-500 mb-2">For Testing Purposes:</p>
            <button onClick={handleDemoLogin} className="text-xs text-gov-blue underline">
              (Demo Only) Login as Nodal Officer
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4 bg-blue-50 p-3 rounded text-sm text-blue-800">
            OTP sent to {mobile}. Use <strong>1234</strong> for testing.
          </div>
          <Input
            label="Enter OTP"
            placeholder="X X X X"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={4}
            error={error}
          />
          <Button fullWidth onClick={handleVerifyOTP} className="mt-2">Verify & Login</Button>
          <button
            onClick={() => setStep(1)}
            className="w-full text-center mt-4 text-sm text-gray-500 hover:text-gov-blue"
          >
            Change Mobile Number
          </button>
        </>
      )}
    </div>
  );
};

// --- File Grievance View ---
export const FileGrievanceView: React.FC<{ onSubmit: (data: any) => void; initialData?: ChatbotData }> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    district: '',
    location: '',
    description: '',
    isAnonymized: false,
    files: null as FileList | null
  });

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        subject: initialData.subject || prev.subject,
        description: initialData.description || prev.description,
        category: initialData.category || prev.category,
        district: initialData.district || prev.district
      }));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gov-dark">File a New Grievance</h2>
      {initialData && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded mb-6 text-sm flex items-center gap-2">
          <span>Form pre-filled from Haryana Sahayak chat. Please review and add location details.</span>
        </div>
      )}
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Grievance Subject"
            placeholder="Brief title of your complaint"
            required
            value={formData.subject}
            onChange={e => setFormData({...formData, subject: e.target.value})}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Grievance Category"
              options={CATEGORIES}
              placeholder="Select Category"
              required
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
            />
            <Select
              label="District"
              options={DISTRICTS}
              placeholder="Select District"
              required
              value={formData.district}
              onChange={e => setFormData({...formData, district: e.target.value})}
            />
          </div>

          <Input
            label="Specific Location / Address"
            placeholder="Ward number, Village, Sector, Landmark..."
            required
            value={formData.location}
            onChange={e => setFormData({...formData, location: e.target.value})}
          />

          <TextArea
            label="Detailed Description"
            placeholder="Please describe your issue in detail..."
            rows={5}
            required
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Attach Photos/Documents (Optional)</label>
            <input
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gov-blue hover:file:bg-blue-100"
              onChange={e => setFormData({...formData, files: e.target.files})}
            />
          </div>

          <div className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              id="anon"
              checked={formData.isAnonymized}
              onChange={e => setFormData({...formData, isAnonymized: e.target.checked})}
              className="w-4 h-4 text-gov-blue rounded focus:ring-gov-blue"
            />
            <label htmlFor="anon" className="text-sm text-gray-700">File this grievance anonymously</label>
          </div>

          <div className="pt-4">
            <Button type="submit" fullWidth size="lg">Submit Grievance</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

// --- Track Grievance View ---
export const TrackGrievanceView: React.FC<{
  user: User;
  onViewDetails: (g: Grievance) => void;
  onBackToDashboard: () => void;
}> = ({ user, onViewDetails, onBackToDashboard }) => {
  const [grievances, setGrievances] = useState<Grievance[]>([]);

  useEffect(() => {
    // Load user's local grievances
    const key = `hr_grievances_${user.mobile}`;
    const localGrievances = JSON.parse(localStorage.getItem(key) || "[]");

    // Combine with Mock data for demonstration purposes
    // In a real app, this would be an API call fetching by user ID
    const allGrievances = [...localGrievances, ...MOCK_GRIEVANCES];

    // Sort by date descending
    allGrievances.sort((a: Grievance, b: Grievance) =>
      new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime()
    );

    setGrievances(allGrievances);
  }, [user.mobile]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case GrievanceStatus.SUBMITTED: return 'info';
      case GrievanceStatus.UNDER_REVIEW: return 'warning';
      case GrievanceStatus.CLOSED: return 'success';
      default: return 'info';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
         <Button variant="ghost" className="pl-0 text-gray-600 hover:text-gov-blue" onClick={onBackToDashboard}>
            &larr; Back to Dashboard
         </Button>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gov-dark">My Grievances</h2>

      {grievances.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No grievances found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {grievances.map(g => (
            <Card key={g.id} onClick={() => onViewDetails(g)} className="cursor-pointer hover:border-gov-blue transition-all">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600">{g.id}</span>
                    <span className="text-xs text-gray-500">{new Date(g.dateFiled).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gov-dark">{g.subject}</h3>
                </div>
                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
                   <Badge type={getStatusColor(g.status)}>{g.status}</Badge>
                   <span className="text-gov-blue text-sm font-medium">View Details &rarr;</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Grievance Details View ---
export const GrievanceDetailsView: React.FC<{
  grievance: Grievance;
  onBack: () => void;
  onReply: (msg: string) => void;
}> = ({ grievance, onBack, onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    onReply(replyText);
    setReplyText('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-4 pl-0">
        &larr; Back to List
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gov-dark mb-1">{grievance.subject}</h1>
                <p className="text-sm text-gray-500">Filed on {new Date(grievance.dateFiled).toLocaleDateString()} • ID: {grievance.id}</p>
              </div>
              <Badge type={
                grievance.status === GrievanceStatus.CLOSED ? 'success' :
                grievance.status === GrievanceStatus.UNDER_REVIEW ? 'warning' : 'info'
              }>
                {grievance.status}
              </Badge>
            </div>

            {/* Dynamic Status Details */}
            {grievance.status === GrievanceStatus.UNDER_REVIEW && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h4 className="text-sm font-bold text-yellow-800 uppercase mb-1">Current Status</h4>
                <p className="text-sm text-yellow-900">Your grievance is currently under review.</p>
                {grievance.assignedOfficer && (
                  <div className="mt-2 pt-2 border-t border-yellow-200">
                    <p className="text-xs font-semibold text-yellow-800">Assigned Nodal Officer:</p>
                    <p className="text-sm font-medium text-gov-dark">{grievance.assignedOfficer}</p>
                  </div>
                )}
              </div>
            )}

            {grievance.status === GrievanceStatus.CLOSED && (
               <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h4 className="text-sm font-bold text-green-800 uppercase mb-1">Case Closed</h4>
                {grievance.resolution && (
                   <div className="mb-3">
                     <p className="text-xs font-semibold text-green-800">Final Resolution:</p>
                     <p className="text-sm text-gray-800 italic">"{grievance.resolution}"</p>
                   </div>
                )}
                {grievance.closingOfficer && (
                  <div className="pt-2 border-t border-green-200">
                    <p className="text-xs font-semibold text-green-800">Closed By Nodal Officer:</p>
                    <p className="text-sm font-medium text-gov-dark">{grievance.closingOfficer}</p>
                  </div>
                )}
              </div>
            )}

            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-wrap mb-4">{grievance.description}</p>

              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold">District:</span> {grievance.district}</div>
                <div><span className="font-semibold">Category:</span> {grievance.category}</div>
                <div><span className="font-semibold">Location:</span> {grievance.location}</div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Discussion & Updates</h3>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
              {grievance.replies.length === 0 ? (
                <p className="text-gray-500 text-sm text-center italic">No remarks yet.</p>
              ) : (
                grievance.replies.map((reply, idx) => (
                  <div key={idx} className={`p-3 rounded ${reply.author === 'You' ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'}`}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span className="font-bold">{reply.author}</span>
                      <span>{new Date(reply.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-gray-800">{reply.message}</p>
                  </div>
                ))
              )}
            </div>
            <div className="flex gap-2">
              <input
                className="flex-grow border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-gov-blue outline-none"
                placeholder="Add a remark or query..."
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
              />
              <Button size="sm" onClick={handleSendReply} disabled={grievance.status === GrievanceStatus.CLOSED}>Send</Button>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">Timeline</h3>
            <div className="relative border-l-2 border-gray-200 ml-3 space-y-6">
              {grievance.timeline.map((event, idx) => (
                <div key={idx} className="relative pl-6">
                  <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                    event.status === 'completed' ? 'bg-gov-success border-gov-success' :
                    event.status === 'current' ? 'bg-white border-gov-accent' : 'bg-gray-200 border-gray-300'
                  }`}></span>
                  <p className="font-medium text-sm">{event.label}</p>
                  <p className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- GRO Dashboard (Haryana Grievance Control Panel) ---
export const GRODashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Haryana Grievance Control Panel</h1>
      <p className="text-gray-600 mb-6">Nodal Officer Dashboard - Haryana Departments</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-l-4 border-blue-500">
           <h3 className="text-gray-500 text-sm">Total Grievances</h3>
           <p className="text-2xl font-bold">142</p>
        </Card>
        <Card className="border-l-4 border-yellow-500">
           <h3 className="text-gray-500 text-sm">Pending (Normal)</h3>
           <p className="text-2xl font-bold">28</p>
        </Card>
        <Card className="border-l-4 border-orange-500">
           <h3 className="text-gray-500 text-sm">Important</h3>
           <p className="text-2xl font-bold">8</p>
        </Card>
        <Card className="border-l-4 border-red-500">
           <h3 className="text-gray-500 text-sm">Urgent</h3>
           <p className="text-2xl font-bold">3</p>
        </Card>
      </div>
      <Card>
        <p className="text-center text-gray-500 py-10">Select a grievance to view details and take action.</p>
      </Card>
    </div>
  );
};
