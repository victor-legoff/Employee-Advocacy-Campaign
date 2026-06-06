/**
 * Employee Advocacy — Master Sheet Setup
 *
 * Instructions :
 * 1. Ouvrir le spreadsheet créé
 * 2. Extensions → Apps Script
 * 3. Coller ce code entier, remplacer le contenu existant
 * 4. Cliquer sur "Exécuter" (bouton ▶) en sélectionnant la fonction setupAll
 * 5. Accepter les autorisations demandées
 */

function setupAll() {
  setupContentCalendar();
  setupProfilesWatch();
  setupMembers();
  setupContacts();
  cleanupDefaultSheet();
  SpreadsheetApp.getActiveSpreadsheet().toast('Setup terminé ! 4 onglets créés.', 'Employee Advocacy', 5);
}

// ─────────────────────────────────────────────
// ONGLET 1 — Content Calendar
// ─────────────────────────────────────────────
function setupContentCalendar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Content Calendar';
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName, 0);
  sheet.clear();

  var headers = [
    'Date', 'Mois', 'Jour Semaine', 'Thème Principal',
    'Type Contenu', 'Titre Post', 'Contenu Post',
    'Mots-Clés', 'Hashtags', 'URL LinkedIn', 'Statut', 'Note Interne'
  ];

  var colWidths = [110, 90, 110, 160, 130, 220, 400, 180, 200, 200, 120, 200];

  // En-têtes
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader(sheet, headers.length);

  // Largeurs colonnes
  for (var i = 0; i < colWidths.length; i++) {
    sheet.setColumnWidth(i + 1, colWidths[i]);
  }

  // Formule Mois auto (colonne B) pour 200 lignes
  var moisFormulas = [];
  for (var r = 2; r <= 200; r++) {
    moisFormulas.push(['=IF(A' + r + '="","",TEXT(A' + r + ',"MMMM"))']);
  }
  sheet.getRange(2, 2, 199, 1).setFormulas(moisFormulas);

  // Validation — Jour Semaine (col C)
  var joursRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'], true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, 3, 199, 1).setDataValidation(joursRule);

  // Validation — Type Contenu (col E)
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Article', 'Question', 'Analyse', 'Étude de cas', 'Citation', 'Infographie', 'Carrousel', 'Vidéo'], true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, 5, 199, 1).setDataValidation(typeRule);

  // Validation — Statut (col K)
  var statutRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Idée', 'Brouillon', 'Validé', 'Publié', 'Archivé'], true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, 11, 199, 1).setDataValidation(statutRule);

  // Mise en forme conditionnelle Statut
  var statutRange = sheet.getRange(2, 11, 199, 1);
  var rules = [];
  var statutColors = {
    'Idée':     { bg: '#e8eaf6', fg: '#3949ab' },
    'Brouillon':{ bg: '#fff9c4', fg: '#f57f17' },
    'Validé':   { bg: '#e3f2fd', fg: '#1565c0' },
    'Publié':   { bg: '#e8f5e9', fg: '#2e7d32' },
    'Archivé':  { bg: '#eeeeee', fg: '#757575' }
  };
  for (var statut in statutColors) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo(statut)
        .setBackground(statutColors[statut].bg)
        .setFontColor(statutColors[statut].fg)
        .setBold(true)
        .setRanges([statutRange])
        .build()
    );
  }
  sheet.setConditionalFormatRules(rules);

  // Format date colonne A
  sheet.getRange(2, 1, 199, 1).setNumberFormat('yyyy-mm-dd');

  // Wrap text sur Contenu Post (col G)
  sheet.getRange(2, 7, 199, 1).setWrap(true);
  sheet.setRowHeightsForced(2, 199, 21);

  // Freeze + filtre
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).createFilter();

  // Hauteur ligne header
  sheet.setRowHeight(1, 36);
}

