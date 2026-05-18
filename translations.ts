export type Language = 'en' | 'hi';

export interface Translations {
  // Header
  governmentOfHaryana: string;
  janSamvadPlatform: string;
  haryanGrievancePortal: string;
  janSamvadJanSamadhan: string;
  home: string;
  dashboard: string;
  login: string;
  register: string;
  logout: string;
  hello: string;

  // Footer
  aboutHaryanaGovernment: string;
  privacyPolicy: string;
  accessibility: string;
  contactSupport: string;
  quickLinks: string;
  contact: string;
  haryanaGrievancePortalDesc: string;
  officialPublicGrievanceRedressal: string;
  haryanaGovernment: string;
  copyrightText: string;
  allRightsReserved: string;
  helpline: string;

  // Home Page
  fileAGrievance: string;
  trackStatus: string;
  registerGrievance: string;
  trackStatusTitle: string;
  redressal: string;
  lodgeYourComplaint: string;
  getRealTimeUpdates: string;
  timelyResolution: string;
  frequentlyAskedQuestions: string;

  // FAQ
  howToFileGrievance: string;
  howToFileAnswer: string;
  whatDocuments: string;
  whatDocumentsAnswer: string;
  howLongResolve: string;
  howLongResolveAnswer: string;
  howTrackGrievance: string;
  howTrackAnswer: string;
  canEditGrievance: string;
  canEditAnswer: string;
  isInfoSecure: string;
  isInfoSecureAnswer: string;

  // Dashboard
  welcomeBack: string;
  hereIsSnapshot: string;
  totalGrievances: string;
  openInProgress: string;
  resolved: string;
  reopened: string;
  quickActions: string;
  fileNewGrievance: string;
  viewAllGrievances: string;
  recentActivity: string;
  youHaveNotFiled: string;
  fileYourFirstGrievance: string;
  grievanceID: string;
  subject: string;
  dateFiled: string;
  status: string;
  action: string;
  view: string;
  viewAllRecords: string;

  // File Grievance Form
  fileANewGrievance: string;
  stepOfForm: string;
  grievanceDetails: string;
  uploadDocuments: string;
  reviewSubmit: string;
  grievanceCategory: string;
  selectCategory: string;
  selectDistrict: string;
  location: string;
  locationPlaceholder: string;
  description: string;
  descriptionPlaceholder: string;
  uploadFiles: string;
  maxFileSize: string;
  allowedFormats: string;
  anonymous: string;
  fileAsAnonymous: string;
  next: string;
  previous: string;
  submit: string;
  cancel: string;
  grievanceSubmittedSuccessfully: string;
  yourIDIs: string;

  // Track Grievance
  trackYourGrievance: string;
  enterGrievanceID: string;
  grievanceNotFound: string;
  noGrievancesYet: string;
  allGrievances: string;
  mobileNumber: string;
  enterMobileNumber: string;
  search: string;
  searchResults: string;

  // Grievance Details
  grievanceDetails_title: string;
  submittedOn: string;
  lastUpdated: string;
  timeline: string;
  replies: string;
  noReplies: string;
  addReply: string;
  typeYourMessage: string;
  send: string;
  back: string;
  category: string;
  district: string;

  // Auth Wizard
  loginOrRegister: string;
  iHaveAccount: string;
  iDontHaveAccount: string;
  emailOrPhone: string;
  enterEmailOrPhone: string;
  password: string;
  enterPassword: string;
  confirmPassword: string;
  enterConfirmPassword: string;
  name: string;
  enterName: string;
  loginButton: string;
  registerButton: string;
  invalidEmail: string;
  passwordMismatch: string;
  required: string;

  // Chatbot
  namaskar: string;
  haryanaSahayak: string;
  howCanAssist: string;
  getUpdatesOnGrievances: string;
  fileNewGrievanceChat: string;
  otherQuestions: string;
  backToOptions: string;
  notLoggedIn: string;
  onlyShowLimited: string;
  demoGrievance1: string;
  demoGrievance2: string;
  toViewAll: string;
  loginToViewAll: string;
  toFileNew: string;
  youHave: string;
  totalGrievancesChat: string;
  areInProgress: string;
  areResolved: string;
  openMyGrievances: string;
  recent: string;

