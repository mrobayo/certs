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
    acceptLabel: "Accept"
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
    acceptLabel: config.acceptLabel
  }
});

export default strings;