// ─────────────────────────────────────────────
// ONGLET 2 — Profiles Watch
// ─────────────────────────────────────────────
function setupProfilesWatch() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Profiles Watch';
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName, 1);
  sheet.clear();

  var headers = [
    'Nom', 'Prénom', 'URL LinkedIn', 'Secteur',
    'Raison Suivi', 'Fréquence Engagement',
    'Dernier Commentaire Date', 'Dernier Commentaire URL', 'Note'
  ];

  var colWidths = [130, 130, 230, 150, 220, 160, 180, 230, 250];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader(sheet, headers.length);

  for (var i = 0; i < colWidths.length; i++) {
    sheet.setColumnWidth(i + 1, colWidths[i]);
  }

  // Validation Fréquence (col F)
  var freqRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Hebdo', 'Bi-hebdo', 'Mensuel', 'Ponctuel'], true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, 6, 199, 1).setDataValidation(freqRule);

  // Format date col G
  sheet.getRange(2, 7, 199, 1).setNumberFormat('yyyy-mm-dd');

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).createFilter();
  sheet.setRowHeight(1, 36);
}

// ─────────────────────────────────────────────
// ONGLET 3 — Members
// ─────────────────────────────────────────────
function setupMembers() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Members';
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName, 2);
  sheet.clear();

  var headers = ['Nom', 'Prénom', 'Email', 'URL LinkedIn', 'Rôle', 'Actif', 'Note'];
  var colWidths = [130, 130, 220, 230, 180, 80, 250];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader(sheet, headers.length);

  for (var i = 0; i < colWidths.length; i++) {
    sheet.setColumnWidth(i + 1, colWidths[i]);
  }

  // Validation Actif (col F) — checkbox
  sheet.getRange(2, 6, 199, 1).insertCheckboxes();

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).createFilter();
  sheet.setRowHeight(1, 36);
}

// ─────────────────────────────────────────────
// ONGLET 4 — Contacts
// ─────────────────────────────────────────────
function setupContacts() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Contacts';
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName, 3);
  sheet.clear();

  var headers = [
    'Nom', 'Prénom', 'Email', 'URL LinkedIn',
    'Entreprise', 'Secteur', 'Statut Prospect',
    'Dernier Contact Date', 'Note'
  ];

  var colWidths = [130, 130, 220, 230, 180, 150, 130, 160, 280];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  styleHeader(sheet, headers.length);

  for (var i = 0; i < colWidths.length; i++) {
    sheet.setColumnWidth(i + 1, colWidths[i]);
  }

  // Validation Statut Prospect (col G)
  var statutRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Froid', 'Tiède', 'Chaud', 'Client', 'Archivé'], true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, 7, 199, 1).setDataValidation(statutRule);

  // Mise en forme conditionnelle Statut Prospect
  var statRange = sheet.getRange(2, 7, 199, 1);
  var prospectColors = {
    'Froid':   { bg: '#e3f2fd', fg: '#1565c0' },
    'Tiède':   { bg: '#fff9c4', fg: '#f57f17' },
    'Chaud':   { bg: '#fce4ec', fg: '#c62828' },
    'Client':  { bg: '#e8f5e9', fg: '#2e7d32' },
    'Archivé': { bg: '#eeeeee', fg: '#757575' }
  };
  var rules = [];
  for (var s in prospectColors) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo(s)
        .setBackground(prospectColors[s].bg)
        .setFontColor(prospectColors[s].fg)
        .setBold(true)
        .setRanges([statRange])
        .build()
    );
  }
  sheet.setConditionalFormatRules(rules);

  // Format date col H
  sheet.getRange(2, 8, 199, 1).setNumberFormat('yyyy-mm-dd');

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).createFilter();
  sheet.setRowHeight(1, 36);
}

// ─────────────────────────────────────────────
// HELPER — Style en-tête commun
// ─────────────────────────────────────────────
function styleHeader(sheet, numCols) {
  var headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange
    .setBackground('#1a1a2e')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setFontSize(11)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('center');
}

// ─────────────────────────────────────────────
// CLEANUP — Supprimer l'onglet "Feuille 1" par défaut
// ─────────────────────────────────────────────
function cleanupDefaultSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var defaultSheet = ss.getSheetByName('Feuille 1') || ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }
}
