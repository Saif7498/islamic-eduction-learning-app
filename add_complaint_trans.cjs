const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const newTranslations = {
  en: {
    reportIssue: "Report an Issue",
    formName: "Name",
    formCountry: "Country",
    formState: "State",
    formPinCode: "Pin Code",
    formTitle: "Issue Title",
    formDescription: "Description",
    submitComplaint: "Send via WhatsApp"
  },
  hi: {
    reportIssue: "समस्या की रिपोर्ट करें",
    formName: "नाम",
    formCountry: "देश",
    formState: "राज्य",
    formPinCode: "पिन कोड",
    formTitle: "समस्या का शीर्षक",
    formDescription: "विवरण",
    submitComplaint: "व्हाट्सएप के माध्यम से भेजें"
  },
  ur: {
    reportIssue: "مسئلہ کی رپورٹ کریں",
    formName: "نام",
    formCountry: "ملک",
    formState: "ریاست",
    formPinCode: "پن کوڈ",
    formTitle: "مسئلے کا عنوان",
    formDescription: "تفصیل",
    submitComplaint: "واٹس ایپ کے ذریعے بھیجیں"
  },
  ar: {
    reportIssue: "الإبلاغ عن مشكلة",
    formName: "الاسم",
    formCountry: "البلد",
    formState: "الولاية/المقاطعة",
    formPinCode: "الرمز البريدي",
    formTitle: "عنوان المشكلة",
    formDescription: "الوصف",
    submitComplaint: "إرسال عبر واتساب"
  },
  bn: {
    reportIssue: "একটি সমস্যার রিপোর্ট করুন",
    formName: "নাম",
    formCountry: "দেশ",
    formState: "রাজ্য",
    formPinCode: "পিন কোড",
    formTitle: "সমস্যার শিরোনাম",
    formDescription: "বিবরণ",
    submitComplaint: "হোয়াটসঅ্যাপের মাধ্যমে পাঠান"
  },
  id: {
    reportIssue: "Laporkan Masalah",
    formName: "Nama",
    formCountry: "Negara",
    formState: "Provinsi",
    formPinCode: "Kode Pos",
    formTitle: "Judul Masalah",
    formDescription: "Deskripsi",
    submitComplaint: "Kirim via WhatsApp"
  },
  tr: {
    reportIssue: "Sorun Bildir",
    formName: "İsim",
    formCountry: "Ülke",
    formState: "Eyalet/İl",
    formPinCode: "Posta Kodu",
    formTitle: "Sorun Başlığı",
    formDescription: "Açıklama",
    submitComplaint: "WhatsApp ile Gönder"
  },
  fr: {
    reportIssue: "Signaler un problème",
    formName: "Nom",
    formCountry: "Pays",
    formState: "État/Région",
    formPinCode: "Code Postal",
    formTitle: "Titre du problème",
    formDescription: "Description",
    submitComplaint: "Envoyer via WhatsApp"
  },
  es: {
    reportIssue: "Reportar un problema",
    formName: "Nombre",
    formCountry: "País",
    formState: "Estado/Provincia",
    formPinCode: "Código Postal",
    formTitle: "Título del problema",
    formDescription: "Descripción",
    submitComplaint: "Enviar por WhatsApp"
  },
  mr: {
    reportIssue: "समस्येची तक्रार करा",
    formName: "नाव",
    formCountry: "देश",
    formState: "राज्य",
    formPinCode: "पिन कोड",
    formTitle: "समस्येचे शीर्षक",
    formDescription: "वर्णन",
    submitComplaint: "व्हॉट्सॲपद्वारे पाठवा"
  },
  te: {
    reportIssue: "సమస్యను నివేదించండి",
    formName: "పేరు",
    formCountry: "దేశం",
    formState: "రాష్ట్రం",
    formPinCode: "పిన్ కోడ్",
    formTitle: "సమస్య శీర్షిక",
    formDescription: "వివరణ",
    submitComplaint: "వాట్సాప్ ద్వారా పంపండి"
  },
  ta: {
    reportIssue: "சிக்கலை புகாரளிக்கவும்",
    formName: "பெயர்",
    formCountry: "நாடு",
    formState: "மாநிலம்",
    formPinCode: "அஞ்சல் குறியீடு",
    formTitle: "சிக்கலின் தலைப்பு",
    formDescription: "விளக்கம்",
    submitComplaint: "வாட்ஸ்அப் மூலம் அனுப்பவும்"
  },
  gu: {
    reportIssue: "સમસ્યાની જાણ કરો",
    formName: "નામ",
    formCountry: "દેશ",
    formState: "રાજ્ય",
    formPinCode: "પિન કોડ",
    formTitle: "સમસ્યાનું શીર્ષક",
    formDescription: "વર્ણન",
    submitComplaint: "WhatsApp દ્વારા મોકલો"
  },
  kn: {
    reportIssue: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
    formName: "ಹೆಸರು",
    formCountry: "ದೇಶ",
    formState: "ರಾಜ್ಯ",
    formPinCode: "ಪಿನ್ ಕೋಡ್",
    formTitle: "ಸಮಸ್ಯೆಯ ಶೀರ್ಷಿಕೆ",
    formDescription: "ವಿವರಣೆ",
    submitComplaint: "WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ"
  },
  ml: {
    reportIssue: "ഒരു പ്രശ്നം റിപ്പോർട്ട് ചെയ്യുക",
    formName: "പേര്",
    formCountry: "രാജ്യം",
    formState: "സംസ്ഥാനം",
    formPinCode: "പിൻ കോഡ്",
    formTitle: "പ്രശ്നത്തിന്റെ തലക്കെട്ട്",
    formDescription: "വിവരണം",
    submitComplaint: "WhatsApp വഴി അയയ്ക്കുക"
  },
  pa: {
    reportIssue: "ਕਿਸੇ ਸਮੱਸਿਆ ਦੀ ਰਿਪੋਰਟ ਕਰੋ",
    formName: "ਨਾਮ",
    formCountry: "ਦੇਸ਼",
    formState: "ਰਾਜ",
    formPinCode: "ਪਿੰਨ ਕੋਡ",
    formTitle: "ਸਮੱਸਿਆ ਦਾ ਸਿਰਲੇਖ",
    formDescription: "ਵਰਣਨ",
    submitComplaint: "WhatsApp ਰਾਹੀਂ ਭੇਜੋ"
  },
  or: {
    reportIssue: "ଏକ ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ",
    formName: "ନାମ",
    formCountry: "ଦେଶ",
    formState: "ରାଜ୍ୟ",
    formPinCode: "ପିନ୍ କୋଡ୍",
    formTitle: "ସମସ୍ୟାର ଶୀର୍ଷକ",
    formDescription: "ବିବରଣୀ",
    submitComplaint: "WhatsApp ମାଧ୍ୟମରେ ପଠାନ୍ତୁ"
  },
  as: {
    reportIssue: "এটা সমস্যাৰ ৰিপোৰ্ট কৰক",
    formName: "নাম",
    formCountry: "দেশ",
    formState: "ৰাজ্য",
    formPinCode: "পিন কোড",
    formTitle: "সমস্যাৰ শিৰোনাম",
    formDescription: "বিৱৰণ",
    submitComplaint: "WhatsApp ৰ জৰিয়তে পঠাওক"
  }
};

for (const [lang, trans] of Object.entries(newTranslations)) {
  const transStr = Object.entries(trans).map(([k, v]) => `    ${k}: "${v}",`).join('\n');
  const regex = new RegExp(`(contactWhatsApp: "[^"]+",?)`, 'g');
  
  // Find the exact match for this language block
  // Since we can't easily parse the TS object, we'll just replace the contactWhatsApp line
  // with itself + the new translations.
  // Wait, we need to make sure we only replace in the correct language block.
  // Actually, let's just do a simple replace.
  
  // A better way:
  const langRegex = new RegExp(`(${lang}:\\s*{[^}]*?contactWhatsApp:\\s*"[^"]+",?)`, 's');
  content = content.replace(langRegex, `$1\n${transStr}`);
}

fs.writeFileSync('src/translations.ts', content);
