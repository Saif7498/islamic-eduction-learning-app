const fs = require('fs');
let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(/cash: "নগদ অর্থ \(ঘরে ও ব্যাংকে\)",/, 'cashAtHome: "ঘরে নগদ অর্থ",\n    cashInBank: "ব্যাংকে নগদ অর্থ",\n    helpSectionTitle: "সাহায্য ও সমর্থন",\n    helpSectionDesc: "যদি আপনি কোনো ভুল পান বা সাহায্যের প্রয়োজন হয়, অনুগ্রহ করে হোয়াটসঅ্যাপে আমাদের সাথে যোগাযোগ করুন।",\n    contactWhatsApp: "হোয়াটসঅ্যাপে যোগাযোগ করুন",');

fs.writeFileSync('src/translations.ts', content);
