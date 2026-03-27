const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

const newTranslations = {
  en: { formMobile: "WhatsApp / Mobile Number" },
  hi: { formMobile: "व्हाट्सएप / मोबाइल नंबर" },
  ur: { formMobile: "واٹس ایپ / موبائل نمبر" },
  ar: { formMobile: "رقم الواتساب / الجوال" },
  bn: { formMobile: "হোয়াটসঅ্যাপ / মোবাইল নম্বর" },
  id: { formMobile: "Nomor WhatsApp / HP" },
  tr: { formMobile: "WhatsApp / Cep Telefonu" },
  fr: { formMobile: "Numéro WhatsApp / Mobile" },
  es: { formMobile: "Número de WhatsApp / Móvil" },
  mr: { formMobile: "व्हॉट्सॲप / मोबाईल नंबर" },
  te: { formMobile: "వాట్సాప్ / మొబైల్ నంబర్" },
  ta: { formMobile: "வாட்ஸ்அப் / மொபைல் எண்" },
  gu: { formMobile: "WhatsApp / મોબાઇલ નંબર" },
  kn: { formMobile: "WhatsApp / ಮೊಬೈಲ್ ಸಂಖ್ಯೆ" },
  ml: { formMobile: "WhatsApp / മൊബൈൽ നമ്പർ" },
  pa: { formMobile: "WhatsApp / ਮੋਬਾਈਲ ਨੰਬਰ" },
  or: { formMobile: "WhatsApp / ମୋବାଇଲ୍ ନମ୍ବର" },
  as: { formMobile: "WhatsApp / ম'বাইল নম্বৰ" }
};

for (const [lang, trans] of Object.entries(newTranslations)) {
  const transStr = `    formMobile: "${trans.formMobile}",`;
  const langRegex = new RegExp(`(${lang}:\\s*{[^}]*?formName:\\s*"[^"]+",?)`, 's');
  content = content.replace(langRegex, `$1\n${transStr}`);
}

fs.writeFileSync('src/translations.ts', content);
