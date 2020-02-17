import LocalizedStrings from "react-localization";

import config from "../config";

const strings = new LocalizedStrings({
  en: {
    appTitle: "Personnel Certificates",
    officeName: "Office Name",
    organizationName: "Organization Name",
    onlineCertificates: "Online Certificates",
    belongingCertificate: "Belonging or not",
    timeInServiceCertificate: "Service Time Settlement",
    officeAddress: "Address Line",
    officeCity: "City - Country",
    officePhones: "Phone: (333) 999-0001",
    webSiteUrl: "www.website.url",
    PDPP: "Policy for the processing of personal data",
    aggrementPDPP: "Agreement No. 001-2020",
    consentPDPP: `In compliance with the provisions of {0}, issued by the Ministry 
                  of Telecommunications and the Information Society, we communicate 
                  our policy for the processing of personal data. To continue browsing
                  this site you must accept the terms of it.`,
    acceptLabel: "Accept",
    bePart: {
      title: "Belong or Not Query",
      leyend: "Enter your ID",
      idlabel: "Identity",
      idplaceholder: "Identity",
      idhint: "Enter your Identity ID",
      fingerlabel: "Finger code",
      fingerplaceholder: "Finger code",
      fingerhint: "Enter your finger code",
      seclabel: "Security text",
      secplaceholder: "Security text",
      sechint: "Enter security text",
      action: "Continue"
    }
  },
  es: {
    appTitle: config.appTitle,
    officeName: config.officeName,
    organizationName: config.organizationName,
    onlineCertificates: config.onlineCertificates,
    belongingCertificate: config.belongingCertificate,
    timeInServiceCertificate: config.timeInServiceCertificate,
    officeAddress: config.officeAddress,
    officeCity: config.officeCity,
    officePhones: config.officePhones,
    webSiteUrl: config.webSiteUrl,
    PDPP: config.PDPP,
    aggrementPDPP: config.aggrementPDPP,
    consentPDPP: config.consentPDPP,
    acceptLabel: config.acceptLabel,
    bePart: {
      title: config.bePartTitle,
      leyend: config.bePartLeyend,
      idlabel: config.bePartIdlabel,
      idplaceholder: config.bePartIdplaceholder,
      idhint: config.bePartIdhint,
      fingerlabel: config.bePartFingerlabel,
      fingerplaceholder: config.bePartFingerplaceholder,
      fingerhint: config.bePartFingerhint,
      seclabel: config.bePartSeclabel,
      secplaceholder: config.bePartSecplaceholder,
      sechint: config.bePartSechint,
      action: config.bePartContinue
    }
  }
});

export default strings;
