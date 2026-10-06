(() => {
  "use strict";

  const pageCopy = {
    zh: {
      pageTitle: "德国华人下药性侵案件档案｜非默",
      pageDescription: "非默独立案件档案：持续整理德国华人下药性侵案件的公开庭审记录、判决进展与媒体报道。",
      skipLink: "跳到主要内容",
      homeAria: "返回非默官网",
      brandName: "非默",
      archiveLabel: "PUBLIC CASE ARCHIVE · 公共案件档案",
      navAria: "案件档案导航",
      navOverview: "概览",
      navCases: "案件",
      navTimeline: "时间线",
      navSources: "资料库",
      navMethod: "核验方法",
      languageLabel: "选择网站语言",
      quickExit: "Take a break",
      heroEyebrow: "独立案件档案 · 持续更新",
      sourceCutoff: "公开资料核验截至 2026-10-05",
      heroTitle: "德国华人<br /><em>下药性侵<br />案件档案</em>",
      heroDeck: "追踪多个司法辖区内，与加密群组“德国老司机驾校”相关的公开庭审、判决、调查与报道。我们把已确认事实、未决法律程序和媒体评论分开呈现。",
      readCases: "查看案件进展",
      openSources: "打开资料库",
      heroNote: "本档案不公开受害者身份，不转载犯罪影像，也不把媒体指控表述为司法定论。",
      summaryAria: "档案摘要",
      caseIndex: "CASE INDEX",
      statMembers: "核心群组成员（公开报道）",
      statVerdicts: "德国法院一审判决",
      statSources: "已收录来源",
      indexStatus: "档案正在建立 · 欢迎补充原始文书",
      contentNoteTitle: "内容提示",
      contentNoteBody: "本页涉及下药、性暴力、偷拍与窒息风险相关内容。",
      findSupport: "寻找支持",
      casesKicker: "司法进展",
      casesTitle: "四条公开案件记录",
      casesLead: "状态以可核验来源的报道日期为准。德国法院公开报道通常使用姓氏首字母，本页沿用这一做法。",
      networkKicker: "案件联系",
      networkTitle: "并非孤立事件，而是一套被分享的犯罪手法。",
      networkLead: "公开报道显示，八名核心成员在 Telegram 群组中交流药物、剂量与实施方式，并分享犯罪影像。多名受害者是熟人、同事、邻居或约会对象；不少人直到警方联系后才知道自己曾遭受侵害。",
      networkFact1Title: "熟人关系",
      networkFact1Body: "信任被当作接近受害者和降低警觉的工具。",
      networkFact2Title: "化学控制",
      networkFact2Body: "麻醉与镇静药物被用于剥夺意识与同意能力。",
      networkFact3Title: "群体强化",
      networkFact3Body: "暗语、经验交换与互相鼓励让暴力被常态化。",
      networkAttribution: "依据：柏林司法部门新闻稿、taz、德国之声、Hessenschau、Tagesschau、DIE ZEIT、Süddeutsche Zeitung、DER SPIEGEL，以及谷雨实验室与《正面连接》公众号相关报道。",
      timelineKicker: "公开时间线",
      timelineTitle: "从被记录的犯罪到公开审判",
      timelineLead: "",
      sourcesKicker: "文书与报道",
      sourcesTitle: "公开资料库",
      sourcesLead: "优先收录法院文书、检方材料与可靠媒体报道。",
      searchLabel: "搜索资料",
      searchPlaceholder: "标题、来源或关键词",
      clearSearch: "清除",
      filterAria: "按资料类型筛选",
      filterAll: "全部",
      filterCourt: "司法进展",
      filterMedia: "媒体报道",
      filterCommentary: "评论 / 存档",
      filterWechat: "公众号报道",
      openSourceNote: "",
      emptyTitle: "没有匹配的资料",
      emptyBody: "换一个关键词，或清除当前筛选条件。",
      resetFilters: "显示全部资料",
      gapKicker: "公开记录缺口",
      gapTitle: "我们仍在寻找更多原始法院文书。",
      gapBody: "目前收录材料主要是新闻报道。若妳持有可公开核验的判决书、案号、法院新闻稿或庭审日程，请分享公开文件或获取方式。",
      submitSource: "分享公开文件/获取方式",
      methodKicker: "编辑与核验",
      methodTitle: "网站记录原则",
      methodLead: "我们的目标是收集公开信息、持续跟踪案件发展，呼吁中文世界的关注。网站内容都来自公开的法院文书、媒体报道等可追溯来源，同时标明出处，读者可以自行核对。如有不实之处，欢迎联系非默团队进行更正。",
      method1Title: "原始文书优先",
      method1Body: "判决书、法院公告、检方说明优先于二手评论。",
      method2Title: "法律状态说明",
      method2Body: "通过 AI 和德语使用者协助翻译、书写法律状态，不能保证法律用语完全准确。",
      method3Title: "最小化伤害",
      method3Body: "不公开受害者姓名、照片、联系方式或私密影像；不复述与公共利益无关的细节。",
      method4Title: "保留信息更新轨迹",
      method4Body: "重要状态变化会持续记录日期与来源，不展示无法核验的说法。",
      supportKicker: "如果这与妳有关",
      supportTitle: "妳不需要独自面对。",
      supportLead: "如妳处于危险中，请联系当地紧急服务。以下为德国和中国大陆的支持号码。",
      germanyEmergency: "德国警察紧急电话",
      germanyHelpline: "德国反暴力女性援助热线",
      germanyHelplineMeta: "24/7 · 多语言",
      chinaEmergency: "中国大陆报警电话",
      chinaHelpline: "全国妇女维权公益服务热线",
      chinaMainland: "中国大陆",
      supportDisclaimer: "本页不提供法律意见，也不能替代律师、医疗人员或专业支持机构。",
      footerMission: "记录公开事实，也记录制度如何回应。",
      pageCreated: "页面建立",
      sourceReview: "来源复核",
      editor: "编辑",
      backHome: "非默项目官网",
      contactEditor: "联系非默团队",
      detailsLabel: "查看判决与来源",
      sourceLink: "打开来源",
      resultsCount: (count) => `显示 ${count} 条资料`,
      sourceUnavailable: "来源条目位于下方资料库",
      linkPending: "原文链接待补充",
      wechatOnly: "微信公众号原文 · 需在微信内打开",
      wechatSource: "微信公众号原文",
      readOriginal: "阅读原文"
    },
    en: {
      pageTitle: "Germany Drug-Facilitated Sexual Violence Case Archive | The Unmuted",
      pageDescription: "An independent archive tracking public court proceedings, judgments, investigations, and reporting concerning the Germany-based Chinese-language sexual violence cases.",
      skipLink: "Skip to main content",
      homeAria: "Return to The Unmuted home page",
      brandName: "THE UNMUTED",
      archiveLabel: "PUBLIC CASE ARCHIVE",
      navAria: "Case archive navigation",
      navOverview: "Overview",
      navCases: "Cases",
      navTimeline: "Timeline",
      navSources: "Sources",
      navMethod: "Method",
      languageLabel: "Choose website language",
      quickExit: "Take a break",
      heroEyebrow: "INDEPENDENT CASE ARCHIVE · LIVING RECORD",
      sourceCutoff: "Public sources reviewed through 5 Oct 2026",
      heroTitle: "Germany-based<br /><em>drug-facilitated sexual violence cases</em>",
      heroDeck: "Tracking public trials, judgments, investigations, and reporting across jurisdictions connected to the encrypted group known in Chinese as “German Veteran Drivers’ School.” Confirmed facts, unresolved proceedings, and commentary are kept separate.",
      readCases: "Review case status",
      openSources: "Open source library",
      heroNote: "This archive does not identify survivors, reproduce criminal imagery, or present media allegations as judicial findings.",
      summaryAria: "Archive summary",
      caseIndex: "CASE INDEX",
      statMembers: "core group members reported",
      statVerdicts: "German first-instance judgments",
      statSources: "sources catalogued",
      indexStatus: "Archive in progress · primary documents welcome",
      contentNoteTitle: "Content note",
      contentNoteBody: "This page contains material related to drugging, sexual violence, covert recording, and suffocation risks.",
      findSupport: "Find support",
      casesKicker: "LEGAL STATUS",
      casesTitle: "Four public case records",
      casesLead: "Statuses reflect the date of the latest verifiable source. German court reporting commonly uses a surname initial; this archive follows that convention.",
      networkKicker: "ACROSS THE CASES",
      networkTitle: "Not isolated acts, but a shared criminal method.",
      networkLead: "Public reporting describes eight core members exchanging information about drugs, dosage, and methods in a Telegram group, alongside criminal imagery. Survivors included acquaintances, colleagues, neighbours, and dates; many learned what had happened only after police contacted them.",
      networkFact1Title: "Familiarity",
      networkFact1Body: "Trust was used to gain access and lower a woman’s guard.",
      networkFact2Title: "Chemical control",
      networkFact2Body: "Anaesthetic and sedative drugs removed consciousness and the capacity to consent.",
      networkFact3Title: "Group reinforcement",
      networkFact3Body: "Codes, advice, and encouragement normalised violence inside the group.",
      networkAttribution: "Based on a Berlin judiciary release; reporting by taz, Deutsche Welle, Hessenschau, Tagesschau, DIE ZEIT, Süddeutsche Zeitung, and DER SPIEGEL; and relevant WeChat reporting by Guyu Lab and Positive Connection.",
      timelineKicker: "PUBLIC TIMELINE",
      timelineTitle: "From recorded offences to public trials",
      timelineLead: "",
      sourcesKicker: "DOCUMENTS & REPORTING",
      sourcesTitle: "Public source library",
      sourcesLead: "Priority is given to court records, prosecution materials, and reliable reporting.",
      searchLabel: "Search sources",
      searchPlaceholder: "Title, publisher, or keyword",
      clearSearch: "Clear",
      filterAria: "Filter by source type",
      filterAll: "All",
      filterCourt: "Court status",
      filterMedia: "Reporting",
      filterCommentary: "Commentary / archive",
      filterWechat: "WeChat reporting",
      openSourceNote: "",
      emptyTitle: "No matching sources",
      emptyBody: "Try another term or reset the current filters.",
      resetFilters: "Show all sources",
      gapKicker: "GAPS IN THE PUBLIC RECORD",
      gapTitle: "We are still looking for more primary court documents.",
      gapBody: "Most of the current record consists of news reports. If you have a publicly verifiable judgment, docket number, court release, or hearing schedule, please share the public document or access information.",
      submitSource: "Share public document / access information",
      methodKicker: "EDITORIAL METHOD",
      methodTitle: "Website recording principles",
      methodLead: "Our goal is to collect public information, follow the cases as they develop, and encourage attention in the Chinese-speaking world. The archive uses traceable public sources such as court documents and media reports, identifies each source, and allows readers to check them independently. If anything is inaccurate, please contact The Unmuted team for a correction.",
      method1Title: "Primary records first",
      method1Body: "Judgments, court notices, and prosecution statements take priority over secondary commentary.",
      method2Title: "Legal-status wording",
      method2Body: "Legal-status wording is translated and drafted with help from AI and German speakers; complete legal precision cannot be guaranteed.",
      method3Title: "Minimise harm",
      method3Body: "Do not publish survivors’ names, photographs, contact details, or intimate imagery, and omit details without a public-interest purpose.",
      method4Title: "Keep an information-update trail",
      method4Body: "Material status changes are recorded with dates and sources; unverifiable claims are not presented.",
      supportKicker: "IF THIS CONNECTS TO YOUR EXPERIENCE",
      supportTitle: "You do not have to face this alone.",
      supportLead: "If you are in danger, contact local emergency services. The following numbers connect to support systems in Germany and mainland China.",
      germanyEmergency: "Police emergency in Germany",
      germanyHelpline: "Germany’s Violence against Women helpline",
      germanyHelplineMeta: "24/7 · multilingual",
      chinaEmergency: "Police emergency in mainland China",
      chinaHelpline: "National Women’s Rights Protection Hotline",
      chinaMainland: "Mainland China",
      supportDisclaimer: "This page is not legal advice and cannot replace a lawyer, medical professional, or specialist support service.",
      footerMission: "Documenting public facts—and how institutions respond.",
      pageCreated: "Page created",
      sourceReview: "Sources reviewed",
      editor: "Editor",
      backHome: "The Unmuted project website",
      contactEditor: "Contact The Unmuted team",
      detailsLabel: "View findings and sources",
      sourceLink: "Open source",
      resultsCount: (count) => `${count} source${count === 1 ? "" : "s"} shown`,
      sourceUnavailable: "See the source entry in the library below",
      linkPending: "Original link to be added",
      wechatOnly: "WeChat Official Account original · open inside WeChat",
      wechatSource: "WeChat original",
      readOriginal: "Read original"
    },
    de: {
      pageTitle: "Fallarchiv zu sexualisierter Gewalt unter Betäubung in Deutschland | The Unmuted",
      pageDescription: "Ein unabhängiges Archiv zu öffentlich dokumentierten Gerichtsverfahren, Urteilen, Ermittlungen und Medienberichten über Fälle sexualisierter Gewalt unter Betäubung in Deutschland.",
      skipLink: "Zum Hauptinhalt springen",
      homeAria: "Zur Startseite von The Unmuted",
      brandName: "THE UNMUTED",
      archiveLabel: "ÖFFENTLICHES FALLARCHIV",
      navAria: "Navigation des Fallarchivs",
      navOverview: "Überblick",
      navCases: "Fälle",
      navTimeline: "Chronologie",
      navSources: "Quellen",
      navMethod: "Methode",
      languageLabel: "Sprache der Website wählen",
      quickExit: "Take a break",
      heroEyebrow: "UNABHÄNGIGES FALLARCHIV · FORTLAUFENDE DOKUMENTATION",
      sourceCutoff: "Öffentliche Quellen geprüft bis 5. Oktober 2026",
      heroTitle: "Fälle sexualisierter Gewalt<br /><em>unter Betäubung<br />in Deutschland</em>",
      heroDeck: "Dokumentiert werden öffentliche Prozesse, Urteile, Ermittlungen und Berichte aus mehreren Zuständigkeitsbereichen, die mit der chinesischsprachigen verschlüsselten Gruppe „德国老司机驾校“ (wörtlich etwa „Deutsche Veteranenfahrschule“) in Verbindung stehen. Bestätigte Tatsachen, offene Verfahren und journalistische Einordnung werden getrennt dargestellt.",
      readCases: "Verfahrensstand ansehen",
      openSources: "Quellenverzeichnis öffnen",
      heroNote: "Dieses Archiv identifiziert keine Betroffenen, verbreitet keine Tatbilder und stellt Medienberichte nicht als gerichtliche Feststellungen dar.",
      summaryAria: "Zusammenfassung des Archivs",
      caseIndex: "FALLÜBERSICHT",
      statMembers: "berichtete Mitglieder der Kerngruppe",
      statVerdicts: "erstinstanzliche Urteile deutscher Gerichte",
      statSources: "erfasste Quellen",
      indexStatus: "Archiv im Aufbau · Primärdokumente willkommen",
      contentNoteTitle: "Inhaltshinweis",
      contentNoteBody: "Diese Seite enthält Inhalte zu Betäubung, sexualisierter Gewalt, heimlichen Aufnahmen und Erstickungsrisiken.",
      findSupport: "Unterstützung finden",
      casesKicker: "VERFAHRENSSTAND",
      casesTitle: "Vier öffentlich dokumentierte Fälle",
      casesLead: "Die Angaben entsprechen dem Stand der jeweils neuesten überprüfbaren Quelle. In der deutschen Gerichtsberichterstattung werden Nachnamen häufig abgekürzt; dieses Archiv folgt dieser Praxis.",
      networkKicker: "ZUSAMMENHÄNGE ZWISCHEN DEN FÄLLEN",
      networkTitle: "Keine Einzelfälle, sondern eine gemeinsam verbreitete kriminelle Vorgehensweise.",
      networkLead: "Öffentliche Berichte beschreiben acht Kernmitglieder, die sich in einer Telegram-Gruppe über Medikamente, Dosierungen und Vorgehensweisen austauschten und Tatmaterial teilten. Betroffene waren unter anderem Bekannte, Kolleginnen, Nachbarinnen und Dates; viele erfuhren erst durch die Polizei, was ihnen angetan worden war.",
      networkFact1Title: "Vertrautheit",
      networkFact1Body: "Vertrauen wurde genutzt, um Zugang zu erhalten und Vorsicht abzubauen.",
      networkFact2Title: "Chemische Kontrolle",
      networkFact2Body: "Narkose- und Beruhigungsmittel nahmen Bewusstsein und Einwilligungsfähigkeit.",
      networkFact3Title: "Bestärkung in der Gruppe",
      networkFact3Body: "Codes, Ratschläge und gegenseitige Anerkennung normalisierten die Gewalt innerhalb der Gruppe.",
      networkAttribution: "Grundlage sind eine Pressemitteilung der Berliner Strafgerichte sowie Berichte von taz, Deutsche Welle, Hessenschau, Tagesschau, DIE ZEIT, Süddeutsche Zeitung, DER SPIEGEL, Guyu Lab und Positive Connection.",
      timelineKicker: "ÖFFENTLICHE CHRONOLOGIE",
      timelineTitle: "Von dokumentierten Taten zu öffentlichen Prozessen",
      timelineLead: "",
      sourcesKicker: "DOKUMENTE & BERICHTE",
      sourcesTitle: "Öffentliches Quellenarchiv",
      sourcesLead: "Vorrang haben Gerichtsakten, Unterlagen der Staatsanwaltschaft und verlässliche Berichterstattung.",
      searchLabel: "Quellen durchsuchen",
      searchPlaceholder: "Titel, Medium oder Stichwort",
      clearSearch: "Löschen",
      filterAria: "Nach Quellentyp filtern",
      filterAll: "Alle",
      filterCourt: "Gericht",
      filterMedia: "Berichte",
      filterCommentary: "Kommentar / Archiv",
      filterWechat: "WeChat-Berichte",
      openSourceNote: "",
      emptyTitle: "Keine passenden Quellen",
      emptyBody: "Versuchen Sie einen anderen Suchbegriff oder setzen Sie die Filter zurück.",
      resetFilters: "Alle Quellen anzeigen",
      gapKicker: "LÜCKEN IN DER ÖFFENTLICHEN AKTENLAGE",
      gapTitle: "Wir suchen weiterhin nach gerichtlichen Primärdokumenten.",
      gapBody: "Der aktuelle Bestand besteht überwiegend aus Medienberichten. Wenn Sie ein öffentlich überprüfbares Urteil, Aktenzeichen, eine gerichtliche Mitteilung oder einen Terminplan haben, teilen Sie bitte das öffentliche Dokument oder die Zugangsinformationen.",
      submitSource: "Öffentliches Dokument / Zugangsinformationen teilen",
      methodKicker: "REDAKTIONELLE METHODE",
      methodTitle: "Grundsätze der Website-Dokumentation",
      methodLead: "Unser Ziel ist es, öffentliche Informationen zu sammeln, die Entwicklung der Verfahren zu verfolgen und Aufmerksamkeit im chinesischsprachigen Raum zu fördern. Die Inhalte beruhen auf nachvollziehbaren öffentlichen Quellen wie Gerichtsunterlagen und Medienberichten; die Quellen werden angegeben, damit Leserinnen und Leser sie selbst prüfen können. Bei Fehlern können Sie das The-Unmuted-Team zur Korrektur kontaktieren.",
      method1Title: "Primärquellen zuerst",
      method1Body: "Urteile, gerichtliche Mitteilungen und Erklärungen der Staatsanwaltschaft haben Vorrang vor sekundärer Kommentierung.",
      method2Title: "Formulierungen zum Verfahrensstand",
      method2Body: "Die Formulierungen zum Verfahrensstand werden mit Unterstützung von KI und deutschsprachigen Personen übersetzt und formuliert; vollständige rechtliche Genauigkeit kann nicht garantiert werden.",
      method3Title: "Schaden minimieren",
      method3Body: "Keine Namen, Fotos, Kontaktdaten oder intimen Aufnahmen Betroffener veröffentlichen; Details ohne öffentliches Interesse auslassen.",
      method4Title: "Informationsaktualisierungen nachvollziehbar halten",
      method4Body: "Wesentliche Änderungen des Verfahrensstands werden fortlaufend mit Datum und Quelle dokumentiert; nicht überprüfbare Behauptungen werden nicht dargestellt.",
      supportKicker: "WENN DIES IHRE ERFAHRUNG BERÜHRT",
      supportTitle: "Sie müssen dem nicht allein begegnen.",
      supportLead: "Wenn Sie in Gefahr sind, wenden Sie sich an den örtlichen Notruf. Die folgenden Nummern führen zu Hilfesystemen in Deutschland und auf dem chinesischen Festland.",
      germanyEmergency: "Polizeinotruf in Deutschland",
      germanyHelpline: "Hilfetelefon Gewalt gegen Frauen",
      germanyHelplineMeta: "24/7 · mehrsprachig",
      chinaEmergency: "Polizeinotruf auf dem chinesischen Festland",
      chinaHelpline: "Nationale Hotline für Frauenrechte auf dem chinesischen Festland",
      chinaMainland: "Chinesisches Festland",
      supportDisclaimer: "Diese Seite ist keine Rechtsberatung und ersetzt weder anwaltliche noch medizinische oder fachliche Unterstützung.",
      footerMission: "Öffentliche Tatsachen dokumentieren – und die Reaktion der Institutionen.",
      pageCreated: "Seite erstellt",
      sourceReview: "Quellen geprüft",
      editor: "Redaktion",
      backHome: "Website des The-Unmuted-Projekts",
      contactEditor: "The-Unmuted-Team kontaktieren",
      detailsLabel: "Feststellungen und Quellen ansehen",
      sourceLink: "Quelle öffnen",
      resultsCount: (count) => `${count} Quelle${count === 1 ? "" : "n"} angezeigt`,
      sourceUnavailable: "Quelleneintrag im Verzeichnis unten",
      linkPending: "Originallink wird ergänzt",
      wechatOnly: "Original im WeChat Official Account · nur in WeChat öffnen",
      wechatSource: "WeChat-Original",
      readOriginal: "Original öffnen"
    }
  };

  const cases = {
    zh: [
      {
        id: "DE-BE-01",
        name: "Tong Z.",
        meta: "柏林 · 2025-08",
        status: "判决已生效",
        statusClass: "final",
        sentence: "五年九个月监禁",
        summary: "柏林法院认定其犯有性侵、强奸、加重强奸，以及 13 起未经同意拍摄他人私密生活领域的影像犯罪。",
        detail: "德国之声报道，辩方上诉后仅有小幅调整，整体判决已生效。受害者代理律师称，法院把仇视女性和基于性别的暴力作为加重情节。",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "来源：德国之声中文网（2026-06-16）"
      },
      {
        id: "DE-HE-01",
        name: "Dapeng Z.",
        meta: "法兰克福 · 2026-02-06",
        status: "上诉审查中",
        statusClass: "appeal",
        sentence: "十四年监禁，并裁定刑满后预防性拘押",
        summary: "法兰克福地方法院就多项谋杀未遂、特别严重强奸、严重伤害及持有儿童色情内容等罪名作出一审判决。",
        detail: "截至德国之声 2026 年 6 月 16 日报道，被告已向德国联邦最高法院提起上诉，因此一审判决尚未生效。",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "来源：德国之声中文网（2026-06-16）"
      },
      {
        id: "DE-BY-01",
        name: "Zhongyi J.",
        meta: "慕尼黑 · 2026-04-14",
        status: "判决已生效",
        statusClass: "final",
        sentence: "十一年三个月监禁",
        summary: "慕尼黑第一地方法院认定两起谋杀未遂、六起特别严重强奸及故意伤害；是否在刑满后实施预防性拘押将另行决定。",
        detail: "检方原要求终身监禁，后撤回上诉。法院综合考虑部分认罪、无前科及向受害者支付 20,000 欧元等量刑因素。",
        source: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/",
        sourceLabel: "来源：taz（2026-04-14）"
      },
      {
        id: "DE-BE-02",
        name: "Zhiting S.",
        meta: "柏林 · 2026-07-08",
        status: "一审判决 · 尚未生效",
        statusClass: "first-instance",
        sentence: "数罪并罚，总计五年监禁",
        summary: "据《正面连接》庭审报道，柏林地方法院就协助特别严重强奸及多起严重性胁迫相关罪名作出一审判决。",
        detail: "柏林司法部门新闻稿明确说明判决尚未生效，并公布案号 528 KLs 22/25。《正面连接》2026 年 7 月 9 日庭审报道写明辩护律师表示将提起上诉。",
        source: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        sourceLabel: "来源：《正面连接》公众号（2026-07-09）"
      }
    ],
    en: [
      {
        id: "DE-BE-01",
        name: "Tong Z.",
        meta: "BERLIN · AUG 2025",
        status: "Final judgment",
        statusClass: "final",
        sentence: "Five years and nine months",
        summary: "A Berlin court convicted him of sexual assault, rape, aggravated rape, and 13 offences involving non-consensual recordings of women’s most private sphere.",
        detail: "Deutsche Welle reports that a defence appeal produced only a minor adjustment and the overall judgment is final. Counsel for a survivor said the court treated misogyny and gender-based violence as aggravating factors.",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "Source: Deutsche Welle Chinese (16 Jun 2026)"
      },
      {
        id: "DE-HE-01",
        name: "Dapeng Z.",
        meta: "FRANKFURT · 6 FEB 2026",
        status: "Appeal pending",
        statusClass: "appeal",
        sentence: "Fourteen years, followed by preventive detention",
        summary: "Frankfurt Regional Court entered a first-instance judgment on multiple counts including attempted murder, especially aggravated rape, serious bodily harm, and possession of child sexual abuse material.",
        detail: "As of Deutsche Welle’s 16 June 2026 report, the defendant had appealed to Germany’s Federal Court of Justice, so the first-instance judgment was not final.",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "Source: Deutsche Welle Chinese (16 Jun 2026)"
      },
      {
        id: "DE-BY-01",
        name: "Zhongyi J.",
        meta: "MUNICH · 14 APR 2026",
        status: "Final judgment",
        statusClass: "final",
        sentence: "Eleven years and three months",
        summary: "Munich Regional Court I convicted him on two counts of attempted murder, six counts of especially aggravated rape, and intentional bodily harm. Preventive detention may be imposed later.",
        detail: "Prosecutors had sought life imprisonment but later withdrew their appeal. The court cited a partial confession, no prior convictions, and a €20,000 payment to the survivor among its sentencing factors.",
        source: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/",
        sourceLabel: "Source: taz (14 Apr 2026)"
      },
      {
        id: "DE-BE-02",
        name: "Zhiting S.",
        meta: "BERLIN · 8 JUL 2026",
        status: "First instance · not final",
        statusClass: "first-instance",
        sentence: "Aggregate sentence of five years",
        summary: "According to courtroom reporting by Positive Connection, Berlin Regional Court entered a first-instance judgment on aiding an especially aggravated rape and multiple serious sexual-coercion-related offences.",
        detail: "The Berlin judiciary’s release expressly states that the judgment was not final and gives docket 528 KLs 22/25. Positive Connection’s 9 July 2026 courtroom report says defence counsel intended to appeal.",
        source: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        sourceLabel: "Source: Positive Connection on WeChat (9 Jul 2026)"
      }
    ],
    de: [
      {
        id: "DE-BE-01",
        name: "Tong Z.",
        meta: "BERLIN · AUGUST 2025",
        status: "Rechtskräftig",
        statusClass: "final",
        sentence: "Fünf Jahre und neun Monate Freiheitsstrafe",
        summary: "Ein Berliner Gericht verurteilte ihn wegen sexueller Nötigung, Vergewaltigung, besonders schwerer Vergewaltigung sowie in 13 Fällen wegen unbefugter Bildaufnahmen aus dem höchstpersönlichen Lebensbereich.",
        detail: "Deutsche Welle berichtet, dass eine Revision der Verteidigung nur zu einer geringfügigen Änderung führte und das Urteil insgesamt rechtskräftig ist. Die Nebenklagevertretung erklärte, das Gericht habe Frauenfeindlichkeit und geschlechtsspezifische Gewalt strafschärfend berücksichtigt.",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "Quelle: Deutsche Welle Chinesisch (16. Juni 2026)"
      },
      {
        id: "DE-HE-01",
        name: "Dapeng Z.",
        meta: "FRANKFURT AM MAIN · 6. FEBRUAR 2026",
        status: "Revision anhängig",
        statusClass: "appeal",
        sentence: "Vierzehn Jahre Freiheitsstrafe mit anschließender Sicherungsverwahrung",
        summary: "Das Landgericht Frankfurt am Main entschied in erster Instanz über mehrere Vorwürfe, darunter versuchter Mord, besonders schwere Vergewaltigung, gefährliche Körperverletzung und Besitz von Darstellungen sexualisierter Gewalt an Kindern.",
        detail: "Nach dem Bericht der Deutschen Welle vom 16. Juni 2026 legte der Angeklagte Revision zum Bundesgerichtshof ein. Das erstinstanzliche Urteil war damit zu diesem Zeitpunkt nicht rechtskräftig.",
        source: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844",
        sourceLabel: "Quelle: Deutsche Welle Chinesisch (16. Juni 2026)"
      },
      {
        id: "DE-BY-01",
        name: "Zhongyi J.",
        meta: "MÜNCHEN · 14. APRIL 2026",
        status: "Rechtskräftig",
        statusClass: "final",
        sentence: "Elf Jahre und drei Monate Freiheitsstrafe",
        summary: "Das Landgericht München I verurteilte ihn wegen zweifachen versuchten Mordes, sechs besonders schweren Vergewaltigungen und vorsätzlicher Körperverletzung. Über eine mögliche Sicherungsverwahrung soll später entschieden werden.",
        detail: "Die Staatsanwaltschaft hatte zunächst lebenslange Freiheitsstrafe beantragt, nahm ihre Revision später jedoch zurück. Das Gericht berücksichtigte unter anderem ein Teilgeständnis, fehlende Vorstrafen und eine Zahlung von 20.000 Euro an die Betroffene.",
        source: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/",
        sourceLabel: "Quelle: taz (14. April 2026)"
      },
      {
        id: "DE-BE-02",
        name: "Zhiting S.",
        meta: "BERLIN · 8. JULI 2026",
        status: "Erstinstanzlich · nicht rechtskräftig",
        statusClass: "first-instance",
        sentence: "Gesamtfreiheitsstrafe von fünf Jahren",
        summary: "Das Landgericht Berlin I sprach den Angeklagten der Beihilfe zur schweren Vergewaltigung sowie der schweren sexuellen Nötigung in drei Fällen schuldig.",
        detail: "Die Pressemitteilung der Berliner Strafgerichte bezeichnet das Urteil ausdrücklich als nicht rechtskräftig und nennt das Aktenzeichen 528 KLs 22/25. Positive Connection berichtete am Folgetag, die Verteidigung habe eine Revision angekündigt.",
        source: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        sourceLabel: "Quelle: Positive Connection auf WeChat (9. Juli 2026)"
      }
    ]
  };

  const timeline = {
    zh: [
      { date: "2026-09-26", title: "德国调查报道将相关案件置于更广泛的网络中", body: "taz 的跨地区调查将这些相关案件放在德国更广泛的背景中，讨论线上网络如何让调查不断指向更多嫌疑人。", sourceId: "taz-network" },
      { date: "2026-08-31", title: "跨中德女性协作的调查脉络被完整记录", body: "《正面连接》梳理记者、律师、留学生、医疗工作者与旁听者如何推动案件进入更广泛的公共视野。", sourceId: "wx-network" },
      { date: "2026-07-21", title: "受害者讲述下药后的记忆空白与二次指责", body: "谷雨实验室刊发受害者一手讲述，记录她寻求帮助、参与司法程序以及面对网络指责的经历。", sourceId: "wx-survivor" },
      { date: "2026-07-08", title: "Zhiting S. 一审被判总计五年", body: "柏林第一地方法院判处总计五年监禁；法院新闻稿明确说明判决尚未生效，并公布案号 528 KLs 22/25。", sourceId: "berlin-court" },
      { date: "2026-04-14", title: "Zhongyi J. 在慕尼黑被判十一年三个月", body: "法院认定两起谋杀未遂和六起特别严重强奸；德国之声 2026 年 6 月 16 日的后续报道确认判决已生效。", sourceId: "taz" },
      { date: "2026-03-19", title: "Zhiting S. 案在柏林开庭", body: "德国之声确认案件于 3 月 19 日开庭，并于 5 月报道庭审现场及后续排期。", sourceId: "dw-trial" },
      { date: "2026-02-06", title: "Dapeng Z. 在法兰克福被判十四年", body: "法院同时裁定刑满后预防性拘押；截至德国之声 2026 年 6 月 16 日报道，被告已向联邦最高法院提起上诉。", sourceId: "zeit-frankfurt" },
      { date: "2025-08", title: "Tong Z. 在柏林被判五年九个月", body: "德国之声确认判决月份、罪名与刑期；辩方上诉后仅有小幅调整，判决已生效。", sourceId: "dw" },
      { date: "2024-11-14", title: "Dapeng Z. 在黑森州 Groß-Gerau 地区被捕", body: "德国之声报道，法兰克福检方与黑森州刑警局于次日公布消息。", sourceId: "dw-arrest" }
    ],
    en: [
      { date: "26 SEP 2026", isoDate: "2026-09-26", title: "German investigation places related cases in a wider network", body: "A cross-regional taz investigation placed these related cases in a wider German context and examined how online networks lead investigators toward further suspects.", sourceId: "taz-network" },
      { date: "31 AUG 2026", isoDate: "2026-08-31", title: "Cross-border collaboration by women is documented", body: "Positive Connection traced how journalists, lawyers, students, healthcare workers, and courtroom observers helped bring the cases into wider public view.", sourceId: "wx-network" },
      { date: "21 JUL 2026", isoDate: "2026-07-21", title: "A survivor describes memory loss and secondary blame", body: "Guyu Lab published a first-person account of seeking help, participating in legal proceedings, and facing online blame.", sourceId: "wx-survivor" },
      { date: "8 JUL 2026", isoDate: "2026-07-08", title: "Zhiting S. receives an aggregate five-year sentence at first instance", body: "Berlin Regional Court I imposed an aggregate five-year sentence. The court release states that the judgment was not final and gives docket 528 KLs 22/25.", sourceId: "berlin-court" },
      { date: "14 APR 2026", isoDate: "2026-04-14", title: "Zhongyi J. sentenced to eleven years and three months in Munich", body: "The court found two attempted murders and six especially aggravated rapes. Deutsche Welle’s 16 June 2026 follow-up confirms that the judgment became final.", sourceId: "taz" },
      { date: "19 MAR 2026", isoDate: "2026-03-19", title: "Trial of Zhiting S. begins in Berlin", body: "Deutsche Welle confirms that the trial opened on 19 March and later reported from the courtroom and listed further hearing dates.", sourceId: "dw-trial" },
      { date: "6 FEB 2026", isoDate: "2026-02-06", title: "Dapeng Z. sentenced to fourteen years in Frankfurt", body: "The court also ordered preventive detention. As of Deutsche Welle’s 16 June 2026 report, he had appealed to the Federal Court of Justice.", sourceId: "zeit-frankfurt" },
      { date: "AUG 2025", isoDate: "2025-08", title: "Tong Z. sentenced to five years and nine months in Berlin", body: "Deutsche Welle confirms the judgment month, offences, and sentence; after a minor adjustment on defence appeal, the judgment became final.", sourceId: "dw" },
      { date: "14 NOV 2024", isoDate: "2024-11-14", title: "Dapeng Z. arrested in the Groß-Gerau area of Hesse", body: "Deutsche Welle reports that Frankfurt prosecutors and the Hessian State Criminal Police announced the arrest the following day.", sourceId: "dw-arrest" }
    ],
    de: [
      { date: "26. SEPTEMBER 2026", isoDate: "2026-09-26", title: "Deutsche Recherche ordnet zusammenhängende Fälle in ein größeres Netzwerk ein", body: "Eine bundesweite taz-Recherche ordnete diese zusammenhängenden Fälle in den größeren deutschen Kontext ein und untersuchte, wie Online-Netzwerke Ermittlungen zu weiteren Beschuldigten führen.", sourceId: "taz-network" },
      { date: "31. AUGUST 2026", isoDate: "2026-08-31", title: "Grenzüberschreitende Zusammenarbeit von Frauen wird dokumentiert", body: "Positive Connection zeichnete nach, wie Journalistinnen, Juristinnen, Studierende, Fachkräfte aus dem Gesundheitswesen und Prozessbeobachterinnen die Fälle öffentlich sichtbar machten.", sourceId: "wx-network" },
      { date: "21. JULI 2026", isoDate: "2026-07-21", title: "Eine Betroffene berichtet über Erinnerungslücken und sekundäre Schuldzuweisungen", body: "Guyu Lab veröffentlichte einen Bericht über Hilfesuche, Beteiligung am Strafverfahren und Schuldzuweisungen im Netz.", sourceId: "wx-survivor" },
      { date: "8. JULI 2026", isoDate: "2026-07-08", title: "Zhiting S. erhält in erster Instanz eine Gesamtfreiheitsstrafe von fünf Jahren", body: "Die Berliner Strafgerichte veröffentlichten die Feststellungen, den Hinweis auf die fehlende Rechtskraft und das Aktenzeichen 528 KLs 22/25.", sourceId: "berlin-court" },
      { date: "14. APRIL 2026", isoDate: "2026-04-14", title: "Zhongyi J. wird in München zu elf Jahren und drei Monaten verurteilt", body: "Das Gericht stellte zwei versuchte Morde und sechs besonders schwere Vergewaltigungen fest. Der DW-Folgebericht vom 16. Juni 2026 bestätigt die Rechtskraft.", sourceId: "taz" },
      { date: "19. MÄRZ 2026", isoDate: "2026-03-19", title: "Der Prozess gegen Zhiting S. beginnt in Berlin", body: "Deutsche Welle bestätigt den Prozessbeginn am 19. März und berichtete später aus dem Gerichtssaal sowie über weitere Verhandlungstermine.", sourceId: "dw-trial" },
      { date: "6. FEBRUAR 2026", isoDate: "2026-02-06", title: "Dapeng Z. wird in Frankfurt zu vierzehn Jahren verurteilt", body: "Das Gericht ordnete zudem die anschließende Sicherungsverwahrung an. Laut DW-Bericht vom 16. Juni 2026 legte der Angeklagte Revision zum Bundesgerichtshof ein.", sourceId: "zeit-frankfurt" },
      { date: "AUGUST 2025", isoDate: "2025-08", title: "Tong Z. wird in Berlin zu fünf Jahren und neun Monaten verurteilt", body: "Deutsche Welle bestätigt Urteilsmonat, Tatbestände und Strafmaß; nach einer geringfügigen Änderung auf Revision der Verteidigung wurde das Urteil rechtskräftig.", sourceId: "dw" },
      { date: "14. NOVEMBER 2024", isoDate: "2024-11-14", title: "Dapeng Z. wird im hessischen Groß-Gerau festgenommen", body: "Deutsche Welle berichtet, dass Staatsanwaltschaft Frankfurt und Hessisches Landeskriminalamt die Festnahme am Folgetag bekannt gaben.", sourceId: "dw-arrest" }
    ]
  };

  const sources = {
    zh: [
      {
        id: "taz",
        type: "media",
        typeLabel: "德文报道",
        date: "2026-04-14",
        publisher: "taz · Sophie Fichtner",
        title: "Elf Jahre Haft für frauenverachtende Taten",
        displayTitle: "厌女行为被判十一年监禁",
        summary: "慕尼黑 Zhongyi J. 案宣判报道，包含法院认定、量刑理由和预防性拘押问题。",
        note: "德文原始报道 · 可公开访问",
        url: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/"
      },
      {
        id: "berlin-court",
        type: "court",
        typeLabel: "法院新闻稿",
        date: "2026-07-08",
        publisher: "柏林司法部门 · 柏林第一地方法院",
        title: "Landgericht Berlin I verhängt eine Freiheitsstrafe von fünf Jahren gegen Mitglied eines Missbrauchs-Netzwerks",
        displayTitle: "柏林第一地方法院判处性侵网络成员五年监禁",
        summary: "Zhiting S. 案官方新闻稿，列明法院认定、五年总刑期、判决尚未生效及案号 528 KLs 22/25。",
        note: "德文司法机关原始来源 · PM 26/2026",
        url: "https://www.berlin.de/gerichte/presse/pressemitteilungen-der-ordentlichen-gerichtsbarkeit/2026/pressemitteilung.1691294.php"
      },
      {
        id: "zeit-frankfurt",
        type: "media",
        typeLabel: "德文报道",
        date: "2026-02-06",
        publisher: "DIE ZEIT · dpa",
        title: "Frauen betäubt und vergewaltigt: 14 Jahre Haft",
        displayTitle: "给女性下药并强奸：判处十四年监禁",
        summary: "报道法兰克福地方法院对 Dapeng Z. 作出的十四年监禁及刑满后预防性拘押判决。",
        note: "德文判决报道 · 通讯社稿",
        url: "https://www.zeit.de/news/2026-02/06/frauen-betaeubt-und-vergewaltigt-14-jahre-haft"
      },
      {
        id: "tagesschau-munich",
        type: "media",
        typeLabel: "德文报道",
        date: "2026-04-14",
        publisher: "Tagesschau",
        title: "München: Haftstrafe für Vergewaltigung betäubter Frau",
        displayTitle: "慕尼黑：因性侵被麻醉女性被判监禁",
        summary: "报道慕尼黑 Zhongyi J. 案的十一年三个月刑期、谋杀未遂与特别严重强奸等法院认定。",
        note: "德文公共广播报道",
        url: "https://www.tagesschau.de/inland/gesellschaft/vergewaltigung-betaeubung-urteil-100.html"
      },
      {
        id: "hessenschau",
        type: "media",
        typeLabel: "德文调查报道",
        date: "2026-04-14",
        publisher: "Hessenschau",
        title: "Frauen betäuben und vergewaltigen: Das Netzwerk eines Serientäters aus Frankfurt",
        displayTitle: "给女性下药并实施强奸：法兰克福连环犯罪者的网络",
        summary: "从法兰克福案件出发梳理 Telegram 网络、跨州调查与慕尼黑案件之间的公开关联。",
        note: "德文地区公共广播调查",
        url: "https://www.hessenschau.de/panorama/frauen-betaeuben-und-vergewaltigen-das-netzwerk-eines-serientaeters-aus-frankfurt-v1,netzwerk-vergewaltigung-100.html"
      },
      {
        id: "spiegel-berlin",
        type: "media",
        typeLabel: "德文报道",
        date: "2026-07-09",
        publisher: "DER SPIEGEL",
        title: "Berlin: Mediziner gab Tipps zur Vergewaltigung von Frauen",
        summary: "报道 Zhiting S. 五年一审判决及其在群组内就女性镇静用药提供建议的法院认定。",
        note: "德文判决报道",
        url: "https://www.spiegel.de/panorama/justiz/berlin-mediziner-gab-tipps-zur-vergewaltigung-von-frauen-fuenf-jahre-haft-a-b07ebb65-691e-43c5-b845-d2cfa99a42cf"
      },
      {
        id: "sz-berlin",
        type: "media",
        typeLabel: "德文庭审报道",
        date: "2026-07-10",
        publisher: "Süddeutsche Zeitung",
        title: "Die Telegram-Chatgruppe, in der es nur so trieft vor Frauenhass",
        summary: "围绕 Zhiting S. 案与八人聊天群组的德文庭审报道，讨论群内建议、影像传播与厌女语言。",
        note: "德文庭审报道 · 可能需要订阅",
        url: "https://www.sueddeutsche.de/panorama/vergewaltiger-telegram-chat-prozess-chinesen-berlin-li.3508844"
      },
      {
        id: "taz-network",
        type: "commentary",
        typeLabel: "德文调查 / 背景",
        date: "2026-09-26",
        publisher: "taz · Nadine Conti、Lilly Schröder、Anna Simbürger",
        title: "Vernetzte Vergewaltiger",
        summary: "将这些相关案件放在德国不同地区的背景中考察，关注网络化交流如何让调查不断指向更多嫌疑人。",
        note: "德文跨地区调查 · 可公开访问",
        url: "https://taz.de/Missbrauchsprozesse-in-Deutschland/!6214048/"
      },
      {
        id: "dw",
        type: "media",
        typeLabel: "媒体报道",
        date: "2026-06-16",
        publisher: "德国之声中文网 · 安静",
        title: "德国华人迷奸案判太轻？律师、检方怎么说？",
        summary: "汇总 Tong Z.、Dapeng Z.、Zhongyi J. 和 Zhiting S. 相关案件状态，并采访法院、检方与受害者代理律师。",
        note: "中文综合报道 · 含法律状态说明",
        url: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844"
      },
      {
        id: "cdt",
        type: "commentary",
        typeLabel: "转载 / 评论",
        date: "2026-05-07",
        publisher: "中国数字时代 · 404 文库",
        title: "中国高材生跨国迷奸案：德国连环性犯罪背后的熟人暴力与群体之恶",
        summary: "对案件网络、熟人暴力和群体化犯罪的中文评论性梳理；部分跨国关联应与法院材料分别核验。",
        note: "转载存档 · 原作者 thinking wang",
        url: "https://chinadigitaltimes.net/chinese/727047.html"
      },
      {
        id: "wx-first-voice",
        type: "wechat",
        typeLabel: "公众号报道",
        date: "2026-06-05",
        publisher: "正面连接 · 冯兆音",
        title: "德国华人性侵案受害者首度发声：“我真的很想问问他，到底为什么？”",
        summary: "Tong Z. 案受害者的公开讲述，涉及记忆断裂、警方通知、司法程序和持续心理影响。",
        note: "《正面连接》公众号 · 2026-06-05 · 微信原文",
        url: "https://mp.weixin.qq.com/s/rW2elCN8SuvTk5dcj22DmA",
        wechatOnly: true
      },
      {
        id: "wx-zhiting",
        type: "wechat",
        typeLabel: "公众号报道",
        date: "2026-07-09",
        publisher: "正面连接 · 林蔚莹",
        title: "中文舆论进入德国法庭：德国华人迷奸案 Zhiting S. 获刑五年",
        summary: "记录 7 月 8 日一审宣判、辩方表示将上诉，以及中文旁听者和报道者进入德国法庭的过程。",
        note: "《正面连接》公众号 · 2026-07-09 · 微信原文",
        url: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        wechatOnly: true
      },
      {
        id: "wx-survivor",
        type: "wechat",
        typeLabel: "公众号报道",
        date: "2026-07-21",
        publisher: "谷雨实验室 · 孙谦",
        title: "德国华人迷奸案受害者：我做了所有能做的，为什么还要被指责？",
        summary: "以受害者经历为主线，记录案件发现、法律程序、记忆空白和网络二次伤害。",
        note: "谷雨实验室公众号 · 2026-07-21 · 微信原文",
        url: "https://mp.weixin.qq.com/s/64rqn8WExAPDrorww14msA",
        wechatOnly: true
      },
      {
        id: "wx-network",
        type: "wechat",
        typeLabel: "公众号报道",
        date: "2026-08-31",
        publisher: "正面连接 · 冯兆音",
        title: "德国华人迷奸案背后：跨越中德的女性接力，揭开一张罪恶之网",
        summary: "梳理跨中德的调查、法律援助、旁听与公共传播协作，并回顾多起案件的阶段性结果。",
        note: "《正面连接》公众号 · 2026-08-31 · 微信原文",
        url: "https://mp.weixin.qq.com/s/V2ud73xqAk_6LTjFuTSRoQ?scene=1",
        wechatOnly: true
      },
      {
        id: "dw-trial",
        type: "media",
        typeLabel: "媒体报道",
        date: "2026-05-21",
        publisher: "德国之声中文网 · Xin Lin",
        title: "她们第一次走进德国法庭：中国留学生迷奸案庭审现场",
        summary: "确认 Zhiting S. 案于 2026 年 3 月 19 日开庭，并记录 5 月庭审现场与后续排期。",
        note: "中文庭审报道 · 含开庭日期",
        url: "https://www.dw.com/zh/%E5%A5%B9%E4%BB%AC%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E8%BF%9B%E5%BE%B7%E5%9B%BD%E6%B3%95%E5%BA%AD%E4%B8%80%E5%9C%BA%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%95%99%E5%AD%A6%E7%94%9F%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%BA%AD%E5%AE%A1%E7%8E%B0%E5%9C%BA/a-77238656"
      },
      {
        id: "dw-arrest",
        type: "media",
        typeLabel: "媒体报道",
        date: "2024-11-29",
        publisher: "德国之声中文网",
        title: "中国籍连环强奸犯在德落网，德华人圈“起底”嫌疑人",
        summary: "报道 Dapeng Z. 于 2024 年 11 月 14 日在黑森州 Groß-Gerau 地区被捕；检方与黑森州刑警局于次日公布消息。",
        note: "中文报道 · 页面于 2024-11-29 更新",
        url: "https://www.dw.com/zh/%E4%B8%AD%E5%9B%BD%E7%B1%8D%E8%BF%9E%E7%8E%AF%E5%BC%BA%E5%A5%B8%E7%8A%AF%E5%9C%A8%E5%BE%B7%E8%90%BD%E7%BD%91-%E5%BE%B7%E5%8D%8E%E4%BA%BA%E5%9C%88%E8%B5%B7%E5%BA%95%E5%AB%8C%E7%96%91%E4%BA%BA/a-70906929"
      }
    ],
    en: [
      {
        id: "taz",
        type: "media",
        typeLabel: "German reporting",
        date: "14 APR 2026",
        publisher: "taz · Sophie Fichtner",
        title: "Eleven years for acts contemptuous of women",
        summary: "Reporting from the sentencing of Zhongyi J. in Munich, covering the court’s findings, sentencing reasons, and possible preventive detention.",
        note: "Original German reporting · publicly accessible",
        url: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/"
      },
      {
        id: "berlin-court",
        type: "court",
        typeLabel: "Court release",
        date: "8 JUL 2026",
        publisher: "Berlin judiciary · Berlin Regional Court I",
        title: "Berlin Regional Court I imposes a five-year prison sentence on a member of an abuse network",
        displayTitle: "Berlin Regional Court I imposes a five-year prison sentence on a member of an abuse network",
        summary: "The official release for the Zhiting S. case records the court’s findings, the five-year aggregate sentence, the judgment’s non-final status, and docket 528 KLs 22/25.",
        note: "Original German judicial source · PM 26/2026",
        url: "https://www.berlin.de/gerichte/presse/pressemitteilungen-der-ordentlichen-gerichtsbarkeit/2026/pressemitteilung.1691294.php"
      },
      {
        id: "zeit-frankfurt",
        type: "media",
        typeLabel: "German reporting",
        date: "6 FEB 2026",
        publisher: "DIE ZEIT · dpa",
        title: "Women drugged and raped: fourteen years in prison",
        displayTitle: "Women drugged and raped: fourteen years in prison",
        summary: "Reports Frankfurt Regional Court’s fourteen-year sentence for Dapeng Z. and its order for subsequent preventive detention.",
        note: "German-language judgment report · news agency copy",
        url: "https://www.zeit.de/news/2026-02/06/frauen-betaeubt-und-vergewaltigt-14-jahre-haft"
      },
      {
        id: "tagesschau-munich",
        type: "media",
        typeLabel: "German reporting",
        date: "14 APR 2026",
        publisher: "Tagesschau",
        title: "Munich: prison sentence for the rape of a drugged woman",
        displayTitle: "Munich: prison sentence for the rape of a drugged woman",
        summary: "Reports the eleven-year-and-three-month sentence in the Zhongyi J. case and the court’s findings including attempted murder and especially aggravated rape.",
        note: "German public-service reporting",
        url: "https://www.tagesschau.de/inland/gesellschaft/vergewaltigung-betaeubung-urteil-100.html"
      },
      {
        id: "hessenschau",
        type: "media",
        typeLabel: "German investigation",
        date: "14 APR 2026",
        publisher: "Hessenschau",
        title: "Drugging and raping women: the network of a serial offender from Frankfurt",
        displayTitle: "Drugging and raping women: the network of a serial offender from Frankfurt",
        summary: "Uses the Frankfurt case to examine the Telegram network, cross-state investigations, and publicly reported links to the Munich proceedings.",
        note: "German regional public-service investigation",
        url: "https://www.hessenschau.de/panorama/frauen-betaeuben-und-vergewaltigen-das-netzwerk-eines-serientaeters-aus-frankfurt-v1,netzwerk-vergewaltigung-100.html"
      },
      {
        id: "spiegel-berlin",
        type: "media",
        typeLabel: "German reporting",
        date: "9 JUL 2026",
        publisher: "DER SPIEGEL",
        title: "Berlin physician gave advice on raping women",
        summary: "Reports the five-year first-instance judgment against Zhiting S. and the court’s finding that he advised the group about sedating women.",
        note: "German-language judgment report",
        url: "https://www.spiegel.de/panorama/justiz/berlin-mediziner-gab-tipps-zur-vergewaltigung-von-frauen-fuenf-jahre-haft-a-b07ebb65-691e-43c5-b845-d2cfa99a42cf"
      },
      {
        id: "sz-berlin",
        type: "media",
        typeLabel: "German courtroom reporting",
        date: "10 JUL 2026",
        publisher: "Süddeutsche Zeitung",
        title: "The Telegram chat group steeped in misogyny",
        summary: "Courtroom reporting on the Zhiting S. case and the eight-member chat group, including advice, circulation of material, and misogynistic language.",
        note: "German courtroom reporting · subscription may be required",
        url: "https://www.sueddeutsche.de/panorama/vergewaltiger-telegram-chat-prozess-chinesen-berlin-li.3508844"
      },
      {
        id: "taz-network",
        type: "commentary",
        typeLabel: "German investigation / context",
        date: "26 SEP 2026",
        publisher: "taz · Nadine Conti, Lilly Schröder, Anna Simbürger",
        title: "Networked rapists",
        summary: "Places these related cases in a wider German context and examines how online networks lead investigations toward further suspects.",
        note: "Cross-regional German investigation · publicly accessible",
        url: "https://taz.de/Missbrauchsprozesse-in-Deutschland/!6214048/"
      },
      {
        id: "dw",
        type: "media",
        typeLabel: "Reporting",
        date: "16 JUN 2026",
        publisher: "Deutsche Welle Chinese · An Jing",
        title: "Were the sentences in the Germany cases too light? Lawyers and prosecutors respond",
        summary: "A status overview of the Tong Z., Dapeng Z., Zhongyi J., and Zhiting S. cases, with responses from courts, prosecutors, and survivor’s counsel.",
        note: "Chinese-language overview · includes legal status",
        url: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844"
      },
      {
        id: "cdt",
        type: "commentary",
        typeLabel: "Archive / commentary",
        date: "7 MAY 2026",
        publisher: "China Digital Times · 404 Archive",
        title: "A cross-border sexual violence case: acquaintance violence and group-enabled harm",
        summary: "Chinese commentary on the network, acquaintance violence, and group-enabled offending. Some claimed cross-border links require separate verification against court records.",
        note: "Archived repost · original author thinking wang",
        url: "https://chinadigitaltimes.net/chinese/727047.html"
      },
      {
        id: "wx-first-voice",
        type: "wechat",
        typeLabel: "WeChat reporting",
        date: "5 JUN 2026",
        publisher: "Positive Connection · Feng Zhaoyin",
        title: "A survivor of the Germany case speaks publicly for the first time: ‘I really want to ask him—why?’",
        summary: "A survivor in the Tong Z. case describes disrupted memory, being contacted by police, the legal process, and continuing psychological impact.",
        note: "Positive Connection on WeChat · 5 Jun 2026 · original article",
        url: "https://mp.weixin.qq.com/s/rW2elCN8SuvTk5dcj22DmA",
        wechatOnly: true
      },
      {
        id: "wx-zhiting",
        type: "wechat",
        typeLabel: "WeChat reporting",
        date: "9 JUL 2026",
        publisher: "Positive Connection · Lin Weiying",
        title: "Chinese public discussion enters a German courtroom: Zhiting S. sentenced to five years",
        summary: "Reports the 8 July first-instance judgment, the defence statement that it would appeal, and the role of Chinese-speaking observers and reporters in court.",
        note: "Positive Connection on WeChat · 9 Jul 2026 · original article",
        url: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        wechatOnly: true
      },
      {
        id: "wx-survivor",
        type: "wechat",
        typeLabel: "WeChat reporting",
        date: "21 JUL 2026",
        publisher: "Guyu Lab · Sun Qian",
        title: "Survivor of the Germany cases: ‘I did everything I could. Why am I still blamed?’",
        summary: "Follows a survivor through discovery of the offence, legal proceedings, memory loss, and secondary abuse online.",
        note: "Guyu Lab on WeChat · 21 Jul 2026 · original article",
        url: "https://mp.weixin.qq.com/s/64rqn8WExAPDrorww14msA",
        wechatOnly: true
      },
      {
        id: "wx-network",
        type: "wechat",
        typeLabel: "WeChat reporting",
        date: "31 AUG 2026",
        publisher: "Positive Connection · Feng Zhaoyin",
        title: "Behind the Germany cases: women working across China and Germany uncover a network",
        summary: "Traces cross-border investigation, legal support, courtroom observation, and public-interest reporting, alongside the cases’ interim outcomes.",
        note: "Positive Connection on WeChat · 31 Aug 2026 · original article",
        url: "https://mp.weixin.qq.com/s/V2ud73xqAk_6LTjFuTSRoQ?scene=1",
        wechatOnly: true
      },
      {
        id: "dw-trial",
        type: "media",
        typeLabel: "Reporting",
        date: "21 MAY 2026",
        publisher: "Deutsche Welle Chinese · Xin Lin",
        title: "Their first time in a German courtroom: inside the trial of a Chinese student",
        summary: "Confirms that the Zhiting S. trial opened on 19 March 2026 and reports from the May hearings and subsequent schedule.",
        note: "Chinese-language courtroom report · includes trial-opening date",
        url: "https://www.dw.com/zh/%E5%A5%B9%E4%BB%AC%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E8%BF%9B%E5%BE%B7%E5%9B%BD%E6%B3%95%E5%BA%AD%E4%B8%80%E5%9C%BA%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%95%99%E5%AD%A6%E7%94%9F%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%BA%AD%E5%AE%A1%E7%8E%B0%E5%9C%BA/a-77238656"
      },
      {
        id: "dw-arrest",
        type: "media",
        typeLabel: "Reporting",
        date: "29 NOV 2024",
        publisher: "Deutsche Welle Chinese",
        title: "Chinese serial-rape suspect arrested in Germany",
        summary: "Reports that Dapeng Z. was arrested in the Groß-Gerau area of Hesse on 14 November 2024; prosecutors and the Hessian State Criminal Police announced the arrest the next day.",
        note: "Chinese-language report · page updated 29 Nov 2024",
        url: "https://www.dw.com/zh/%E4%B8%AD%E5%9B%BD%E7%B1%8D%E8%BF%9E%E7%8E%AF%E5%BC%BA%E5%A5%B8%E7%8A%AF%E5%9C%A8%E5%BE%B7%E8%90%BD%E7%BD%91-%E5%BE%B7%E5%8D%8E%E4%BA%BA%E5%9C%88%E8%B5%B7%E5%BA%95%E5%AB%8C%E7%96%91%E4%BA%BA/a-70906929"
      }
    ],
    de: [
      {
        id: "berlin-court",
        type: "court",
        typeLabel: "Gerichtsmitteilung",
        date: "08.07.2026",
        publisher: "Berliner Strafgerichte · Landgericht Berlin I",
        title: "Landgericht Berlin I verhängt eine Freiheitsstrafe von fünf Jahren gegen Mitglied eines Missbrauchs-Netzwerks",
        summary: "Die offizielle Mitteilung zum Fall Zhiting S. enthält die gerichtlichen Feststellungen, die Gesamtstrafe, den Hinweis auf die fehlende Rechtskraft und das Aktenzeichen 528 KLs 22/25.",
        note: "Gerichtliche Primärquelle · PM 26/2026",
        url: "https://www.berlin.de/gerichte/presse/pressemitteilungen-der-ordentlichen-gerichtsbarkeit/2026/pressemitteilung.1691294.php"
      },
      {
        id: "zeit-frankfurt",
        type: "media",
        typeLabel: "Bericht",
        date: "06.02.2026",
        publisher: "DIE ZEIT · dpa",
        title: "Frauen betäubt und vergewaltigt: 14 Jahre Haft",
        summary: "Bericht über die vierzehnjährige Freiheitsstrafe gegen Dapeng Z. und die vom Landgericht Frankfurt angeordnete anschließende Sicherungsverwahrung.",
        note: "Urteilsbericht · Agenturmeldung",
        url: "https://www.zeit.de/news/2026-02/06/frauen-betaeubt-und-vergewaltigt-14-jahre-haft"
      },
      {
        id: "taz",
        type: "media",
        typeLabel: "Bericht",
        date: "14.04.2026",
        publisher: "taz · Sophie Fichtner",
        title: "Elf Jahre Haft für frauenverachtende Taten",
        summary: "Bericht von der Urteilsverkündung gegen Zhongyi J. in München mit Feststellungen des Gerichts, Strafzumessung und möglicher Sicherungsverwahrung.",
        note: "Deutscher Gerichtsbericht · frei zugänglich",
        url: "https://taz.de/Schwere-Vergewaltigung-versuchter-Mord/!6170926/"
      },
      {
        id: "tagesschau-munich",
        type: "media",
        typeLabel: "Bericht",
        date: "14.04.2026",
        publisher: "Tagesschau",
        title: "München: Haftstrafe für Vergewaltigung betäubter Frau",
        summary: "Bericht über die Verurteilung zu elf Jahren und drei Monaten im Fall Zhongyi J. und die Feststellungen zu versuchtem Mord und besonders schwerer Vergewaltigung.",
        note: "Öffentlich-rechtliche Berichterstattung",
        url: "https://www.tagesschau.de/inland/gesellschaft/vergewaltigung-betaeubung-urteil-100.html"
      },
      {
        id: "hessenschau",
        type: "media",
        typeLabel: "Recherche",
        date: "14.04.2026",
        publisher: "Hessenschau",
        title: "Frauen betäuben und vergewaltigen: Das Netzwerk eines Serientäters aus Frankfurt",
        summary: "Die Recherche nimmt den Frankfurter Fall zum Ausgangspunkt und beschreibt das Telegram-Netzwerk, länderübergreifende Ermittlungen und öffentlich berichtete Bezüge zum Münchner Verfahren.",
        note: "Regionale öffentlich-rechtliche Recherche",
        url: "https://www.hessenschau.de/panorama/frauen-betaeuben-und-vergewaltigen-das-netzwerk-eines-serientaeters-aus-frankfurt-v1,netzwerk-vergewaltigung-100.html"
      },
      {
        id: "cdt",
        type: "commentary",
        typeLabel: "Archiv / Kommentar",
        date: "07.05.2026",
        publisher: "China Digital Times · 404 Archiv",
        title: "Chinesischer Kommentar zu Bekanntschaftsgewalt und gruppengestützter Gewalt",
        summary: "Chinesischsprachige Einordnung des Netzwerks, der Gewalt im sozialen Nahbereich und gruppengestützter Taten. Einzelne behauptete grenzüberschreitende Verbindungen müssen gesondert mit Gerichtsquellen abgeglichen werden.",
        note: "Archivierter Nachdruck · Original von thinking wang",
        url: "https://chinadigitaltimes.net/chinese/727047.html"
      },
      {
        id: "wx-first-voice",
        type: "wechat",
        typeLabel: "WeChat-Bericht",
        date: "05.06.2026",
        publisher: "Positive Connection · Feng Zhaoyin",
        title: "Eine Betroffene des Falls äußert sich erstmals öffentlich: „Ich möchte ihn wirklich fragen – warum?“",
        summary: "Eine Betroffene im Fall Tong Z. berichtet über Erinnerungslücken, die Benachrichtigung durch die Polizei, das Strafverfahren und fortdauernde psychische Folgen.",
        note: "Positive Connection auf WeChat · Originalbeitrag",
        url: "https://mp.weixin.qq.com/s/rW2elCN8SuvTk5dcj22DmA",
        wechatOnly: true
      },
      {
        id: "dw",
        type: "media",
        typeLabel: "Chinesischer Bericht",
        date: "16.06.2026",
        publisher: "Deutsche Welle Chinesisch · An Jing",
        title: "Waren die Strafen zu niedrig? Anwältinnen und Staatsanwaltschaft nehmen Stellung",
        summary: "Überblick zum Stand der Verfahren gegen Tong Z., Dapeng Z., Zhongyi J. und Zhiting S. mit Auskünften von Gerichten, Staatsanwaltschaften und einer Nebenklagevertreterin.",
        note: "Chinesischsprachiger Überblick · mit Verfahrensständen",
        url: "https://www.dw.com/zh/%E5%BE%B7%E5%9B%BD%E5%8D%8E%E4%BA%BA%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%88%A4%E5%A4%AA%E8%BD%BB%E5%BE%8B%E5%B8%88%E6%A3%80%E6%96%B9%E6%80%8E%E4%B9%88%E8%AF%B4/a-77561844"
      },
      {
        id: "spiegel-berlin",
        type: "media",
        typeLabel: "Bericht",
        date: "09.07.2026",
        publisher: "DER SPIEGEL",
        title: "Berlin: Mediziner gab Tipps zur Vergewaltigung von Frauen",
        summary: "Bericht über das erstinstanzliche Fünfjahresurteil gegen Zhiting S. und die gerichtliche Feststellung, dass er Hinweise zur Sedierung von Frauen gab.",
        note: "Deutscher Urteilsbericht",
        url: "https://www.spiegel.de/panorama/justiz/berlin-mediziner-gab-tipps-zur-vergewaltigung-von-frauen-fuenf-jahre-haft-a-b07ebb65-691e-43c5-b845-d2cfa99a42cf"
      },
      {
        id: "wx-zhiting",
        type: "wechat",
        typeLabel: "WeChat-Bericht",
        date: "09.07.2026",
        publisher: "Positive Connection · Lin Weiying",
        title: "Chinesische Öffentlichkeit im deutschen Gericht: Zhiting S. zu fünf Jahren verurteilt",
        summary: "Bericht über das Urteil vom 8. Juli, die angekündigte Revision der Verteidigung und die Rolle chinesischsprachiger Prozessbeobachterinnen und Reporterinnen.",
        note: "Positive Connection auf WeChat · Originalbeitrag",
        url: "https://mp.weixin.qq.com/s/cY3YcjXP897E6yE3Da8GfQ",
        wechatOnly: true
      },
      {
        id: "sz-berlin",
        type: "media",
        typeLabel: "Gerichtsbericht",
        date: "10.07.2026",
        publisher: "Süddeutsche Zeitung",
        title: "Die Telegram-Chatgruppe, in der es nur so trieft vor Frauenhass",
        summary: "Gerichtsbericht über den Fall Zhiting S. und die achtköpfige Chatgruppe, einschließlich Ratschlägen, Verbreitung von Material und frauenfeindlicher Sprache.",
        note: "Deutscher Gerichtsbericht · möglicherweise kostenpflichtig",
        url: "https://www.sueddeutsche.de/panorama/vergewaltiger-telegram-chat-prozess-chinesen-berlin-li.3508844"
      },
      {
        id: "wx-survivor",
        type: "wechat",
        typeLabel: "WeChat-Bericht",
        date: "21.07.2026",
        publisher: "Guyu Lab · Sun Qian",
        title: "Betroffene der Deutschland-Fälle: „Ich habe alles getan, was ich konnte. Warum werde ich trotzdem beschuldigt?“",
        summary: "Der Beitrag folgt einer Betroffenen durch die Entdeckung der Tat, das Strafverfahren, Erinnerungslücken und sekundäre Angriffe im Netz.",
        note: "Guyu Lab auf WeChat · Originalbeitrag",
        url: "https://mp.weixin.qq.com/s/64rqn8WExAPDrorww14msA",
        wechatOnly: true
      },
      {
        id: "wx-network",
        type: "wechat",
        typeLabel: "WeChat-Bericht",
        date: "31.08.2026",
        publisher: "Positive Connection · Feng Zhaoyin",
        title: "Hinter den Deutschland-Fällen: Frauen decken grenzüberschreitend ein Netzwerk auf",
        summary: "Dokumentiert grenzüberschreitende Recherche, Rechtsbeistand, Prozessbeobachtung und öffentliche Vermittlung sowie die Zwischenstände der Verfahren.",
        note: "Positive Connection auf WeChat · Originalbeitrag",
        url: "https://mp.weixin.qq.com/s/V2ud73xqAk_6LTjFuTSRoQ?scene=1",
        wechatOnly: true
      },
      {
        id: "taz-network",
        type: "commentary",
        typeLabel: "Recherche / Kontext",
        date: "26.09.2026",
        publisher: "taz · Nadine Conti, Lilly Schröder, Anna Simbürger",
        title: "Vernetzte Vergewaltiger",
        summary: "Ordnet diese zusammenhängenden Fälle in den größeren deutschen Kontext ein und untersucht, wie Online-Netzwerke Ermittlungen zu weiteren Beschuldigten führen.",
        note: "Bundesweite Recherche · frei zugänglich",
        url: "https://taz.de/Missbrauchsprozesse-in-Deutschland/!6214048/"
      },
      {
        id: "dw-trial",
        type: "media",
        typeLabel: "Chinesischer Gerichtsbericht",
        date: "21.05.2026",
        publisher: "Deutsche Welle Chinesisch · Xin Lin",
        title: "Erstmals vor einem deutschen Gericht: Bericht aus dem Prozess gegen einen chinesischen Studenten",
        summary: "Bestätigt den Prozessbeginn gegen Zhiting S. am 19. März 2026 und berichtet aus den Verhandlungen im Mai sowie über weitere Termine.",
        note: "Chinesischsprachiger Gerichtsbericht · mit Prozessbeginn",
        url: "https://www.dw.com/zh/%E5%A5%B9%E4%BB%AC%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E8%BF%9B%E5%BE%B7%E5%9B%BD%E6%B3%95%E5%BA%AD%E4%B8%80%E5%9C%BA%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%95%99%E5%AD%A6%E7%94%9F%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E5%BA%AD%E5%AE%A1%E7%8E%B0%E5%9C%BA/a-77238656"
      },
      {
        id: "dw-arrest",
        type: "media",
        typeLabel: "Chinesischer Bericht",
        date: "29.11.2024",
        publisher: "Deutsche Welle Chinesisch",
        title: "Chinesischer Serienvergewaltiger in Deutschland festgenommen",
        summary: "Berichtet, dass Dapeng Z. am 14. November 2024 im hessischen Groß-Gerau festgenommen wurde; Staatsanwaltschaft und Landeskriminalamt veröffentlichten die Festnahme am Folgetag.",
        note: "Chinesischsprachiger Bericht · Seite am 29. November 2024 aktualisiert",
        url: "https://www.dw.com/zh/%E4%B8%AD%E5%9B%BD%E7%B1%8D%E8%BF%9E%E7%8E%AF%E5%BC%BA%E5%A5%B8%E7%8A%AF%E5%9C%A8%E5%BE%B7%E8%90%BD%E7%BD%91-%E5%BE%B7%E5%8D%8E%E4%BA%BA%E5%9C%88%E8%B5%B7%E5%BA%95%E5%AB%8C%E7%96%91%E4%BA%BA/a-70906929"
      }
    ]
  };

  const sourceOrder = [
    "taz-network",
    "wx-network",
    "wx-survivor",
    "sz-berlin",
    "spiegel-berlin",
    "wx-zhiting",
    "berlin-court",
    "dw",
    "wx-first-voice",
    "dw-trial",
    "cdt",
    "taz",
    "tagesschau-munich",
    "hessenschau",
    "zeit-frankfurt",
    "dw-arrest"
  ];
  const sourceRank = new Map(sourceOrder.map((id, index) => [id, index]));
  const sourceDates = new Map([
    ["taz-network", "2026-09-26"],
    ["wx-network", "2026-08-31"],
    ["wx-survivor", "2026-07-21"],
    ["sz-berlin", "2026-07-10"],
    ["spiegel-berlin", "2026-07-09"],
    ["wx-zhiting", "2026-07-09"],
    ["berlin-court", "2026-07-08"],
    ["dw", "2026-06-16"],
    ["wx-first-voice", "2026-06-05"],
    ["dw-trial", "2026-05-21"],
    ["cdt", "2026-05-07"],
    ["taz", "2026-04-14"],
    ["tagesschau-munich", "2026-04-14"],
    ["hessenschau", "2026-04-14"],
    ["zeit-frankfurt", "2026-02-06"],
    ["dw-arrest", "2024-11-29"]
  ]);

  const root = document.documentElement;
  const metaDescription = document.querySelector('meta[name="description"]');
  const caseGrid = document.querySelector("#case-grid");
  const timelineList = document.querySelector("#timeline-list");
  const sourceList = document.querySelector("#source-list");
  const resultsCount = document.querySelector("#results-count");
  const emptyState = document.querySelector("#empty-state");
  const searchInput = document.querySelector("#source-search");
  const clearSearch = document.querySelector("#clear-search");
  const resetFilters = document.querySelector("#reset-filters");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const languageButtons = Array.from(document.querySelectorAll("[data-language-option]"));

  const params = new URLSearchParams(window.location.search);
  let state = {
    language: "zh",
    query: params.get("q") || "",
    filter: params.get("type") || "all"
  };

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function updateUrl() {
    const next = new URLSearchParams();
    if (state.query) next.set("q", state.query);
    if (state.filter !== "all") next.set("type", state.filter);
    const query = next.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  function renderCases(language) {
    const strings = pageCopy[language];
    caseGrid.innerHTML = cases[language].map((item) => `
      <article class="case-card">
        <div class="case-top">
          <span class="case-id">${escapeHtml(item.id)}</span>
          <span class="case-status ${escapeHtml(item.statusClass)}">${escapeHtml(item.status)}</span>
        </div>
        <div class="case-body">
          <p class="case-meta">${escapeHtml(item.meta)}</p>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="case-sentence">${escapeHtml(item.sentence)}</p>
          <p class="case-summary">${escapeHtml(item.summary)}</p>
          <details>
            <summary>${escapeHtml(strings.detailsLabel)}</summary>
            <div class="case-details">
              <p>${escapeHtml(item.detail)}</p>
              ${item.source ? `<a href="${escapeHtml(item.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.sourceLabel || strings.sourceLink)} ↗</a>` : `<span>${escapeHtml(item.sourceLabel || strings.sourceUnavailable)}</span>`}
            </div>
          </details>
        </div>
      </article>
    `).join("");
  }

  function renderTimeline(language) {
    const sourceLookup = new Map(sources[language].map((source) => [source.id, source]));
    const strings = pageCopy[language];
    timelineList.innerHTML = timeline[language].map((item) => {
      const source = sourceLookup.get(item.sourceId);
      const sourceAction = source?.url
        ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.wechatOnly ? strings.wechatSource : strings.readOriginal)} ↗</a>`
        : `<a href="#sources">${escapeHtml(source?.publisher || strings.sourceUnavailable)} ↓</a>`;
      return `
        <li class="timeline-item">
          <time datetime="${escapeHtml(item.isoDate || item.date)}">${escapeHtml(item.date)}</time>
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="timeline-content">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
            ${sourceAction}
          </div>
        </li>
      `;
    }).join("");
  }

  function getFilteredSources() {
    const locale = state.language === "zh" ? "zh-CN" : state.language;
    const query = state.query.trim().toLocaleLowerCase(locale);
    return sources[state.language].filter((source) => {
      const matchesFilter = state.filter === "all" || source.type === state.filter;
      const haystack = `${source.title} ${source.displayTitle || ""} ${source.publisher} ${source.summary} ${source.note} ${source.typeLabel}`.toLocaleLowerCase(locale);
      return matchesFilter && (!query || haystack.includes(query));
    }).sort((a, b) => (sourceRank.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (sourceRank.get(b.id) ?? Number.MAX_SAFE_INTEGER));
  }

  function renderSources() {
    const strings = pageCopy[state.language];
    const filtered = getFilteredSources();
    sourceList.innerHTML = filtered.map((source) => {
      const displayTitle = source.displayTitle || source.title;
      const titleTranslation = source.displayTitle && source.displayTitle !== source.title
        ? `<p class="source-title-translation">${escapeHtml(source.displayTitle)}</p>`
        : "";
      const action = source.url
        ? `<a class="source-open" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${strings.sourceLink}: ${displayTitle}`)}">${escapeHtml(source.wechatOnly ? strings.wechatSource : strings.readOriginal)} ↗</a>`
        : `<span class="source-static">${escapeHtml(strings.linkPending)}</span>`;
      const note = source.wechatOnly ? strings.wechatOnly : source.note;
      return `
        <article class="source-card" data-source-id="${escapeHtml(source.id)}">
          <div class="source-meta">
            <span class="source-type ${escapeHtml(source.type)}">${escapeHtml(source.typeLabel)}</span>
            <time datetime="${escapeHtml(sourceDates.get(source.id) || "")}">${escapeHtml(source.date)}</time>
          </div>
          <div class="source-main">
            <h3>${escapeHtml(source.title)}</h3>
            ${titleTranslation}
            <p>${escapeHtml(source.publisher)} · ${escapeHtml(source.summary)}</p>
          </div>
          <p class="source-note">${escapeHtml(note)}</p>
          ${action}
        </article>
      `;
    }).join("");
    resultsCount.textContent = strings.resultsCount(filtered.length);
    emptyState.hidden = filtered.length !== 0;
    sourceList.hidden = filtered.length === 0;
  }

  function syncFilters() {
    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === state.filter));
    });
  }

  function setLanguage(language, persist = true) {
    state.language = ["zh", "en", "de"].includes(language) ? language : "zh";
    const strings = pageCopy[state.language];
    root.lang = state.language === "zh" ? "zh-CN" : state.language;
    root.dataset.language = state.language;
    document.title = strings.pageTitle;
    metaDescription?.setAttribute("content", strings.pageDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = strings[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = strings[element.dataset.i18nHtml];
      if (typeof value === "string") element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = strings[element.dataset.i18nAria];
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = strings[element.dataset.i18nPlaceholder];
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageOption === state.language));
    });

    renderCases(state.language);
    renderTimeline(state.language);
    renderSources();

    if (persist) {
      try {
        window.localStorage.setItem("unmuted-language", state.language);
      } catch (_) {
        // Language selection still works when storage is unavailable.
      }
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter || "all";
      syncFilters();
      renderSources();
      updateUrl();
    });
  });

  searchInput.value = state.query;
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    renderSources();
    updateUrl();
  });

  clearSearch.addEventListener("click", () => {
    state.query = "";
    searchInput.value = "";
    searchInput.focus();
    renderSources();
    updateUrl();
  });

  resetFilters.addEventListener("click", () => {
    state.query = "";
    state.filter = "all";
    searchInput.value = "";
    syncFilters();
    renderSources();
    updateUrl();
    searchInput.focus();
  });

  let savedLanguage = null;
  try {
    savedLanguage = window.localStorage.getItem("unmuted-language");
  } catch (_) {
    savedLanguage = null;
  }

  const initialLanguage = ["en", "zh", "de"].includes(savedLanguage)
    ? savedLanguage
    : navigator.language?.toLowerCase().startsWith("zh")
      ? "zh"
      : navigator.language?.toLowerCase().startsWith("de")
        ? "de"
        : "en";

  if (!filterButtons.some((button) => button.dataset.filter === state.filter)) state.filter = "all";
  syncFilters();
  setLanguage(initialLanguage, false);
})();
