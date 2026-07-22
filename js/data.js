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
    email: "bhryu@inha.ac.kr",
    lastUpdated: "2026.07",
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
    titleKr: "차세대 반도체 소재를 설계하고,\n센서로 세상과 연결합니다.",
    titleEn: "Engineering next-generation\nsemiconductors that sense and connect.",
    bodyKr: "SMD 연구실(Smart Manufacturing and Devices Lab)은 차세대 반도체 소재의 정밀하고 확장 가능한 제조 기술을 개발하고, 이를 실제 문제를 감지·진단하는 스마트 IoT 소자로 구현합니다.",
    bodyEn: "SMD Lab — short for Smart Manufacturing and Devices Lab — develops scalable, precisely controlled manufacturing strategies for next-generation semiconductor materials, and translates them into smart IoT devices that sense real-world problems.",
    ctaKr: "대학원생 모집 중 →",
    ctaEn: "We're recruiting students →",
  },

  // ── 연구 소개 ───────────────────────────────────────────
  research: {
    introKr: "저희 연구실은 두 축의 연구를 진행합니다: 소재를 다루는 '제조' 기술과, 그 소재를 활용하는 '센서' 기술입니다.",
    introEn: "Our lab works across two connected pillars: manufacturing the materials, and building sensors from them.",
    topics: [
      {
        tagKr: "제조",
        tagEn: "Manufacturing",
        titleKr: "2D 반도체 소재 첨단 제조 공정 설계",
        titleEn: "Advanced Manufacturing for 2D Semiconductors",
        bodyKr: "차세대 반도체를 원하는 위치에, 원하는 크기로, 대면적에 걸쳐 재현성 있게 만들어내는 새로운 제조 방법을 연구합니다. 이 과정에서 반도체 공정의 기본기를 탄탄히 익힐 수 있습니다.",
        bodyEn: "We develop new manufacturing methods that enable scalable, site-selective growth of next-generation semiconductors across large areas. Students gain hands-on grounding in fundamental semiconductor processing.",
        skillsKr: ["박막 성장", "미세 패터닝", "공정 최적화"],
        skillsEn: ["Thin-film growth", "Micropatterning", "Process optimization"],
      },
      {
        tagKr: "센서",
        tagEn: "Sensing",
        titleKr: "스마트 IoT 바이오·환경 센서 설계",
        titleEn: "Smart IoT Biomedical & Environmental Sensors",
        bodyKr: "직접 만든 2D 소재를 활용해 초고감도·초고속으로 반응하는 IoT 센서를 설계하고, 이를 통해 생체 신호와 환경 위해요소를 실시간으로 감지하는 기술을 개발합니다.",
        bodyEn: "We design and demonstrate IoT sensors built on our own 2D materials, achieving ultrasensitive and fast detection for biomedical and environmental safety applications.",
        skillsKr: ["반도체 패키징", "회로 설계", "임베디드 프로그래밍", "적층 제조", "계측 기술", "신호 처리"],
        skillsEn: ["Semiconductor packaging", "Circuit design", "Embedded programming", "Additive manufacturing", "Instrumentation", "Signal processing"],
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
    {
      role: "student",
      name: "Sung Sik Oh",
      titleKr: "학부연구생",
      titleEn: "Undergraduate Researcher",
      linesKr: ["인하대학교 기계공학과"],
      linesEn: ["Inha University, Mechanical Engineering"],
      photo: "images/member-sungsik.jpg",
    },
  ],

  // ── 논문 목록 (인용 표기는 국제 학술 관례에 따라 언어에 관계없이 원문 그대로 둡니다) ──
  // ── 논문 목록 ───────────────────────────────────────────
  // 각 항목에 image: "images/파일명.jpg" 를 추가하면 논문 옆에
  // 대표 이미지(썸네일)가 표시됩니다. 없으면 자동으로 기본 아이콘이 보여요.
  publications: {
    international: [
      { year: "Submitted", text: "Interfacial Potential Transduction for Diagnostics. <i>Nature</i> (Submitted)." },
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
      date: "2024",
      titleKr: "학부연구생 2024 ICT 융합 프로젝트 경진대회 수상",
      titleEn: "Undergraduate researchers won the 2024 ICT Convergence Project Competition",
      bodyKr: "학혁준, 안세응 학생, 축하합니다!",
      bodyEn: "Many congrats to Hak Jun and Se Eung!",
    },
    {
      date: "2023",
      titleKr: "류병훈 교수, K-Trib 2023 우수 포스터상 수상",
      titleEn: "Prof. Ryu was awarded the Excellence Poster Award at K-Trib 2023",
      bodyKr: "",
      bodyEn: "",
    },
  ],
};
