const TEACHER_PASSWORD="pyes5588";
const clsNames={"5A":"五年甲班","5B":"五年乙班"};
const groupNames={G01:"第 1 組",G02:"第 2 組",G03:"第 3 組",G04:"第 4 組",G05:"第 5 組",G06:"第 6 組"};

function show(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function allStored(){
  const a=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k?.startsWith('bmt_')){
      try{a.push(JSON.parse(localStorage.getItem(k)))}catch{}
    }
  }
  return a.sort((x,y)=>(x.classId+x.groupId).localeCompare(y.classId+y.groupId));
}

function renderTeacher(){
  const arr=allStored();
  groupList.innerHTML=arr.length?'':"<div class='note'>目前沒有任何單機測試資料。請注意：Prototype 的 localStorage 只存在同一個瀏覽器。</div>";
  arr.forEach(d=>{
    const done=Object.values(d.lessons||{}).filter(x=>x.completed).length;
    const row=document.createElement('button');
    row.className='group-row';
    row.style='width:100%;border-left:0;border-right:0;border-top:0;background:white;text-align:left';
    row.innerHTML=`<span>${clsNames[d.classId]||d.classId} ${groupNames[d.groupId]||d.groupId}</span><span>${done}/12</span><span>第 ${d.lastLesson||1} 節</span><span>${d.updatedAt?new Date(d.updatedAt).toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'}):'—'}</span>`;
    row.addEventListener('click',()=>preview(d,row));
    groupList.appendChild(row);
  });
}

function preview(d,row){
  document.querySelectorAll('#groupList .group-row').forEach(x=>x.classList.remove('active'));
  row.classList.add('active');
  const done=Object.values(d.lessons||{}).filter(x=>x.completed).length;
  const lessonRows=[];
  for(let i=1;i<=12;i++){
    const l=d.lessons?.[String(i)]||{completed:false,fields:{}};
    const filled=Object.values(l.fields||{}).filter(v=>Array.isArray(v)?v.length:(typeof v==='boolean'?v:String(v??'').trim().length)).length;
    lessonRows.push(`<div class="preview-section"><h4>第 ${i} 節 ${l.completed?'✓ 已完成':'— 未完成'}</h4><div class="body">已填寫欄位：${filled}</div></div>`);
  }
  previewMount.innerHTML=`<h3>${clsNames[d.classId]||d.classId} ${groupNames[d.groupId]||d.groupId}｜學習單總覽</h3><p class="mini">已完成 ${done}/12 節｜最後更新 ${d.updatedAt?new Date(d.updatedAt).toLocaleString('zh-TW'):'—'}</p>${lessonRows.join('')}`;
}

function loginTeacher(){
  const value=teacherPassword.value;
  if(value!==TEACHER_PASSWORD){
    teacherLoginError.textContent='密碼錯誤，請重新輸入。';
    teacherLoginError.style.display='block';
    teacherPassword.focus();
    return;
  }
  teacherLoginError.style.display='none';
  teacherPassword.value='';
  show('teacherView');
  renderTeacher();
}

teacherLoginBtn.addEventListener('click',loginTeacher);
teacherPassword.addEventListener('keydown',e=>{if(e.key==='Enter')loginTeacher()});
refreshTeacher.addEventListener('click',renderTeacher);