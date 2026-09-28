/*
  ============================================================
  LAB_DATA — 이 파일만 수정하면 홈페이지 내용이 바뀝니다.
  ============================================================
  - 사람 이름, 논문, 뉴스 등을 추가/삭제/수정할 때 이 파일만 건드리면 됩니다.
  - kr / en 두 언어 버전을 각각 채워주세요. (하나만 있어도 동작은 하지만
    다른 언어로 볼 때 빈 칸이 보일 수 있어요)
  - 배열(예: team, publications.international, news)에 새 항목을 추가할 때는
    바로 위/아래 항목의 { ... } 블록을 통째로 복사해서 값만 바꾸면 됩니다.
  - 각 항목 뒤에 쉼표(,)를 빼먹지 않도록 주의하세요.
  ============================================================
*/

const LAB_DATA = {

  // ── 사이트 기본 정보 ─────────────────────────────────────
  site: {
    labNameKr: "SMD 연구실",
    labNameEn: "SMD Lab",
    labFullNameKr: "Smart Manufacturing and Devices Lab",
    labFullNameEn: "Smart Manufacturing and Devices Lab",
    universityKr: "인하대학교 공과대학 기계공학과",
    universityEn: "Department of Mechanical Engineering, College of Engineering, Inha University",
    addressKr: "인천광역시 미추홀구 인하로 100, 22212",
    addressEn: "100 Inha-ro, Michuhol-gu, Incheon, 22212, Republic of Korea",
    roomsKr: [
      "학생 오피스: 2N277",
      "실험실: 서호관 005A",
    ],
    roomsEn: [
      "Student Office: 2N277",
      "Lab: Seoho Bldg. 005A",
    ],
    email: "bhryu@inha.ac.kr",
    lastUpdated: "2026.09",
  },

  // ── 내비게이션 메뉴 ─────────────────────────────────────
  nav: [
    { kr: "홈",       en: "Home",         href: "index.html" },
    { kr: "연구소개", en: "Research",     href: "research.html" },
    { kr: "구성원",   en: "Team",         href: "team.html" },
    { kr: "논문",     en: "Publications", href: "publications.html" },
    { kr: "소식",     en: "News",         href: "news.html" },
    { kr: "연락처",   en: "Contact",      href: "contact.html" },
  ],

  // ── 히어로(첫 화면) ─────────────────────────────────────
  hero: {
    eyebrowKr: "인하대학교 기계공학과",
    eyebrowEn: "Inha University · Mechanical Engineering",
    titleKr: "차세대 반도체 소재의 생산 기술을 연구하고, 센서로 세상과 연결합니다.",
    titleEn: "Manufacturing technologies for\nnext-generation semiconductor\nmaterials.",
    bodyKr: "SMD 연구실(Smart Manufacturing and Devices Lab)은 차세대 반도체 소재의 정밀하고 확장 가능한 제조 기술을 개발하고, 이를 실제 문제를 감지·진단하는 스마트 IoT 소자로 구현합니다.",
    bodyEn: "SMD Lab — short for Smart Manufacturing and Devices Lab — develops scalable, precisely controlled manufacturing strategies for next-generation semiconductor materials, and translates them into smart IoT devices that sense real-world problems.",
    ctaKr: "대학원생 모집 중 →",
    ctaEn: "We're recruiting students →",
  },

  // ── 연구 소개 ───────────────────────────────────────────
  research: {
    introKr: "저희 연구실은 두 축의 연구를 진행합니다: 소재를 다루는 '제조' 기술과, 그 소재를 활용하는 '센서' 기술입니다.",
    introEn: "Our lab works across two connected pillars: manufacturing the materials, and building sensors from them.",

    // ── 연구 개요 (큰 그림) ──
    // image: 나중에 큰 그림 이미지를 넣을 때 경로만 바꾸면 됩니다 (예: "images/research-overview.png")
    overview: {
      image: "images/research-overview.png",
      titleKr: "소재에서 응용까지",
      titleEn: "From Materials to Applications",
      bodyKr: "SMD 연구실은 소재의 합성과 제조에서 출발하여, 소자 설계, 시스템 통합, 그리고 실제 응용까지 — 연구의 전 과정을 아우릅니다.",
      bodyEn: "SMD Lab covers the full research spectrum — from material synthesis and manufacturing, through device design and system integration, to real-world applications.",
      pillars: [
        { kr: "소재", en: "Materials" },
        { kr: "소자", en: "Devices" },
        { kr: "시스템", en: "Systems" },
        { kr: "응용", en: "Applications" },
      ],
    },

    topics: [
      {
        tagKr: "제조",
        tagEn: "Manufacturing",
        titleKr: "2D 반도체 소재 첨단 제조 공정 설계",
        titleEn: "Advanced Manufacturing for 2D Semiconductors",
        summaryKr: "차세대 반도체를 원하는 위치에, 원하는 크기로, 대면적에 걸쳐 재현성 있게 만들어내는 새로운 제조 방법을 연구합니다.",
        summaryEn: "We develop new manufacturing methods that enable scalable, site-selective growth of next-generation semiconductors across large areas.",
        bodyKr: "MoS₂, 그래핀 등 2D 반도체 소재는 뛰어난 전자·광학 특성을 갖추고 있지만, 이를 실제 소자에 적용하려면 원하는 위치와 형상에 재현성 있게 대면적 합성할 수 있는 제조 기술이 필수적입니다. 기존 기계적 박리법은 소재 특성 검증에는 유효하나, 산업적 확장성에는 근본적인 한계가 있습니다.\n\nSMD 연구실은 잉크젯 프린팅 기반 위치 선택적 성장(Inkjet-Defined Site-Selective Growth), 러빙 유도 핵생성(Rubbing-Induced Growth) 등 독자적인 방법론을 개발하여, 별도의 포토리소그래피 없이도 소재를 원하는 위치에 직접 성장시키는 기술을 연구합니다. 나아가 CVD·스퍼터링 등 다양한 박막 증착 공정의 조건을 체계적으로 최적화하여, 균일하고 재현 가능한 대면적 소재 합성 프로토콜을 확립하고 있습니다.\n\n궁극적으로, 웨이퍼 스케일 직접 성장과 산업 호환 가능한 공정 기술로 발전시켜, 2D 반도체 소재의 실용화를 앞당기는 것을 목표로 합니다.",
        bodyEn: "Two-dimensional semiconductors such as MoS₂ and graphene exhibit exceptional electronic and optical properties, yet translating those properties into real devices demands manufacturing processes capable of reproducible, large-area synthesis at precisely defined locations. Conventional mechanical exfoliation can validate material quality but is fundamentally incompatible with industrial scale-up.\n\nSMD Lab develops original fabrication methodologies — including Inkjet-Defined Site-Selective (IDSS) Growth and Rubbing-Induced Nucleation — that grow 2D materials directly at target positions without conventional photolithography. In parallel, we systematically optimize CVD, sputtering, and other thin-film deposition parameters to establish uniform, repeatable protocols for large-area synthesis.\n\nOur long-term goal is to advance these techniques toward wafer-scale direct growth and industry-compatible process integration, accelerating the practical deployment of 2D semiconductor materials.",
        skillsKr: ["박막 성장", "미세 패터닝", "공정 최적화", "CVD", "스퍼터링"],
        skillsEn: ["Thin-film growth", "Micropatterning", "Process optimization", "CVD", "Sputtering"],
        imageUrl: "images/research-manufacturing.png",
      },
      {
        tagKr: "센서",
        tagEn: "Sensing",
        titleKr: "스마트 IoT 센서 설계",
        titleEn: "Smart IoT Biomedical & Environmental Sensors",
        summaryKr: "직접 만든 2D 소재를 활용해 초고감도·초고속으로 반응하는 IoT 센서를 설계하고, 실시간으로 감지하는 기술을 개발합니다.",
        summaryEn: "We design IoT sensors built on our own 2D materials, achieving ultrasensitive and fast detection for real-time monitoring.",
        bodyKr: "의료 현장에서의 신속 진단, 식품 콜드체인의 실시간 온도 모니터링, 대기·수질 환경의 유해물질 감지 등 — 현대 사회가 요구하는 센싱 기술은 단순히 높은 감도를 넘어, 무선 연결성과 현장 배치 가능성까지 갖추어야 합니다.\n\nSMD 연구실은 자체 제조한 2D 반도체 소재와 레이저 유도 그래핀(LIG)을 감지 소재로 활용하여, 센서 소자 설계부터 무선 통신 모듈 통합, 게이트웨이·클라우드 데이터 전송, 실시간 시각화까지 전 시스템을 아우르는 IoT 센서 노드를 개발합니다. 특히 'Stick-and-Detect' 플랫폼은 유연 기판 위에 센서·통신·전원을 일체화하여, 부착만으로 즉시 모니터링이 가능한 새로운 패러다임을 제시합니다.\n\n향후에는 다중 센서 어레이 기반의 동시 다항목 감지, AI 기반 신호 분석, 그리고 자가 전원 구동 기술을 접목하여, 언제 어디서나 자율적으로 작동하는 스마트 센싱 플랫폼으로 확장해 나갈 계획입니다.",
        bodyEn: "Rapid diagnostics at the point of care, real-time temperature tracking along food cold chains, and continuous monitoring of airborne and waterborne pollutants — modern sensing demands go far beyond raw sensitivity, requiring wireless connectivity and field-deployable form factors.\n\nSMD Lab leverages its own 2D semiconductors and laser-induced graphene (LIG) as active sensing materials, developing complete IoT sensor nodes that span device design, wireless communication module integration, gateway-to-cloud data transmission, and real-time visualization dashboards. Our 'Stick-and-Detect' platform, for example, monolithically integrates sensor, communication, and power on a flexible substrate, enabling instant monitoring by simply attaching the node to any surface.\n\nLooking ahead, we aim to extend this work into multiplexed sensor arrays for simultaneous multi-analyte detection, AI-driven signal analysis, and self-powered operation — toward autonomous smart sensing platforms that function anytime, anywhere.",
        skillsKr: ["반도체 패키징", "회로 설계", "임베디드 프로그래밍", "적층 제조", "계측 기술", "신호 처리"],
        skillsEn: ["Semiconductor packaging", "Circuit design", "Embedded programming", "Additive manufacturing", "Instrumentation", "Signal processing"],
        imageUrl: "images/research-iot-sensors.png",
      },
    ],
  },

  // ── 구성원 ──────────────────────────────────────────────
  // role: "pi" (지도교수) | "student" (대학원생/학부연구생)
  team: [
    {
      role: "pi",
      name: "Byunghoon Ryu",
      titleKr: "지도교수",
      titleEn: "Principal Investigator",
      linesKr: [
        "2022.09 – 현재, 인하대학교 기계공학과 조교수",
        "2020.06 – 2022.07, Argonne National Laboratory 박사후연구원",
        "2020, 미시간대학교 앤아버, 기계공학 박사",
      ],
      linesEn: [
        "2022.09 – Present, Assistant Professor, Inha University, Mechanical Engineering",
        "2020.06 – 2022.07, Postdoctoral Appointee, Argonne National Laboratory",
        "2020, Ph.D., University of Michigan, Ann Arbor, Mechanical Engineering",
      ],
      photo: "images/member-ryu.jpg",
    },
    {
      role: "student",
      name: "Hak Jun Lee",
      titleKr: "석사과정",
      titleEn: "Master Course",
      linesKr: ["2025.03 입학, 인하대학교 기계공학과"],
      linesEn: ["Since 2025.03, Inha University, Mechanical Engineering"],
      photo: "images/member-hakjun.jpg",
    },
    {
      role: "student",
      name: "Se Eung Ahn",
      titleKr: "석사과정",
      titleEn: "Master Course",
      linesKr: ["2025.03 입학, 인하대학교 기계공학과"],
      linesEn: ["Since 2025.03, Inha University, Mechanical Engineering"],
      photo: "images/member-seeung.jpg",
    },

    // ── 학부연구생 ──
    {
      role: "undergraduate",
      name: "김준서",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "황지웅",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "이찬규",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "이찬",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "김무현",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "서윤수",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "조찬민",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "김수현",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "이다연",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },
    {
      role: "undergraduate",
      name: "김세진",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "",
    },

    // ── Alumni (졸업생) ──
    // 졸업생이 생기면 아래처럼 추가하세요.
    // {
    //   role: "alumni",
    //   name: "졸업생 이름",
    //   titleKr: "석사 졸업 (2026)",
    //   titleEn: "M.S. (2026)",
    //   linesKr: ["현재 소속"],
    //   linesEn: ["Current affiliation"],
    //   photo: "",
    // },
  ],

  // ── 논문 목록 (인용 표기는 국제 학술 관례에 따라 언어에 관계없이 원문 그대로 둡니다) ──
  // ── 논문 목록 ───────────────────────────────────────────
  // 각 항목에 image: "images/파일명.jpg" 를 추가하면 논문 옆에
  // 대표 이미지(썸네일)가 표시됩니다. 없으면 자동으로 기본 아이콘이 보여요.
  publications: {
    international: [
      { year: "Submitted", text: "Interfacial Potential Transduction for Diagnostics. (Submitted)." },
      { year: "2026", text: "Hak Jun Lee, Se Eung Ahn, Minhyuk Jung, Hye-ran Moon, Byunghoon Ryu, \u201cFlexible and wireless \u2018stick-and-detect\u2019 sensor node based on laser-induced graphene for real-time temperature monitoring toward cold chain applications.\u201d <i>Chemical Engineering Journal</i> (2026): 175415." },
      { year: "2025", text: "Hyun-June Jang, Hyou-Arm Joung, Xiaoao Shi, Rui Ding, Justine Wagner, Erting Tang, Wen Zhuang, Byunghoon Ryu, Guanmin Chen, Kiang-Teck Jerry Yeo, Jun Huang, Junhong Chen, \u201cRadical-mediated electrical enzyme assay for estradiol: Toward point-of-care diagnostics.\u201d <i>Device</i> 3.9 (2025)." },
      { year: "2025", text: "Hyun-June Jang, Rapti Ghosh, Wen Zhuang, Xiaoben Zhang, Yuqin Wang, Xiaoao Shi, Xingkang Huang, Haihui Pu, Byunghoon Ryu, Janan Hui, Mark C Hersam, Junhong Chen, \u201cFine Tuning of Electrical Characteristics of Inkjet Printed Graphene for Physical and Chemical Sensing.\u201d <i>ACS Applied Materials & Interfaces</i> 17.8 (2025): 12911-12920." },
      { year: "2025", text: "Byunghoon Ryu, Wen Zhuang, Hyun-June Jang, Zhenwei Gao, Yuqin Wang, Junhong Chen, \u201cA Portable and Reusable Sensor Based on Graphene for Real-Time and Sensitive Detection of Lead Ion.\u201d <i>Environmental Science: Nano</i> 12(3) (2025): 1840-1848." },
      { year: "2024", text: "Wen Zhuang, Hyun-June Jang, Xiaoyu Sui, Byunghoon Ryu, Yuqin Wang, Haihui Pu, Junhong Chen, \u201cEnhancing Electrochemical Sensing through Molecular Engineering of Reduced Graphene Oxide\u2013Solution Interfaces and Remote Floating-Gate FET Analysis.\u201d <i>ACS Applied Materials & Interfaces</i> 16(21) (2024): 27961-27968." },
      { year: "2024", text: "Hye-ran Moon and Byunghoon Ryu, \u201cReview of Laser-Induced Graphene (LIG) Produced on Eco-Friendly Substrates.\u201d <i>International Journal of Precision Engineering and Manufacturing-Green Technology</i> 11 (2024): 1279-1294." },
      { year: "2023", text: "Hyun-June Jang, Wen Zhuang, Xiaoyu Sui, Byunghoon Ryu, Xiaodan Huang, Min Chen, Xiaolei Cai, Haihui Pu, Kathleen Beavis, Jun Huang, Junhong Chen, \u201cRapid, Sensitive, Label-Free Electrical Detection of SARS-CoV-2 in Nasal Swab Samples.\u201d <i>ACS Applied Materials & Interfaces</i> 15(12) (2023): 15195-15202." },
      { year: "2023", text: "Byunghoon Ryu, Yining Liu, Haihui Pu, and Junhong Chen, \u201cA Facile Approach for Site-Selective and Large-Area Growth of MoS2 through Heterogeneous Nucleation.\u201d <i>Applied Surface Science</i> 607 (2023): 155066." },
      { year: "2022", text: "Younggeun Park, Byunghoon Ryu, Seung Jun Ki, Mingze Chen, Xiaogan Liang, Katsuo Kurabayashi, \u201cBioinspired Plasmo-virus for Point-of-Care SARS-CoV-2 Detection.\u201d <i>Nano Letters</i> 21(1) (2022): 98-106." },
    ],
    beforeInha: [
      { year: "2022", text: "Hyun-June Jang, Xiaoyu Sui, Wen Zhuang, Xiaodan Huang, Min Chen, Xiaolei Cai, Yale Wang, Byunghoon Ryu, Haihui Pu, Nicholas Ankenbruck, Kathleen Beavis, Jun Huang, and Junhong Chen, \u201cRemote Floating-Gate Field-Effect Transistor with 2-Dimensional Reduced Graphene Oxide Sensing Layer for Reliable Detection of SARS-CoV-2 Spike Proteins.\u201d <i>ACS Applied Materials & Interfaces</i> 14(21) (2022): 24187-24196." },
      { year: "2022", text: "Byunghoon Ryu, Luqing Wang, Haihui Pu, Maria K. Y. Chan, and Junhong Chen, \u201cUnderstanding, discovery, and synthesis of 2D materials enabled by machine learning.\u201d <i>Chemical Society Reviews</i> 51 (2022): 1899-1925." },
      { year: "2021", text: "Younggeun Park*, Byunghoon Ryu*, Seung Jun Ki, Xiaogan Liang\u207a, and Katsuo Kurabayashi\u207a, \u201cNear-Infrared Multilayer MoS2 Photoconductivity-Enabled Ultrasensitive Homogeneous Plasmonic Colorimetric Biosensing.\u201d <i>Advanced Materials Interfaces</i> 8(24) (2021): 2101291." },
      { year: "2021", text: "Younggeun Park*, Byunghoon Ryu*, Seung Jun Ki, Brendan McCracken, Amanda Pennington, Kevin R. Ward, Xiaogan Liang\u207a, and Katsuo Kurabayashi\u207a, \u201cFew-layer MoS2 Photodetector Arrays for Ultrasensitive On-Chip Enzymatic Colorimetric Analysis.\u201d <i>ACS Nano</i> 15(4) (2021): 7722-7734." },
      { year: "2020", text: "Li Da, Byunghoon Ryu, and Xiaogan Liang, \u201cA Study on MoS2-based Multilevel Transistor Memories for Neuromorphic Computing.\u201d <i>Applied Physics Letters</i> 117(21) (2020): 213102." },
      { year: "2020", text: "Byunghoon Ryu, Jay Chen, Katsuo Kurabayashi, Xiaogan Liang, and Younggeun Park, \u201cIntegrated On-site Collection and Detection of Airborne Microparticle for A Smartphone-based Microclimate Quality Control.\u201d <i>Analyst</i> (2020)." },
      { year: "2020", text: "Byunghoon Ryu*, Jeong Seop Yoon*, Eric Kazyak, Kuan-Hung Chen, Younggeun Park, Neil Dasgupta, and Xiaogan Liang, \u201cInkjet-Defined Site-Selective (IDSS) Growth of MoS2 Structures with Rich Out-of-Plane Edges for Lithium Storage Applications.\u201d <i>Nanoscale</i> (2020)." },
      { year: "2019", text: "Da Li, Byunghoon Ryu, Jeong Seop Yoon, Zhongrui Li, Xiaogan Liang, \u201cImprovement of Analogue Switching Characteristics of MoS2 Memristors through Plasma Treatment.\u201d <i>Journal of Physics D: Applied Physics</i> (2019)." },
      { year: "2019", text: "Younggeun Park*, Byunghoon Ryu*, Qiufang Deng*, Baihong Pan, Yujing Song, Yuzi Tian, Hasan B. Alam, Yongqing Li\u207a, Xiaogan Liang\u207a, and Katsuo Kurabayashi\u207a, \u201cAn integrated plasmo-photoelectronic nanostructure biosensor detects an infection biomarker accompanying cell death in neutrophils.\u201d <i>Small</i> (2019)." },
      { year: "2018", text: "Byunghoon Ryu, Da Li, Chisang Park, Hossein Rokni, Wei Lu, and Xiaogan Liang, \u201cRubbing-Induced Site-Selective Growth of MoS2 Device Patterns.\u201d <i>ACS Applied Materials & Interfaces</i> 10(50) (2018): 43774-43784." },
      { year: "2018", text: "Da Li, Bin Wu, Xiaojian Zhu, Juntong Wang, Byunghoon Ryu, Wei D. Lu, Wei Lu, and Xiaogan Liang, \u201cMoS2 memristors exhibiting variable switching characteristics toward biorealistic synaptic emulation.\u201d <i>ACS Nano</i> 12(9) (2018): 9240-9252." },
      { year: "2017", text: "Byunghoon Ryu, Erika Yang, Younggeun Park, Katsuo Kurabayashi, and Xiaogan Liang, \u201cFabrication of prebent MoS2 biosensors on flexible substrates.\u201d <i>Journal of Vacuum Science & Technology B</i> 35(6) (2017): 06G805." },
      { year: "2017", text: "Da Li, Byunghoon Ryu, Qingyu Cui, Mikai Chen, Lingjie Jay Guo, Biwu Ma, and Xiaogan Liang, \u201cNanofluidic/nanoelectronic study on solvent-processed nanoscale organic transistors.\u201d <i>Journal of Vacuum Science & Technology B</i> 35(6) (2017): 06G801." },
      { year: "2017", text: "Younggeun Park*, Byunghoon Ryu*, Bo-Ram Oh, Yujing Song, Xiaogan Liang, and Katsuo Kurabayashi, \u201cBiotunable Nanoplasmonic Filter on Few-Layer MoS2 for Rapid and Highly Sensitive Cytokine Optoelectronic Immunosensing.\u201d <i>ACS Nano</i> 11(6) (2017): 5697-5705." },
      { year: "2017", text: "Byunghoon Ryu*, Hongsuk Nam*, Bo-Ram Oh, Yujing Song, Pengyu Chen, Younggeun Park, Wenjie Wan, Katsuo Kurabayashi, and Xiaogan Liang, \u201cCyclewise operation of printed MoS2 transistor biosensors for rapid biomolecule quantification at femtomolar levels.\u201d <i>ACS Sensors</i> 2(2) (2017): 274-281." },
      { year: "2016", text: "Da Li, Sungjin Wi, Mikai Chen, Byunghoon Ryu, and Xiaogan Liang, \u201cNanoimprint-assisted shear exfoliation plus transfer printing for producing transition metal dichalcogenide heterostructures.\u201d <i>Journal of Vacuum Science & Technology B</i> 34(6) (2016): 06KA01." },
      { year: "2015", text: "Byung-Hoon Ryu, and Dae-Eun Kim, \u201cDevelopment of highly durable and low friction micro-structured PDMS coating based on bio-inspired surface design.\u201d <i>CIRP Annals-Manufacturing Technology</i> 64(1) (2015): 519-522." },
      { year: "2014", text: "Byung-Hoon Ryu, Anthony J. Barthel, Hae-Jin Kim, Hyun-Dai Lee, Oleksiy V. Penkov, Seong H. Kim, and Dae-Eun Kim, \u201cTribological properties of carbon nanotube\u2013polyethylene oxide composite coatings.\u201d <i>Composites Science and Technology</i> 101 (2014): 102-109." },
    ],
  },

  // ── 소식 ────────────────────────────────────────────────
  news: [
    {
      date: "2026.03",
      titleKr: "신진연구 과제 수주",
      titleEn: "Secured an Early-Career Research Grant",
      bodyKr: "이차원 반도체의 제조 및 센서 응용을 주제로 신진연구 과제를 수주하였습니다.",
      bodyEn: "We have secured an early-career research grant to investigate the manufacturing of two-dimensional semiconductors and their applications in sensing.",
      imageUrl: "",
    },
    {
      date: "2026.03",
      titleKr: "Chemical Engineering Journal 논문 출판",
      titleEn: "Publication in Chemical Engineering Journal",
      bodyKr: "LIG 기반 센서를 주제로 한 연구 논문이 Chemical Engineering Journal에 게재되었습니다. 이학준, 안세응 학생의 논문 게재를 진심으로 축하합니다!",
      bodyEn: "Our research on LIG-based sensors has been published in Chemical Engineering Journal. Many congratulations to Hak Jun Lee and Se Eung Ahn on the publication of their paper!",
      imageUrl: "",
    },
    {
      date: "2025.05",
      titleKr: "한국정밀공학회 최우수논문상 수상",
      titleEn: "Best Paper Award at the Korean Society for Precision Engineering",
      bodyKr: "이학준, 안세응 학생이 한국정밀공학회에서 최우수논문상을 수상하였습니다. 축하합니다!",
      bodyEn: "Hak Jun Lee and Se Eung Ahn received the Best Paper Award at the Korean Society for Precision Engineering. Congratulations!",
      imageUrl: "",
    },
    {
      date: "2024",
      titleKr: "학부연구생 2024 ICT 융합 프로젝트 경진대회 수상",
      titleEn: "Undergraduate researchers won the 2024 ICT Convergence Project Competition",
      bodyKr: "이학준, 안세응 학생, 축하합니다!",
      bodyEn: "Many congrats to Hak Jun and Se Eung!",
      imageUrl: "",
    },
    {
      date: "2023.06",
      titleKr: "기본연구 과제 수주",
      titleEn: "Secured a Basic Research Grant",
      bodyKr: "현장진단형 중금속 오염 검출 IoT 센서 플랫폼 개발을 주제로 기본연구 과제를 수주하였습니다.",
      bodyEn: "We have secured a basic research grant for the development of a point-of-care IoT sensor platform for heavy-metal contamination detection.",
      imageUrl: "",
    },
    {
      date: "2023",
      titleKr: "유병훈 교수, K-Trib 2023 우수 포스터상 수상",
      titleEn: "Prof. Ryu was awarded the Excellence Poster Award at K-Trib 2023",
      bodyKr: "",
      bodyEn: "",
      imageUrl: "",
    },
  ],
};
