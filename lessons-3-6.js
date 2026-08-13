function lesson3(d){
  const body=
  card("A","【體驗】比較兩個 Prompt",`
    ${ta("教師提供的模糊 Prompt：","prompt_vague")}
    ${ta("教師提供的具體 Prompt：","prompt_specific")}
    ${radioGroup("1. AI 知道自己要扮演誰嗎？A","a_role",["是","否"])}
    ${radioGroup("1. AI 知道自己要扮演誰嗎？B","b_role",["是","否"])}
    ${radioGroup("2. AI 知道背景情境嗎？A","a_context",["是","否"])}
    ${radioGroup("2. AI 知道背景情境嗎？B","b_context",["是","否"])}
    ${radioGroup("3. 任務清楚嗎？A","a_task",["是","否"])}
    ${radioGroup("3. 任務清楚嗎？B","b_task",["是","否"])}
    ${radioGroup("4. 有限制或格式要求嗎？A","a_constraints",["是","否"])}
    ${radioGroup("4. 有限制或格式要求嗎？B","b_constraints",["是","否"])}
    ${radioGroup("5. 哪一個回覆比較符合需要？","better_prompt",["A","B"])}
    ${ta("原因：","better_reason")}
  `)+
  card("B","【應用】改寫一個模糊 Prompt",`
    ${ta("原版：","rewrite_original")}
    ${ta("改寫後：","rewrite_new")}
  `)+
  card("C","【反思】哪一個改動最有影響？",`
    ${radioGroup("選擇一項","most_impact",["角色","情境","任務","限制／格式"])}
    ${ta("因為：","impact_reason")}
  `);
  return lessonShell(3,"什麼是好的 AI 提問？","比較模糊與具體 Prompt 的差異，整理出 Prompt 的必要結構，再進行改寫。",body,"本節學習證據：Prompt 比較紀錄＋改寫前後版本");
}
function lesson4(d){
  let qs="";for(let i=1;i<=8;i++) qs+=input(`${i}. 訪談題`,`draft_q${i}`);
  let finals="";for(let i=1;i<=6;i++) finals+=input(`${i}. 正式訪談題`,`final_q${i}`);
  const body=
  card("A","【體驗】我先想：不用 AI 的訪談題初稿",`<p>請寫 6～8 題：</p>${qs}`)+
  card("B","【統整】我自己先檢查",`
    ${checkGroup("逐題檢查：",[["self_open","不只是是非題"],["self_neutral","沒有暗示受訪者應該怎麼回答"],["self_event","能問到具體事件"],["self_followup","有追問空間"],["self_context","能理解時間、地點、活動、感受／影響或需求"]])}
    ${input("最需要修改的第一題：第幾題","revise_q1_no")}${ta("問題在於：","revise_q1_issue")}${ta("我先改成：","revise_q1_new")}
    ${input("最需要修改的第二題：第幾題","revise_q2_no")}${ta("問題在於：","revise_q2_issue")}${ta("我先改成：","revise_q2_new")}
  `)+
  card("C","【應用】AI 再看",`${ta("我給 AI 的 Prompt：","ai_prompt")}${ta("AI 建議 1：","ai_s1")}${ta("AI 建議 2：","ai_s2")}${ta("AI 建議 3：","ai_s3")}`)+
  card("D","【反思】我的最後決定",`
    ${radioGroup("建議1","ai_s1_decision",["採納","修改後採納","拒絕"])}${ta("理由：","ai_s1_reason")}
    ${radioGroup("建議2","ai_s2_decision",["採納","修改後採納","拒絕"])}${ta("理由：","ai_s2_reason")}
    ${radioGroup("建議3","ai_s3_decision",["採納","修改後採納","拒絕"])}${ta("理由：","ai_s3_reason")}
    <p><b>經過自己檢查、AI 建議與討論後，選出最適合正式訪談的 6 題。</b></p>${finals}
  `);
  return lessonShell(4,"人先做，AI 再來：訪談問題修訂","先由人設計訪談問題，再讓 AI 當檢查者；所有 AI 建議由學生決定是否採納。",body,"本節學習證據：人類原稿＋AI建議＋採納／拒絕理由＋正式訪談題");
}
function lesson5(d){
  const body=
  card("A","【體驗】角色扮演",`${radioGroup("我的角色：","role",["訪談者","受訪者","觀察員"])}${ta("訪談者使用的一個開放式問題：","open_question")}${ta("受訪者回答中，最值得追問的一句：","worth_followup")}${ta("訪談者的追問：","followup")}${ta("追問後得到的新資訊：","new_info")}`)+
  card("B","【統整】觀察員回饋",`${checkGroup("觀察員回饋：",[["obs_open","有使用開放式問題"],["obs_wait","有等待對方完整回答"],["obs_follow","有依回答內容追問"],["obs_no_advice","沒有急著提供建議或解法"],["obs_no_lead","沒有誘導對方回答"]])}${ta("做得好的地方：","good_part")}${ta("需要改進的地方：","improve_part")}`)+
  card("C","【應用】修訂正式訪談題",`${ta("原題：","orig_q")}${ta("修改後：","revised_q")}${ta("修改原因：","revise_reason")}`)+
  card("D","【反思】正式訪談時我要提醒自己",`${ta("我最容易犯的錯：","likely_mistake")}${ta("我的提醒句：","reminder")}`);
  return lessonShell(5,"訪談演練：問、聽、追問","透過角色扮演練習開放式提問、傾聽與追問，再修訂訪談題。",body,"本節學習證據：演練紀錄＋同儕回饋＋修訂後訪談題");
}
function lesson6(d){
  const body=
  card("Gate","【訪談前 Human Gate】",`${checkGroup("請全部確認：",[["gate_teacher","已由教師確認訪談題目"],["gate_sensitive","已確認沒有要求敏感個資"],["gate_refuse","知道受訪者可以拒絕回答"],["gate_anon","使用匿名代號，不記真實姓名"]])}`)+
  card("A","【體驗】匿名訪談紀錄",`<div class="two">${input("訪談編號","interview_id")}${input("受訪者代號","respondent_code")}</div>${radioGroup("角色類型：","respondent_role",["學生","教師","其他"])}${input("若選其他，請填寫","respondent_role_other")}<div class="two">${input("日期／時間","date_time")}${input("地點","place")}</div>${ta("重要原話 1：","quote1")}${ta("重要原話 2：","quote2")}${ta("重要原話 3：","quote3")}${ta("觀察到的行為／表情／動作：","observed_behavior")}`)+
  card("B","【統整】三種資料分開寫",`${ta("1. 受訪者原話／我實際觀察到的：","raw_evidence")}${ta("2. 我們目前的解讀：","interpretation")}${ta("3. 還需要確認的推測：","hypothesis")}`)+
  card("C","【反思】訪談後，我的理解有沒有改變？",`${ta("訪談前我認為：","before_view")}${ta("訪談後我現在認為：","after_view")}${ta("讓我改變的第一手證據是：","change_evidence")}`);
  return lessonShell(6,"校園實地訪談","蒐集匿名第一手資料，並清楚區分「受訪者原話／觀察」與「我們的解讀／尚待確認」。",body,"本節學習證據：匿名訪談紀錄＋原話／解讀／推測三分紀錄");
}