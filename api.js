document.addEventListener("DOMContentLoaded",function(){!function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));document.getElementsByTagName("head")[0].appendChild(t)}("#button {\n  display:none;\n}\n.imgb_vis {\n  animation: imgb-animation 7s linear;\n}\n@keyframes imgb-animation {\n  10% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(100px);\n  }\n  90% {\n    transform: translateX(100px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}");var e=document.createElement("div");e.id="button",e.className="imgb",e.style="position:fixed;top:10%;left:-100px;z-index:10",e.innerHTML='<a target="_blank" href="https://sites.google.com/view/classroom6x/" title="More Unblocked Games 6x"><img src="https://lh4.googleusercontent.com/lUEWrXMVEr4AdjKISyJahDRJ61bwfvHdpeYm86Djn5U8oCm9dI60NGXSBqad9HUvzTXgqlkosA_hWV-VuXPjzrkGvh3_kNSgYk8ySWzXnDpbBCBiooyBbU8oBy3YBZMDkW8RcRVmDuC0raoeqZBm8kBlqs6c5mdfkJeN2aE68lXS_lcOZ5_F7lIuM6qLVg" width="100" height="30" style="cursor:pointer;" alt="Unblocked Games Classroom 6x"></a>',document.body.appendChild(e);var t=document.getElementById("button"),n=0,o=["block","none"],a=[7e3,16e4];!function e(){n^=1;t.style.display=o[n];setTimeout(e,a[n])}(),document.querySelector(".imgb").classList.add("imgb_vis")});
window.addEventListener('load',function(){if(window.location.protocol!=='blob:'){console.log("T4G: Normal mode detected. Save manager disabled.");return;}
if(document.getElementById('t4g-wrapper'))return;const IDBHelper={bufferToBase64:function(buffer){let binary='';const bytes=(buffer.buffer)?new Uint8Array(buffer.buffer):new Uint8Array(buffer);const len=bytes.byteLength;for(let i=0;i<len;i++)binary+=String.fromCharCode(bytes[i]);return window.btoa(binary);},base64ToBuffer:function(base64){const binary_string=window.atob(base64);const len=binary_string.length;const bytes=new Uint8Array(len);for(let i=0;i<len;i++)bytes[i]=binary_string.charCodeAt(i);return bytes.buffer;},getDatabases:async function(){if(window.indexedDB&&window.indexedDB.databases){return await window.indexedDB.databases();}
return[{name:'/idbfs',version:1}];},dumpDB:function(dbName){return new Promise((resolve,reject)=>{const req=indexedDB.open(dbName);req.onsuccess=(event)=>{const db=event.target.result;const storeNames=Array.from(db.objectStoreNames);if(storeNames.length===0){resolve(null);return;}
const tx=db.transaction(storeNames,'readonly');const dbData={name:dbName,version:db.version,stores:{}};let completed=0;storeNames.forEach(storeName=>{const store=tx.objectStore(storeName);const getAll=store.getAll();const getAllKeys=store.getAllKeys();getAll.onsuccess=()=>{getAllKeys.onsuccess=()=>{const values=getAll.result;const keys=getAllKeys.result;const storeData=[];values.forEach((val,i)=>{if(val&&typeof val==='object'){if(val.contents&&(val.contents instanceof Uint8Array||val.contents instanceof ArrayBuffer)){val.contents=IDBHelper.bufferToBase64(val.contents);val.__isBinary=true;}
if(val.timestamp&&val.timestamp instanceof Date){val.__isDate=true;}}
storeData.push({key:keys[i],value:val});});dbData.stores[storeName]=storeData;completed++;if(completed===storeNames.length)resolve(dbData);};};});};req.onerror=()=>resolve(null);});},restoreDB_Smart:function(dbDump,statusLogger){return new Promise((resolve,reject)=>{statusLogger(`Analyzing Paths...`);const openReq=indexedDB.open(dbDump.name);openReq.onsuccess=(event)=>{const db=event.target.result;const storeNames=Object.keys(dbDump.stores);const tx=db.transaction(storeNames,'readwrite');tx.oncomplete=()=>resolve();tx.onerror=(e)=>reject("Tx Error: "+e.target.error);storeNames.forEach(storeName=>{if(!db.objectStoreNames.contains(storeName))return;const store=tx.objectStore(storeName);const keyReq=store.getAllKeys();keyReq.onsuccess=()=>{const currentKeys=keyReq.result;let currentHash=null;const hashRegex=/^\/idbfs\/([a-f0-9]{32})/;for(let k of currentKeys){const match=k.match(hashRegex);if(match){currentHash=match[1];break;}}
let backupHash=null;const backupRecords=dbDump.stores[storeName];for(let rec of backupRecords){const match=rec.key.match(hashRegex);if(match){backupHash=match[1];break;}}
store.clear();backupRecords.forEach(record=>{let key=record.key;let val=record.value;if(val&&typeof val==='object'){if(val.__isBinary&&typeof val.contents==='string'){val.contents=new Uint8Array(IDBHelper.base64ToBuffer(val.contents));delete val.__isBinary;}
if(val.__isDate||(val.timestamp&&typeof val.timestamp==='string')){val.timestamp=new Date(val.timestamp);delete val.__isDate;}}
if(currentHash&&backupHash&&currentHash!==backupHash){key=key.replace(backupHash,currentHash);}
store.put(val,key);});};});};openReq.onerror=(e)=>reject("DB Open Error: "+e.target.error);});}};var style=document.createElement('style');style.innerHTML=`
        #t4g-wrapper { position: absolute; top: 0; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; flex-direction: column; align-items: center; }
        #t4g-toggle { background: rgba(0,0,0,0.8); color: #ffae00; border: 1px solid rgba(255,174,0,0.5); border-top: none; padding: 4px 12px; cursor: pointer; font-weight: bold; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; font-family: sans-serif; font-size: 11px; user-select: none; transition: all 0.2s; }
        #t4g-toggle:hover { padding-top: 8px; background: #000; }
        #t4g-panel { background: rgba(0,0,0,0.95); padding: 10px; gap: 8px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border: 1px solid #ffae00; border-top: none; display: none; box-shadow: 0 5px 20px #000; }
        #t4g-wrapper:hover #t4g-panel { display: flex; }
        #t4g-wrapper:hover #t4g-toggle { display: none; }
        .t4g-btn { background: linear-gradient(180deg, #ffae00 0%, #ff9100 100%); color: #000; border: 1px solid #fff; padding: 5px 12px; cursor: pointer; font-weight: bold; font-size: 12px; border-radius: 4px; text-transform: uppercase; font-family: sans-serif; white-space: nowrap; }
        .t4g-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
        
        #t4g-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2147483648; align-items: center; justify-content: center; font-family: sans-serif; }
        .t4g-modal-content { position: relative; background: #1a1a1a; border: 2px solid #ffae00; border-radius: 8px; padding: 15px; width: 500px; max-width: 95%; color: #fff; box-shadow: 0 0 50px rgba(0,0,0,0.9); text-align: center; }
        .t4g-title { font-size: 16px; margin-bottom: 8px; color: #ffae00; font-weight: bold; }
        
        #t4g-help-btn { position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%; background: #0088ff; color: white; border: 1px solid white; font-weight: bold; cursor: pointer; line-height: 22px; padding: 0; font-size: 14px; }
        #t4g-help-btn:hover { background: #00aaff; }

        #t4g-textarea { width: 100%; height: 120px; background: #111; color: #0f0; border: 1px solid #444; padding: 8px; font-family: monospace; font-size: 10px; resize: none; margin-bottom: 10px; box-sizing: border-box; outline: none; }
        #t4g-textarea:focus { border-color: #ffae00; }
        
        #t4g-help-text { display: none; text-align: left; background: #222; padding: 10px; border: 1px solid #444; margin-bottom: 10px; font-size: 13px; line-height: 1.5; border-radius: 4px; color: #eee; }
        .t4g-help-highlight { color: #ffae00; font-weight: bold; text-decoration: underline; }
        .t4g-good { color: #0f0; }
        .t4g-bad { color: #f55; }

        .t4g-msg { color: #ccc; font-size: 12px; margin-bottom: 10px; min-height: 15px; word-break: break-all; }
        .t4g-err { color: #ff5555; }
        .t4g-btns { display: flex; gap: 10px; justify-content: center; }
        .t4g-close { background: #333; color: #ccc; border: 1px solid #555; }
    `;document.head.appendChild(style);var wrapper=document.createElement('div');wrapper.id='t4g-wrapper';wrapper.innerHTML=`<div id="t4g-toggle">⚙️</div><div id="t4g-panel"><button class="t4g-btn" id="btn-save">\uD83D\uDCBE Save</button><button class="t4g-btn" id="btn-load">\uD83D\uDCC2 Load</button></div>`;document.body.appendChild(wrapper);var modal=document.createElement('div');modal.id='t4g-modal';modal.innerHTML=`
        <div class="t4g-modal-content">
            <button id="t4g-help-btn">?</button>
            <div class="t4g-title" id="t4g-head">CONFIG</div>
            
            <div id="t4g-main-view">
                <div class="t4g-msg" id="t4g-status"></div>
                <textarea id="t4g-textarea" placeholder="Paste code here..."></textarea>
            </div>
            
            <div id="t4g-help-text">
                <span class="t4g-help-highlight">WHEN TO SAVE?</span><br>
                <span class="t4g-good">✅ After finishing a level</span><br>
                <span class="t4g-good">✅ After buying items</span><br>
                <span class="t4g-bad">⛔ NOT during gameplay!</span><br>
                <small>The game only saves when you complete something.</small><br><br>

                <span class="t4g-help-highlight">HOW TO SAVE:</span><br>
                1. Click <b>SAVE</b> button.<br>
                2. <b>Copy</b> the code.<br>
                3. Keep it safe (Notepad)!<br><br>

                <span class="t4g-help-highlight">HOW TO LOAD:</span><br>
                1. Click <b>LOAD</b> button.<br>
                2. <b>Paste</b> your code.<br>
                3. Click <b>RESTORE</b>.
            </div>

            <div class="t4g-btns">
                <button class="t4g-btn" id="t4g-action">ACTION</button>
                <button class="t4g-btn t4g-close" id="t4g-close">CLOSE</button>
            </div>
        </div>`;document.body.appendChild(modal);var txt=document.getElementById('t4g-textarea');var status=document.getElementById('t4g-status');var actionBtn=document.getElementById('t4g-action');var title=document.getElementById('t4g-head');var helpBtn=document.getElementById('t4g-help-btn');var mainView=document.getElementById('t4g-main-view');var helpView=document.getElementById('t4g-help-text');let isHelpOpen=false;let lastActionText="";let lastActionFunc=null;helpBtn.onclick=function(){isHelpOpen=!isHelpOpen;if(isHelpOpen){lastActionText=actionBtn.innerText;lastActionFunc=actionBtn.onclick;mainView.style.display='none';helpView.style.display='block';title.innerText="HELP";actionBtn.innerText="GOT IT!";actionBtn.onclick=helpBtn.onclick;}else{mainView.style.display='block';helpView.style.display='none';title.innerText="CONFIG";actionBtn.innerText=lastActionText;actionBtn.onclick=lastActionFunc;}};function stopGameInput(e){e.stopPropagation();}
['keydown','keyup','keypress','mousedown','mouseup','contextmenu'].forEach(evt=>txt.addEventListener(evt,stopGameInput,false));document.getElementById('t4g-close').onclick=()=>{modal.style.display='none';isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';};document.getElementById('btn-save').onclick=async function(){if(document.exitPointerLock)document.exitPointerLock();isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';title.innerText="SAVING...";status.innerText="Scanning Data...";txt.value="Wait...";actionBtn.disabled=true;modal.style.display='flex';try{const exportData={type:'T4G_V10',ls:JSON.parse(JSON.stringify(localStorage)),idb:[]};const dbs=await IDBHelper.getDatabases();for(const dbInfo of dbs){const dump=await IDBHelper.dumpDB(dbInfo.name);if(dump)exportData.idb.push(dump);}
const finalCode=btoa(encodeURIComponent(JSON.stringify(exportData)));title.innerText="SAVE GAME";status.innerText=`Size: ${(finalCode.length/1024).toFixed(1)} KB.`;txt.value=finalCode;actionBtn.innerText="COPY CODE";actionBtn.disabled=false;actionBtn.onclick=function(){txt.select();try{document.execCommand('copy');status.innerText="COPIED!";status.style.color="#0f0";}
catch(e){status.innerText="Ctrl+C to copy";}};}catch(e){status.innerText="Error: "+e.message;status.className="t4g-msg t4g-err";}};document.getElementById('btn-load').onclick=function(){if(document.exitPointerLock)document.exitPointerLock();isHelpOpen=false;mainView.style.display='block';helpView.style.display='none';title.innerText="LOAD GAME";status.innerText="Paste your code here:";status.className="t4g-msg";txt.value="";actionBtn.innerText="RESTORE";actionBtn.disabled=false;actionBtn.onclick=async function(){const code=txt.value.trim();if(!code)return;status.innerText="Processing...";actionBtn.disabled=true;setTimeout(async()=>{try{let fixedCode=code;while(fixedCode.length%4!==0){fixedCode+="=";}
const data=JSON.parse(decodeURIComponent(atob(fixedCode)));if(data.ls){localStorage.clear();for(const k in data.ls)localStorage.setItem(k,data.ls[k]);}
if(data.idb&&Array.isArray(data.idb)){status.innerText="Restoring Files...";for(const dbDump of data.idb){await IDBHelper.restoreDB_Smart(dbDump,(msg)=>{status.innerText=msg;});}}
status.innerText="SUCCESS! RELOADING...";status.style.color="#0f0";setTimeout(()=>location.reload(),1000);}catch(e){console.error(e);status.innerText="FAIL: Invalid Code";status.className="t4g-msg t4g-err";actionBtn.disabled=false;}},100);};modal.style.display='flex';};});