  // Statuses
  submitted: string;
  underReview: string;
  closed: string;
  inProgress: string;

  // CM Name
  cmName: string;
  chiefMinisterHaryana: string;
  shriNayabSinghSaini: string;

  // Form Validation
  pleaseSelect: string;
}

const englishTranslations: Translations = {
  // Header
  governmentOfHaryana: "Government of Haryana",
  janSamvadPlatform: "Jan Samvad – Citizen Services Platform",
  haryanGrievancePortal: "Haryana Grievance Portal",
  janSamvadJanSamadhan: "Jan Samvad, Jan Samadhan",
  home: "Home",
  dashboard: "Dashboard",
  login: "Login",
  register: "Register",
  logout: "Logout",
  hello: "Hello",

  // Footer
  aboutHaryanaGovernment: "About Haryana Government",
  privacyPolicy: "Privacy Policy",
  accessibility: "Accessibility",
  contactSupport: "Contact Support",
  quickLinks: "Quick Links",
  contact: "Contact",
  haryanaGrievancePortalDesc: "Haryana Grievance Portal",
  officialPublicGrievanceRedressal: "Official Public Grievance Redressal System of Government of Haryana",
  haryanaGovernment: "Haryana",
  copyrightText: "Government of Haryana — Public Grievance Redressal System",
  allRightsReserved: "All Rights Reserved.",
  helpline: "Helpline: 1800-180-2345",

  // Home Page
  fileAGrievance: "File a Grievance",
  trackStatus: "Track Status",
  registerGrievance: "Register Grievance",
  trackStatusTitle: "Track Status",
  redressal: "Redressal",
  lodgeYourComplaint: "Lodge your complaint easily with our step-by-step process.",
  getRealTimeUpdates: "Get real-time updates on the progress of your resolution.",
  timelyResolution: "Timely resolution by designated Nodal Officers.",
  frequentlyAskedQuestions: "Frequently Asked Questions",

  // FAQ
  howToFileGrievance: "How do I file a grievance?",
  howToFileAnswer: "You can file a grievance by clicking on the 'File a Grievance' button on the home page or your dashboard. You will need to provide a subject, category, district, location, and a detailed description of the issue. You can also upload relevant photos or documents.",
  whatDocuments: "What documents can I upload with my grievance?",
  whatDocumentsAnswer: "You can upload images (JPG, PNG) and PDF documents that support your complaint. This helps authorities understand the issue better.",
  howLongResolve: "How long does it usually take to resolve a grievance?",
  howLongResolveAnswer: "The resolution time varies depending on the complexity of the issue and the department involved. However, most grievances are reviewed within 7 days, and you will receive updates at every stage.",
  howTrackGrievance: "How can I track the status of my grievance?",
  howTrackAnswer: "Once logged in, you can view the status of all your submitted complaints in the 'Track Status' or 'Dashboard' section. You will see a timeline of actions taken.",
  canEditGrievance: "Can I edit or reopen a grievance after submitting?",
  canEditAnswer: "You cannot edit a grievance once submitted to ensure the integrity of the record. However, if you are not satisfied with the resolution, you can add a reply requesting to reopen the case, or file a new grievance linking to the previous ID.",
  isInfoSecure: "Is my personal information secure on this portal?",
  isInfoSecureAnswer: "Yes, your personal information is secure. We only share necessary details with the concerned department for the purpose of resolving your grievance. You can also choose to file anonymously if you prefer.",

  // Dashboard
  welcomeBack: "Welcome back",
  hereIsSnapshot: "Here is a snapshot of your grievance activity.",
  totalGrievances: "Total Grievances",
  openInProgress: "Open / In Progress",
  resolved: "Resolved",
  reopened: "Reopened",
  quickActions: "Quick Actions",
  fileNewGrievance: "+ File New Grievance",
  viewAllGrievances: "View All Grievances",
  recentActivity: "Recent Activity",
  youHaveNotFiled: "You have not filed any grievances yet.",
  fileYourFirstGrievance: "File Your First Grievance",
  grievanceID: "Grievance ID",
  subject: "Subject",
  dateFiled: "Date Filed",
  status: "Status",
  action: "Action",
  view: "View",
  viewAllRecords: "View all records →",

  // File Grievance Form
  fileANewGrievance: "File a New Grievance",
  stepOfForm: "of Form",
  grievanceDetails: "Grievance Details",
  uploadDocuments: "Upload Documents",
  reviewSubmit: "Review & Submit",
  grievanceCategory: "Grievance Category",
  selectCategory: "Select Category",
  selectDistrict: "Select District",
  location: "Location / Address",
  locationPlaceholder: "Enter your location or address",
  description: "Detailed Description",
  descriptionPlaceholder: "Describe your issue in detail",
  uploadFiles: "Upload Supporting Files",
  maxFileSize: "Max file size: 5MB",
  allowedFormats: "Allowed formats: PDF, JPG, PNG",
  anonymous: "Anonymous",
  fileAsAnonymous: "File grievance anonymously",
  next: "Next",
  previous: "Previous",
  submit: "Submit",
  cancel: "Cancel",
  grievanceSubmittedSuccessfully: "Grievance Submitted Successfully!",
  yourIDIs: "Your ID is",

  // Track Grievance
  trackYourGrievance: "Track Your Grievance",
  enterGrievanceID: "Enter Grievance ID",
  grievanceNotFound: "Grievance not found. Please check the ID.",
  noGrievancesYet: "You have not filed any grievances yet.",
  allGrievances: "All Grievances",
  mobileNumber: "Mobile Number",
  enterMobileNumber: "Enter Mobile Number",
  search: "Search",
  searchResults: "Search Results",

  // Grievance Details
  grievanceDetails_title: "Grievance Details",
  submittedOn: "Submitted On",
  lastUpdated: "Last Updated",
  timeline: "Timeline",
  replies: "Replies",
  noReplies: "No replies yet.",
  addReply: "Add Reply",
  typeYourMessage: "Type your message here...",
  send: "Send",
  back: "Back",
  category: "Category",
  district: "District",

  // Auth Wizard
  loginOrRegister: "Login or Register",
  iHaveAccount: "I have an account",
  iDontHaveAccount: "I don't have an account",
  emailOrPhone: "Email or Phone",
  enterEmailOrPhone: "Enter your email or phone number",
  password: "Password",
  enterPassword: "Enter your password",
  confirmPassword: "Confirm Password",
  enterConfirmPassword: "Confirm your password",
  name: "Full Name",
  enterName: "Enter your full name",
  loginButton: "Login",
  registerButton: "Register",
  invalidEmail: "Please enter a valid email",
  passwordMismatch: "Passwords do not match",
  required: "This field is required",

  // Chatbot
  namaskar: "Namaskar!",
  haryanaSahayak: "I am Haryana Sahayak.",
  howCanAssist: "How can I assist you with your grievance today?",
  getUpdatesOnGrievances: "Get updates on my filed grievances",
  fileNewGrievanceChat: "File a new grievance",
  otherQuestions: "Other questions about this portal",
  backToOptions: "Back to main options",
  notLoggedIn: "You are not logged in.",
  onlyShowLimited: "I can only show limited recent grievance data without login.",
  demoGrievance1: "Demo Grievance 1: Road pothole complaint in Karnal – Status: In Progress",
  demoGrievance2: "Demo Grievance 2: Water Supply Issue in Gurugram – Status: Under Review",
  toViewAll: "To view all your grievances and real data, please log in first.",
  loginToViewAll: "Login to view all grievances",
  toFileNew: "To file a new grievance, you need to log in first.",
  youHave: "You have",
  totalGrievancesChat: "total grievances filed.",
  areInProgress: "are In Progress/Review,",
  areResolved: "are Resolved.",
  openMyGrievances: "Open My Grievances",
  recent: "Recent",

  // Statuses
  submitted: "Submitted",
  underReview: "Under Review",
  closed: "Closed",
  inProgress: "In Progress",

  // CM Name
  cmName: "Shri Nayab Singh Saini",
  chiefMinisterHaryana: "Chief Minister, Haryana",
  shriNayabSinghSaini: "Shri Nayab Singh Saini",

  // Form Validation
  pleaseSelect: "Please select",
};

