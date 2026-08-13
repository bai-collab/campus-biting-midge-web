function lesson11(d){
  const body=
  card("A","【體驗】三個版本",`${ta("我們原版 Problem Statement：","ps_original")}${ta("AI 版本 A：","ps_ai_a")}${ta("AI 版本 B：","ps_ai_b")}`)+
  card("B","【統整】多視角比較",`${input("1. 哪個版本最符合第一手資料？","best_evidence_version")}${ta("證據／理由：","best_evidence_reason")}${input("2. 哪個版本最清楚呈現使用者？","best_user_version")}${ta("理由：","best_user_reason")}${input("3. 哪個版本最抓到核心痛點？","best_pain_version")}${ta("證據／理由：","best_pain_reason")}${input("4. 哪個版本加入最多未證實推測？","most_guess_version")}${ta("例子：","most_guess_example")}${input("5. 哪個問題最值得後續解決？","worth_solve_version")}${ta("理由：","worth_solve_reason")}`)+
  card("C","【反思】我的最終決定",`${radioGroup("我的決定：","final_choice",["保留我們原版","採用部分 AI 建議","重新整合"])}${ta("最終 Problem Statement：","final_ps")}${ta("我做這個決定最重要的第一手證據：","final_ps_evidence")}`)+
  card("D","【應用】轉成 How Might We",`<p>句型：我們可以如何……，讓／幫助________在________情境下，能夠________？</p>${ta("我們的 HMW：","hmw")}${checkGroup("HMW 檢查：",[["hmw_no_single","沒有直接指定唯一解法"],["hmw_user","有清楚對象"],["hmw_context","有明確情境／需求"],["hmw_open","能開啟多種後續發想可能"]])}`)+
  card("Gate","【Human Gate｜最後確認】",`<div class="warn"><b>進入下一節前，最後確認：最終問題版本必須能回指第一手證據。</b><br>請回頭檢查「最終 Problem Statement」與「最重要的第一手證據」是否真的對得上，而不是只因 AI 的說法聽起來合理就接受。</div>${checkGroup("最後確認：",[["gate_evidence","我們的最終問題版本確實能回指第一手證據"]])}`);
  return lessonShell(11,"AI 多視角比較＋How Might We","比較不同問題詮釋，最後由人決定問題版本，再把問題轉成可開啟多種解法的 HMW。",body,"本節學習證據：三版本比較＋最終PS＋HMW");
}
function lesson12(d){
  const body=
  card("A","【統整】我的問題探索路徑",`<p>請依序寫出每一階段留下的關鍵證據或成果。</p>${ta("第1節 真實事件：","path_l1")}${ta("第2節 踏查／熱區：","path_l2")}${ta("第6節 訪談證據：","path_l6")}${ta("第7節 資料分群：","path_l7")}${ta("第8節 Persona：","path_l8")}${ta("第10節 Problem Statement：","path_l10")}${ta("第11節 HMW：","path_l11")}`)+
  card("B","【體驗】AI 介入地圖",`${checkGroup("AI 曾在哪些節次介入？",[["ai_l3","第3節 Prompt 比較"],["ai_l4","第4節 訪談題檢查"],["ai_l9","第9節 Persona 第二分析"],["ai_l11","第11節 Problem Statement 多視角比較"]])}${checkGroup("AI 主要做了什麼？",[["ai_compare","提供比較材料"],["ai_check","檢查"],["ai_missing","找可能遺漏"],["ai_alt","提出替代觀點"]])}${input("其他：","ai_other")}`)+
  card("C","【反思】六面向回顧",`${ta("1. 合作：AI 如何改變我和組員的合作？","reflect_collab")}${ta("2. 效率：哪裡因 AI 變快？變快是否等於學得更好？","reflect_efficiency")}${ta("3. 依賴：哪一次我差點直接接受 AI？後來怎麼判斷？","reflect_dependency")}${ta("4. 創意：AI 是否提供我原本沒想到的角度？","reflect_creativity")}${ta("5. 正確與偏誤：我曾發現哪一項 AI 內容沒有證據或有問題？","reflect_bias")}${ta("6. 學習：如果沒有 AI，我仍然真正學會了什麼？","reflect_learning")}`)+
  card("D","【應用】我的下一次 AI 使用規則",`${ta("1.","rule1")}${ta("2.","rule2")}${ta("3.","rule3")}${radioGroup("我的結論：這次 AI 比較像","ai_conclusion",["思考代工","思考淬鍊","兩者都有"])}${ta("我的理由：","ai_conclusion_reason")}`);
  return lessonShell(12,"思考代工，還是思考淬鍊？","回顧完整問題探索歷程，辨識 AI 在哪些地方協助、哪些地方可能造成依賴，形成自己的 AI 使用原則。",body,"本節學習證據：完整歷程回顧＋AI介入地圖＋個人AI使用原則");
}
function openLesson(n){
  const d=loadData();d.lastLesson=n;saveData(d);
  const builders={1:lesson1,2:lesson2,3:lesson3,4:lesson4,5:lesson5,6:lesson6,7:lesson7,8:lesson8,9:lesson9,10:lesson10,11:lesson11,12:lesson12};
  lessonMount.innerHTML=builders[n](d);show("lessonView");bindFields(d,n);updateSaveLabels(d.updatedAt);
  lessonMount.querySelector('[data-action="dash"]')?.addEventListener("click",()=>{renderDash();show("dashView")});
  lessonMount.querySelector('[data-action="prev"]')?.addEventListener("click",()=>openLesson(Math.max(1,n-1)));
  lessonMount.querySelector('[data-action="complete"]')?.addEventListener("click",()=>{clearTimeout(saveTimer);const missing=validateLesson(d,n);if(missing.length){showValidationErrors(missing);return;}d.lessons[String(n)].completed=true;saveData(d);renderDash();show("dashView");});
}
enterBtn.addEventListener("click",enter);
homeBtn.addEventListener("click",()=>{if(localStorage.getItem(keyOf())){renderDash();show("dashView")}else show("loginView")});
resetBtn.addEventListener("click",()=>{if(confirm(`確定清除 ${clsNames[session.classId]} ${groupNames[session.groupId]} 的單機測試資料？`)){localStorage.removeItem(keyOf());show("loginView")}});