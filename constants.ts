import { Grievance, GrievanceStatus } from './types';

export const MOCK_GRIEVANCES: Grievance[] = [
  {
    id: "HRG-2025-001",
    subject: "गुड़गांव सेक्टर 45 में जल आपूर्ति में व्यवधान",
    description: "गुड़गांव के सेक्टर 45 में जल आपूर्ति पिछले एक सप्ताह से अनियमित है। हम केवल सुबह 30 मिनट के लिए जल प्राप्त कर रहे हैं। इससे निवासियों को गंभीर असुविधा हो रही है।",
    location: "सेक्टर 45, गुड़गांव",
    district: "गुड़गांव",
    category: "जल आपूर्ति",
    dateFiled: "2025-01-10",
    status: GrievanceStatus.UNDER_REVIEW,
    files: ["water_complaint.jpg"],
    lastUpdated: "2025-01-12",
    isAnonymized: false,
    assignedOfficer: "श्री विक्रम सिंह (कार्यपालक अभियंता, लोक स्वास्थ्य विभाग)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-10", status: "completed" },
      { label: "विभाग को सौंपी गई", date: "2025-01-11", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-12", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-002",
    subject: "करनाल में सड़क के गड्ढे की शिकायत",
    description: "करनाल के सेक्टर 12 के पास मुख्य सड़क पर कई गहरे गड्ढे हैं। ये गड्ढे दुर्घटनाओं और वाहनों को नुकसान का कारण बन रहे हैं। तुरंत मरम्मत की आवश्यकता है।",
    location: "सेक्टर 12 मेन रोड, करनाल",
    district: "करनाल",
    category: "सड़क और बुनियादी ढांचा",
    dateFiled: "2025-01-08",
    status: GrievanceStatus.IN_PROGRESS,
    files: ["pothole_photo1.jpg", "pothole_photo2.jpg"],
    lastUpdated: "2025-01-14",
    isAnonymized: false,
    assignedOfficer: "श्री अमित कुमार (जूनियर इंजीनियर, PWD हरियाणा)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-08", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-09", status: "completed" },
      { label: "काम प्रगति में है", date: "2025-01-14", status: "current" }
    ],
    replies: [
      { author: "नोडल अधिकारी", message: "सड़क की मरम्मत का कार्य निर्धारित किया जा चुका है। 5 दिनों में पूरा होने की उम्मीद है।", date: "2025-01-14" }
    ]
  },
  {
    id: "HRG-2025-003",
    subject: "फरीदाबाद में बिजली की कटौती",
    description: "फरीदाबाद के सेक्टर 21 में पिछले 3 दिनों से बार-बार बिजली कटौती हो रही है। बिना किसी सूचना के प्रतिदिन 4-5 घंटे के लिए बिजली बंद हो जाती है। इससे घर से काम करने वाले कर्मचारियों और छात्रों को प्रभावित हो रहे हैं।",
    location: "सेक्टर 21, फरीदाबाद",
    district: "फरीदाबाद",
    category: "बिजली",
    dateFiled: "2025-01-05",
    status: GrievanceStatus.CLOSED,
    files: [],
    atr: "समस्या का समाधान किया गया।",
    lastUpdated: "2025-01-09",
    isAnonymized: false,
    resolution: "क्षेत्र में खराब ट्रांसफॉर्मर को बदला गया है। बिजली की आपूर्ति बहाल और स्थिर की गई है। नियमित निगरानी की जा रही है।",
    closingOfficer: "श्रीमती सुनीता देवी (सहायक अभियंता, DHBVN)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-05", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-06", status: "completed" },
      { label: "समाधान किया गया", date: "2025-01-09", status: "completed" }
    ],
    replies: [
      { author: "नोडल अधिकारी", message: "हमारी टीम समस्या की जांच कर रही है। असुविधा के लिए खेद है।", date: "2025-01-06" },
      { author: "नोडल अधिकारी", message: "खराब ट्रांसफॉर्मर की पहचान की गई है। प्रतिस्थापन कार्य शुरू किया गया है।", date: "2025-01-08" }
    ]
  },
  {
    id: "HRG-2025-004",
    subject: "रोहतक में संपत्ति कर की समस्या",
    description: "मुझे रोहतक के मॉडल टाउन में अपने घर के लिए गलत संपत्ति कर का बिल प्राप्त हुआ है। उल्लिखित क्षेत्र गलत है और कर की राशि बढ़ी हुई है। पुनः मूल्यांकन का अनुरोध।",
    location: "मॉडल टाउन, रोहतक",
    district: "रोहतक",
    category: "नगर निगम सेवाएं",
    dateFiled: "2025-01-12",
    status: GrievanceStatus.SUBMITTED,
    files: ["tax_bill.pdf", "property_documents.pdf"],
    lastUpdated: "2025-01-12",
    isAnonymized: false,
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-12", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-005",
    subject: "हिसार में राशन कार्ड अपडेट अनुरोध",
    description: "मुझे अपने नवजात शिशु का नाम राशन कार्ड में जोड़ना है। मैंने 2 महीने पहले स्थानीय कार्यालय में आवेदन जमा किया था लेकिन कोई अपडेट नहीं है। तेजी से प्रसंस्करण का अनुरोध।",
    location: "वार्ड 15, हिसार शहर",
    district: "हिसार",
    category: "सार्वजनिक वितरण प्रणाली (राशन)",
    dateFiled: "2025-01-03",
    status: GrievanceStatus.RESOLVED,
    files: ["birth_certificate.pdf"],
    lastUpdated: "2025-01-15",
    isAnonymized: false,
    resolution: "राशन कार्ड को नए परिवार के सदस्य के साथ अपडेट किया जा चुका है। अपडेट किया गया कार्ड स्थानीय वितरण कार्यालय से प्राप्त किया जा सकता है।",
    closingOfficer: "श्री रमेश चंद्र (जिला खाद्य और आपूर्ति अधिकारी)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-03", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-05", status: "completed" },
      { label: "समाधान किया गया", date: "2025-01-15", status: "completed" }
    ],
    replies: [
      { author: "नोडल अधिकारी", message: "आपके आवेदन का पता लगा दिया गया है। प्रसंस्करण शुरू किया जा चुका है।", date: "2025-01-05" }
    ]
  },
  {
    id: "HRG-2025-006",
    subject: "पानीपत में कूड़े के संग्रहण की समस्या",
    description: "हमारी कॉलोनी से पिछले 10 दिनों से कूड़ा एकत्रित नहीं किया गया है। सामुदायिक पार्क के पास कूड़े का ढेर स्वास्थ्य खतरे और दुर्गंध का कारण बन रहा है।",
    location: "अंसल सुशांत सिटी, पानीपत",
    district: "पानीपत",
    category: "नगर निगम सेवाएं",
    dateFiled: "2025-01-14",
    status: GrievanceStatus.UNDER_REVIEW,
    files: ["garbage_photo.jpg"],
    lastUpdated: "2025-01-15",
    isAnonymized: true,
    assignedOfficer: "श्री दीपक शर्मा (स्वच्छता निरीक्षक, नगर निगम पानीपत)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-14", status: "completed" },
      { label: "विभाग को सौंपी गई", date: "2025-01-15", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-15", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-007",
    subject: "अंबाला में स्वास्थ्य केंद्र कर्मचारी की अनुपस्थिति",
    description: "गांव केसरी, अंबाला जिले में प्राथमिक स्वास्थ्य केंद्र पिछले एक महीने से बिना डॉक्टर के है। गांववासियों को बुनियादी चिकित्सा सेवा के लिए 15 किमी की दूरी तय करनी पड़ रही है।",
    location: "गांव केसरी, अंबाला",
    district: "अंबाला",
    category: "स्वास्थ्य सेवाएं",
    dateFiled: "2025-01-07",
    status: GrievanceStatus.IN_PROGRESS,
    files: [],
    lastUpdated: "2025-01-13",
    isAnonymized: false,
    assignedOfficer: "डॉ. प्रिया वर्मा (CMO कार्यालय, अंबाला)",
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-07", status: "completed" },
      { label: "समीक्षा के अधीन", date: "2025-01-09", status: "completed" },
      { label: "कार्रवाई प्रगति में है", date: "2025-01-13", status: "current" }
    ],
    replies: [
      { author: "नोडल अधिकारी", message: "डॉक्टर की नियुक्ति के आदेश जारी किए जा चुके हैं। डॉक्टर एक सप्ताह में शामिल होंगे।", date: "2025-01-13" }
    ]
  },
  {
    id: "HRG-2025-008",
    subject: "सोनीपत में भूमि रिकॉर्ड सुधार",
    description: "मेरे भूमि रिकॉर्ड (जमाबंदी) में त्रुटि है। उल्लिखित क्षेत्र गलत है। मैंने सुधार के लिए आवेदन जमा किया है लेकिन 3 महीने से कोई कार्रवाई नहीं की गई है।",
    location: "गांव बरवास्नी, सोनीपत",
    district: "सोनीपत",
    category: "राजस्व / भूमि रिकॉर्ड",
    dateFiled: "2025-01-11",
    status: GrievanceStatus.SUBMITTED,
    files: ["jamabandi_copy.pdf", "application_receipt.pdf"],
    lastUpdated: "2025-01-11",
    isAnonymized: false,
    timeline: [
      { label: "शिकायत दर्ज की गई", date: "2025-01-11", status: "current" }
    ],
    replies: []
  }
];

export const DISTRICTS = [
  "गुड़गांव",
  "फरीदाबाद",
  "पानीपत",
  "करनाल",
  "हिसार",
  "रोहतक",
  "अंबाला",
  "यमुनानगर",
  "सोनीपत",
  "भिवानी"
];

export const CATEGORIES = [
  "जल आपूर्ति",
  "बिजली",
  "सड़क और बुनियादी ढांचा",
  "पुलिस और कानून-व्यवस्था",
  "नगर निगम सेवाएं",
  "कृषि",
  "स्वास्थ्य सेवाएं",
  "शिक्षा",
  "राजस्व / भूमि रिकॉर्ड",
  "सार्वजनिक वितरण प्रणाली (राशन)"
];