const hindiTranslations: Translations = {
  // Header
  governmentOfHaryana: "हरियाणा सरकार",
  janSamvadPlatform: "जन संवाद – नागरिक सेवा मंच",
  haryanGrievancePortal: "हरियाणा शिकायत पोर्टल",
  janSamvadJanSamadhan: "जन संवाद, जन समाधान",
  home: "होम",
  dashboard: "डैशबोर्ड",
  login: "लॉगिन",
  register: "रजिस्टर",
  logout: "लॉगआउट",
  hello: "नमस्ते",

  // Footer
  aboutHaryanaGovernment: "हरियाणा सरकार के बारे में",
  privacyPolicy: "गोपनीयता नीति",
  accessibility: "पहुंचयोग्यता",
  contactSupport: "सहायता से संपर्क करें",
  quickLinks: "त्वरित लिंक",
  contact: "संपर्क",
  haryanaGrievancePortalDesc: "हरियाणा शिकायत पोर्टल",
  officialPublicGrievanceRedressal: "हरियाणा सरकार की आधिकारिक जनता शिकायत निवारण प्रणाली",
  haryanaGovernment: "हरियाणा",
  copyrightText: "हरियाणा सरकार — जनता शिकायत निवारण प्रणाली",
  allRightsReserved: "सभी अधिकार सुरक्षित।",
  helpline: "हेल्पलाइन: 1800-180-2345",

  // Home Page
  fileAGrievance: "शिकायत दर्ज करें",
  trackStatus: "स्थिति ट्रैक करें",
  registerGrievance: "शिकायत पंजीकृत करें",
  trackStatusTitle: "स्थिति ट्रैक करें",
  redressal: "निवारण",
  lodgeYourComplaint: "हमारी चरण-दर-चरण प्रक्रिया के साथ आसानी से अपनी शिकायत दर्ज करें।",
  getRealTimeUpdates: "आपके समाधान की प्रगति पर रीयल-टाइम अपडेट प्राप्त करें।",
  timelyResolution: "नोडल अधिकारियों द्वारा समय पर समाधान।",
  frequentlyAskedQuestions: "अक्सर पूछे जाने वाले प्रश्न",

  // FAQ
  howToFileGrievance: "मैं शिकायत कैसे दर्ज करूं?",
  howToFileAnswer: "आप होम पेज या अपने डैशबोर्ड पर 'शिकायत दर्ज करें' बटन पर क्लिक करके शिकायत दर्ज कर सकते हैं। आपको विषय, श्रेणी, जिला, स्थान और मुद्दे का विस्तृत विवरण प्रदान करना होगा। आप प्रासंगिक फोटो या दस्तावेज भी अपलोड कर सकते हैं।",
  whatDocuments: "मैं अपनी शिकायत के साथ कौन से दस्तावेज अपलोड कर सकता हूं?",
  whatDocumentsAnswer: "आप छवियां (JPG, PNG) और PDF दस्तावेज अपलोड कर सकते हैं जो आपकी शिकायत का समर्थन करते हैं। यह अधिकारियों को मुद्दे को बेहतर तरीके से समझने में मदद करता है।",
  howLongResolve: "शिकायत का समाधान होने में आमतौर पर कितना समय लगता है?",
  howLongResolveAnswer: "समाधान का समय समस्या की जटिलता और संबंधित विभाग पर निर्भर करता है। हालांकि, अधिकांश शिकायतों की समीक्षा 7 दिनों के भीतर की जाती है, और आप प्रत्येक चरण पर अपडेट प्राप्त करेंगे।",
  howTrackGrievance: "मैं अपनी शिकायत की स्थिति कैसे ट्रैक कर सकता हूं?",
  howTrackAnswer: "लॉगिन करने के बाद, आप 'स्थिति ट्रैक करें' या 'डैशबोर्ड' अनुभाग में अपनी सभी प्रस्तुत शिकायतों की स्थिति देख सकते हैं। आप किए गए कार्यों की एक समयरेखा देखेंगे।",
  canEditGrievance: "क्या मैं प्रस्तुत करने के बाद शिकायत को संपादित या पुनः खोल सकता हूं?",
  canEditAnswer: "रिकॉर्ड की अखंडता सुनिश्चित करने के लिए आप प्रस्तुत करने के बाद शिकायत को संपादित नहीं कर सकते। हालांकि, यदि आप समाधान से संतुष्ट नहीं हैं, तो आप मामले को फिर से खोलने का अनुरोध करते हुए एक उत्तर जोड़ सकते हैं, या पिछले ID से जुड़ी एक नई शिकायत दर्ज कर सकते हैं।",
  isInfoSecure: "क्या मेरी व्यक्तिगत जानकारी इस पोर्टल पर सुरक्षित है?",
  isInfoSecureAnswer: "हां, आपकी व्यक्तिगत जानकारी सुरक्षित है। हम आपकी शिकायत के समाधान के उद्देश्य से केवल आवश्यक विवरण संबंधित विभाग के साथ साझा करते हैं। आप चाहें तो गुमनाम रूप से शिकायत दर्ज करना भी चुन सकते हैं।",

  // Dashboard
  welcomeBack: "स्वागत है",
  hereIsSnapshot: "यहाँ आपकी शिकायत गतिविधि का एक स्नैपशॉट है।",
  totalGrievances: "कुल शिकायतें",
  openInProgress: "खुली / प्रगति में",
  resolved: "समाधान की गई",
  reopened: "पुनः खोली गई",
  quickActions: "त्वरित कार्य",
  fileNewGrievance: "+ नई शिकायत दर्ज करें",
  viewAllGrievances: "सभी शिकायतें देखें",
  recentActivity: "हाल की गतिविधि",
  youHaveNotFiled: "आपने अभी तक कोई शिकायत दर्ज नहीं की है।",
  fileYourFirstGrievance: "अपनी पहली शिकायत दर्ज करें",
  grievanceID: "शिकायत ID",
  subject: "विषय",
  dateFiled: "दर्ज करने की तारीख",
  status: "स्थिति",
  action: "कार्य",
  view: "देखें",
  viewAllRecords: "सभी रिकॉर्ड देखें →",

  // File Grievance Form
  fileANewGrievance: "नई शिकायत दर्ज करें",
  stepOfForm: "फॉर्म का",
  grievanceDetails: "शिकायत विवरण",
  uploadDocuments: "दस्तावेज अपलोड करें",
  reviewSubmit: "समीक्षा करें और सबमिट करें",
  grievanceCategory: "शिकायत श्रेणी",
  selectCategory: "श्रेणी चुनें",
  selectDistrict: "जिला चुनें",
  location: "स्थान / पता",
  locationPlaceholder: "अपना स्थान या पता दर्ज करें",
  description: "विस्तृत विवरण",
  descriptionPlaceholder: "अपनी समस्या का विस्तार से वर्णन करें",
  uploadFiles: "सहायक फाइलें अपलोड करें",
  maxFileSize: "अधिकतम फाइल आकार: 5MB",
  allowedFormats: "अनुमत प्रारूप: PDF, JPG, PNG",
  anonymous: "गुमनाम",
  fileAsAnonymous: "गुमनाम रूप से शिकायत दर्ज करें",
  next: "अगला",
  previous: "पिछला",
  submit: "सबमिट करें",
  cancel: "रद्द करें",
  grievanceSubmittedSuccessfully: "शिकायत सफलतापूर्वक प्रस्तुत की गई!",
  yourIDIs: "आपका ID है",

  // Track Grievance
  trackYourGrievance: "अपनी शिकायत को ट्रैक करें",
  enterGrievanceID: "शिकायत ID दर्ज करें",
  grievanceNotFound: "शिकायत नहीं मिली। कृपया ID की जांच करें।",
  noGrievancesYet: "आपने अभी तक कोई शिकायत दर्ज नहीं की है।",
  allGrievances: "सभी शिकायतें",
  mobileNumber: "मोबाइल नंबर",
  enterMobileNumber: "मोबाइल नंबर दर्ज करें",
  search: "खोजें",
  searchResults: "खोज परिणाम",

  // Grievance Details
  grievanceDetails_title: "शिकायत विवरण",
  submittedOn: "दर्ज करने की तारीख",
  lastUpdated: "अंतिम अपडेट",
  timeline: "समयरेखा",
  replies: "उत्तर",
  noReplies: "अभी तक कोई उत्तर नहीं।",
  addReply: "उत्तर जोड़ें",
  typeYourMessage: "अपना संदेश यहाँ टाइप करें...",
  send: "भेजें",
  back: "पीछे",
  category: "श्रेणी",
  district: "जिला",

  // Auth Wizard
  loginOrRegister: "लॉगिन या रजिस्टर करें",
  iHaveAccount: "मेरे पास पहले से खाता है",
  iDontHaveAccount: "मेरे पास खाता नहीं है",
  emailOrPhone: "ईमेल या फोन",
  enterEmailOrPhone: "अपना ईमेल या फोन नंबर दर्ज करें",
  password: "पासवर्ड",
  enterPassword: "अपना पासवर्ड दर्ज करें",
  confirmPassword: "पासवर्ड की पुष्टि करें",
  enterConfirmPassword: "अपने पासवर्ड की पुष्टि करें",
  name: "पूरा नाम",
  enterName: "अपना पूरा नाम दर्ज करें",
  loginButton: "लॉगिन करें",
  registerButton: "रजिस्टर करें",
  invalidEmail: "कृपया एक वैध ईमेल दर्ज करें",
  passwordMismatch: "पासवर्ड मेल नहीं खा रहे",
  required: "यह फील्ड आवश्यक है",

  // Chatbot
  namaskar: "नमस्कार!",
  haryanaSahayak: "मैं हरियाणा सहायक हूँ।",
  howCanAssist: "मैं आपकी शिकायत में कैसे सहायता कर सकता हूँ?",
  getUpdatesOnGrievances: "मेरी दर्ज की गई शिकायतों पर अपडेट प्राप्त करें",
  fileNewGrievanceChat: "नई शिकायत दर्ज करें",
  otherQuestions: "इस पोर्टल के बारे में अन्य प्रश्न",
  backToOptions: "मुख्य विकल्पों पर वापस जाएं",
  notLoggedIn: "आप लॉगिन नहीं हैं।",
  onlyShowLimited: "बिना लॉगिन के मैं केवल सीमित हाल की शिकायतें दिखा सकता हूँ।",
  demoGrievance1: "डेमो शिकायत 1: करनाल में सड़क के गड्ढे की शिकायत – स्थिति: प्रगति में",
  demoGrievance2: "डेमो शिकायत 2: गुड़गांव में जल आपूर्ति समस्या – स्थिति: समीक्षा के अधीन",
  toViewAll: "सभी शिकायतें और वास्तविक डेटा देखने के लिए कृपया पहले लॉगिन करें।",
  loginToViewAll: "सभी शिकायतें देखने के लिए लॉगिन करें",
  toFileNew: "नई शिकायत दर्ज करने के लिए आपको पहले लॉगिन करना होगा।",
  youHave: "आपके पास है",
  totalGrievancesChat: "कुल शिकायतें दर्ज की गई।",
  areInProgress: "प्रगति में हैं/समीक्षा के अधीन हैं,",
  areResolved: "समाधान की गई हैं।",
  openMyGrievances: "मेरी शिकायतें खोलें",
  recent: "हाल की",

  // Statuses
  submitted: "प्रस्तुत",
  underReview: "समीक्षा के अधीन",
  closed: "बंद",
  inProgress: "प्रगति में",

  // CM Name
  cmName: "श्री नायब सिंह सैनी",
  chiefMinisterHaryana: "मुख्यमंत्री, हरियाणा",
  shriNayabSinghSaini: "श्री नायब सिंह सैनी",

  // Form Validation
  pleaseSelect: "कृपया चुनें",
};

export const translations: Record<Language, Translations> = {
  en: englishTranslations,
  hi: hindiTranslations,
};
