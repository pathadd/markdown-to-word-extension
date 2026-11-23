"use strict";
var PathAddBackground = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // chrome/background.js
  var background_exports = {};
  __export(background_exports, {
    openSelection: () => openSelection
  });

  // frontend/tools/markdown2word/src/i18n.js
  var LANGUAGE_KEY = "pathadd.markdown2word.language.v1";
  var english = {
    "AI \u8F6C Word": "AI to Word",
    "\u7C98\u8D34 AI \u5185\u5BB9": "Paste AI response",
    "\u5DF2\u5BFC\u5165\u7EAF\u6587\u672C\uFF1B\u672A\u6536\u5230\u7684\u683C\u5F0F\u548C\u516C\u5F0F\u7ED3\u6784\u65E0\u6CD5\u6062\u590D\uFF0C\u8BF7\u5728\u53F3\u4FA7\u6838\u5BF9\u3002": "Plain text imported. Missing formatting and equation structure cannot be restored; check the document on the right.",
    "\u6B64\u516C\u5F0F\u53EA\u6709 MathML\uFF1B\u5982\u9700\u66FF\u6362\uFF0C\u8BF7\u8F93\u5165 LaTeX\u3002": "This equation only contains MathML. Enter LaTeX to replace it.",
    "AI \u8F6C Word \xB7 \u5BCC\u6587\u672C\u6574\u7406\u4E0E\u53EF\u7F16\u8F91\u516C\u5F0F | pathadd": "AI to Word \xB7 Rich Text & Editable Equations | pathadd",
    "\u7C98\u8D34 AI \u56DE\u7B54\uFF0C\u4FDD\u7559\u6587\u5B57\u3001\u8868\u683C\u548C\u516C\u5F0F\uFF0C\u5728\u53F3\u4FA7\u4FEE\u6539\u5E76\u5BFC\u51FA\u53EF\u7F16\u8F91 DOCX\u3002": "Paste an AI response, keep text, tables and equations, then edit and export editable DOCX.",
    "AI \u7247\u6BB5": "AI snippet",
    "\u53EA\u8BFB AI \u539F\u6587": "Read-only AI original",
    "\u539F\u59CB\u590D\u5236\u5185\u5BB9\uFF0C\u53EA\u8BFB": "Original copied content, read-only",
    "\u5C55\u5F00 AI \u539F\u6587\u6574\u9875\u9605\u8BFB": "Open the full-page AI response reader",
    "AI \u539F\u6587\u9605\u8BFB": "AI response reader",
    "\u590D\u5236\u6587\u5B57": "Copied text",
    "\u6587\u5B57\u4E0E\u516C\u5F0F \xB7 \u6700\u5927 256 KiB": "Text & equations \xB7 Up to 256 KiB",
    "\u5BFC\u5165 AI \u5185\u5BB9": "Import an AI response",
    "\u4ECE AI \u56DE\u7B54\u4E2D\u9009\u62E9\u6587\u5B57\u548C\u516C\u5F0F\uFF0C\u7528 Ctrl+V \u7C98\u8D34\u3002\u5BFC\u5165\u540E\u5728\u53F3\u4FA7\u4FEE\u6539\u3002": "Select text and equations in an AI response and paste with Ctrl+V. Edit on the right after importing.",
    "\u5982\u683C\u5F0F\u5B58\u5728\u4E22\u5931\uFF0C\u8BA9AI\u8F93\u51FAmarkdown\u6587\u4EF6\uFF0C\u7528\u540E\u4E00\u4E2A\u5DE5\u5177\u9875markdown2word\u5BFC\u51FA": "If formatting is lost, ask the AI for a Markdown file, then export it with the next tool, markdown2word.",
    "\u5728\u8FD9\u91CC\u7C98\u8D34 AI \u56DE\u7B54\uFF0C\u4FDD\u7559\u5BCC\u6587\u672C\u548C\u516C\u5F0F\u2026": "Paste an AI response here, including formatting and equations\u2026",
    "\u590D\u5236\u4F1A\u4E22\u5931\u683C\u5F0F\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u300C\u5BFC\u51FA Word\u300D\u529F\u80FD\u3002": "Copying loses formatting. Use Export Word instead.",
    "\u5BFC\u51FA Word": "Export Word",
    "AI \u5185\u5BB9 \u2192 \u6574\u7406\u6392\u7248 \u2192 \u5BFC\u51FA Word": "AI response \u2192 Format & edit \u2192 Export to Word",
    "\u65E0\u9700 Markdown \u6587\u4EF6": "No Markdown file needed",
    "\u76F4\u63A5\u7C98\u8D34 AI \u56DE\u7B54\uFF0C\u4FDD\u7559\u6807\u9898\u3001\u5F3A\u8C03\u3001\u5217\u8868\u3001\u8868\u683C\u3001\u94FE\u63A5\u548C\u7ED3\u6784\u5316\u516C\u5F0F\u3002": "Paste an AI response directly to keep headings, emphasis, lists, tables, links and structured equations.",
    "\u9700\u8981\u7A33\u5B9A\u4FDD\u7559\u53EF\u7F16\u8F91\u516C\u5F0F\u65F6\uFF0C\u5BFC\u51FA DOCX\uFF0C\u6253\u5F00\u540E\u590D\u5236\u6240\u9700\u5185\u5BB9\u5230\u539F\u6587\u3002": "To preserve native editable equations in a file, export DOCX, open it and copy the content into your document.",
    "\u6CA1\u6709\u516C\u5F0F\u6E90\u7801\u6216 MathML \u7684\u666E\u901A\u6587\u5B57\u3001\u56FE\u7247\u516C\u5F0F\uFF0C\u4E0D\u80FD\u81EA\u52A8\u8FD8\u539F\u4E3A\u53EF\u7F16\u8F91\u516C\u5F0F\u3002": "Plain text without equation source or MathML, and equations in images, cannot be automatically restored as editable equations.",
    "AI \u7247\u6BB5\u8D85\u8FC7 256 KiB\uFF0C\u8BF7\u7F29\u5C0F\u9009\u62E9\u8303\u56F4\u3002": "The AI snippet exceeds 256 KiB. Select a smaller portion.",
    "\u8BF7\u5148\u7C98\u8D34 AI \u5185\u5BB9\u3002": "Paste an AI response first.",
    "AI \u7247\u6BB5\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u7F29\u5C0F\u9009\u62E9\u8303\u56F4\u3002": "The AI snippet is too complex. Select a smaller portion.",
    "\u6BCF\u6B21\u6700\u591A\u5904\u7406 50 \u4E2A\u516C\u5F0F\u3002": "Up to 50 equations per snippet.",
    "\u516C\u5F0F\u7F3A\u5C11\u6E90\u7801\u6216 MathML\uFF0C\u8BF7\u4ECE AI \u56DE\u7B54\u4E2D\u91CD\u65B0\u9009\u62E9\u590D\u5236\u3002": "Equation source or MathML is missing. Select and copy the AI response again.",
    "\u516C\u5F0F\u5305\u542B\u5C1A\u4E0D\u652F\u6301\u7684\u7ED3\u6784\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002": "An equation contains an unsupported structure. Check it and retry.",
    "\u8BF7\u9009\u62E9\u6587\u5B57\u548C\u516C\u5F0F\uFF0C\u4E0D\u5305\u542B\u56FE\u7247\u6216\u5D4C\u5165\u5185\u5BB9\u3002": "Select text and equations without images or embedded content.",
    "\u5217\u8868\u6216\u8868\u683C\u53C2\u6570\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u7F29\u5C0F\u9009\u62E9\u8303\u56F4\u3002": "Unsupported list or table attributes. Select a smaller portion.",
    " {count} \u4E2A\u5185\u90E8\u6216\u4E0D\u652F\u6301\u7684\u94FE\u63A5\u5DF2\u8F6C\u4E3A\u6587\u5B57\u3002": " {count} internal or unsupported links were converted to text.",
    "\u5DF2\u6536\u5230\u5BCC\u6587\u672C\uFF0C\u70B9\u51FB\u5BFC\u5165\u5E76\u6392\u7248\u3002": "Rich text received. Choose Import and format.",
    "\u7C98\u8D34 AI \u56DE\u7B54\uFF0C\u6574\u7406\u540E\u5BFC\u51FA\u53EF\u7F16\u8F91\u6587\u6863\u3002": "Paste an AI response, edit it and export an editable document.",
    "markdown2word \xB7 AI\u6700\u540E\u4E00\u516C\u91CC \xB7 pathadd": "Markdown to Word \xB7 PathAdd",
    "AI \u6700\u540E\u4E00\u516C\u91CC": "From AI draft to final document",
    "AI\u6700\u540E\u4E00\u516C\u91CC": "AI to final document",
    "AI \u5E95\u8272 + \u60A8\u7684\u6E29\u5EA6": "AI-powered. Human-finished.",
    "\u5DE5\u5177\u7A7A\u95F4": "Tools",
    "\u9762\u5305\u5C51": "Breadcrumb",
    "\u5F53\u524D\u5DE5\u5177": "Current tool",
    "\u672C\u5730\u5904\u7406 \xB7 \u5185\u5BB9\u4E0D\u4E0A\u4F20": "Local processing \xB7 No uploads",
    "\u6587\u6863\u6A21\u677F": "Document templates",
    "\u5207\u6362\u6A21\u677F\u4E0D\u6539\u53D8\u5DF2\u7F16\u8F91\u5185\u5BB9": "Templates change formatting, not your edits",
    "\u9009\u62E9\u6A21\u677F": "Choose a template",
    "\u5546\u52A1\u7B80\u6D01": "Business",
    "\u6280\u672F\u4E13\u4E1A": "Technical",
    "\u7D27\u51D1\u62A5\u544A": "Compact",
    "\u6E05\u6670\u514B\u5236\uFF0C\u9002\u5408\u6B63\u5F0F\u4EA4\u4ED8": "Clean, polished, ready to share",
    "\u4EE3\u7801\u3001\u516C\u5F0F\u4E0E\u7ED3\u6784\u517C\u987E": "Built for code, equations, and detail",
    "\u5C11\u4E9B\u7559\u767D\uFF0C\u591A\u4E9B\u4FE1\u606F": "Less space, more information",
    "\u6392\u7248\u53C2\u6570": "Formatting",
    "\u5BFC\u51FAWord": "Export Word",
    "\u53E6\u5B58\u4E3A PDF": "Save as PDF",
    "\u6C34\u5370": "Watermark",
    "\u539F\u6587\u9884\u89C8": "Original",
    "\u53EA\u8BFB": "Read-only",
    "\u5C1A\u672A\u5BFC\u5165": "No document loaded",
    "\u9884\u89C8": "Preview",
    "\u6E90\u7801": "Source",
    "\u6574\u9875\u9884\u89C8": "Full-page view",
    "\u7C98\u8D34": "Paste",
    "\u5BFC\u5165\u6587\u4EF6": "Import",
    "\u793A\u4F8B": "Example",
    "\u6E05\u7A7A": "Clear",
    "\u6E05\u7A7A\u5F53\u524D\u6587\u7A3F\uFF0C\u7EE7\u7EED\u5417\uFF1F": "Clear the current document?",
    "\u6587\u7A3F\u5DF2\u6E05\u7A7A\uFF0C\u53EF\u91CD\u65B0\u7C98\u8D34\u6216\u5BFC\u5165\u3002": "Document cleared. Paste or import a new document.",
    "\u539F\u6587\u663E\u793A\u65B9\u5F0F": "Original document view",
    "\u53EA\u8BFB Markdown \u539F\u6587": "Read-only original Markdown",
    "\u5BFC\u5165\u539F\u6587\u7684\u6392\u7248\u9884\u89C8\uFF0C\u53EA\u8BFB": "Rendered original document, read-only",
    "Markdown \u6E90\u7801\uFF0C\u53EA\u8BFB": "Markdown source, read-only",
    "\u5C55\u5F00 Markdown \u6574\u9875\u9605\u8BFB": "Open the full-page Markdown reader",
    "UTF-8 \xB7 \u6700\u5927 1 MiB": "UTF-8 \xB7 Up to 1 MiB",
    "\u4EA4\u4ED8\u6587\u6863": "Final document",
    "\u4EA4\u4ED8 \u9884\u89C8": "Delivery preview",
    "\u53EF\u7F16\u8F91": "Editable",
    "\u53EF\u7F16\u8F91\u7684 Word \u6587\u6863": "Editable Word document",
    "\u53EF\u7F16\u8F91\u4EA4\u4ED8\u6587\u6863": "Editable final document",
    "\u{1F512} \u7EAF\u672C\u5730\u6E32\u67D3 \xB7 \u6570\u636E\u7EDD\u4E0D\u4E0A\u4F20": "\u{1F512} Rendered locally \xB7 Never uploaded",
    "\u6587\u6863\u7F16\u8F91": "Document editing",
    "\u64A4\u9500 Ctrl+Z": "Undo Ctrl+Z",
    "\u91CD\u505A Ctrl+Shift+Z": "Redo Ctrl+Shift+Z",
    "\u64A4\u9500": "Undo",
    "\u91CD\u505A": "Redo",
    "\u6BB5\u843D\u7C7B\u578B": "Paragraph style",
    "\u6B63\u6587": "Body",
    "\u4E3B\u6807\u9898": "Title",
    "\u4E00\u7EA7\u6807\u9898": "Heading 1",
    "\u4E8C\u7EA7\u6807\u9898": "Heading 2",
    "\u52A0\u7C97 Ctrl+B": "Bold Ctrl+B",
    "\u52A0\u7C97": "Bold",
    "\u659C\u4F53 Ctrl+I": "Italic Ctrl+I",
    "\u659C\u4F53": "Italic",
    "\u4E0B\u5212\u7EBF Ctrl+U": "Underline Ctrl+U",
    "\u4E0B\u5212\u7EBF": "Underline",
    "\u5220\u9664\u7EBF": "Strikethrough",
    "\u65E0\u5E8F\u5217\u8868": "Bullet list",
    "\u7F16\u53F7\u5217\u8868": "Numbered list",
    "\u2022 \u5217\u8868": "\u2022 List",
    "1. \u5217\u8868": "1. List",
    "\u5DE6\u5BF9\u9F50": "Align left",
    "\u4E24\u7AEF\u5BF9\u9F50": "Justify",
    "\u5DE6\u9F50": "Left",
    "\u5C45\u4E2D": "Center",
    "\u4EE3\u7801\u5757": "Code block",
    "\u4EE3\u7801": "Code",
    "\u0192x \u516C\u5F0F": "\u0192x Math",
    "\u63D2\u5165\u6216\u4FEE\u6539 LaTeX \u516C\u5F0F": "Insert or edit a LaTeX equation",
    "\u8868\u683C": "Table",
    "\u63D2\u5165\u4E09\u884C\u4E09\u5217\u8868\u683C": "Insert a three-by-three table",
    "\u5728\u5F53\u524D\u8868\u683C\u4E0B\u65B9\u589E\u52A0\u4E00\u884C": "Add a row below the current table row",
    "\u5220\u9664\u5F53\u524D\u8868\u683C\u884C": "Delete the current table row",
    "\uFF0B\u884C": "+ Row",
    "\uFF0D\u884C": "\u2212 Row",
    "\u540C\u6B65\u6EDA\u52A8": "Sync",
    "\u67E5\u627E\u66FF\u6362": "Find & replace",
    "\u8FD8\u539F\u539F\u7A3F": "Reset",
    "\u51C6\u5907\u5C31\u7EEA": "Ready",
    "\u5728\u672C\u673A\u8BB0\u4F4F\u8349\u7A3F": "Save draft locally",
    "A4 \xB7 \u8FDE\u7EED\u7F16\u8F91\u9884\u89C8": "A4 \xB7 Continuous editing view",
    "\u4F7F\u7528\u8BF4\u660E\u4E0E\u5BFC\u51FA\u63D0\u9192": "Help & export tips",
    "\u5185\u5BB9\u7531\u4F60\u628A\u5173": "You stay in control",
    "\u76F4\u63A5\u4FEE\u6539\u8BED\u6C14\u3001\u627F\u8BFA\u548C\u8D23\u4EFB\u8BCD\uFF1B\u4E0D\u4F1A\u81EA\u52A8\u8C03\u7528 AI\uFF0C\u4E5F\u4E0D\u4F1A\u64C5\u81EA\u6539\u5199\u4E8B\u5B9E\u3002": "Review tone, commitments, and responsibilities. No AI calls or automatic rewriting.",
    "\u516C\u5F0F\u4E0D\u662F\u622A\u56FE": "Equations, not screenshots",
    "\u70B9\u51FB\u516C\u5F0F\u7F16\u8F91 LaTeX\uFF0C\u5BFC\u51FA Word \u539F\u751F\u516C\u5F0F\u3002": "Click an equation to edit its LaTeX. Word exports contain native, editable equations.",
    "\u4F7F\u7528\u53F3\u4FA7\u5DF2\u7F16\u8F91\u6587\u6863\u53CA\u5F53\u524D\u6392\u7248\u53C2\u6570\uFF0C\u6253\u5F00\u672C\u5730 A4 \u6253\u5370\u9875\u3002\u6253\u5370\u7A97\u53E3\u9009\u62E9\u300C\u53E6\u5B58\u4E3A PDF\u300D\uFF0C\u5728\u300C\u66F4\u591A\u8BBE\u7F6E\u300D\u4E2D\u5173\u95ED\u300C\u9875\u7709\u548C\u9875\u811A\u300D\uFF0C\u907F\u514D\u7F51\u5740\u3001\u65F6\u95F4\u548C\u6587\u4EF6\u540D\u51FA\u73B0\u5728\u4EA4\u4ED8\u6587\u4EF6\u4E2D\uFF0C\u5E76\u5F00\u542F\u300C\u80CC\u666F\u56FE\u5F62\u300D\u3002\u4FEE\u6539\u6587\u6863\u540E\u9700\u91CD\u65B0\u751F\u6210\uFF0C\u6700\u7EC8\u5206\u9875\u4EE5\u6253\u5370\u7A97\u53E3\u4E3A\u51C6\u3002": "Open a local A4 print view of your edited document with its current formatting. Choose Save as PDF, turn off Headers and footers under More settings, and turn on Background graphics. Generate a new preview after editing; check final pagination in the print dialog.",
    "\u4EA4\u4ED8\u524D\u518D\u770B\u4E00\u773C": "Review before sharing",
    "\u8FD9\u91CC\u662F\u8FDE\u7EED\u7F16\u8F91\u89C6\u56FE\uFF0C\u4E0D\u662F\u771F\u5B9E Word \u5206\u9875\u3002\u56FE\u7247\u6682\u4FDD\u7559\u8BF4\u660E\uFF0C\u590D\u6742\u516C\u5F0F\u4E0D\u652F\u6301\u65F6\u660E\u786E\u63D0\u793A\u3002": "This editor is continuous, not a paginated Word preview. Images remain text placeholders. Unsupported equations are reported explicitly.",
    "Markdown \u9605\u8BFB": "Markdown reader",
    "\u9605\u8BFB\u7F29\u653E": "Reader zoom",
    "\u5173\u95ED\u6574\u9875\u9884\u89C8": "Close full-page view",
    "\u5173\u95ED\uFF08Esc\uFF09": "Close (Esc)",
    "\u6574\u9875 Markdown \u53EA\u8BFB\u9884\u89C8": "Full-page read-only Markdown preview",
    "\u5BFC\u5165 Markdown": "Import Markdown",
    "\u7C98\u8D34\u540E\u70B9\u51FB\u5BFC\u5165\uFF0C\u5DE6\u4FA7\u5C06\u9501\u5B9A\u4E3A\u53EA\u8BFB\u539F\u7A3F\u3002\u540E\u7EED\u4FEE\u6539\u5728\u53F3\u4FA7\u8FDB\u884C\u3002": "Paste your Markdown and choose Import. The original stays read-only on the left; make your edits on the right.",
    "\u53D6\u6D88": "Cancel",
    "\u5BFC\u5165\u5E76\u91CD\u65B0\u6392\u7248": "Import & format",
    "\u5BFC\u5165\u5E76\u6392\u7248": "Import & format",
    "\u5728\u8FD9\u91CC\u7C98\u8D34 AI \u751F\u6210\u7684 Markdown\u2026": "Paste your Markdown here\u2026",
    "\u5F85\u5BFC\u5165\u7684 Markdown": "Markdown to import",
    "\u8F93\u5165\u516C\u5F0F\u672C\u8EAB\uFF0C\u65E0\u9700 $ \u5206\u9694\u7B26\u3002\u70B9\u51FB\u5DF2\u6709\u516C\u5F0F\u53EF\u518D\u6B21\u7F16\u8F91\u3002": "Enter the equation without dollar-sign delimiters. Click an existing equation to edit it again.",
    "LaTeX \u516C\u5F0F\u6E90\u7801": "LaTeX equation source",
    "\u72EC\u7ACB\u516C\u5F0F\uFF08\u5355\u72EC\u4E00\u884C\uFF09": "Display equation (on its own line)",
    "\u5E94\u7528\u516C\u5F0F": "Apply equation",
    "\u5173\u95ED": "Close",
    "LaTeX \u516C\u5F0F": "LaTeX equation",
    "\u8F93\u5165 LaTeX\uFF0C\u4E0D\u9700\u8981\u4E24\u4FA7\u7684 $\u3002\u652F\u6301\u884C\u5185\u548C\u72EC\u7ACB\u516C\u5F0F\uFF1B\u4FDD\u5B58\u524D\u540C\u65F6\u68C0\u67E5\u9884\u89C8\u548C Word \u8F6C\u6362\u3002": "Enter LaTeX without surrounding dollar signs. Inline and display equations are supported. Both rendering and Word conversion are checked before saving.",
    "\u72EC\u7ACB\u516C\u5F0F": "Display equation",
    "\u4FDD\u5B58\u516C\u5F0F": "Save equation",
    "\u6392\u7248\u53C2\u6570 \xB7 \u62D6\u52A8": "Formatting \xB7 Drag to move",
    "\u79FB\u52A8\u6392\u7248\u53C2\u6570\u9762\u677F\uFF0C\u53EF\u62D6\u52A8\u6216\u6309\u65B9\u5411\u952E\u79FB\u52A8": "Move the formatting panel by dragging or using the arrow keys",
    "\u5E94\u7528\u540E\u4FDD\u6301\u9762\u677F\u6253\u5F00\uFF0C\u53EF\u76F4\u63A5\u67E5\u770B\u53F3\u4FA7\u53D8\u5316\u3002\u5355\u4F4D pt\uFF1B\u4E2D\u6587\u5FAE\u8F6F\u96C5\u9ED1\uFF0C\u897F\u6587 Calibri\uFF0C\u4EE3\u7801 Consolas\u3002Word \u5B57\u53F7\u6309 0.5 pt \u53D6\u6700\u8FD1\u503C\uFF089.8 \u2192 10\u30018.3 \u2192 8.5\uFF09\uFF0C\u9884\u89C8\u4E0E\u5BFC\u51FA\u4E00\u81F4\u3002": "The panel stays open so you can see changes immediately. Sizes are in points. Latin text uses Calibri, CJK text uses Microsoft YaHei, and code uses Consolas. Word sizes round to the nearest half point (9.8 \u2192 10; 8.3 \u2192 8.5), matching the preview.",
    "\u6B63\u6587\u5B57\u53F7": "Body font size",
    "\u6B63\u6587\u56FA\u5B9A\u884C\u8DDD": "Exact body line spacing",
    "\u6B63\u6587\u9996\u884C\u7F29\u8FDB\uFF08\u5B57\u7B26\uFF09": "First-line indent (characters)",
    "\u6B63\u6587\u5BF9\u9F50": "Body alignment",
    "\u6B63\u6587\u6BB5\u524D\u95F4\u8DDD": "Space before paragraphs",
    "\u6B63\u6587\u6BB5\u540E\u95F4\u8DDD": "Space after paragraphs",
    "\u6B63\u6587\u5DE6\u7F29\u8FDB\uFF08pt\uFF09": "Left indent (pt)",
    "\u6B63\u6587\u53F3\u7F29\u8FDB\uFF08pt\uFF09": "Right indent (pt)",
    "\u4E0A\uFF0F\u4E0B\u9875\u8FB9\u8DDD": "Top / bottom margins",
    "\u5DE6\uFF0F\u53F3\u9875\u8FB9\u8DDD": "Left / right margins",
    "\u4E3B\u6807\u9898\u5B57\u53F7": "Title font size",
    "\u4E00\u7EA7\u6807\u9898\u5B57\u53F7": "Heading 1 font size",
    "\u4E8C\u7EA7\u6807\u9898\u5B57\u53F7": "Heading 2 font size",
    "\u7AE0\u8282\u6807\u9898\u6BB5\u524D": "Space before headings",
    "\u7AE0\u8282\u6807\u9898\u6BB5\u540E": "Space after headings",
    "\u4EE3\u7801\u5B57\u53F7": "Code font size",
    "\u4EE3\u7801\u56FA\u5B9A\u884C\u8DDD": "Exact code line spacing",
    "\u8868\u683C\u5B57\u53F7": "Table font size",
    "\u8868\u683C\u56FA\u5B9A\u884C\u8DDD": "Exact table line spacing",
    "\u5355\u5143\u683C\u4E0A\uFF0F\u4E0B\u5185\u8FB9\u8DDD": "Cell padding: top / bottom",
    "\u5355\u5143\u683C\u5DE6\uFF0F\u53F3\u5185\u8FB9\u8DDD": "Cell padding: left / right",
    "\u6B63\u6587\u7F29\u8FDB\u3001\u6BB5\u524D\u548C\u9ED8\u8BA4\u5BF9\u9F50\u4E0D\u5F71\u54CD\u5217\u8868\u3001\u8868\u683C\u3001\u4EE3\u7801\u6216\u5F15\u7528\uFF1B\u5355\u6BB5\u624B\u52A8\u5BF9\u9F50\u4F18\u5148\u3002\u7AE0\u8282\u6807\u9898\u95F4\u8DDD\u4E0D\u542B\u4E3B\u6807\u9898\u3002": "Body indent, spacing before, and default alignment do not affect lists, tables, code, or quotes. Manual paragraph alignment takes priority. Heading spacing excludes the document title.",
    "\u4E2A\u4EBA\u9884\u8BBE\u540D\u79F0": "Custom preset name",
    "\u4F8B\u5982\uFF1A\u590D\u76D8\u62A5\u544A \xB7 \u9002\u4E2D\u7248": "For example: Weekly review",
    "\u9884\u8BBE\u4EC5\u5B58\u4E8E\u6B64\u6D4F\u89C8\u5668\u3001\u6B64\u7F51\u7AD9\u7684\u672C\u5730\u5B58\u50A8\uFF08localStorage\uFF09\uFF0C\u4E0D\u542B\u6587\u6863\u5185\u5BB9\u3002\u518D\u6B21\u4FDD\u5B58\u8986\u76D6\u539F\u9884\u8BBE\uFF1B\u6E05\u9664\u7F51\u7AD9\u6570\u636E\u4F1A\u5220\u9664\u3002": "Your preset is stored only in this browser and on this origin, without document content. Saving replaces the previous preset; clearing site data deletes it.",
    "\u8BFB\u53D6\u4E2A\u4EBA\u9884\u8BBE": "Load preset",
    "\u4FDD\u5B58\u4E2A\u4EBA\u9884\u8BBE": "Save preset",
    "\u5E94\u7528\u53C2\u6570": "Apply",
    "\u4EC5\u66FF\u6362\u53F3\u4FA7\u6B63\u6587\u6587\u5B57\uFF0C\u4E0D\u6539\u539F\u7A3F\u3001\u516C\u5F0F\u548C\u94FE\u63A5\u5730\u5740\u3002\u53EF\u4F7F\u7528\u64A4\u9500\u6062\u590D\u3002": "Replace text in the edited document only. The original, equations, and link URLs stay unchanged. Undo is available.",
    "\u67E5\u627E": "Find",
    "\u66FF\u6362\u4E3A": "Replace with",
    "\u5168\u90E8\u66FF\u6362": "Replace all",
    "\u8BED\u8A00": "Language",
    "\u754C\u9762\u8BED\u8A00": "Interface language",
    "\u5916\u89C2": "Theme",
    "\u7F51\u7AD9\u5916\u89C2": "Website theme",
    "\u529E\u516C\u6D45\u8272": "Office",
    "\u6696\u7EB8\u62A4\u773C": "Paper",
    "\u6DF1\u8272\u4E13\u6CE8": "Dark",
    "\u62D6\u52A8\u6807\u9898\u680F\u79FB\u52A8\uFF0C\u62D6\u52A8\u53F3\u4E0B\u89D2\u8C03\u6574\u5927\u5C0F\uFF1B\u65B9\u5411\u952E\u79FB\u52A8\uFF0CAlt + \u65B9\u5411\u952E\u8C03\u6574\u5927\u5C0F\uFF0CShift \u5FAE\u8C03\u3002": "Drag the title bar to move; drag the lower-right corner to resize. Arrow keys move, Alt + arrows resize, and Shift makes finer adjustments.",
    "\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u53D6\u5916\u89C2\u8BBE\u7F6E\uFF0C\u672C\u6B21\u4F7F\u7528\u529E\u516C\u6D45\u8272\u3002": "Your browser blocked saved theme settings. Using the Office theme for this session.",
    "\u5916\u89C2\u5DF2\u5207\u6362\uFF0C\u4F46\u65E0\u6CD5\u4FDD\u5B58\u3002\u79BB\u5F00\u9875\u9762\u540E\u53EF\u80FD\u6062\u590D\u9ED8\u8BA4\u5916\u89C2\u3002": "Theme changed, but could not be saved. It may reset when you leave this page.",
    "\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u7F16\u8F91\u5668\u2026": "Loading the local editor\u2026",
    "\u7F16\u8F91\u516C\u5F0F\uFF1A{latex}": "Edit equation: {latex}",
    "{count} \u5B57 \xB7 {state}": "{count} characters \xB7 {state}",
    "\u5DF2\u4EBA\u5DE5\u7F16\u8F91": "Edited",
    "\u5DF2\u6309\u6A21\u677F\u6392\u7248": "Formatted",
    "{count} \u5B57\u7B26 \xB7 {lines} \u884C": "{count} characters \xB7 {lines} lines",
    "\u53F3\u4FA7\u6709\u4EBA\u5DE5\u4FEE\u6539\u3002\u66FF\u6362\u539F\u7A3F\u5C06\u91CD\u65B0\u751F\u6210\u6587\u6863\uFF0C\u5F53\u524D\u4FEE\u6539\u4E0D\u4F1A\u4FDD\u7559\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F": "You have unsaved edits. Replacing the original will regenerate the document and discard those edits. Continue?",
    "\u516C\u5F0F\u65E0\u6CD5\u663E\u793A\uFF1A{latex}": "Unable to render equation: {latex}",
    "\u5DF2\u5BFC\u5165 {name}\u3002\u539F\u7A3F\u5DF2\u9501\u5B9A\uFF0C\u8BF7\u5728\u53F3\u4FA7\u4FEE\u6539\u3002": "Imported {name}. The original is read-only; edit the document on the right.",
    " {count} \u5F20\u56FE\u7247\u4EC5\u4FDD\u7559\u6587\u5B57\u8BF4\u660E\uFF0C\u672C\u7248\u672A\u5D4C\u5165\u56FE\u7247\u3002": " {count} images remain text placeholders; images are not embedded.",
    " {count} \u4E2A\u516C\u5F0F\u65E0\u6CD5\u6E32\u67D3\uFF0C\u8BF7\u70B9\u51FB\u4FEE\u6B63\u540E\u518D\u5BFC\u51FA\u3002": " {count} equations could not be rendered. Click to fix them before exporting.",
    "\u8BF7\u9009\u62E9 .md\u3001.markdown \u6216 .txt \u6587\u4EF6\u3002": "Choose an .md, .markdown, or .txt file.",
    "\u6587\u4EF6\u8D85\u8FC7 1 MiB\uFF0C\u8BF7\u7F29\u5C0F\u540E\u5BFC\u5165\u3002": "The file exceeds 1 MiB. Reduce its size before importing.",
    "\u5BFC\u5165\u5931\u8D25\uFF1A{error}": "Import failed: {error}",
    "\u6D4B\u8BD5\u9875.md": "Sample Document.md",
    "\u7C98\u8D34\u7684 Markdown.md": "Pasted Markdown.md",
    "\u5DF2\u5E94\u7528\u300C{name}\u300D\uFF0C\u4EBA\u5DE5\u4FEE\u6539\u7684\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8\u3002": "Applied {name}. Your edits are unchanged.",
    "\u5F53\u524D\u5149\u6807\u4F4D\u7F6E\u65E0\u6CD5\u6267\u884C\u6B64\u64CD\u4F5C\uFF0C\u8BF7\u5148\u9009\u62E9\u76F8\u5E94\u6587\u5B57\u6216\u8868\u683C\u3002": "This action is unavailable at the current cursor position. Select the relevant text or table first.",
    "\u539F\u516C\u5F0F\u4F4D\u7F6E\u5DF2\u6539\u53D8\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u65B0\u9009\u62E9\u3002": "The original equation has moved. Close this dialog and select it again.",
    "\u5F53\u524D\u4F4D\u7F6E\u65E0\u6CD5\u63D2\u5165\u516C\u5F0F\uFF0C\u8BF7\u9009\u62E9\u6B63\u6587\u540E\u91CD\u8BD5\u3002": "An equation cannot be inserted here. Select a body paragraph and try again.",
    "\u516C\u5F0F\u5DF2\u66F4\u65B0\uFF0C\u5C06\u5BFC\u51FA\u4E3A\u53EF\u7F16\u8F91\u7684 Word \u539F\u751F\u516C\u5F0F\u3002": "Equation updated. It will export as a native, editable Word equation.",
    "\u5DF2\u66FF\u6362 {count} \u5904\uFF08\u4E0D\u5305\u542B\u4EE3\u7801\u5757\uFF09\u3002\u53EF\u5173\u95ED\u7A97\u53E3\u540E\u64A4\u9500\u3002": "Replaced {count} occurrences, excluding code blocks. Close this dialog to undo.",
    "\u6392\u7248\u53C2\u6570\u5DF2\u5E94\u7528\u3002Word \u5B57\u53F7\u6309 0.5 pt \u7CBE\u5EA6\u53D6\u6700\u8FD1\u503C\uFF0C\u9884\u89C8\u4E0E\u5BFC\u51FA\u4FDD\u6301\u4E00\u81F4\uFF1B\u884C\u8DDD\u53CA\u9875\u8FB9\u8DDD\u6309\u586B\u5199\u503C\u5E94\u7528\u3002": "Formatting applied. Font sizes round to the nearest half point to match Word. Line spacing and margins use your entered values.",
    "\u4E2A\u4EBA\u9884\u8BBE\u300C{name}\u300D\u5DF2\u4FDD\u5B58\u5728\u6B64\u6D4F\u89C8\u5668\uFF0C\u4E0D\u542B\u6587\u6863\u5185\u5BB9\u3002": "Saved preset \u201C{name}\u201D in this browser, without document content.",
    "\u4FDD\u5B58\u5931\u8D25\uFF1A{error}": "Save failed: {error}",
    "\u6B64\u6D4F\u89C8\u5668\u5C1A\u672A\u4FDD\u5B58\u4E2A\u4EBA\u9884\u8BBE\u3002": "There is no saved preset in this browser.",
    "\u5DF2\u8BFB\u53D6\u4E2A\u4EBA\u9884\u8BBE\u300C{name}\u300D\uFF0C\u6587\u6863\u5185\u5BB9\u4E0D\u53D8\u3002": "Loaded preset \u201C{name}\u201D. Document content is unchanged.",
    "\u8BFB\u53D6\u5931\u8D25\uFF1A{error}": "Load failed: {error}",
    "\u672C\u673A\u8349\u7A3F\u4FDD\u5B58\u5931\u8D25\uFF0C\u5F53\u524D\u5185\u5BB9\u4ECD\u5728\u9875\u9762\u4E2D\uFF0C\u8BF7\u53CA\u65F6\u5BFC\u51FA\uFF1A{error}": "Could not save the local draft. Your document is still open; export it before leaving: {error}",
    "\u5DF2\u5F00\u542F\u672C\u673A\u8349\u7A3F\u4FDD\u5B58\u3002\u8BF7\u52FF\u5728\u516C\u5171\u7535\u8111\u4E0A\u542F\u7528\uFF0C\u5BFC\u51FA\u540E\u53EF\u53D6\u6D88\u52FE\u9009\u5220\u9664\u8349\u7A3F\u3002": "Local draft saving is on. Avoid using it on shared computers. Uncheck it after exporting to delete the draft.",
    "\u672C\u673A\u8349\u7A3F\u5DF2\u5220\u9664\uFF0C\u5F53\u524D\u6587\u6863\u4ECD\u53EF\u7EE7\u7EED\u7F16\u8F91\u3002": "Local draft deleted. You can continue editing the open document.",
    "\u5220\u9664\u672C\u673A\u8349\u7A3F\u5931\u8D25\uFF1A{error}": "Could not delete the local draft: {error}",
    "\u6B63\u5728\u672C\u5730\u751F\u6210 Word\uFF0C\u516C\u5F0F\u5C06\u8F6C\u6362\u4E3A\u539F\u751F\u53EF\u7F16\u8F91\u7ED3\u6784\u2026": "Generating Word locally, with native, editable equations\u2026",
    "Word \u5DF2\u751F\u6210\uFF0C\u5305\u542B\u5BFC\u51FA\u65F6\u53F3\u4FA7\u7684\u4FEE\u6539\u3002\u6B63\u6587\u3001\u8868\u683C\u548C\u516C\u5F0F\u53EF\u7EE7\u7EED\u7F16\u8F91\uFF1B\u8BF7\u5728 Word \u4E2D\u68C0\u67E5\u6700\u7EC8\u5206\u9875\u3002": "Word exported with your edits. Text, tables, and equations remain editable. Check final pagination in Word.",
    "\u5BFC\u51FA\u5931\u8D25\uFF0C\u672A\u751F\u6210\u6587\u4EF6\uFF1A{error}": "Export failed; no file was generated: {error}",
    "\u6B64\u6D4F\u89C8\u5668\u4FDD\u5B58\u4E86\u4E00\u4EFD Markdown \u6587\u6863\u8349\u7A3F\uFF0C\u662F\u5426\u6062\u590D\uFF1F": "A Markdown draft is saved in this browser. Restore it?",
    "\u8349\u7A3F\u683C\u5F0F\u65E0\u6548\u3002": "The saved draft format is invalid.",
    "\u5DF2\u6062\u590D\u672C\u673A\u8349\u7A3F\uFF0C\u53F3\u4FA7\u4EBA\u5DE5\u4FEE\u6539\u4FDD\u6301\u4E0D\u53D8\u3002": "Local draft restored, including your edits.",
    "\u65E0\u6CD5\u8BFB\u53D6\u672C\u673A\u8349\u7A3F\uFF1A{error}": "Could not read the local draft: {error}",
    "\u754C\u9762\u8BED\u8A00\u5DF2\u5207\u6362\uFF0C\u6587\u6863\u5185\u5BB9\u548C\u6392\u7248\u53C2\u6570\u4FDD\u6301\u4E0D\u53D8\u3002": "Interface language changed. Document content and formatting are unchanged.",
    "\u8BED\u8A00\u5DF2\u5207\u6362\uFF0C\u4F46\u65E0\u6CD5\u4FDD\u5B58\u6B64\u504F\u597D\uFF1A{error}": "Language changed, but the preference could not be saved: {error}",
    "\u8BED\u8A00\u8BBE\u7F6E\u65E0\u6548\u3002": "Invalid language setting.",
    "Markdown \u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u3002": "Markdown content cannot be empty.",
    "\u8BF7\u8F93\u5165 LaTeX \u516C\u5F0F\u3002": "Enter a LaTeX equation.",
    "\u5355\u4E2A\u516C\u5F0F\u4E0D\u80FD\u8D85\u8FC7 12000 \u5B57\u7B26\u3002": "An equation cannot exceed 12,000 characters.",
    "\u672C\u7248 Word \u516C\u5F0F\u6682\u4E0D\u652F\u6301\u5B57\u4F53 {variant}\u3002": "Word equation export does not support the font variant {variant}.",
    "\u516C\u5F0F\u672A\u80FD\u751F\u6210 MathML\u3002": "Could not generate MathML for this equation.",
    "\u516C\u5F0F\u65E0\u6CD5\u8F6C\u6362\u4E3A\u6709\u6548\u7684 Word \u539F\u751F\u516C\u5F0F\u3002": "This equation could not be converted to valid native Word math.",
    "Word \u516C\u5F0F\u7ED3\u6784\u63D2\u69FD\u65E0\u6548\u3002": "Invalid structural slot in the Word equation.",
    "\u672C\u7248 Word \u516C\u5F0F\u6682\u4E0D\u652F\u6301\u5217\u5BF9\u9F50 {align}\u3002": "Word equation export does not support column alignment {align}.",
    "\u672C\u7248 Word \u516C\u5F0F\u6682\u4E0D\u652F\u6301\u540C\u4E00\u7EC4\u62EC\u53F7\u5185\u4E0D\u540C\u7684\u53EF\u4F38\u7F29\u5206\u9694\u7B26\u3002": "Word equation export does not support different growing separators within the same pair of delimiters.",
    "Word \u516C\u5F0F\u7ED3\u6784\u672A\u80FD\u5B8C\u6574\u8F6C\u6362\u3002": "The Word equation structure could not be fully converted.",
    "Word \u516C\u5F0F\u5305\u542B\u51B2\u7A81\u7684\u53C2\u6570\u5C5E\u6027\u3002": "The Word equation contains conflicting argument properties.",
    "AI \u6700\u540E\u4E00\u516C\u91CC \xB7 \u4EBA\u5DE5\u786E\u8BA4\u540E\u7684\u4EA4\u4ED8\u6587\u6863": "AI draft, reviewed and ready to share",
    "\u672C\u7248 Word \u516C\u5F0F\u6682\u4E0D\u652F\u6301 {element}\uFF0C\u8BF7\u7B80\u5316\u516C\u5F0F\u540E\u91CD\u8BD5\u3002": "Word equation export does not support {element}. Simplify the equation and try again.",
    "\u65E0\u6548\u6392\u7248\u53C2\u6570\uFF1A{key}": "Invalid formatting setting: {key}",
    "\u6A21\u677F\u989C\u8272\u65E0\u6548\u3002": "Invalid template color.",
    "\u8BF7\u8F93\u5165\u4E0D\u8D85\u8FC7 60 \u5B57\u7B26\u7684\u9884\u8BBE\u540D\u79F0\u3002": "Enter a preset name of up to 60 characters.",
    "\u6392\u7248\u53C2\u6570 {key} \u8D85\u51FA\u8303\u56F4\u3002": "Formatting setting {key} is out of range.",
    "\u56FA\u5B9A\u884C\u8DDD\u4E0D\u80FD\u5C0F\u4E8E\u5BF9\u5E94\u5B57\u53F7\uFF0C\u5426\u5219\u53EF\u80FD\u88C1\u5207\u6587\u5B57\u3002": "Exact line spacing cannot be smaller than the font size, or text may be clipped.",
    "\u6B63\u6587\u5BF9\u9F50\u65B9\u5F0F\u65E0\u6548\u3002": "Invalid body alignment.",
    "\u3010\u56FE\u7247\uFF1A{name}\uFF1B{url}\uFF08\u672C\u7248\u672A\u5D4C\u5165\uFF09\u3011": "[Image: {name}; {url} (not embedded)]",
    "\u6B63\u5728\u672C\u5730\u6E32\u67D3 Mermaid \u56FE\u8868\u2026": "Rendering Mermaid diagram locally\u2026",
    "Mermaid \u56FE\u8868": "Mermaid diagram",
    "\u7F16\u8F91": "Edit",
    "\u7F16\u8F91 Mermaid \u56FE\u8868": "Edit Mermaid diagram",
    "\u5728\u6D4F\u89C8\u5668\u672C\u5730\u6E32\u67D3 Mermaid \u56FE\u8868\uFF0C\u5BFC\u51FA Word \u65F6\u81EA\u52A8\u8F6C\u4E3A\u9AD8\u6E05\u56FE\u7247\u5D4C\u5165\u3002": "Render Mermaid diagrams locally in your browser and embed them as crisp images when exporting to Word.",
    "\u5728\u6D4F\u89C8\u5668\u672C\u5730\u6E32\u67D3 Mermaid \u56FE\u8868\uFF0C\u5BFC\u51FA Word \u65F6\u4F18\u5148\u4EE5\u77E2\u91CF\u56FE\u5D4C\u5165\u5E76\u9644\u5E26\u9AD8\u6E05 PNG \u517C\u5BB9\u515C\u5E95\u3002": "Render Mermaid diagrams locally in your browser and embed them as vector SVG with PNG fallback when exporting to Word.",
    "Mermaid \u56FE\u8868\u6E90\u7801": "Mermaid diagram source",
    "\u5E94\u7528\u56FE\u8868": "Apply diagram",
    "Mermaid \u56FE\u8868\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u3002": "Mermaid diagram content cannot be empty.",
    "\u5355\u4E2A Mermaid \u56FE\u8868\u4E0D\u80FD\u8D85\u8FC7 {limit} \u5B57\u7B26\u3002": "A Mermaid diagram cannot exceed {limit} characters.",
    "Mermaid \u6E32\u67D3\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002": "Failed to load the Mermaid renderer. Refresh and try again.",
    "Mermaid \u672C\u5730\u6E32\u67D3\u811A\u672C\u7F3A\u5931\u6216\u52A0\u8F7D\u5931\u8D25\u3002": "Local Mermaid renderer script is missing or failed to load.",
    "Mermaid \u8BED\u6CD5\u6709\u8BEF\uFF1A{error}": "Invalid Mermaid syntax: {error}",
    "Mermaid \u672A\u80FD\u751F\u6210\u6709\u6548\u7684 SVG \u56FE\u8868\u3002": "Mermaid did not produce a valid SVG diagram.",
    "Mermaid \u56FE\u8868\u8F6C\u56FE\u7247\u5931\u8D25\u3002": "Failed to convert Mermaid diagram to an image.",
    "Mermaid \u56FE\u8868\u6E32\u67D3\u7ED3\u679C\u4E3A\u7A7A\u767D\uFF0C\u8BF7\u91CD\u8BD5\u6216\u6539\u7528\u300C\u53E6\u5B58\u4E3A PDF\u300D\u3002": "Mermaid diagram rendered blank as an image. Try again or use Save as PDF.",
    "\u5F53\u524D\u6D4F\u89C8\u5668\u9650\u5236\u4E86\u5305\u542B\u590D\u6742\u5B57\u4F53\u7684\u56FE\u8868\u5BFC\u51FA\u4E3A\u56FE\u7247\uFF0C\u8BF7\u6539\u7528\u300C\u53E6\u5B58\u4E3A PDF\u300D\u6216\u8C03\u6574\u56FE\u8868\u8BED\u6CD5\u3002": "Your browser restricted exporting this diagram with complex fonts as an image. Use Save as PDF or simplify the diagram.",
    "\u7B2C {index} \u4E2A Mermaid \u56FE\u8868\u5BFC\u51FA\u5931\u8D25\uFF1A{error}": "Failed to export Mermaid diagram #{index}: {error}",
    "Mermaid \u56FE\u8868\u5C1A\u672A\u51C6\u5907\u5C31\u7EEA\uFF0C\u8BF7\u91CD\u8BD5\u5BFC\u51FA\u3002": "Mermaid diagram is not ready yet. Try exporting again.",
    "\u539F\u56FE\u8868\u4F4D\u7F6E\u5DF2\u6539\u53D8\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u65B0\u9009\u62E9\u3002": "The original diagram has moved. Close this dialog and select it again.",
    "Mermaid \u56FE\u8868\u5DF2\u66F4\u65B0\uFF0C\u5BFC\u51FA Word \u65F6\u5C06\u81EA\u52A8\u5D4C\u5165\u56FE\u7247\u3002": "Mermaid diagram updated. It will be embedded as an image when exporting to Word.",
    "\u53F3\u4FA7\u6709\u65E0\u6548 Mermaid \u56FE\u8868\uFF0C\u8BF7\u4FEE\u6B63\u540E\u518D\u751F\u6210 PDF\u3002": "There is an invalid Mermaid diagram on the right. Fix it before generating the PDF.",
    "\u6B63\u5728\u751F\u6210 A4 \u6253\u5370\u6392\u7248\u2026": "Preparing A4 print layout\u2026",
    "\u957F\u56FE\u81EA\u52A8\u5206\u884C\uFF08\u4EC5 timeline\uFF09": "Auto-wrap long timelines",
    "\u6BCF\u884C\u6700\u591A 4 \u4E2A\u65F6\u95F4\u70B9\uFF08\u63A8\u8350\uFF09": "Up to 4 events per row (recommended)",
    "\u6BCF\u884C\u6700\u591A 3 \u4E2A\u65F6\u95F4\u70B9": "Up to 3 events per row",
    "\u6BCF\u884C\u6700\u591A 5 \u4E2A\u65F6\u95F4\u70B9": "Up to 5 events per row",
    "\u4E0D\u62C6\u5206\uFF08\u5355\u884C\u5C55\u793A\uFF09": "Do not split (single row)",
    "\u672A\u547D\u540D": "Untitled",
    "\u94FE\u63A5\u534F\u8BAE\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u4FEE\u6539\u540E\u5BFC\u51FA\u3002": "This link protocol is not supported. Edit the link before exporting.",
    "\u7B2C {index} \u4E2A\u516C\u5F0F\u5BFC\u51FA\u5931\u8D25\uFF1A{error}\uFF08LaTeX\uFF1A{latex}\uFF09": "Equation {index} could not be exported: {error} (LaTeX: {latex})",
    "\u7B2C {index} \u4E2A\u516C\u5F0F\u5BFC\u51FA\u5931\u8D25\uFF1A{error}": "Equation {index} could not be exported: {error}",
    "\u6682\u4E0D\u652F\u6301\u5BFC\u51FA\u884C\u5185\u5143\u7D20 {type}\uFF0C\u8BF7\u8C03\u6574\u540E\u91CD\u8BD5\u3002": "Inline element {type} is not supported for export. Adjust it and try again.",
    "Word \u5217\u8868\u6700\u591A\u652F\u6301 9 \u5C42\uFF0C\u8BF7\u51CF\u5C11\u5D4C\u5957\u3002": "Word lists support up to nine levels. Reduce the nesting.",
    "\u6682\u4E0D\u652F\u6301\u5BFC\u51FA\u5143\u7D20 {type}\uFF0C\u8BF7\u8C03\u6574\u540E\u91CD\u8BD5\u3002": "Element {type} is not supported for export. Adjust it and try again.",
    "\u53EA\u8BFB \xB7 \u72EC\u7ACB\u6EDA\u52A8": "Read-only \xB7 Independent scrolling",
    "\u53EA\u8BFB \xB7 \u6BB5\u843D\u8054\u52A8": "Read-only \xB7 Paragraph sync",
    "\u53EA\u8BFB \xB7 \u6309\u6574\u4F53\u4F4D\u7F6E\u8054\u52A8": "Read-only \xB7 Position sync",
    "\u6309\u539F\u6587\u6BB5\u843D\u8FD1\u4F3C\u5BF9\u9F50\uFF1B\u65B0\u589E\u6216\u5220\u9664\u7684\u5185\u5BB9\u6309\u76F8\u90BB\u6BB5\u843D\u4F30\u7B97\u3002": "Approximately aligned by original paragraphs; additions and deletions are estimated using neighboring paragraphs.",
    "\u53EF\u7528\u7684\u6BB5\u843D\u951A\u70B9\u4E0D\u8DB3\uFF0C\u6682\u6309\u6574\u4F53\u4F4D\u7F6E\u8054\u52A8\uFF1B\u77ED\u6587\u6863\u53EF\u80FD\u65E0\u9700\u6EDA\u52A8\u3002": "Not enough paragraph anchors; using overall position. Short documents may not need scrolling.",
    "\u4EE5\u53F3\u4FA7\u5DF2\u7F16\u8F91\u6587\u6863\u751F\u6210\u672C\u5730 A4 \u6253\u5370\u7248\uFF1B\u6253\u5370\u65F6\u8BF7\u5173\u95ED\u9875\u7709\u548C\u9875\u811A": "Create a local A4 print view of your edited document. Turn off headers and footers when printing.",
    "\u8BF7\u5148\u5BFC\u5165\u6587\u6863\u3002": "Import a document first.",
    "\u53F3\u4FA7\u6709\u65E0\u6548\u516C\u5F0F\uFF0C\u8BF7\u4FEE\u6B63\u540E\u518D\u751F\u6210 PDF\u3002": "The edited document contains invalid equations. Fix them before generating a PDF.",
    "PDF \u9884\u89C8\u672A\u80FD\u5C31\u7EEA\uFF0C\u8BF7\u5173\u95ED\u9884\u89C8\u9875\u540E\u91CD\u8BD5\u3002": "The PDF preview did not become ready. Close it and try again.",
    "\u6D4F\u89C8\u5668\u963B\u6B62\u4E86\u9884\u89C8\u9875\uFF0C\u8BF7\u5141\u8BB8\u6B64\u9875\u9762\u6253\u5F00\u65B0\u6807\u7B7E\u9875\u540E\u91CD\u8BD5\u3002": "Your browser blocked the preview. Allow this page to open new tabs and try again.",
    "\u6B63\u5728\u51C6\u5907\u672C\u5730 PDF \u6253\u5370\u7248\u2026": "Preparing the local PDF print view\u2026",
    "\u5DF2\u6253\u5F00 PDF \u6253\u5370\u7248\uFF0C\u8BF7\u9009\u62E9\u300C\u53E6\u5B58\u4E3A PDF\u300D\uFF0C\u5E76\u5728\u300C\u66F4\u591A\u8BBE\u7F6E\u300D\u4E2D\u5173\u95ED\u300C\u9875\u7709\u548C\u9875\u811A\u300D\u3002\u4FEE\u6539\u6587\u6863\u540E\u9700\u91CD\u65B0\u751F\u6210\uFF0C\u6B64\u5904\u4E0D\u4F1A\u81EA\u52A8\u4FDD\u5B58 PDF\u3002": "PDF print view opened. Choose Save as PDF and turn off Headers and footers under More settings. Generate a new preview after editing. This does not automatically save a PDF.",
    "PDF \u51C6\u5907\u5931\u8D25\uFF1A{error}": "Could not prepare PDF: {error}",
    "PDF \u6253\u5370\u7248 \xB7 PathAdd": "PDF print view \xB7 PathAdd",
    "\u6B63\u5728\u51C6\u5907 PDF\u2026": "Preparing PDF\u2026",
    "\u6B63\u5728\u63A5\u6536\u672C\u5730\u6587\u6863\u2026": "Receiving the local document\u2026",
    "\u5173\u95ED\u9884\u89C8": "Close preview",
    "\u6253\u5370 / \u53E6\u5B58\u4E3A PDF": "Print / Save as PDF",
    "PDF \u4EA4\u4ED8\u6587\u6863\uFF0C\u53EA\u8BFB": "Final PDF document, read-only",
    "\u6587\u6863\u5FEB\u7167\u683C\u5F0F\u65E0\u6548\uFF0C\u8BF7\u4ECE\u5DE5\u4F5C\u53F0\u91CD\u65B0\u751F\u6210\u3002": "Invalid document snapshot. Generate a new preview from the workspace.",
    "\u6587\u6863\u6392\u7248\u53C2\u6570\u7F3A\u5931\uFF0C\u8BF7\u4ECE\u5DE5\u4F5C\u53F0\u91CD\u65B0\u751F\u6210\u3002": "Document formatting settings are missing. Generate a new preview from the workspace.",
    "\u6587\u6863\u5305\u542B\u4E0D\u80FD\u6253\u5370\u7684\u5185\u5BB9\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u751F\u6210\u3002": "The document contains content that cannot be printed. Review it and generate a new preview.",
    "\u672C\u5730\u516C\u5F0F\u5B57\u4F53\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u5237\u65B0\u5DE5\u4F5C\u53F0\u540E\u91CD\u8BD5\u3002": "Local equation fonts could not load. Reload the workspace and try again.",
    "\u7B2C {index} \u4E2A\u516C\u5F0F\u7F3A\u5C11\u6E32\u67D3\u5185\u5BB9\u3002": "Equation {index} has no rendered content.",
    "\u7B2C {index} \u4E2A\u516C\u5F0F\u8FC7\u5BBD\uFF0C\u8BF7\u8C03\u6574\u516C\u5F0F\u6216\u51CF\u5C0F\u5B57\u53F7\u540E\u91CD\u65B0\u751F\u6210\u3002": "Equation {index} is too wide. Adjust it or reduce the font size, then generate a new preview.",
    "\u8BF7\u9009\u62E9\u300C\u53E6\u5B58\u4E3A PDF\u300D\uFF0C\u7EB8\u5F20 A4\uFF1B\u5728\u300C\u66F4\u591A\u8BBE\u7F6E\u300D\u4E2D\u5173\u95ED\u300C\u9875\u7709\u548C\u9875\u811A\u300D\uFF0C\u907F\u514D\u7F51\u5740\u3001\u65F6\u95F4\u548C\u6587\u4EF6\u540D\u8FDB\u5165\u4EA4\u4ED8\u6587\u4EF6\uFF0C\u5E76\u5F00\u542F\u300C\u80CC\u666F\u56FE\u5F62\u300D\u3002\u6B64\u9875\u662F\u53F3\u4FA7\u6587\u6863\u7684\u5FEB\u7167\uFF0C\u6700\u7EC8\u5206\u9875\u4EE5\u6253\u5370\u7A97\u53E3\u4E3A\u51C6\u3002": "Choose Save as PDF and A4. Under More settings, turn off Headers and footers to exclude the URL, date, and title, and turn on Background graphics. This page is a snapshot of your edited document. Check final pagination in the print dialog.",
    "\u672A\u6536\u5230\u6587\u6863\uFF0C\u8BF7\u4ECE\u5DE5\u4F5C\u53F0\u70B9\u51FB\u300C\u53E6\u5B58\u4E3A PDF\u300D\u3002": "No document received. Choose Save as PDF from the workspace.",
    "\u8BF7\u4ECE\u5DE5\u4F5C\u53F0\u70B9\u51FB\u300C\u53E6\u5B58\u4E3A PDF\u300D\uFF0C\u4E0D\u8981\u76F4\u63A5\u6253\u5F00\u6B64\u9875\u3002": "Choose Save as PDF from the workspace instead of opening this page directly.",
    "PathAdd \xB7 AI \u6700\u540E\u4E00\u516C\u91CC": "PathAdd \xB7 From AI draft to final document",
    "\u628A AI \u7684\u521D\u7A3F\uFF0C\u53D8\u6210\u53EF\u4EE5\u76F4\u63A5\u4EA4\u4ED8\u7684 Word\u3002": "Turn an AI draft into a polished Word document or PDF.",
    "\u7C98\u8D34 Markdown \u5E76\u6392\u7248": "Paste Markdown",
    "\u5BFC\u5165 Markdown \u6587\u4EF6": "Import Markdown",
    "\u6253\u5F00\u5B8C\u6574\u5DE5\u4F5C\u53F0": "Open workspace",
    "\u{1F512} \u6587\u6863\u4EC5\u5728\u672C\u5730\u5904\u7406\uFF0C\u4E0D\u4E0A\u4F20\u670D\u52A1\u5668\u3002": "\u{1F512} Documents stay on your device. No uploads.",
    "\u4E5F\u53EF\u9009\u4E2D\u6587\u5B57\uFF0C\u53F3\u952E\u300C\u7528 PathAdd \u6392\u7248\u4E3A Word\u300D\u3002": "Or select text on a page and choose \u201CFormat as Word with PathAdd\u201D from the context menu.",
    "\u66F4\u591A\u5B9E\u7528\u5DE5\u5177\uFF0C\u5C3D\u5728 pathadd.com \u2197": "Explore more tools at pathadd.com \u2197",
    "\u7528 PathAdd \u6392\u7248\u4E3A Word": "Format as Word with PathAdd",
    "\u6253\u5F00\u5931\u8D25\uFF1A{error}": "Could not open the workspace: {error}",
    "\u8BFB\u53D6\u63D2\u4EF6\u72B6\u6001\u5931\u8D25\uFF1A{error}": "Could not read extension status: {error}",
    "\u63D2\u4EF6\u64CD\u4F5C\u5931\u8D25\uFF1A{error}": "Extension operation failed: {error}",
    "\u5F85\u5BFC\u5165\u6587\u5B57\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6587\u5B57\u540E\u53F3\u952E\u5BFC\u5165\u3002": "The selected text is no longer available. Select it again and use the context menu.",
    "\u5F85\u5BFC\u5165\u6587\u5B57\u5DF2\u8D85\u8FC7 10 \u5206\u949F\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002": "The selected text expired after ten minutes. Select it again.",
    "\u7F51\u9875\u9009\u4E2D\u6587\u5B57.md": "Selected text.md",
    "\u70B9\u51FB\u5DE6\u4FA7\u300C\u5BFC\u5165\u6587\u4EF6\u300D\u9009\u62E9 .md\u3001.markdown \u6216 .txt \u6587\u4EF6\u3002\u6587\u4EF6\u53EA\u5728\u672C\u673A\u8BFB\u53D6\u3002": "Choose Import to select an .md, .markdown, or .txt file. Files are read locally.",
    "\u63D2\u4EF6\u5BFC\u5165\u5931\u8D25\uFF1A{error}": "Extension import failed: {error}",
    "\u672A\u53D6\u5F97\u9009\u4E2D\u6587\u5B57\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6216\u4F7F\u7528\u7C98\u8D34\u5BFC\u5165\u3002": "No selected text was received. Select it again or paste it into the workspace.",
    "\u6240\u9009\u6587\u5B57\u8D85\u8FC7 1 MiB\uFF0C\u8BF7\u7F29\u5C0F\u9009\u62E9\u8303\u56F4\u3002": "Selected text exceeds 1 MiB. Select less text.",
    "\u6253\u5F00 PathAdd \u5DE5\u5177\u7AD9\uFF08\u65B0\u6807\u7B7E\u9875\uFF09": "Open the PathAdd tools website in a new tab",
    "AI \u6700\u540E\u4E00\u516C\u91CC\uFF1A\u5BFC\u5165 Markdown\uFF0C\u9009\u62E9\u4E13\u4E1A\u6A21\u677F\uFF0C\u4EBA\u5DE5\u6DA6\u8272\u5E76\u5BFC\u51FA\u53EF\u7F16\u8F91\u7684 Word\uFF0C\u6216\u53E6\u5B58\u4E3A PDF\u3002\u5185\u5BB9\u5728\u6D4F\u89C8\u5668\u672C\u5730\u5904\u7406\u3002": "Import Markdown, choose a professional template, review your content, and export editable Word documents or PDFs. Everything is processed locally in your browser."
  };
  function detectLanguage(languages) {
    return (languages[0] || "en").toLowerCase().startsWith("zh") ? "zh-CN" : "en";
  }
  var siteLanguage = globalThis.PathaddLanguage;
  var language = siteLanguage ? siteLanguage.getLanguage() : detectLanguage(globalThis.navigator?.languages || [globalThis.navigator?.language || "en"]);
  if (!siteLanguage) try {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (saved === "en" || saved === "zh-CN") language = saved;
      else if (saved !== null) console.warn("PathAdd: invalid saved interface language", saved);
    }
  } catch (error) {
    console.warn("PathAdd: could not read interface language", error);
  }
  if (!siteLanguage && typeof location !== "undefined") {
    const requested = new URL(location.href).searchParams.get("lang");
    if (requested === "en" || requested === "zh-CN") language = requested;
  }
  function t(key, values = {}) {
    const template = language === "en" ? english[key] : key;
    if (template === void 0) throw new Error(`Missing English translation: ${key}`);
    return template.replace(/\{(\w+)\}/g, (_, name) => {
      if (!(name in values)) throw new Error(`Missing translation parameter: ${name}`);
      const value = values[name];
      return value instanceof UserFacingError ? t(value.key, value.values) : value instanceof Error ? value.message : String(value);
    });
  }
  var UserFacingError = class extends Error {
    constructor(key, values = {}, options) {
      super(t(key, values), options);
      this.key = key;
      this.values = values;
    }
  };
  function setLanguage(next, persist = true) {
    if (!["en", "zh-CN"].includes(next)) throw new UserFacingError("\u8BED\u8A00\u8BBE\u7F6E\u65E0\u6548\u3002");
    language = next;
    let warning = null;
    if (persist) {
      try {
        localStorage.setItem(LANGUAGE_KEY, next);
      } catch (error) {
        console.warn("PathAdd: could not save interface language", error);
        warning = new UserFacingError("\u8BED\u8A00\u5DF2\u5207\u6362\uFF0C\u4F46\u65E0\u6CD5\u4FDD\u5B58\u6B64\u504F\u597D\uFF1A{error}", { error });
      }
    }
    if (typeof document !== "undefined") {
      if (persist && new URL(location.href).searchParams.has("lang")) {
        const url = new URL(location.href);
        url.searchParams.delete("lang");
        history.replaceState(null, "", url);
      }
      document.documentElement.lang = language;
      document.dispatchEvent(new CustomEvent("pathadd:languagechange"));
    }
    return warning;
  }

  // chrome/background.js
  var MENU_ID = "pathadd-selection-to-word";
  var MAX_BYTES = 1024 * 1024;
  var MAX_AGE = 10 * 60 * 1e3;
  async function reportError(error) {
    console.error("PathAdd:", error);
    const lastErrorTranslation = error instanceof UserFacingError ? { key: error.key, values: Object.fromEntries(Object.entries(error.values).map(([key, value]) => [key, value instanceof Error ? value.message : value])) } : { key: "\u63D2\u4EF6\u64CD\u4F5C\u5931\u8D25\uFF1A{error}", values: { error: error.message } };
    await chrome.storage.session.set({ lastError: error.message, lastErrorTranslation });
    await chrome.action.setBadgeBackgroundColor({ color: "#b23c47" });
    await chrome.action.setBadgeText({ text: "!" });
  }
  var menuUpdate = Promise.resolve();
  function refreshMenu() {
    menuUpdate = menuUpdate.then(async () => {
      const { interfaceLanguage } = await chrome.storage.local.get("interfaceLanguage");
      if (["en", "zh-CN"].includes(interfaceLanguage)) setLanguage(interfaceLanguage, false);
      await chrome.contextMenus.removeAll();
      await new Promise((resolve, reject) => {
        chrome.contextMenus.create({ id: MENU_ID, title: t("\u7528 PathAdd \u6392\u7248\u4E3A Word"), contexts: ["selection"] }, () => {
          if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
          else resolve();
        });
      });
    }).catch(reportError);
  }
  chrome.runtime.onInstalled.addListener(refreshMenu);
  chrome.runtime.onStartup.addListener(refreshMenu);
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.interfaceLanguage) refreshMenu();
  });
  async function openSelection(info) {
    if (info.menuItemId !== MENU_ID) return;
    const text = info.selectionText;
    if (typeof text !== "string" || !text.trim()) throw new UserFacingError("\u672A\u53D6\u5F97\u9009\u4E2D\u6587\u5B57\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6216\u4F7F\u7528\u7C98\u8D34\u5BFC\u5165\u3002");
    if (new TextEncoder().encode(text).length > MAX_BYTES) throw new UserFacingError("\u6240\u9009\u6587\u5B57\u8D85\u8FC7 1 MiB\uFF0C\u8BF7\u7F29\u5C0F\u9009\u62E9\u8303\u56F4\u3002");
    const pending = await chrome.storage.session.get(null);
    const expired = Object.entries(pending).filter(([key2, value]) => key2.startsWith("import:") && Date.now() - value.createdAt > MAX_AGE).map(([key2]) => key2);
    if (expired.length) await chrome.storage.session.remove(expired);
    const token = crypto.randomUUID();
    const key = `import:${token}`;
    await chrome.storage.session.set({ [key]: { text, createdAt: Date.now() } });
    try {
      await chrome.tabs.create({ url: chrome.runtime.getURL(`workspace/index.html?selection=${token}`) });
    } catch (error) {
      await chrome.storage.session.remove(key);
      throw error;
    }
  }
  chrome.contextMenus.onClicked.addListener((info) => {
    void openSelection(info).catch(reportError);
  });
  return __toCommonJS(background_exports);
})();
