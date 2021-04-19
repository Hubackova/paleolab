﻿import { Link } from "gatsby";
import React from "react";

export const en = {
  menu: {
    menuHomepage: "Homepage",
    menuPeople: "People",
    menuProjects: "Projects",
    menuPublications: "Publications",
    menuLaboratory: "Laboratory",
    menuForStudents: "For Students",
    menuCollections: "Collections",
    menuLinks: "Links",
  },
  footer: {
    addressBrno: "Address Brno:",
    institute: "Institute of Botany of the CAS, v.v.i.",
    name: "Laboratory of Paleoecology",
    streetBrno: "Lidická 25/27",
    zipBrno: "602 00 Brno",
    addressPruhonice: "Address Průhonice:",
    streetPruhonice: "Zámek 1",
    zipPruhonice: "252 43 Průhonice",

    contactBrno: "Contact Brno:",
    contactNameBrno: (
      <>
        <Link
          to="/people/"
          state={{ person: "frankova" }}
          style={{ color: "white" }}
        >
          Markéta Fránková
        </Link>{" "}
        (vedoucí)
      </>
    ),
    contactMailBrno: "marketka.kozakova@seznam.cz",
    contactPhoneBrno: "541 126 223",

    contactPruhonice: "Contact Průhonice:",
    contactNamePruhonice: (
      <>
        <Link
          to="/people/"
          state={{ person: "bobek" }}
          style={{ color: "white" }}
        >
          Přemysl Bobek
        </Link>{" "}
        (zástupce vedoucí)
      </>
    ),
    contactMailPruhonice: "premysl.bobek@ibot.cas.cz",
    contactPhonePruhonice: "+420 777 477 785",

    socialSites: "Social sites:",
  },
  people: {
    people: "People",
    head: "Head of the lab",
    deputyHead: "Deputy head of the lab",
    researchers: "Researchers",
    technical: "Technical and administrative staff",
  },
};

export const cz = {
  menu: {
    menuHomepage: "O nás",
    menuPeople: "Lidé",
    menuProjects: "Projekty",
    menuPublications: "Publikace",
    menuLaboratory: "Laboratoř",
    menuForStudents: "Pro studenty",
    menuCollections: "Sbírky",
    menuLinks: "Odkazy",
    menuContacts: "Kontakty",
  },
  footer: {
    addressBrno: "Adresa Brno:",
    institute: "Botanický ústav AV ČR, v.v.i.",
    name: "Paleoekologická laboratoř",
    streetBrno: "Lidická 25/27",
    zipBrno: "602 00 Brno",
    addressPruhonice: "Adresa Průhonice:",
    streetPruhonice: "Zámek 1",
    zipPruhonice: "252 43 Průhonice",

    contactBrno: "Kontakt Brno:",
    contactNameBrno: (
      <>
        {" "}
        <Link
          to="/people/"
          state={{ person: "frankova" }}
          style={{ color: "white" }}
        >
          Markéta Fránková
        </Link>{" "}
        (vedoucí)
      </>
    ),
    contactMailBrno: "marketka.kozakova@seznam.cz",
    contactPhoneBrno: "541 126 223",

    contactPruhonice: "Kontakt Průhonice:",
    contactNamePruhonice: (
      <>
        <Link
          to="/people/"
          state={{ person: "bobek" }}
          style={{ color: "white" }}
        >
          Přemysl Bobek
        </Link>{" "}
        (zástupce vedoucí)
      </>
    ),
    contactMailPruhonice: "premysl.bobek@ibot.cas.cz",
    contactPhonePruhonice: "+420 777 477 785",

    socialSites: "Sociální sítě:",
  },
  people: {
    people: "Lidé",
    head: "Vedoucí",
    deputyHead: "Zástupce vedoucího",
    researchers: "Vědečtí pracovníci",
    technical: "Techničtí a administrativní pracovníci",
  },
};
