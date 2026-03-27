const fs = require('fs');

const translationsFile = 'src/translations.ts';
let content = fs.readFileSync(translationsFile, 'utf8');

const acceptTermsTranslations = {
  en: "I Accept & Continue",
  hi: "मैं स्वीकार करता हूँ",
  ur: "میں قبول کرتا ہوں",
  ar: "أوافق والمتابعة",
  bn: "আমি স্বীকার করছি",
  id: "Saya Setuju & Lanjutkan",
  tr: "Kabul Ediyorum",
  fr: "J'accepte et je continue",
  es: "Acepto y Continuo",
  mr: "मी स्वीकारतो",
  te: "నేను అంగీకరిస్తున్నాను",
  ta: "நான் ஏற்கிறேன்",
  gu: "હું સ્વીકારું છું",
  kn: "ನಾನು ಒಪ್ಪುತ್ತೇನೆ",
  ml: "ഞാൻ അംഗീകരിക്കുന്നു",
  pa: "ਮੈਂ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ",
  or: "ମୁଁ ଗ୍ରହଣ କରୁଛି",
  as: "মই গ্ৰহণ কৰিছোঁ"
};

for (const [lang, text] of Object.entries(acceptTermsTranslations)) {
  const regex = new RegExp(`(${lang}:\\s*{[^}]*?)(privacyBtn)`, 'g');
  content = content.replace(regex, `$1acceptTerms: "${text}",\n    $2`);
}

fs.writeFileSync(translationsFile, content);
console.log('Updated translations.ts');
