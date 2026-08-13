function lesson7(d){
  let notes="";
  for(let i=1;i<=8;i++) notes+=`<div class="two">${input(`便利貼${i}｜來源`,`note${i}_source`)}${input("內容",`note${i}_content`)}</div>`;
  const body=
  card("A","【體驗】把原始資料拆成「一張便利貼一件事」",`<p>請填寫資料來源編號，避免失去證據來源。</p>${notes}`)+
  card("B","【統整】依指定類型分類",`${ta("行為（他實際怎麼做）：","behavior")}${ta("痛點（造成什麼困擾／阻礙）：","pain")}${ta("矛盾（想做某件事但又受到什麼限制）：","tension")}${ta("需求／期待（真正希望改善的是什麼）：","need")}`)+
  card("C","【應用】建立主題群",`<div class="two">${input("主題群A","theme_a")}${input("證據編號","theme_a_evidence")}${input("主題群B","theme_b")}${input("證據編號","theme_b_evidence")}${input("主題群C","theme_c")}${input("證據編號","theme_c_evidence")}</div>`)+
  card("D","【反思】少數意見不能直接丟掉",`${ta("一筆不容易放進主要群組、但值得保留的資料：","minority_data")}${input("來源編號：","minority_source")}${ta("為什麼仍值得保留：","minority_reason")}`);
  return lessonShell(7,"便利貼資料萃取與分群","直接處理第6節訪談資料，把原始資料拆成可分析的證據單位，再依教案指定類型分群。",body,"本節學習證據：可回溯來源的便利貼資料＋四類分類＋主題群");
}
function lesson8(d){
  const axes=[["who","Who｜這個人物代表哪一群人？"],["context","Context｜什麼情境下最容易遇到問題？"],["behavior","Behavior｜遇到這種情況時，他通常怎麼做？"],["pain","Pain｜哪件事讓他最困擾？"],["tension","Tension｜他想做什麼，但又受到什麼限制？"],["need","Need｜他真正希望改善的是什麼？"]];
  let canvas=input("Persona 名稱（虛構稱呼，不使用真名）","persona_name");axes.forEach(([k,t])=>{canvas+=ta(t,`${k}_content`)+input("證據編號",`${k}_evidence`)});
  let claims="";for(let i=1;i<=3;i++) claims+=ta(`主張${i}`,`claim${i}`)+ta("證據",`claim${i}_evidence`);
  const body=card("A","【統整】Persona Canvas",canvas)+card("B","【應用】Persona 主張—證據對照",claims)+card("C","【反思】避免把想像寫進 Persona",`${ta("目前最沒有把握的一項：","least_certain")}${radioGroup("它目前是：","certainty_type",["有第一手證據","只有我們的解讀","待確認推測"])}${radioGroup("我們應該：","certainty_action",["保留","改寫","刪除","再找證據"])}`);
  return lessonShell(8,"建立 Persona：每一項主張都要有證據","用多筆第一手證據形成代表性使用者輪廓，不把想像寫成人物特徵。",body,"本節學習證據：Persona Canvas＋主張—證據鏈");
}
function lesson9(d){
  let human="";for(let i=1;i<=3;i++)human+=ta(`${i}. 我們的 Persona 最重要主張`, `human_claim${i}`);
  let ai="";for(let i=1;i<=3;i++)ai+=ta(`${i}. AI 提出`, `ai_claim${i}`);
  let check="";for(let i=1;i<=3;i++)check+=`${input(`AI 建議${i}`,`ai_check${i}`)}${radioGroup("證據狀態",`ai_support${i}`,["有證據支持","部分支持","沒有證據"])}${ta("證據編號／內容：",`ai_evidence${i}`)}`;
  const body=
  card("Gate","【Human Gate：輸入 AI 前】",`${checkGroup("請全部確認：",[["gate_name","已移除姓名、座號、聯絡方式"],["gate_identity","已移除可識別個人身分的細節"],["gate_health","未輸入敏感健康資訊"],["gate_code","每筆資料仍保留匿名證據編號"]])}`)+
  card("A","【體驗】我們先完成的人類版本",human)+
  card("B","【應用】AI 當檢查者",`<p>任務：請 AI 檢查是否遺漏痛點、存在矛盾，並區分「資料支持」與「推測」。</p>${ai}`)+
  card("C","【統整】證據檢核",check)+
  card("D","【反思】我的決定",`${ta("我採納／修改的內容：","decision_adopt")}${ta("我拒絕的內容：","decision_reject")}${ta("理由：","decision_reason")}${ta("AI 有沒有說得很像真的，但其實沒有證據？例子：","hallucination_example")}${ta("我是怎麼發現的：","hallucination_detect")}`);
  return lessonShell(9,"AI 當第二位分析者","比較人與 AI 對同一批匿名資料的分析；AI 只能提供第二視角，不能取代第一手證據。",body,"本節學習證據：人類版＋AI建議＋證據檢核＋修訂決定");
}
function lesson10(d){
  const body=
  card("A","【體驗】從既有資料找核心",`${input("使用者是誰？","user")}${ta("重要情境：","context")}${ta("最重要的痛點：","pain")}${ta("最重要的矛盾：","tension")}${ta("真正需要：","need")}${input("關鍵證據編號：","evidence_ids")}`)+
  card("B","【統整】Problem Statement 結構",`${input("誰：","ps_who")}${ta("在什麼情境：","ps_context")}${ta("因為什麼原因／矛盾：","ps_reason")}${ta("遇到什麼困難：","ps_problem")}${ta("所以需要：","ps_need")}`)+
  card("C","【應用】Problem Statement 初稿",ta("初稿：","ps_draft"))+
  card("Check","【自我檢核】",`${checkGroup("請全部檢核：",[["check_user","有清楚的使用者"],["check_context","有具體情境"],["check_problem","有問題／矛盾"],["check_need","有需求"],["check_evidence","有第一手證據支持"],["check_no_solution","沒有把解決方法偷偷寫進問題"],["check_scope","問題範圍不會大到無法處理"]])}`)+
  card("D","【反思】最不能刪掉的資訊",`${ta("如果只能保留一句關鍵資訊，我最不能刪的是：","key_info")}${ta("因為它連到的證據是：","key_evidence")}`);
  return lessonShell(10,"Problem Statement：把問題界定清楚","從 Persona 與第一手證據界定問題，不先跳到解法。",body,"本節學習證據：Problem Statement 初稿＋證據鏈＋自我檢核");
}